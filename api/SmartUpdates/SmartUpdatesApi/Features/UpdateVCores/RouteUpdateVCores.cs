using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;
using SmartUpdatesApi.Entities;

namespace SmartUpdatesApi.Features.UpdateVCores;

public static class Route
{
  public static async Task<IResult> Handle
  (
    [FromRoute] string id,
    [FromBody] List<VCore> nextVCores,
    [FromServices] AzContext ctx
  )
  {
    var vm = await ctx.VMs.Include(vm => vm.VCores).FirstOrDefaultAsync(vm => vm.Id == id);
    if (vm == null) return Results.NotFound();

    // Can combine into toAdd & toUpdate into toUpsert group
    var toAdd = nextVCores.Where(next => !vm.VCores.Any(curr => curr.Id == next.Id)).ToList(); // new except curr
    var toUpdate = nextVCores.Where(next => vm.VCores.Any(curr => curr.Id == next.Id)).ToList(); // intersect
    var toDelete = vm.VCores.Where(curr => !nextVCores.Any(next => next.Id == curr.Id)).ToList(); // curr except new

    // Ensure new ones are attached to VM
    toAdd.ForEach(vc => vc.VmId = vm.Id);

    await ctx.VCores.AddRangeAsync(toAdd);
    // ctx.VCores.UpdateRange(toUpdate); update in place not change tracker as already tracked

    foreach (var update in toUpdate)
    {
      var existingVCore = vm.VCores.First(vc => vc.Id == update.Id);
      existingVCore.VCpus = update.VCpus;
      existingVCore.Ram = update.Ram;
      existingVCore.CpuType = update.CpuType;
    }

    ctx.VCores.RemoveRange(toDelete);
    await ctx.SaveChangesAsync();
    // await ctx.Entry(vm).Collection(v => v.VCores).LoadAsync(); // refresh to reflect changes


    // vm.VCores.Clear();
    //     vm.VCores.AddRange(nextVCores);
    return Results.Ok(vm.VCores);
  }
}

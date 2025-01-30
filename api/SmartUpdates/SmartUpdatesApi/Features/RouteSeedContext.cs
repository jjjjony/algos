using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Constants;
using SmartUpdatesApi.Contexts;
using SmartUpdatesApi.Entities;

namespace SmartUpdatesApi.Features;

public static class RouteSeedContext
{
  public static async Task<IResult> Handle
  (
    [FromServices] AzContext ctx
  )
  {
    var friendlyName = "Broski's VM";
    var curr = await ctx.VMs.FirstOrDefaultAsync(vm => vm.FriendlyName == friendlyName);

    if (curr != null) return Results.Ok(curr.Id); // already seeded

    var vm = new Vm
    {
      FriendlyName = friendlyName,
      OsType = Os.Linux.ToString(),
      CreatedBy = "bro@bro.bro"
    };

    await ctx.VMs.AddAsync(vm);
    await ctx.SaveChangesAsync();

    return Results.Ok(vm.Id);
  }
}

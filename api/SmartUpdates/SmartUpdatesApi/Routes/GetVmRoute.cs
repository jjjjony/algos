using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Constants;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Routes;

public static class GetVmRoute
{
  public static async Task<IResult> Handle
  (
    [FromRoute] string id,
    [FromServices] AzContext ctx
  )
  {
    if (!id.StartsWith(IdPrefix.VM)) return Results.NotFound();

    var vm = await ctx.VMs.Include(vm => vm.VCores).FirstOrDefaultAsync(vm => vm.Id == id);

    if (vm == null) return Results.NotFound();

    return Results.Ok(vm);
  }
}

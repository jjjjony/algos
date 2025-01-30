using Microsoft.AspNetCore.Mvc;
using SmartUpdatesApi.Constants;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Routes;

public static class GetVmRoute
{
  public static IResult Handle
  (
    [FromRoute] string id,
    [FromServices] AzContext ctx
  )
  {
    if (!id.StartsWith(IdPrefix.VM)) return Results.NotFound();

    var vm = ctx.VMs.FirstOrDefault(vm => vm.Id == id);

    if (vm == null) return Results.NotFound();

    // TODO: map to DTO

    return Results.Ok(vm);
  }
}

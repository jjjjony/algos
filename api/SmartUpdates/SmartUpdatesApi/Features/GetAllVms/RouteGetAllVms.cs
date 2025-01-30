using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Features.GetAllVms;

public static class Route
{
  public static IResult Handle
  (
    [FromServices] AzContext ctx
  )
  {
    var vms = ctx.VMs.Include(vm => vm.VCores).ToList();

    if (vms.Count == 0) return Results.NoContent();

    return Results.Ok(vms);
  }
}

using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Routes;

public static class GetAllVmsRoute
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

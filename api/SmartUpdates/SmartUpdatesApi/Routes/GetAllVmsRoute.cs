using Microsoft.AspNetCore.Mvc;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Routes;

public static class GetAllVmsRoute
{
  public static IResult Handle
  (
    [FromServices] AzContext ctx
  )
  {
    var vms = ctx.VMs.ToList();

    if (vms.Count == 0) return Results.NoContent();

    return Results.Ok(vms);
  }
}

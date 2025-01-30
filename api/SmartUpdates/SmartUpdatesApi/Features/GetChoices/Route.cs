using Microsoft.AspNetCore.Mvc;
using SmartUpdatesApi.Constants;


namespace SmartUpdatesApi.Features.GetChoices;

public static class Route
{
  public static IResult Handle
  (
    [FromRoute] string type
  )
  {
    var res = type switch
    {
      var t when string.Equals(t, nameof(Os), StringComparison.InvariantCultureIgnoreCase) => Enum.GetNames(typeof(Os)),
      var t when string.Equals(t, nameof(Cpu), StringComparison.InvariantCultureIgnoreCase) => Enum.GetNames(typeof(Cpu)),
      _ => null
    };

    if (res == null) return Results.BadRequest($"Available types: {nameof(Os)}, {nameof(Cpu)}");

    return Results.Ok(res);
  }
}

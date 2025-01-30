using Microsoft.AspNetCore.Mvc;
using SmartUpdatesApi.Constants;


namespace SmartUpdatesApi.Routes;

public static class GetChoicesRoute
{
  public static IResult Handle([FromRoute] string type)
  {
    var res = type switch
    {
      var t when string.Equals(t, nameof(OS), StringComparison.InvariantCultureIgnoreCase) => Enum.GetNames(typeof(OS)),
      var t when string.Equals(t, nameof(CPU), StringComparison.InvariantCultureIgnoreCase) => Enum.GetNames(typeof(CPU)),
      _ => null
    };

    if (res == null) return Results.BadRequest($"Available types: {nameof(OS)}, {nameof(CPU)}");

    return Results.Ok(res);
  }
}

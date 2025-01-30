using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;

namespace SmartUpdatesApi.Features.Shared;

public static class Deps
{
  public static IServiceCollection Inject(this IServiceCollection services)
  {
    services.AddDbContext<AzContext>(opts =>
      opts.UseInMemoryDatabase(nameof(AzContext)));

    return services;
  }
}

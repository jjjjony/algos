using SmartUpdatesApi.Features.Shared;
using Features = SmartUpdatesApi.Features;

// Prepare the DI container
var builder = WebApplication.CreateBuilder(args);
{
  builder.Services.Inject();
  builder.Services.AddOpenApi();
}

// Configure the HTTP request pipeline
var app = builder.Build();
{
  if (app.Environment.IsDevelopment())
  {
    app.MapOpenApi();
  }

  app.UseHttpsRedirection();

  // For simplicity these endpoints lack
  //  - DTOs (& mappers)
  //  - Global error handling (& logging)
  //  - Layers (engines, repos, services)
  // app.MapPost("api/seed", RouteSeedContext.Route.Handle); // move into auto-seeding
  app.MapGet("api/choices/{type}", Features.GetChoices.Route.Handle);
  app.MapGet("api/vm", Features.GetAllVms.Route.Handle);
  app.MapGet("api/vm/{id}", Features.GetVm.Route.Handle);
  app.MapPost("api/vm/{id}/vcores", Features.UpdateVCores.Route.Handle);

  app.Run();
}

using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;
using SmartUpdatesApi.Routes;

var builder = WebApplication.CreateBuilder(args);
{
  builder.Services.AddDbContext<AzContext>(opts =>
    opts.UseInMemoryDatabase(nameof(AzContext)));

  builder.Services.AddOpenApi();
}

// Configure the HTTP request pipeline.
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
  app.MapPost("api/seed", SeedContextRoute.Handle);
  app.MapGet("api/choices/{type}", GetChoicesRoute.Handle);
  app.MapGet("api/vm", GetAllVmsRoute.Handle);
  app.MapGet("api/vm/{id}", GetVmRoute.Handle);
  app.MapPost("api/vm/{id}/vcores", UpdateVCoresRoute.Handle);

  app.Run();
}

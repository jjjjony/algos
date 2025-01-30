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

  app.MapGet("api/choices/{type}", GetChoicesRoute.Handle);
  app.MapGet("api/seed", SeedContextRoute.Handle);

  app.Run();
}

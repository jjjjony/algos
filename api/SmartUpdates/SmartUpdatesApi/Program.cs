using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Contexts;
using SmartUpdatesApi.Entities;
using SmartUpdatesApi.Constants;
using SmartUpdatesApi.Routes;

var builder = WebApplication.CreateBuilder(args);
{
  builder.Services.AddDbContext<AzContext>(opts =>
    opts.UseInMemoryDatabase("AzContext"));

  builder.Services.AddOpenApi();
}

// Configure the HTTP request pipeline.
var app = builder.Build();
{
  // SEED
  using (var scope = app.Services.CreateScope())
  {
    var ctx = scope.ServiceProvider.GetRequiredService<AzContext>();
    var now = DateTime.UtcNow;
    var upn = "bro@bro.bro";
    var vm = new VM { FriendlyName = "Broski's VM", OSType = OS.Linux.ToString(), CreatedAt = now, CreatedBy = upn };
    ctx.VMs.Add(vm);
    ctx.SaveChanges();
  }

  if (app.Environment.IsDevelopment())
  {
    app.MapOpenApi();
  }

  app.UseHttpsRedirection();

  app.MapGet("api/choices/{type}", GetChoicesRoute.Handle);
  app.MapGet("api/seed", SeedContextRoute.Handle);

  app.Run();
}

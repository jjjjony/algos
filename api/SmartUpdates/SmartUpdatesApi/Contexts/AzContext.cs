using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Entities;

namespace SmartUpdatesApi.Contexts;

public class AzContext : DbContext
{
  public DbSet<VM> VMs { get; set; }
  public DbSet<VCore> VCores { get; set; }

  public AzContext(DbContextOptions<AzContext> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
  }
}

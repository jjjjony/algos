using Microsoft.EntityFrameworkCore;
using SmartUpdatesApi.Entities;

namespace SmartUpdatesApi.Contexts;

public class AzContext : DbContext
{
  public DbSet<Vm> VMs { get; set; }
  public DbSet<VCore> VCores { get; set; }

  public AzContext(DbContextOptions<AzContext> options) : base(options) { }

  protected override void OnModelCreating(ModelBuilder modelBuilder)
  {
    modelBuilder.Entity<VCore>()
        .HasOne(vc => vc.Vm)          // VCore has one Vm
          .WithMany(vm => vm.VCores)  // Vm has many VCores
        .HasForeignKey(vc => vc.VmId) // VCore's VmId is the FK
          .IsRequired(true);          // Optional - mark FK as required

    base.OnModelCreating(modelBuilder);
  }
}

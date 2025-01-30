
using SmartUpdatesApi.Constants;

namespace SmartUpdatesApi.Entities;

public class VCore : Auditable
{
  public string Id { get; }
  public int VCPUs { get; set; } // number of vCPUs
  public int Ram { get; set; } // RAM per vCPU
  public string CPUType { get; set; }

  public VCore()
  {
    Id = $"{IdPrefix.VCore}{Guid.CreateVersion7()}";
  }
}


using SmartUpdatesApi.Constants;

namespace SmartUpdatesApi.Entities;

public class VCore : Auditable
{
  public string Id { get; set; }
  public int VCpus { get; set; } // number of vCPUs
  public int Ram { get; set; } // RAM per vCPU
  public string CpuType { get; set; }

  public VCore()
  {
    Id = $"{IdPrefix.VCore}{Guid.CreateVersion7()}";
  }
}

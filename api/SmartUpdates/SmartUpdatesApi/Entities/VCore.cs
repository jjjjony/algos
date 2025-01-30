
using System.Text.Json.Serialization;
using SmartUpdatesApi.Constants;

namespace SmartUpdatesApi.Entities;

public class VCore : Auditable
{
  public string Id { get; set; }
  public int VCpus { get; set; } = 0; // number of vCPUs
  public int Ram { get; set; } = 4; // RAM per vCPU
  public string? CpuType { get; set; }
  public string VmId { get; set; }
  [JsonIgnore] // TOOD: test disable recursion by inheritance on the DTO (base DTO)
  public Vm Vm { get; set; }

  public VCore()
  {
    Id = $"{IdPrefix.VCore}{Guid.CreateVersion7()}";
  }
}

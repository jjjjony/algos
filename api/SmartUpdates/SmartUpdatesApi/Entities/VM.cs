using SmartUpdatesApi.Constants;

namespace SmartUpdatesApi.Entities;

public class Vm : Auditable
{
  public string Id { get; set; }
  public string? FriendlyName { get; set; }
  public string? OsType { get; set; }
  public List<VCore> VCores { get; set; } = [];
  public Vm()
  {
    Id = $"{IdPrefix.VM}{Guid.CreateVersion7()}";
  }
}

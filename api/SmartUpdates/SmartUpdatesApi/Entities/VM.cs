using SmartUpdatesApi.Constants;

namespace SmartUpdatesApi.Entities;

public class VM : Auditable
{
  public string Id { get; }
  public string? FriendlyName { get; set; }
  public string? OsType { get; set; }
  public List<VCore> VCores { get; set; } = new();

  public VM()
  {
    Id = $"{IdPrefix.VM}{Guid.CreateVersion7()}";
  }
}

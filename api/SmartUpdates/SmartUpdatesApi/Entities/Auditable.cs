namespace SmartUpdatesApi.Entities;

public class Auditable
{
  public string? CreatedBy { get; set; }
  public DateTime? CreatedAt { get; set; } = DateTime.UtcNow;
  public string? UpdatedBy { get; set; }
  public DateTime? UpdatedAt { get; set; }
  public bool IsDeleted { get; set; } = false;
}

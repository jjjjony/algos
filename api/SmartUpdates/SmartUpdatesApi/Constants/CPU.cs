using System.ComponentModel;

namespace SmartUpdatesApi.Constants;

/// <summary>
/// Available CPU options
///
/// .getDescription() to get user-friendly value for UI
/// .toString() gets e.g., "AmdThreadripper" (persist in DB)
/// </summary>
public enum CPU
{
  [Description("Intel XEON")]
  IntelXeon,
  [Description("AMD Threadripper")]
  AmdThreadripper,
}

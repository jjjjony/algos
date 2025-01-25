// ___________ _______   ____ ___  _____
// \_   _____/ \      \ |    |   \/     \   ______
//  |    __)_  /   |   \|    |   /  \ /  \ /  ___/
//  |        \/    |    \    |  /    Y    \\___ \
// /_______  /\____|__  /______/\____|__  /____  >
//         \/         \/                \/     \/

// ❌
//  TS team discourages enums in official docs
//  Cannot use values directly (must use LogLevelEnum.SILLY, not "silly")
//  Yes like C# enums but cons are renaming the enum (even if values don't change) will modify many files (i smell merge hell)
enum LogLevelEnum {
  SILLY = "silly",
  DEBUG = "debug",
  INFO = "info",
  WARNING = "warning",
  ERROR = "error",
}

// ✅
// Solution: use an immutable POJO and expose values as a type
// Can still use LogLevels.SILLY if wanting C#-like syntax
const LogLevels = {
  SILLY: "silly",
  DEBUG: "debug",
  INFO: "info",
  WARNING: "warning",
  ERROR: "error",
} as const;

type LogLevel = (typeof LogLevels)[keyof typeof LogLevels];
const LogLevelOptions = Object.values(LogLevels); // to iterate the options (for UI mostly)

// EXAMPLE
function example(lvlType?: LogLevel, lvlEnum?: LogLevelEnum) {}
example("silly", LogLevelEnum.SILLY);

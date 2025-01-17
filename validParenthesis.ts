/**
 * BIG-O: O(n) time
 */
function isValid(s: string): boolean {
  // 1. Prepare O(1) lookups for specific-pairs
  //    Make closing-brackets the keys to O(1) check for initial guard
  const bracketsHashmap = new Map<string, string>([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);

  // 2. Prepare stack to add opening brackets which should all be closed off (FIFO/push/pop)
  const bracketsStack: string[] = [];

  // 3. Guard: Handle cases that fail immediately
  const isCannotBeClosed =
    s.length <= 1 || s.length % 2 !== 0 || bracketsHashmap.has(s[0]);
  if (isCannotBeClosed) return false;

  // 4. O(n) over the string
  for (const bracket of s) {
    const openBracketNeeded = bracketsHashmap.get(bracket);
    if (openBracketNeeded) {
      const isClosedSuccessfully = bracketsStack.pop() === openBracketNeeded;
      if (!isClosedSuccessfully) return false;
      continue;
    }
    bracketsStack.push(bracket);
  }

  const isAllClosed = bracketsStack.length === 0;
  return isAllClosed;
}

/**
 * SUBMISSION: Minified v w no thoughts 💭
 */
function isValid_SUBMISSION(s: string): boolean {
  const bracketsStack: string[] = [];
  const bracketsHashmap = new Map<string, string>([
    ["}", "{"],
    ["]", "["],
    [")", "("],
  ]);
  if (s.length <= 1 || s.length % 2 !== 0 || bracketsHashmap.has(s[0]))
    return false;
  for (const bracket of s) {
    const openBracketNeeded = bracketsHashmap.get(bracket);
    if (openBracketNeeded) {
      if (!(bracketsStack.pop() === openBracketNeeded)) return false;
      continue;
    }
    bracketsStack.push(bracket);
  }
  return bracketsStack.length === 0;
}

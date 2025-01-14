/**
 * BIG-O: O(n)
 */
function containsDuplicate(nums: number[]): boolean {
  const seenNumsSet = new Set<number>();
  for (const num of nums) {
    if (seenNumsSet.has(num)) return true;
    seenNumsSet.add(num);
  }
  return false;
}

/**
 * SUBMISSION: Minified v w no thoughts 💭
 */
function containsDuplicate_SUBMISSION(nums: number[]): boolean {
  const seenNumsSet = new Set<number>();
  for (const num of nums) {
    if (seenNumsSet.has(num)) return true;
    seenNumsSet.add(num);
  }
  return false;
}

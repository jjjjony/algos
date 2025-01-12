/**
 * BIG-O: O(n - 1) = O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  // 1. Create a hashmap - we always lookup a nums item, so keys = nums item
  //    <K = nums item, V = item idx>
  //    IMRPOVEMENT: Skip the 1st loop (never finds a match)
  const hashmap = new Map<number, number>([[nums[0], 0]]);

  // 2. O(n) over nums, skipping the 1st loop (n - 1)
  for (let idx = 1; idx < nums.length; idx++) {
    // 3. Diff to get the remainder to find
    const num = nums[idx];
    const remainder = target - num;
    console.log(`${num} + ${remainder} = ${target}`);

    // 4. O(1) search the hashmap
    //    Found? Success!
    //    Not found? cache and repeat...
    const remainderIdx = hashmap.get(remainder);
    if (remainderIdx !== undefined) return [remainderIdx, idx];
    hashmap.set(num, idx);
  }

  return [];
}

/**
 * SUBMISSION: Minified version w no thoughts 💭
 */
function twoSumSubmission(nums: number[], target: number): number[] {
  const hashmap = new Map<number, number>([[nums[0], 0]]);
  for (let idx = 1; idx < nums.length; idx++) {
    const num = nums[idx];
    const remainderIdx = hashmap.get(target - num);
    if (remainderIdx !== undefined) return [remainderIdx, idx];
    hashmap.set(num, idx);
  }
  return [];
}

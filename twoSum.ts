/**
 * BIG-O: O(n - 1) = O(n)
 */
function twoSum(nums: number[], target: number): number[] {
  // 1. Create a hashmap - we always lookup nums, so keys = nums
  //    IMRPOVEMENT: Skip the 1st loop (never finds a match)
  const prevNumsAndTheirIndexesHashmap = new Map<number, number>([[nums[0], 0]]);

  // 2. O(n) over nums, skipping the 1st loop (n - 1)
  for (let idx = 1; idx < nums.length; idx++) {
    // 3. Diff to get the remainder to find
    const num = nums[idx];
    const remainder = target - num;
    console.log(`${num} + ${remainder} = ${target}`);

    // 4. O(1) search the hashmap
    //    Found? Success!
    //    Not found? cache and repeat...
    const remainderIdx = prevNumsAndTheirIndexesHashmap.get(remainder);
    if (remainderIdx !== undefined) return [remainderIdx, idx];
    prevNumsAndTheirIndexesHashmap.set(num, idx);
  }

  return [];
}

/**
 * SUBMISSION: Minified v w no thoughts 💭
 */
function twoSum_SUBMISSION(nums: number[], target: number): number[] {
  const prevNumsAndTheirIndexesHashmap = new Map<number, number>([[nums[0], 0]]);
  for (let idx = 1; idx < nums.length; idx++) {
    const num = nums[idx];
    const remainderIdx = prevNumsAndTheirIndexesHashmap.get(target - num);
    if (remainderIdx !== undefined) return [remainderIdx, idx];
    prevNumsAndTheirIndexesHashmap.set(num, idx);
  }
  return [];
}

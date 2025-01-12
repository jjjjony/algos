function twoSum(nums: number[], target: number): number[] {
  // 1. Create a hashmap - we always lookup a nums item, so keys = nums item
  //    <K = nums item, V = item idx>
  var hashmap = new Map<number, number>([
    [nums[0], 0], // IMRPOVEMENT: Skip the 1st loop (never finds a match)
  ]);

  // 2. O(n) over nums, skipping the 1st loop
  for (let idx = 1; idx < nums.length; idx++) {
    // 3. Diff to get the remainder needed
    var num = nums[idx];
    var remainder = target - num;
    console.log(`${num} + ${remainder} = ${target}`);

    // 4. Found? Success!, Not found? cache and repeat...
    var remainderIdx = hashmap.get(remainder);
    if (remainderIdx !== undefined) return [remainderIdx, idx];
    hashmap.set(num, idx);
  }

  return [];

  // BIG-O:
  // O(n - 1) = O(n)
}

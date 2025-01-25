/**
 * BIG-O:
 *  TIME: O(log n)
 *    1x while loop that halves n each loop (reducing the input size/number of iterations by a consistent fraction)
 *  MEMORY: O(1)
 *    No need for additional data structures
 *
 * Solution w thoughts 💭
 *  #easy #binary-search
 */
function search(nums: number[], target: number): number {
  // nums is sorted ∴ able to use BinSearch
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    const diff = Math.floor((right - left) / 2);
    let mid = left + diff;

    if (target === nums[mid]) return mid;
    if (target < nums[mid]) right = --mid;
    if (target > nums[mid]) left = ++mid;
  }

  return -1;
}

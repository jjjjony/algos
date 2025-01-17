/**
 * BIG-O: O(n) time
 *
 */
function findDisappearedNumbers(nums: number[]): number[] {
  // O(n) use originally solution from 'Missing Number'
  const n = nums.length;
  const offsetStartingIndexBy = 1; // ignore 0th index
  const tracker = new Array(n + offsetStartingIndexBy);
  for (let i = 0; i < n; i++) {
    tracker[nums[i]] = true; // found
  }

  // O(n) return the missing ones
  const res: number[] = [];
  for (let i = offsetStartingIndexBy; i < tracker.length; i++) {
    const isMissing = !tracker[i];
    console.log(`Is ${i} missing? ${isMissing}`);
    if (isMissing) res.push(i);
  }

  return res;
}

/**
 * SUBMISSION: Minified v w no thoughts 💭
 */
function findDisappearedNumbers_SUBMISSION(nums: number[]): number[] {
  const n = nums.length;
  const offsetStartingIndexBy = 1;
  const tracker = new Array(n + offsetStartingIndexBy);
  for (let i = 0; i < n; i++) {
    tracker[nums[i]] = true;
  }

  const res: number[] = [];
  for (let i = offsetStartingIndexBy; i < tracker.length; i++) {
    if (!tracker[i]) res.push(i);
  }
  return res;
}

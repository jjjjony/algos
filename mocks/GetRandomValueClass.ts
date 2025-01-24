// TLDR:
//   - Attempting mock interview from https://youtu.be/46dZH7LDbf8
//
// REQUIREMENTS:
//   - Op to insert a value (no dupes)
//   - Op to remove a value
//   - Op to get a random value of equal probability
//
// ASSUMPTIONS:
//   - Values are ints (can always upgrade to others in future)

/*
   ____
  /_   |
   |   |
   |   |
   |___|

  MEMORY: O(n) 1x set
*/
class Solution1 {
  values = new Set<number>();
  constructor() {}

  // TIME: O(1)
  insert(val: number) {
    this.values.add(val);
  }

  // TIME: O(1)
  remove(val: number) {
    this.values.delete(val);
  }

  // TIME: O(n), Needs to create a new array
  getRandom(val: number) {
    const arr = Array.from(this.values);
    const chosenOne = Math.floor(arr.length * Math.random()); // random() => [0..1)
    return arr[chosenOne];
  }
}

/*
  ________
  \_____  \
   /  ____/
  /       \
  \_______ \
          \/

  IMPROVEMENT: Cache value positions in a hashmap to easily remove, always has array for getRandom()
  MEMORY: O(n) + O(n) = O(n) 2x DS
*/
class Solution2 {
  values: number[] = [];
  valuePositions = new Map<number, number | undefined>();
  constructor() {}

  // TIME: O(1)
  insert(val: number) {
    this.values.push(val);
    this.valuePositions.set(val, this.values.length - 1);
  }

  // TIME: O(1)
  remove(val: number) {
    const idx = this.valuePositions.get(val);

    if (idx === undefined) return; // idx can be 0, so don't use falsey check

    const lastVal = this.valuePositions[this.values.length - 1];
    this.values[idx] = lastVal; // replace w the last val to avoid resizing
    this.values.pop(); // remove last val O(1) as now a dupe
    // this.valuePositions.set(val, undefined); // not necessary as no longer in values array
    this.valuePositions.set(lastVal, idx);
  }

  // TIME: O(1)
  getRandom() {
    if (this.values.length === 0) return undefined;
    const chosenOne = Math.floor(this.values.length * Math.random()); // random() => [0..1)
    return this.values[chosenOne];
  }
}

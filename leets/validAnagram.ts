/**
 * BIG-O:
 *  TIME: O(n)
 *    1st loop O(n) + O(n) as guarenteed same length
 *    2nd loop O(2n) as map size is 2n if each input has unique chars
 *    (O(n) + O(n)) + O(2n) = O(n)
 *  MEMORY: O(n)
 *    Worse-case each input has unique chars, map stores O(2n)
 *    O(2n) = O(n)
 *
 * Solution w thoughts 💭
 *  #easy #hash-maps
 */
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // O(n) over both at the same time (as same length)
  const charCountMap = new Map<string, number>();
  for (let i = 0; i < s.length; i++) {
    const currSCount = charCountMap.get(s[i]) ?? 0;
    charCountMap.set(s[i], currSCount + 1);
    const currTCount = charCountMap.get(t[i]) ?? 0;
    charCountMap.set(t[i], currTCount + 1);
  }

  // If a char count is odd, it's not an anagram (one string is missing a char)
  for (const [key, count] of charCountMap) {
    if (count % 2 !== 0) return false;
  }
  return true;
}

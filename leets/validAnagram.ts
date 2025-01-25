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
 *  #easy #hashmaps
 */
type AnagramCounts = {
  s: number;
  t: number;
};

function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;

  // O(n) over both at the same time (as same length)
  const charCountMap = new Map<string, AnagramCounts>();
  for (let i = 0; i < s.length; i++) {
    const countsForCharS = charCountMap.get(s[i]);
    if (!countsForCharS) charCountMap.set(s[i], { s: 1, t: 0 });
    else countsForCharS.s++; // just mutate as referenced

    const countsForCharT = charCountMap.get(t[i]);
    if (!countsForCharT) charCountMap.set(t[i], { s: 0, t: 1 });
    else countsForCharT.t++; // just mutate as referenced
  }

  // INITIAL IDEA:
  //  If a char count is odd, it's not an anagram (one string is missing a char)
  // IMPROVED IDEA:
  //  Problem w initial is a count can be even if an input as double and the other has none (e.g., "aa", "bb")
  //  Instead add a type to keep the same Big Os (rather than 2x hashmaps)
  for (const [key, counts] of charCountMap) {
    console.log(`${key}: ${JSON.stringify(counts)}`);
    if (counts.s !== counts.t) return false;
  }
  return true;
}

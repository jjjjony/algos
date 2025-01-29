/*
    ___ ___    _____    _________ ___ ___    _____      _____ __________
   /   |   \  /  _  \  /   _____//   |   \  /     \    /  _  \\______   \
  /    ~    \/  /_\  \ \_____  \/    ~    \/  \ /  \  /  /_\  \|     ___/
  \    Y    /    |    \/        \    Y    /    Y    \/    |    \    |
   \___|_  /\____|__  /_______  /\___|_  /\____|__  /\____|__  /____|s
         \/         \/        \/       \/         \/         \/
*/
{
  const map = new Map<number, number>();

  /* =========== OPS =========== */

  map.set(1, 2); // O(1)
  map.has(1); // O(1)
  map.get(1); // O(1)
  map.delete(1); // O(1)
  map.clear(); // O(n) but on average O(1) in V8
  map.size; // O(1)

  // Traverse O(n)
  for (const [k, v] of map) {
    console.log(`(${k},${v})`);
  }
}

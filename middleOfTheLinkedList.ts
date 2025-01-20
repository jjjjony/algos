class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * BIG-O: O(n) time
 *  Solution w thoughts 💭
 *  #easy #hashmaps #linked-lists
 */
function middleNode(head: ListNode | null): ListNode | null {
  // O(n) traversal:
  //  - Count the length
  //  - Save indexes and their nodes
  const nodeIndexHashmap = new Map<number, ListNode>();

  let currNode = head;
  let count = 1;
  while (currNode) {
    nodeIndexHashmap.set(count, currNode);
    currNode = currNode.next;
    count++;
  }

  // Using the length we now know the mid point
  // Using the hashmap we can O(1) lookup the mid node
  const mid = Math.ceil(count / 2);
  const res = nodeIndexHashmap.get(mid) ?? null;
  return res;
}

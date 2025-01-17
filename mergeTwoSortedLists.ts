class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

/**
 * BIG-O: O(n+m) time
 *  Worst-case performing an op on each n & m
 *  Solution w thoughts 💭
 */
function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  // 1. Initially trying to determine which node to start and which to inner-traverse...
  //    Instead, create a dummy head node so the same pattern is applied to L1 & L2 w no need to determine head upfront
  //    We simply return dummy's -> next (one of the original heads)
  const dummyNode = new ListNode();

  // 2. Append nodes to the dummy LL's tail
  //    and remove from original LLs one of the lists is empty
  let tail = dummyNode;
  let currL1 = list1;
  let currL2 = list2;
  while (currL1 && currL2) {
    const isL1Smaller = currL1.val < currL2.val;

    if (isL1Smaller) {
      tail.next = currL1;
      currL1 = currL1.next;
    } else {
      tail.next = currL2;
      currL2 = currL2.next;
    }

    tail = tail.next;
  }

  // 3. By here one of the lists is empty (broke loop), append any leftover nodes
  if (currL1) tail.next = currL1;
  if (currL2) tail.next = currL2;

  return dummyNode.next;
}

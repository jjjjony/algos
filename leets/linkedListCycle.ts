import { ListNode } from "./types/ListNode";

/**
 * BIG-O:
 *  TIME: O(n)
 *  MEMORY: O(1)
 *
 * Solution w thoughts 💭
 *  #easy #linked-lists
 */
function hasCycle(head: ListNode | null): boolean {
  if (!head?.next) return false;

  // Can see this is a tortoise & hare problem...

  // INITIAL SOLUTION
  // O(n) time, O(n) memory
  //  Sub-optimal solution, use a SET to track seen nodes
  // const nodeSet = new Set<ListNode>();
  // nodeSet.add(head);
  // let currNode = head.next;
  // while (currNode.next) {
  //     const nextNode = currNode.next;
  //     if (nodeSet.has(nextNode)) return true;
  //     nodeSet.add(nextNode);
  //     currNode = nextNode;
  // }
  // return false;

  // TORTOISE & HARE SOLUTION
  // O(n) time, O(1) memory (no set used)
  let tortoise: ListNode | null = head;
  let hare: ListNode | null = head.next; // offset so they don't intersect immediately

  while (tortoise?.next && hare?.next) {
    const isIntersects = tortoise === hare;
    if (isIntersects) return true;
    tortoise = tortoise.next;
    hare = hare.next?.next;
  }

  return false;
}

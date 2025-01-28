# DSA in TYPESCRIPT

## HashMap

```typescript
const hashMap = new Map<string, string>();
```

Ops:

- `.set()` ~O(1) depending on collisions
- `.get()` O(1)
- `.has()` O(1)
- `.delete()` O(1)
- `.clear()` O(n)
- `.size` O(1)

## Graph

```typescript
const graph = new Map<string, string[]>();

// Example for [a: [b,c], b: [c]]
//    a
//   / \
//  v   v
//  c <- b
```

Ops:

- `.set()` ~O(1) depending on collisions
- `.get()` O(1)
- `.has()` O(1)
- `.delete()` O(1)

## Linked List

```typescript
type Node<T> = {
  value: T;
  next?: Node<T>
}

// Example
const linkedList: Node<number> = {
  value: 1,
  next: {
    value: 2,
    next: {
      value 3,
      ...
    }
  }
}

// Traverse
while (currNode) {
  console.log(node.value);
  currNode = currNode.next
}
```

Ops:

- Traverse O(n)

## Binary Search Tree

```typescript
type Node<T> = {
  value: T;
  left?: Node<T>;
  right?: Node<T>;
};

// Example
const binarySearchTree: Node<number> = {
  value: 1,
  left: { value: 2 },
  right: {
    value: 3,
    right: {
      value: 4,
    },
  },
};

// DFS
function traverseDFS<T>(node: Node<T> | null): void {
  if (!node) return;
  traverseDFS(node.left);
  console.log(node.value);
  traverseDFS(node.right);
}

// BFS
function traverseBFS<T>(root: Node<T>): void {
  if (!root) return;

  let front = 0;
  const queue: Node<T>[] = [root];

  while (front < queue.length) {
    const node = queue[front];
    if (!node) break;
    console.log(node.value);

    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
    front++;
  }
}
```

Ops:

- DFS O(n)
- BFS O(n)

## Priority Queue

```typescript
class PriorityQueue<T> {
  private items: T[] = [];
  enqueue(item: T): void {
    this.items.push(item);
    this.items.sort((a, b) => a - b); // Replace with comparator for complex types
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
}
```

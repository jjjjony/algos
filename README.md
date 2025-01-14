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

## Set

```typescript
const set = new Set<number>();
```

Ops:

- `.add()` O(1)
- `.has()` O(1)
- `.delete()` O(1)
- `.clear()` O(n)
- `.size` O(1)

## Stack (FILO)

```typescript
const stack: number[] = [];
```

Ops:

- `.push()` O(1)
- `.pop()` O(1)
- `stack[stack.length - 1]` O(1), peek top
- Traverse O(n)
- `stack.length === 0` O(1), is empty

## Queue (FIFO)

```typescript
const queue: number[] = [];
```

Ops:

- `.push()` O(1), enqueue
- `.shift()` O(n), dequeue (O(1) if using a linked list)
- `queue[0]` O(1), peek front
- `queue.length === 0` O(1), is empty

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

TODO

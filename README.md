# DATA STRUCTURES in TYPESCRIPT cheat sheet

In order of underlying data structure from lang

## HashMap

```typescript
const hashMap = new Map<string, string>();
```

Ops:

- `.set()` (~O(1) depending on collisions)
- `.get()` (O(1))
- `.has()` (O(1))
- `.delete()` (O(1))
- `.clear()` (O(n))
- `.size` (O(1))

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

- `.set()` (~O(1) depending on collisions)
- `.get()` (O(1))
- `.has()` (O(1))
- `.delete()` (O(1))

## Set

```typescript
const set = new Set<number>();
```

Ops:

- `.add()` (O(1))
- `.has()` (O(1))
- `.delete()` (O(1))
- `.clear()` (O(n))
- `.size` (O(1))

## Stack (FILO)

```typescript
const stack: number[] = [];
```

Ops:

- `.push()` (O(1))
- `.pop()` (O(1))
- `stack[stack.length - 1]` (O(1), peek top)
- traverse (O(n))
- `stack.length === 0` (O(1), is empty)

## Queue (FIFO)

```typescript
const queue: number[] = [];
```

Ops:

- `.push()` (O(1), enqueue)
- `.shift()` (O(1), dequeue)
- `queue[0]` (O(1), peek front)
- `queue.length === 0` (O(1), is empty)

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
while (currNode) { currNode = currNode.next }
```

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

// Traverse
function traverseInOrderRecursively<T>(node: Node<T> | null): void {
  if (!node) return;
  traverseInOrderRecursively(node.left);
  console.log(node.value);
  traverseInOrderRecursively(node.right);
}
```

## Priority Queue

TODO

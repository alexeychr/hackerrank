const t = require("./task6.3.data")

//https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/heap.js
//https://github.com/amejiarosario/dsa.js-data-structures-algorithms-javascript/blob/master/src/data-structures/heaps/heap.js

class Heap {
    constructor(comparator = (a, b) => a - b) {
      this.array = [];
      this.comparator = (i1, i2) => {
        const value = comparator(this.array[i1], this.array[i2]);
        if (Number.isNaN(value)) { throw new Error(`Comparator should evaluate to a number. Got ${value} when comparing ${this.array[i1]} with ${this.array[i2]}`); }
        return value;
      };
    }

    /**
     * Insert element
     * @runtime O(log n)
     * @param {any} value
     */
    add(value) {
      this.array.push(value);
      this.bubbleUp();
    }

    /**
     * Retrieves, but does not remove, the head of this heap
     * @runtime O(1)
     */
    peek() {
      return this.array[0];
    }

    /**
     * Retrieves and removes the head of this heap, or returns null if this heap is empty.
     * @runtime O(log n)
     */
    remove(index = 0) {
      if (!this.size) return null;
      this.swap(index, this.size - 1); // swap with last
      const value = this.array.pop(); // remove element
      this.bubbleDown(index);
      return value;
    }

    /**
     * Returns the number of elements in this collection.
     * @runtime O(1)
     */
    get size() {
      return this.array.length;
    }

    len() {
        return this.array.length
    }

    /**
     * Move new element upwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleUp() {
      let index = this.size - 1;
      const parent = (i) => Math.ceil(i / 2 - 1);
      while (parent(index) >= 0 && this.comparator(parent(index), index) > 0) {
        this.swap(parent(index), index);
        index = parent(index);
      }
    }

    /**
     * After removal, moves element downwards on the heap, if it's out of order
     * @runtime O(log n)
     */
    bubbleDown(index = 0) {
      let curr = index;
      const left = (i) => 2 * i + 1;
      const right = (i) => 2 * i + 2;
      const getTopChild = (i) => (right(i) < this.size
        && this.comparator(left(i), right(i)) > 0 ? right(i) : left(i));

      while (left(curr) < this.size && this.comparator(curr, getTopChild(curr)) > 0) {
        const next = getTopChild(curr);
        this.swap(curr, next);
        curr = next;
      }
    }

    /**
     * Swap elements on the heap
     * @runtime O(1)
     * @param {number} i1 index 1
     * @param {number} i2 index 2
     */
    swap(i1, i2) {
      [this.array[i1], this.array[i2]] = [this.array[i2], this.array[i1]];
    }
  }

  // aliases
  Heap.prototype.poll = Heap.prototype.remove;
  Heap.prototype.offer = Heap.prototype.add;
  Heap.prototype.element = Heap.prototype.peek;


function cookies(k, A) {
    A = A.map(v => parseInt(v, 10));
    A.sort((a, b) => a - b)

    const heap = new Heap()

    for (let i = 0; i < A.length; i++) {
        let v = A[i]
        heap.add(v)
    }

    let acc = 0;
    while (true) {
        let v1 = heap.remove()

        if (v1 >= k) return acc;

        if (heap.size == 0) return -1;

        let v2 = heap.remove();
        let n = v1 + 2 * v2;
        heap.add(n);
        acc++
    }
}

const ret = cookies(t.data.k, t.data.A)
console.log({ret, expected: t.data.result})
/* eslint-disable no-console */
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const node = new Node(val);
    if (this.head === null) { // list is empty
      this.head = node;
    } else { // list is longer than one node
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined; // no list
    let current = this.head;
    let newTail = current;
    while (current.next) { // traverse to the node before the end
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    const oldHead = this.head;
    const newHead = this.head.next;
    this.head = newHead;
    this.length--;
    return oldHead;
  }

}

const list = new SinglyLinkedList();

list.push('Hi there!');
list.push('How are you?');
list.push('Im fine');
console.log('Shift 1: ', list.shift());
console.log('Shift 2: ', list.shift());
console.log('Shift 3: ', list.shift());
console.log(list);
console.log(list.shift());

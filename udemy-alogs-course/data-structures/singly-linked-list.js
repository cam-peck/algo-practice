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

  // pop(val) {

  // }

}

const list = new SinglyLinkedList();

list.push('Hi there!');

list.push('How are you?');

list.push('Im fine');

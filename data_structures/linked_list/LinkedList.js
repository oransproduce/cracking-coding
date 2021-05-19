// Singly Linked List
class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  insertFront(val) {
    if (!head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    } else {
      let oldHead = this.head;
      this.head = new ListNode(val, null);
      this.head.next = oldHead;
    }
    this.size++;
  }
  remove(val) {
    let curr = this.head;
    if (head) {
      while (curr !== null && curr.next !== null) {
        if (curr.next.val === val) {
          if (curr.next === this.tail) {
            this.tail = curr;
          }
          curr.next = curr.next.next;
        }
        curr = curr.next;
      }
      if (this.head.val === val) {
        this.head.next = null;
        this.head = this.head.next;
      }
    }
  }
  insertEnd(val) {

  }
}

class ListNode {
  constructor(val, next=null) {
    this.val = val;
    this.next = next;
  }
}
const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
class LinkedList {
  constructor (head) {
    this.head=head;
    this.tail= null;
    this.length=0
  }

  add(value) {
    let node= new ListNode(value)
    if(!this.length) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next=node;
      this.tail=node;
    }
    this.length++;
  }
  remove(value) {
    let temp = this.head
    let deleteNode= null;
    if(!temp) return null;
    else if(temp.value===value) {
      deleteNode= this.head;
      this.head=this.head.next;
    }
    while(temp && temp.next) {
        if(temp.next.value===value) {
          deleteNode= temp.next;
          temp.next=temp.next.next;
        }
        else {
          temp= temp.next;
        }
      }
    
    if(this.tail && this.tail.value===value) {
      this.tail=temp;
    }
  }
  out() {
    return this.head
  }
}
function removeKFromList(l, k) {
  const list =new LinkedList(l);
  list.remove(k)
  return list.out()
}

module.exports = {
  removeKFromList
};

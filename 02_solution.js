// you are given two non empty linkedi list representing two non negative integers. the digits are stored in reversed order, and each of their nodes contains a single digit. add the two numbers and return the sum as a linked list.
// you may assume the two numbers do not contain any leading zero,except the zero itself.
// example: l1=[2,4,3],l2=[5,6,4], output=[7,0,8]

class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function addTwoNumbers(l1, l2) {
  let dummy = new ListNode(0);
  let current = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = carry;

    if (l1) {
      sum += l1.val;
      l1 = l1.next;
    }

    if (l2) {
      sum += l2.val;
      l2 = l2.next;
    }

    carry = Math.floor(sum / 10);
    sum = sum % 10;

    current.next = new ListNode(sum);
    current = current.next;
  }

  if (carry > 0) {
    current.next = new ListNode(carry);
  }

  return dummy.next;
}

// Example test case
const l1 = new ListNode(2);
l1.next = new ListNode(4);
l1.next.next = new ListNode(3);

const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);

// Print the result
let current = result;
const output = [];
while (current) {
  output.push(current.val);
  current = current.next;
}

console.log(output);

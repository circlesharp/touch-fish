/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let leftNode = l1, rightNode = l2;
  const result = new ListNode(-Infinity);
  let curNode = result;

  while(leftNode && rightNode) {
    if (leftNode.val > rightNode.val) {
      curNode.val = rightNode.val;
      rightNode = rightNode.next;
    } else {
      curNode.val = leftNode.val;
      leftNode = leftNode.next;
    }
    curNode.next = new ListNode();
    curNode = curNode.next;
  }

  if (!leftNode && !rightNode) {
    //
  } else if (!leftNode && rightNode) {
    curNode.val = rightNode.val;
    curNode.next = rightNode.next;
  }
  else if (!rightNode) {
    curNode.val = leftNode.val;
    curNode.next = leftNode.next;
  }

  if (result.val === -Infinity)
    return null;
  return result;
};

function ListNode(val, next) {
  this.val = (val===undefined ? 0 : val);
  this.next = (next===undefined ? null : next);
}

const l1 = new ListNode(1);
l1.next = new ListNode(2);
l1.next.next = new ListNode(3);

const l2 = new ListNode(4);
l2.next = new ListNode(5);
l2.next.next = new ListNode(6);

// console.log(
//   JSON.stringify(l1)
// );
console.log(
  JSON.stringify(mergeTwoLists(null, null), null, 2)
);

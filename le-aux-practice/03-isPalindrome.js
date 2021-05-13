const { reverse } = require('./01-reverseLinkList');

/* 链表前序遍历 */
const preTraversal = (head, visit = console.log) => {
  if (!head) {
    return;
  }

  visit(head);
  preTraversal(head.next, visit);
};

/* 链表后序遍历 */
const postTraversal = (head, visit = console.log) => {
  if (!head) {
    return;
  }

  postTraversal(head.next, visit);
  visit(head);
};

/* 判断回文链表（空间复杂度 O(n) */
const isPalindrome = head => {
  let left = head;

  const _traversal = right => {
    if (!right) {
      return true;
    }

    let res = _traversal(right.next);
    res = res && left.data === right.data;
    left = left.next;

    return res;
  };

  return _traversal(head);
};

/* 判断回文链表（空间复杂度 O(1) */
const isPalindrome2 = head => {
  /* 通过快慢指针来找到链表的中点 */
  let slow = head;
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  if (fast) {
    /* 基数长度，slow 仍需后退一位 */
    slow = slow.next;
  }

  /* 从 slow 开始反转后面的链表 */
  let left = head;
  let right = reverse(slow);
  while (right) {
    if (left.data !== right.data) {
      return false;
    }

    left = left.next;
    right = right.next;
  }

  return true;
};

module.exports = {
  preTraversal,
  postTraversal,
  isPalindrome,
  isPalindrome2,
};

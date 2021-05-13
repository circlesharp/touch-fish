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
}

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
  }

  return _traversal(head);
}

module.exports = {
  preTraversal,
  postTraversal,
  isPalindrome,
};

const reverse = head => {
  if (!head.next) {
    return head;
  }

  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return last;
}

const reverseN = (head, n) => {
  let afterNNode, last;
  const _reverseN = (head, n) => {
    if (n <= 1) {
      afterNNode = head.next;
      return head;
    }

    last = _reverseN(head.next, n - 1);
    head.next.next = head;
    head.next = afterNNode;

    return last;
  }

  return _reverseN(head, n);
}

const reverseBetween = (head, m, n) => {
  if (m === 1) {
    return reverseN(head, n);
  }

  head.next = reverseBetween(head.next, m - 1, n - 1);

  return head;
}

module.exports = {
  reverse,
  reverseN,
  reverseBetween,
};

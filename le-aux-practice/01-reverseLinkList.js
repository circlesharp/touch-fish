const reverse = head => {
  if (!head.next) {
    return head;
  }

  const last = reverse(head.next);
  head.next.next = head;
  head.next = null;

  return last;
}

module.exports = { reverse };

/**
 * k 个一组反转链表
 * @example (1->2->3->4->5, 2 => 2->1->4->3->5)
 * @example (1->2->3->4->5, 3 => 3->2->1->4->5)
 */

/**
 * 反转链表，迭代实现
 * @param {Node} head 
 */
const reverse = head => {
  let pre = null;
  let nxt = null;

  while (head) {
    nxt = head.next;
    head.next = pre;
    pre = head;
    head = nxt;
  }

  return pre;
};

/**
 * 递归翻转链表区间 [head, end) 的元素
 * @param {Node} head 
 * @param {Node} end 
 */
const reverseBetween = (head, end) => {
  let pre = null;
  let nxt = null;
  let tmp = head;

  while (head !== end) {
    nxt = head.next;
    head.next = pre;
    pre = head;
    head = nxt;
  }

  tmp.next = nxt;
  return pre;
}

/**
 * k 个一组反转链表
 * @param {Node} head 
 * @param {number} k 
 */
const reverseKGroup = (head, k) => {
  if (!head) {
    return null;
  }

  let front = head;
  let nxtFront = head;

  for (let i = 0; i < k; i++) {
    if (!nxtFront) {
      /* 不足 k 个，无需反转 */
      return head;
    }

    nxtFront = nxtFront.next;
  }

  /* head 是本轮 nxtFront 的前驱节点 */
  head = reverseBetween(front, nxtFront);

  /* 此时的 front 已经成为这次反转的最后一个被反转的节点 */
  front.next = reverseKGroup(nxtFront, k);

  return head;
}

module.exports = {
  reverse,
  reverseBetween,
  reverseKGroup,
};

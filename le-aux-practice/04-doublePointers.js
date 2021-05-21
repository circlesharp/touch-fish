/**
 * ::: 双指针技巧 :::
 * 
 * 一、快慢指针
 * 1. 判定链表中是否包含环
 * 2. 返回含环链表的环的起始位置
 * 3. 寻找链表的中点
 * 4. 寻找链表的倒数第 n 个元素
 * 
 * 二、左右指针
 */

/* 1 判定链表中是否包含环 */
const hasCycle = head => {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      return true;
    }
  }

  return false;
};

/* 2 返回含环链表的环的起始位置 */
const detectCycle = head => {
  let fast = head;
  let slow = head;

  /* 一直走，直到相遇，slow 回到链表头，fast 留在相遇处 */
  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;

    if (fast === slow) {
      slow = head;
      break;
    }
  }

  /* 一步一动，下一次相遇就在环的起始位置 */
  /* 因为 fast 比 slow 多 k 动 */
  /* 这 k 动有两层含义：1. fast在环内空转 2. slow走到相遇处 */
  /* 令相遇点离环起始点的实际距离为 n 动，slow(k - n) === fast(k - n) */
  while (fast !== slow) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};

/* 3 寻找链表的中点 */
const middleNode = head => {
  let fast = head;
  let slow = head;

  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow.next;
  }

  if (fast) {
    /* 奇数个结点 正中点 */
    return slow;
  } else {
    /* 偶数个结点 中间偏右 因为已经动了 */
    return slow;
  }
};

/* 4 寻找链表的倒数第 n 个元素 */
const findNthFromEnd = (head, n) => {
  let fast = head;
  let slow = head;
  while (n > 1) {
    fast = fast.next;
    n -= 1;
  }
  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  return slow;
};

module.exports = {
  hasCycle,
  detectCycle,
  middleNode,
  findNthFromEnd,
};

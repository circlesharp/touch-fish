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


const addTwoNumbers = (l1, l2) => {
  /* 两个子结点 */
  let node01 = l1;
  let node02 = l2;
  let remain = null;

  /* 新的链表 */
  const result = { val: 0, next: null };
  let current = result;
  let value = 0;
  
  /* 标志进位，本是布尔值，在运算中为 0 / 1 */
  let addMoreOne = false;

  while(true) {
    /* 当前相加结果 */
    sum = node01.val + node02.val + addMoreOne;
    addMoreOne = sum > 9;
    value = sum % 10;
    
    /* 继续读取链表 */
    node01 = node01.next;
    node02 = node02.next;

    /* 处理current */
    current.val = value;
    current.next = {val: 0, next: null};

    /* 判读链表是否有效 1，1 继续循环 */
    /* 判读链表是否有效 0，0 结束循环，处理边界 */
    /* 判读链表是否有效 1，0 拼接 */
    if (node01 && node02) {
      current = current.next;
      continue;
    }
    else if (!node01 && !node02) {
      if (addMoreOne) {
        current.next.val = 1;
        current.next.next = null;
      }
      else {
        current.next = null;
      }
      break;
    }
    else {
      if (!node02) remain = node01;
      else remain = node02;

      while (remain.val + addMoreOne > 9) {
        current.next = { val: 0, next: null };
        current = current.next;
        
        current.val = (remain.val + addMoreOne) % 10;
        
        if (remain.next) remain = remain.next;
        else remain = { val: 0, next: null };
      }
      
      current.next = remain;
      current.next.val += addMoreOne;
      break;
    }
  }

  return result;
};

const l1 = {
  val: 2,
  next: {
    val: 4,
    next: {
      val: 3,
      next: {
        val: 9,
        next: {
          val: 9,
          next: {
            val: 7,
            next: null,
          }
        },
      },
    }
  }
};

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 6,
      next: null,
    }
  }
}

const current = addTwoNumbers(l1, l2);
console.log(JSON.stringify(current, null, 2));

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
  let current01 = l1;
  let current02 = l2;
  const result = { val: 0, next: {} };
  let rst = result;
  
  let addMoreOne = false;

  while(true) {
    sum = current01.val + current02.val + addMoreOne;

    rst.val = sum % 10;
    rst.next = {};
    rst = rst.next;

    addMoreOne = sum > 9;

    if (!current01 || !current02) {
      let remain;
      if (!current01) remain = current02;
      else remain = current01;

      while(true) {
        let remainVal = remain.val + addMoreOne;
        if (remainVal > 9) {
          remain = remain.next;
          rst.next = { val: sum % 10, next: null };
          rst = rst.next;
        } else {
          rst.next = remain;
          return result;
        }
      }
    }


  }
};

// [2,4,3]
// [5,6,4]
// [7,0,8]

const l1 = {};
l1.val = 2;
l1.next = {};

// const l1 = {
//   val: 2,
//   next: {
//     val: 4,
//     next: {
//       val: 3,
//       next: null,
//     }
//   }
// };

const l2 = {
  val: 5,
  next: {
    val: 6,
    next: {
      val: 4,
      next: null,
    }
  }
}

const rst = addTwoNumbers(l1, l2);
console.log(rst);

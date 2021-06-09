const Queue = require('./Queue');

class Tree {
  constructor(nums, recursive = false) {
    if (recursive) {
      this.root = Tree._InitRecursive([undefined, ...nums], 1);
    } else {
      this.root = Tree._Init(nums);
    }
  }

  traversal() {
    const result = [];
    const queue = new Queue();
    let node;
    queue.add(this.root);

    while (!queue.empty()) {
      node = queue.delete();
      if (node.left) {
        queue.add(node.left);
      }
      if (node.right) {
        queue.add(node.right);
      }
      result.push(node.data);
    }

    return result;
  }

  static _Init(nums) {
    const queue = new Queue();
    const root = Tree._GetNode(nums[0]);
    let node = root;
    let child;
    for (let i = 1; i < nums.length; i++) {
      child = Tree._GetNode(nums[i]);
      if (i % 2) {
        node.left = child;
      } else {
        node.right = child;
        node = queue.delete();
      }
      queue.add(child);
    }

    return root;
  }

  static _InitRecursive(nums, idx) {
    if (idx >= nums.length) {
      return null;
    }

    const node = Tree._GetNode(nums[idx]);
    node.left = Tree._InitRecursive(nums, idx * 2);
    node.right = Tree._InitRecursive(nums, idx * 2 + 1);

    return node;
  }

  static _GetNode(val) {
    return {
      data: val,
      left: null,
      right: null,
    };
  }
}

module.exports = Tree;

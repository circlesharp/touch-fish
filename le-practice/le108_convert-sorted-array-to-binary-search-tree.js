const solution = nums => {
  return _solution(nums, 0, nums.length);
}

const _solution = (nums, left, right) => {
  if (left >= right) {
    return null;
  }

  const mid = (left + right) / 2 | 0
  const node = new TreeNode(nums[mid]);
  node.left = _solution(nums, left, mid);
  node.right = _solution(nums, mid + 1, right);

  return node;
}

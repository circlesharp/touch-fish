class KMP {
  constructor(pattern) {
    this.pattern = pattern;

    this.generateDPTable();
  }

  generateDPTable() {
    const m = this.pattern.length;

    // * dpTable
    // * [state][ascii] => nextState
    // * 在当前状态(state)下，如果下一个碰到某字符(ascii)，就会转移到下一个状态(nextState)
    const dp = Array(m).fill(null);
    this.dp = dp.map(i => Array(256).fill(0));

    // * 初始状态 第一个字符的 nextState 是状态1
    // * 隐含 其他字符作为首字母的下一个状态都是0，即匹配不到
    this.dp[0][this.pattern[0].charCodeAt()] = 1;

    // * 初始状态 影子状态为0
    // * 影子就是当状态推进失败，状态重启的位置
    let shadow = 0;

    for (let state = 1; state < m; state++) {
      for (let c = 0; c < 256; c++) {
        if (this.pattern[state].charCodeAt() === c)
          // 符合推进条件，这个字符的 nextState 就是 state + 1
          this.dp[state][c] = state + 1;
        else
          // 不符合推进条件，这个字符的 nextState 就是影子状态下这个字符的 nextState
          this.dp[state][c] = this.dp[shadow][c];
      }

      // * 更新影子状态
      // * 新的影子状态就是当前字符在影子状态下的 nextState
      shadow = this.dp[shadow][this.pattern[state].charCodeAt()];
    }
  }

  search(txt) {
    const m = this.pattern.length;
    const n = txt.length;

    let state = 0;
    let char;

    for (let i = 0; i < n; i++) {
      char = txt[i];
      state = this.dp[state][char.charCodeAt()];

      if (state === m) {
        return i - m + 1;
      }
    }

    return -1;
  }
}

module.exports = {
  KMP,
};

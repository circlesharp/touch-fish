class Member {
  constructor(idx) {
    this.name = `tom${idx}`;
    this.phone = 12345678000 + idx;
    this.readonlyNO = 'bbb_ROM_bbb';
    this.randomaccessNO = 'ccc_RAM_ccc';
    this.labels = ['走读生，初一7班', '周杰伦', '爱喝饮料不爱喝水'];
    this.amount = 1000;
    this.createAt = 1610006786;
    this.status = idx % 3; // 0 使用中 1 停用 2 未认证激活
  }
}

const members = [];

for (let i = 0; i < 10; i++)
  members.push(new Member(i));

console.log(members);

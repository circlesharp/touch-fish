class Test {
  constructor(name, cb) {
    this.name = name;
    this.cb = cb.bind(this, this.name);
    this.cbDisabled = this.protoCb.bind(this);
  }
  callProtoCb() {
    this.protoCb();
  }
}

Test.prototype.protoCb = console.log.bind(null, 'cb in propotype');

const test = new Test('amy', console.log);
test.cb();
test.protoCb();
test.callProtoCb();
test.cbDisabled();

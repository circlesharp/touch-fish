function testThis() {
  console.log(1, this.a);

  (function() {
    console.log(2, this.a);
  })();

  (() => {
    console.log(3, this.a);
  })();

  console.log('-----------\n')
}

testThis();

const obj = {a: 1};
obj.testThis = testThis;
obj.testThis();

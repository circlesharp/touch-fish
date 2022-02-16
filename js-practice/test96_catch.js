async function mockAjax() {
  return Promise.resolve({ code: 0, msg: 'ok' });
}

(async function () {
  const { codeMan } = await mockAjax();
  console.log(233, codeMan.aaa);
});

(function () {
  mockAjax()
    .then(({ codeMan }) => {
      console.log(233, codeMan.aaa);
    })
    .catch((e) => {
      console.log(266, e);
    });
});

(function () {
  try {
    mockAjax().then(({ codeMan }) => {
      console.log(233, codeMan.aaa);
    });
  } catch (error) {
    console.log(277, error);
  }
})();

console.log(244);
setTimeout(() => {
  console.log(255);
}, 100);

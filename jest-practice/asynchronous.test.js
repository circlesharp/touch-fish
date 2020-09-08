const fetchData = callback =>{
  let data;
  setTimeout(() => {
    data = 'peanut butter';
    callback(data);
  }, 3000);
};

/* Jest will wait until the done callback is called before finishing the test. */
test('the data is peanut butter', done => {
  function callback(data) {
    try {
      expect(data).toBe('peanut butter');
      done();
    } catch (error) {
      done(error);
    }
  }

  fetchData(callback);
});

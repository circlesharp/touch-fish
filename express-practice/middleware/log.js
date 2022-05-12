module.exports = (req, res, next) => {
  const { path, params, query } = req;
  console.log('==== request =============================');
  console.log('path', path);
  console.log('query', query);
  console.log('params', params);
  console.log('==========================================\n\n');
  next();
};

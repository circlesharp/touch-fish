const { migration } = require('./migration');
const deps = require('../plugins/deps.json');

migration(
  deps.map((i) => i.path),
  ['src', 'new-src']
);

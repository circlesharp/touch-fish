const { migration } = require('./tools/migration');
const deps = require('./plugins/deps.json');

migration(
  deps.map((i) => i.path),
  ['components', 'business_components']
);

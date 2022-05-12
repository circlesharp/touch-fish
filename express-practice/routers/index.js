const express = require('express');
const router = express.Router();

resp = {
  hello: 'world',
};

router.get('/hello/world', (req, res) => {
  const { query, params } = req;

  const id = query.id;
  const name = query.name;

  res.json({
    ...resp,
    movieId: id,
    movieName: name,
  });
});

module.exports = router;

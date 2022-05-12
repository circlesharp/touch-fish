const express = require('express');
const app = express();
const port = 3000;
const cors = require('./middleware/cors');
const log = require('./middleware/log');
const router = require('./routers/index');

app.use(cors);

app.use(log, router);

app.listen(port, () => {
  console.log(`server ok, listening ${port}`);
});

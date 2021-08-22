const express = require('express');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

const hostname = '127.0.0.1';
const port = 8080;

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

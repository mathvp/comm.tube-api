const express = require('express');

require('./database');

const app = express();

app.use(express.json());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(8080);
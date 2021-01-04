const express = require('express');
const cors = require('cors');

require('./database');

const app = express();

app.use(cors());
app.use(express.json());

require('./routes/auth.routes')(app);
require('./routes/user.routes')(app);

app.listen(8080);
const express = require('express');
require('dotenv').config();
require('./models/db');
const userRouter = require('./routes/user')
const User = require('./models/user');

const app = express();
const port = 3000

app.use(express.json());
app.use(userRouter);


app.get('/', (req, res) => res.send('Hello World dmn!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))


// mongodb + srv://kumsuj5:<password>@shopeet.2lhmbcy.mongodb.net/?retryWrites=true&w=majority
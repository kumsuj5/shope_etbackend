const express = require("express");

const app = express();
app.get('/', (req, resp) => {
    resp.send("this is me")
})
app.get('/home', (req, resp) => {
    resp.send("this is Home ")
})
app.get('/about', (req, resp) => {
    resp.send("this is about ")
})
app.listen(3000);
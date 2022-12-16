const express = require("express");
const app = express();
// const path = requre('path');
// const mysql = require("mysql");
// const session = require('express-session');
// const MySQLStore = require('express-mysql-session')(session);
// // const Router = require ('./Router');

app.get('/', (req, res) => {
   res.send("hello dante");
})

app.listen(3001, () => {
   console.log("running on port 3001")
});
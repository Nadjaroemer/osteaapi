require("dotenv").config();

var express = require("express");
var app = express();
var formidable = require("express-formidable");
var cors = require("cors");

require("./database");
app.use(cors());
app.use(formidable());

//sereveren bliver startet
require("./cheeses.route")(app);

app.listen(process.env.PORT || 3000, function() {
    console.log("App is running on", process.env.PORT || 3000);
})
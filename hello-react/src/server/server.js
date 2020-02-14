const express = require('express');
const apiRouter =  require ('./routers');
const bodyParser = require("body-parser");


const app = express();

app.use(express.static('public'));
app.use(function(req, res, next) {
    //console.log("set header app");
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  }); 

app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: false }));
app.use(apiRouter);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server listening on port: ${port}`));
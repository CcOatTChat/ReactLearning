const mysql = require('mysql');
const config = require('../config');


//import * as mysql from 'mysql';
//import config from '../config';
//import Users from './Users';

const CreateConnections = () =>  { 
    //console.log(config.mysql);
    const Connection = mysql.createConnection(config.mysql);

    //console.log(" get Connection");
    Connection.connect(err => {
        if(err) console.log(err);
    });

    return Connection;
}

module.exports = { CreateConn: CreateConnections() };

//export default {
//    Users
//}

//console.log(CreateConnections());

const Users = require('./users');
module.exports = { Users };
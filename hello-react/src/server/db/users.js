//import { Connection } from '.';
const { CreateConn } =  require('.');


const Connection = CreateConn;
const all = async() =>{
    return new Promise((resolve,reject) => {
        Connection.query('SELECT * FROM test.user' ,(err,results) =>{
            if(err){
                return reject(err);
            }

            resolve(results);
        });
    });
}

const me = async() =>{
    return new Promise((resolve,reject) => {
        Connection.query('SELECT * FROM test.user WHERE userid = 1' ,(err,results) =>{
            if(err){
                return reject(err);
            }

            resolve(results);
        });
    });
}

const findByUserID = async(userId) =>{
    return new Promise((resolve,reject) => {
        Connection.query('SELECT * FROM test.user WHERE userid ='+ userId ,(err,results) =>{
            if(err){
                return reject(err);
            }

            resolve(results);
        });
    });
}

const addUser = async(data) =>{
    return new Promise((resolve,reject) => {
        const query = `INSERT INTO test.user (firstname,lastname,email,birthday) 
                      VALUES ('${data.firstname}','${data.lastname}','${data.email}','${data.birthday}')`;
        //console.log(query); 
        Connection.query(query ,(err,results) =>{
             if(err){
                 return reject(err);
             }

             resolve(results);
        });
    });
}

const updateUser = async(userid,data) =>{
    return new Promise((resolve,reject) => {
        const query = `UPDATE  test.user SET firstname = '${data.firstname}' ,lastname  = '${data.lastname}'
                      ,email  = '${data.email}' ,birthday  = '${data.birthday}'
                      WHERE userid = '${userid}'`;
        //console.log(query); 
        Connection.query(query ,(err,results) =>{
             if(err){
                 return reject(err);
             }

             resolve(results);
        });
    });
}

//export default {
//    all
//}

module.exports = {
    all,
    me,
    findByUserID,
    addUser,
    updateUser
}
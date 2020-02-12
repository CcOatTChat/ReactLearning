import { Connection } from '.';

export const all = async() =>{
    return new Promise((resolve,reject) => {

        Connection.query('SELECT * FROM test.user' ,(err,results) =>{
            if(err){
                return reject(err);
            }

            resolve(results);
        });
    });
}

export default {
    all
}
const express = require('express');
const path = require('path')
const DB =  require('./db');

const router = express.Router();

router.get('/',(req,res) =>{
    console.log("ssss");
    res.json('world');
    //res.sendFile(path.join(__dirname, 'build', 'index.html'))
})

router.get('/hello',(req,res,next) =>{
    console.log("route  Hello");
    res.json('world');
})

router.get('/users', async(req,res) =>{
    try{
        let users = await DB.Users.all();
        res.json(users)
        console.log(users);
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})

module.exports = router;
//export default router;
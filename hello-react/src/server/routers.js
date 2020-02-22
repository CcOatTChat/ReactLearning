const express = require('express');
const DB =  require('./db');
const router = express.Router();

router.get('/',(req,res) =>{
    res.json('world');

});

router.get('/hello/:message',(req,res,next) =>{
    const { params } = req;
    console.log("route  Hello " + params.message);
    res.json({
       params
    });
});


router.get('/users/:userid', async(req,res) =>{  
    try{
        const { params } = req;
        let users = await DB.Users.findByUserID(params.userid);
        res.json(users)
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/users', async(req,res) =>{  
    try{
        let userid = req.query.userid;
        if (userid === undefined || userid === null || userid == "") {
            let users = await DB.Users.all();
            res.json(users)
        }else{
            let users = await DB.Users.findByUserID(userid);
            res.json(users)
        }
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.get('/users/me', async(req,res) =>{  
    try{
        let users = await DB.Users.me();
        res.json(users)
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
});

router.post('/users', async(req,res) =>{  
   try{
       var data = {firstname:req.body.firstname, lastname:req.body.lastname, email:req.body.email, birthday:req.body.birthday};
       
       let users = await DB.Users.addUser(data);
       res.json(users)
   }catch(e){
       console.log(e);
       res.sendStatus(500);
   }
});

router.put('/users/:userid', async(req,res) =>{  
    try{
        const { params } = req;
        let userid = params.userid;
        console.log("PUT userid " +userid );
        let data = {firstname:req.body.firstname, lastname:req.body.lastname, email:req.body.email, birthday:req.body.birthday};
        
        let users = await DB.Users.updateUser(userid,data);
        res.json(users)
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
 });

// router.use(function(req, res, next) {
//     console.log("set header use");
//     res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  

// router.options("/users", function(req, res, next){
//      res.header('Access-Control-Allow-Origin', '*');
//      res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
//      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

//      res.sendStatus(200);
// });

module.exports = router;
//export default router;
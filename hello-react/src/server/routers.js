import * as express from 'express';
import DB from './db';

const router = express.Router();

router.get('/api/hello',(req,res,next) =>{
    console.log("route API Hello");
    res.json('world');
})

router.get('/api/test', async(req,res) =>{
    try{
        let tests = await DB.Tests.all();
        res.json(tests)
    }catch(e){
        console.log(e);
        res.sendStatus(500);
    }
})


export default router;
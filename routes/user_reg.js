/**
 * Created by yaowenjie on 2017/1/24.
 */
var express=require('express');
var router = express.Router();
const REG_SUCCESS = 20000;
const REG_FAIL    = 10000;

router.get('/',function (reg,res) {
    res.render('reg',{title:'注册'});
});

routet.post('/',function (req,res) {
    var username=req.body.username,
        password=req.body.password,
        tname=req.body.tname,
        idnumber=req.body.idnumber,
        phonenumber=req.body.phonenumber

    User.findOrCreate(username,password,tname,idnumber,phonenumber,function (err,result) {
        if (err) {
            res.locals.error = err;
            res.send(JSON.stringify({ status:REG_FAIL }));
            res.render('reg', { title: '注册' });
            return;
        }
        if(!result){
            res.send(JSON.stringify(REG_FAIL))
            res.render('reg', { title: '注册' });
            return;
        }else{
            res.send(JSON.stringify(REG_SUCCESS))
            res.render('index',{title:'主页'})
            return;
        }
    })
})

module.exports = router;
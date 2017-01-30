/**
 * Created by yaowenjie on 2017/1/23.
 */
var express=require('express');
var router = express.Router();
const LOGIN_SUCCESS = 20000;
const LOGIN_FAIL    = 10000;
//var user = require('../models/user')

router.get('/',function (req,res,next) {
    if(req.session.islogin){
        res.locals.islogin=req.session.islogin;
    }

    if(req.cookies.islogin){
        req.session.islogin=req.cookies.islogin;
    }
    res.render('user_login',{title:'用户登录'})
})

router.post('/',function(req,res,next){
    var username = req.body.username,
        password = req.body.password
User.find(username,function (err,result) {
    if(err) return next(err);

    if(!result){
        res.locals.error='用户不存在'
        res.render('login'),{title:'用户登录'}
        res.send(JSON.stringify(LOGIN_FAIL))
        return;
    }else if(result.password!=password){
        res.locals.error='密码错误'
        res.render('login',{title:'login'})
        res.send(JSON.stringify(LOGIN_FAIL))
    }else{
        if(result.Password==password){
            console.log(req.session);
            req.session.islogin=username;
            res.locals.islogin=req.session.islogin;
            res.cookie('islogin',res.locals.islogin,{maxAge:60000});
            res.send(JSON.stringify({ status:LOGIN_SUCCESS }));
        }else {
            res.send(JSON.stringify({ status:LOGIN_FAIL }));
        }
    }
})

});

module.exports = router;
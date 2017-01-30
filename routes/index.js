var express = require('express');
var router = express.Router();

var User=require('../models').User;
var Driver=require('../models').Driver;
var Car=require('../models').Car;

const CREATE_SUCCESS = 20000;
const CREATE_FAIL    = 10000;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' }).catch(next);
});

//增加 User
router.post('/create/user',function (req,res,next) {
  var username=req.body.username,
      password=req.body.password,
      tname=req.body.tname,
      idnumber=req.body.idnumber,
      phonenumber=req.body.phonenumber

  User.findOrCreate({where:["username = ?", username],
    defaults:{
      password:password,
      tname:tname,
      idnumber:idnumber,
      phonenumber:phonenumber}})
      .spread(function (user,created){
        console.log(user.get({
          plain:true 
        }))
        console.log(created)
        callback(null,created)
      }).then(function(result){
    if (err) {
      res.locals.error = err;

      res.render('reg', { title: '注册' });
      res.send(JSON.stringify({ status:CREATE_FAIL }));
    }
    if(!result){
      res.send(JSON.stringify(CREATE_FAIL))
      res.render('reg', { title: '注册' });
      return;
    }else{
      res.send(JSON.stringify(CREATE_SUCCESS))
      res.render('index',{title:'主页'})
      return;
    }

  }).catch(next)

});
//增加 Driver
router.post('/create/driver',function (req,res,next) {
  var username=req.body.username,
      password=req.body.password,
      tname=req.body.tname,
      idnumber=req.body.idnumber,
      phonenumber=req.body.phonenumber

  Driver.findOrCreate({where:["username = ?", username],
    defaults:{
      username:username,
      password:password,
      tname:tname,
      idnumber:idnumber,
      phonenumber:phonenumber}})
      .spread(function (driver,created){
        console.log(driver.get({
          plain:true
        }))
        console.log(created)
        callback(null,created)
      }).then(function(err,result){
    if (err) {
      res.locals.error = err;

      res.render('reg', { title: '注册' });
      res.send(JSON.stringify({ status:CREATE_FAIL }));
    }
    if(!result){
      res.send(JSON.stringify(CREATE_FAIL))
      res.render('reg', { title: '注册' });
      return;
    }else{
      res.send(JSON.stringify(CREATE_SUCCESS))
      res.render('index',{title:'主页'})
      return;
    }

  }).catch(next)
});
//增加 Car
router.post('/create/car',function (req,res,next) {
var carid=req.body.carid,
    username=req.body.username
  Driver.findOne({where:["username = ?",username]}).then(function (driver) {
    console.log(driver)
    //var car= Car.build({carid:carid})
    driver.createCar({carid:carid,user_id:driver.id});
    res.send(JSON.stringify({status:CREATE_SUCCESS}))
  }).catch(next)
});
//增加 History
router.post('/create/history',function (req,res,next) {
var username=req.session.username

  Promise.all([
    User.findOne({where:['username = ?',username]}),
      Driver.find({where:['username = ?',username]})
]).then(function (results) {
    var user = results[0];
    var driver = results[1];
    user.setHistory(driver)
    res.send(JSON.stringify(({status:CREATE_SUCCESS})))
  }).catch(next)
});


//修改 User
router.post('/update/user',function (req,res,next) {
// User.findOne({where:["username = ?",username]}).then(function (user) {
//   res.send(JSON.stringify(user))
// })
});
//修改 Driver
router.post('/update/driver',function (req,res,next) {

});
//修改 Car
router.post('/update/car',function (req,res,next) {

});


//查找 User
router.post('/select/user',function (req,res,next) {
  username=req.body.username
  User.findOne({where:["username = ?",username]}).then(function (user) {
    res.send(JSON.stringify(user)).catch(next)
  })
});
//查找 Driver
router.post('/select/driver',function (req,res,next) {
  username=req.body.username
  Driver.findOne({where:["username = ?",username]}).then(function (driver) {
    res.send(JSON.stringify(driver)).catch(next)
  })
});
//查找 Car
router.post('/select/car',function (req,res,next) {
  userid=req.body.userid
  Car.findOne({where:["username = ?",userid]}).then(function (car) {
    res.send(JSON.stringify(car)).catch(next)
  })
});
//查找 History
router.post('/select/history',function (req,res,next) {
  userid=req.body.userid
  History.findOne({where:["username = ?",userid]}).then(function (history) {
    res.send(JSON.stringify(history)).catch(next)
  })
});


  module.exports = router;

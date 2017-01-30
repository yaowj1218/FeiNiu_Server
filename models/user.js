/**
 * Created by yaowenjie on 2017/1/18.
 */
var sequelize=require('./_db').sequelize();
var Sequelize=require('sequelize');
var User=  sequelize.define('User',{
        // id:{
        //     type:Sequelize.INTEGER,
        //     autoIncrement:true,
        //     primarykey:true,
        //     unique:true
        // },
        username:{
            type: Sequelize.STRING,
            unique:true,
            field:'username'
        },
        password:{
            type:Sequelize.STRING,
            allowNull : false,
            field:'password'
        },
        tname: {
            type:Sequelize.STRING,
            field:'真实姓名'
        },
        idnumber:{
            type:Sequelize.STRING,
            unique:true,
            field:'身份证号码'
        },
        phonenumber:{
            type:Sequelize.STRING,
            unique:true,
            field:'电话号码'
        }

    },{
        timestamps: true,
        underscored: true,
       // paranoid: true,
        freezeTableName: true,
        tableName: 'user',
        charset: 'utf8',
        collate: 'utf8_general_ci'
    })

sequelize.sync();


//
// //查找
// User.find=function findOne(username,callback) {
// User.findOne({where:["username = ?",username]}).then(function (user) {
//     if(user!=null)
//         console.log.(user.id)
//     callback(null,user)
// })
// }
//
// //注册
// User.regin=function findorcreat(username,password,tname,idnumber,phonenumber) {
// User.findOrCreate({where:["username = ?", username],
//     defaults:{
//         password:password,
//         tname:tname,
//         idnumber:idnumber,
//         phonenumber:phonenumber}})
//     .spread(function (user,created){
//         console.log(user.get({
//             plain:true
//         }))
//         console.log(created)
//         callback(null,created)
//     }).then(function(user){
//
//     })
// }
//
// //改密码
//
// User.changepassword=function changepassword(username,password){
//     User,update({
//         password:password
//     },{where:["username = ?",username]})
//         .then(function(user){
//             console.log(user)
//         })
// }
//
// //改电话号码
//
// User.changephonenumber=function changephonenumber(username,phonenumber){
//     User,update({
//         phonenumber:phonenumber
//     },{where:["username = ?",username]})
//         .then(function(user){
//             console.log(user)
//         })
// }
//
module.exports=User;
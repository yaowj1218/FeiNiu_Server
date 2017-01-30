/**
 * Created by yaowenjie on 2017/1/18.
 */
var sequelize=require('./_db').sequelize();
var Sequelize=require('sequelize');
var Driver = sequelize.define('Driver',{
            // id:{
            //     type:Sequelize.INTEGER,
            //     autoIncrement:true,
            //     primarykey:true,
            //     unique:true
            // },
            username:{
                type:Sequelize.STRING,
                unique:true,
                field:'username'
            },
            password:{
                type:Sequelize.STRING,
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
        tableName: 'driver',
        charset: 'utf8',
        collate: 'utf8_general_ci'
        }
    )
sequelize.sync();
//
// //查找
// Driver.find=function findOne(username) {
//     Driver.findOne({where:["username = ?",username]}).then(function (user) {
//         return Driver.id
//     })
// }
//
// //注册
// Driver.regin=function findorcreat(username,password,tname,idnumber,phonenumber) {
//     Driver.findOrCreate({where:["username = ?", username],
//         defaults:{
//             password:password,
//             tname:tname,
//             idnumber:idnumber,
//             phonenumber:phonenumber}})
//         .spread(function (driver,created){
//             console.log(driver.get({
//                 plain:true
//             }))
//             console.log(created)
//         })
// }

module.exports=Driver;
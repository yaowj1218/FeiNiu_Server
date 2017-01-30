/**
 * Created by yaowenjie on 2017/1/24.
 */
/**
 * Created by yaowenjie on 2017/1/24.
 */
var Sequelize=require('sequelize');
var sequelize=new Sequelize('Feiniu', 'root', '159512186', {
    host: '127.0.0.1', port: '3306', dialect: 'mysql'
})
var User = require(__dirname + "/user")
var Driver = require(__dirname + "/driver")
var Car = require(__dirname + "/car")

User.belongsToMany(Driver,{through:'history',as:'History'});
Driver.belongsToMany(User,{through:'history',as:'History'});
Driver.hasMany(Car,{foreignKey:'user_id',targetKey:'id',as:'Car'});
Car.belongsTo(Driver,{foreignKey:'user_id',targetKey:'id',as:'Car'})

User.sync();

sequelize.sync({force:true});

exports.User = User;
exports.Driver = Driver;
exports.Car = Car;
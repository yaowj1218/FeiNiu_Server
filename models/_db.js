/**
 * Created by yaowenjie on 2017/1/24.
 */
var Sequelize=require('sequelize');

exports.sequelize = function () {
    return new Sequelize('Feiniu', 'root', '159512186', {
        host: '127.0.0.1', port: '3306', dialect: 'mysql'
    })
}
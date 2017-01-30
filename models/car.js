/**
 * Created by yaowenjie on 2017/1/24.
 */
var sequelize=require('./_db').sequelize();
var Sequelize=require('sequelize');

var Car = sequelize.define('Car',{
    // id:{type:Sequelize.BIGINT(10),
    //     autoIncrement:true,
    //     primaryKey:true,
    //     unique:true,
    //     comment:'货车 ID'},
    carid:{
        type:Sequelize.STRING,
        unique:true,
        allowfull:false,
        field:'carid'},
    userid:{
        type:Sequelize.INTEGER,
        allowfull:false,
        field: 'user_id',
    }
},{
    timestamps: true,
    underscored: true,
    // paranoid: true,
    freezeTableName: true,
    tableName: 'car',
    charset: 'utf8',
    collate: 'utf8_general_ci'
})
sequelize.sync();

module.exports=Car;
/**
 * Created by yaowenjie on 2017/1/24.
 */
var express=require('express');
var router = express.Router();
var qiniu = require('qiniu');
qiniu.conf.ACCESS_KEY = Settings.QINIUACCESS_KEY;
qiniu.conf.SECRET_KEY = Settings.QINIUSECRET_KEY;

router.get('/upToken', function(req, res, next) {

    var myUptoken = new qiniu.rs.PutPolicy(Settings.QINIUCMSBUCKETNAME);
    var token = myUptoken.token();
    moment.locale('en');
    var currentKey = moment(new Date()).format('YYYY-MM-DD--HH-mm-ss');
    res.header("Cache-Control", "max-age=0, private, must-revalidate");
    res.header("Pragma", "no-cache");
    res.header("Expires", 0);
    if (token) {
        res.json({
            uptoken: token,
            sava_key :currentKey
        });
    }

});

module.exports = router;
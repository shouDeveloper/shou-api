var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://127.0.0.1:27017/shoumedia');
mongoose.Promise = global.Promise;

var userSchema = new Schema({
    username: String,
    password: String,
    name: String,
    college: String,
    updateTime: Date,
    urpPassword: String
});
var currScema = new Schema({
    username: String,
    classData: {
        default: [],
        type: Array
    }
});
var addressSchema = new Schema({
    name: String,
    position: {
        type: String,
        default: "未知"
    },
    mobile: {
        type: String,
        default: "未知"
    },
    number: {
        type: String,
        default: "未知"
    },
    email: {
        type: String,
        default: "未知"
    }
});
var infoPlusSchema = new Schema({
    username: String,
    name: {
        type: String,
        default: "未知"
    },
    political: {
        type: String,
        default: "未知"
    },
    idCard: {
        type: String,
        default: "未知"
    },
    national: {
        type: String,
        default: "未知"
    },
    highSchoolExam: {
        type: String,
        default: "未知"
    },
    highSchoolName: {
        type: String,
        default: "未知"
    },
    address: {
        type: String,
        default: "未知"
    },
    parents: {
        type: String,
        default: "未知"
    },
    college: {
        type: String,
        default: "未知"
    },
    major: {
        type: String,
        default: "未知"
    },
    className: {
        type: String,
        default: "未知"
    },
    room: {
        type: String,
        default: "未知"
    },
    phoneNumber: {
        type: String,
        default: "未知"
    },
    email: {
        type: String,
        default: "未知"
    },
    pic: {
        type: String,
        default: "未知"
    }
});
var wxappSchema = new Schema({
    username: String,
    openid: String,
    session_key: String,
    avatar: String
});
var feedbackSchema = new Schema({
    content: String,
    email: String,
    username: String
});
var oldAchiSchema = new Schema({
    username: String,
    achi: Array
});
var msgSchema = new Schema({
    title: String,
    content: String,
    tag:{
        type:Number,
        default:1
    }
});
var subjectSchema = new Schema({
    xy: {
        type: String,
        default: "未知"
    },
    kch: {
        type: String,
        default: "未知"
    },
    kcm: {
        type: String,
        default: "未知"
    },
    kxh: {
        type: String,
        default: "未知"
    },
    js: {
        type: String,
        default: "未知"
    },
    xf: {
        type: String,
        default: "未知"
    },
    sj: {
        type: String,
        default: "未知"
    },
    dd: {
        type: String,
        default: "未知"
    },
    zc: {
        type: String,
        default: "未知"
    },
    bj: {
        type: String,
        default: "未知"
    },
    kcsx: {
        type: String,
        default: "未知"
    },
    semester: String
});

var UserMsgSchema=Schema({
    username:String,
    msgList:Array
});

var Subject = mongoose.model('Subject', subjectSchema);
var Msg = mongoose.model('Msg', msgSchema);
var OldAchi = mongoose.model('OldAchi', oldAchiSchema);
var User = mongoose.model('User', userSchema);
var Curr = mongoose.model('Curriculum', currScema);
var Address = mongoose.model('Address', addressSchema);
var InfoPlus = mongoose.model('InfoPlus', infoPlusSchema);
var Wxapp = mongoose.model('Wxapp', wxappSchema);
var Feedback = mongoose.model('Feedback', feedbackSchema);
var UserMsg=mongoose.model('UserMsg',UserMsgSchema);

module.exports = {
    User,
    Curr,
    OldAchi,
    Address,
    InfoPlus,
    Wxapp,
    Feedback,
    Msg,
    Subject,
    UserMsg
};
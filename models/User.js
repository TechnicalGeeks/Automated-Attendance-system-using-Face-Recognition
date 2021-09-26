const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const UserSchema= new Schema({
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required:true
    },
    email:{
        type:String,
        required:true

    },
    name:{
        type:String,
        required:true

    },
    contact:{
        type:String,
        required:true

    },
    role:{
        type:String,
        required:true
    },
    status:{
        type: String,
        required:true
    }

},{timestamps:true});

const User=mongoose.model('User',UserSchema);

module.exports=User;
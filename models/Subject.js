const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const SubjectSchema= new Schema({
  id:{
    type: String,
    required:true,
    unique:true,
  },
  name:{
    type: String,
    required:true,
  }
  
},{timestamps:true});

const Subject=mongoose.model('Subject',SubjectSchema);

module.exports=Subject;
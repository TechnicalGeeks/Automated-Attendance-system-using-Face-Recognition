const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const CourseSchema= new Schema({
  id:{
    type: String,
    required:true,
    unique:true,
    index:true
  },
  branch:{
    type: String,
    required:true,
  },
  year:{
    type: String,
    required:true,
  },
  division:{
    type: String,
    required:true,
  },
  Subject:[
    {
      type: String,
      required:true,
    }
  ]
  
},{timestamps:true});

const Course=mongoose.model('Course',CourseSchema);

module.exports=Course;
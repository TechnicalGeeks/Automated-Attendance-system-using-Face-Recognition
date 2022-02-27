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
  sem:{
    type: String,
    required:true,
  },
  division:{
    type: String,
    required:true,
  },
  subjects:[
    {
      type: String,
      required:true,
    }
  ],
  count:[
    {
      type: String,
      required:true,
      default:0
    }
  ]
  
},{timestamps:true});

const Course=mongoose.model('Course',CourseSchema);

module.exports=Course;
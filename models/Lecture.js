const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const LectureSchema= new Schema({
  subject:{
    type: String,
    required:true,
  },
  courseId:{
    type: String,
    required:true,
  },
  room:{
    type: String,
    required:true,
  }

},{timestamps:true});

const Lecture=mongoose.model('Lecture',LectureSchema);

module.exports=Lecture;
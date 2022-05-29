const Course= require('../models/Course');
const Lecture= require('../models/Lecture');
const Student= require('../models/Student');
const DailyAttendance=require('../models/DailyAttendance');
const mongoose=require('mongoose');

const get_lecture_create=(req,res)=>{
	res.render('Lecture/createLecture',{title:'Create Lecture'});
};

const post_lecture_create=(req,res)=>{
	console.log(req.body);
	let data=req.body;
	Course.find({branch:data.branch,year:data.year,sem:data.sem,division:data.div}).then((course)=>{
		course=course[0]
		console.log(course);
		console.log("##Course Id",course.id);
		data.courseId=course.id;
		['branch','year','sem','div'].forEach((key)=>delete data[key]);
		console.log("###No ID",data,course);
		let index=course.subjects.indexOf(data.subject);
		console.log(index);
		course.count[index]++;
		Course.updateOne({id:course.id},{$set:{subjects:course.subjects,count:course.count}}).then(()=>{
			console.log("Subject's Lecture Count Increased");
		});
		new Lecture(data).save().then((lecture)=>{
			console.log("Lecture",lecture);
			Student.find({courseId:course.id}).then((students)=>{
				console.log("Students",students);
				students.forEach((student)=>{
					new DailyAttendance({studentId:student.id,lectureId:mongoose.mongo.ObjectId(lecture.id)}).save().then(()=>{
						console.log("##Daily Attendance Created "+student.id+" "+lecture.id);
					});
				});
				// res.redirect(process.env.model+"/lecture/create");
				res.json({status:1,lecture:lecture.id})
			});
		})
	});
};

const get_lecture_all=async (req,res)=>{
	
	Lecture.find({}).then((result)=>{
		console.log(result);
		getCourseDetails(result).then((lectures)=>{
		console.log("##final",lectures);
		res.render('Lecture/allLectures',{title:'All Lectures',lectures:lectures});
		});
	});
};

const get_lecture_delete=(req,res)=>{
	let id=req.params.id;
	Lecture.findByIdAndDelete(id).then((result)=>{
		console.log(result);
		res.json({status:1});
	});
};

const post_lecture_update=(req,res)=>{
	console.log(req.body);
	let data=req.body;
	Course.find({branch:data.branch,year:data.year,sem:data.sem,div:data.div}).then((course)=>{
		Lecture.findByIdAndUpdate(data.id,{$set:{courseId:course[0].id,subject:data.subject,room:data.room}}).then((result)=>{
			console.log(result);
			res.json({status:1});
		});
	});
}

const getCourseDetails=async (lectures)=>{
	
	for (let i = 0; i < lectures.length; i++) {
		let course=await Course.find({id:lectures[i].courseId}).then((course)=>{return course});
		console.log("##"+i,course);
		course=course[0];
		lectures[i]['branch']=await course['branch'];
		lectures[i]['year']=await course.year;
		lectures[i]['sem']=await course.sem;
		lectures[i]['division']=await course.division;
		console.log("##for",lectures[i]);
	}
	console.log("##getCourseDetails",lectures);
	return lectures;
}

module.exports={
  get_lecture_create,
  post_lecture_create,
	get_lecture_all,
	get_lecture_delete,
	post_lecture_update
};
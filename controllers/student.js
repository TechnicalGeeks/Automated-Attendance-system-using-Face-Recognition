const Student= require('../models/Student');
const Course = require('../models/Course');
const Attendance=require('../models/Attendance');

const get_student_add=(req,res)=>{
	res.render("Student/addStudent",{title:"Add Student"});
};

const post_student_add=(req,res)=>{
	console.log(req.body);
	let data=req.body;
	Course.find({branch:data.branch,year:data.year,sem:data.sem,division:data.div}).then((course)=>{
		console.log(course);
		console.log("##COurse Id",course[0].id);
		data.courseId=course[0].id;
		['branch','year','sem','div'].forEach((key)=>delete data[key]);
		console.log("###No ID",data);
		getStudentId().then((studentId)=>{
			console.log(studentId);
			data.id=studentId;
			console.log("##Final Data",data);
			newStudent=new Student(data);
			newStudent.save().then((result)=>{
			console.log(result);
			new Attendance({
				studentId:result.id,
				courseId:result.courseId,
				subjects:[0,0,0,0,0]
			}).save().then((Attendance)=>{
				console.log("##Attendance",Attendance);
				res.json({status:1,student:result.id});
			})
			
		})
		.catch((err)=>{
			res.json({status:0,error:err})
		})
		})
		
	});
};

const get_student_all=(req,res)=>{
	Student.find().then((students)=>{
		console.log(students.length);
		res.render('Student/allStudents',{title:'Students',Students:students});
	});
};

const get_student_delete=(req,res)=>{
	let id=req.params.id;
	Student.findByIdAndDelete(id).then((result)=>{
			console.log(result,result1);
			res.redirect('/student/all');
		
	});
};

const post_student_update=(req,res)=>{
	let data=req.body;
	console.log(data);
	const branch={
		"CO":"cs",
		"IT":"it",
		"EC":"entc",
	}
	const newData={
		year:data.rollNo.slice(0,2),
		branch:branch[data.rollNo.slice(2,4)],
		division:data.rollNo[4],
	}
	console.log(newData);
	Course.find(newData).then((course)=>{
		console.log("##",course);
		const finalData={
			"fname":data.name.split(' ')[0],
			"mname":data.name.split(' ')[1],
			"lname":data.name.split(' ')[2],
			"courseId":course[0].id,
			"rollNo":data.rollNo
		}
		Student.findByIdAndUpdate(data.id,{$set:finalData}).then((result)=>{
			console.log(result);
			res.json({status:1});
		});
	});
}

const getStudentId=async ()=>{
	return Student.find().sort({createdAt:-1}).limit(1).then((lastStudent)=>{
		console.log("##lastStudent",lastStudent);
		let studentId= lastStudent[0]?parseInt(lastStudent[0].id)+1+"":"1";
		console.log("### getStudentID",studentId);
		return studentId;
	});	
};

module.exports={
  get_student_add,
  post_student_add,
	get_student_all,
	get_student_delete,
	post_student_update
};
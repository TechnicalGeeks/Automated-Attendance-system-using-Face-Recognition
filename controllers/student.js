const Student= require('../models/Student');
const Course = require('../models/Course');

const get_student_add=(req,res)=>{
	res.render("Student/addStudent",{title:"Add Student"});
};

const post_student_add=(req,res)=>{
	console.log(req.body);
	let data=req.body;
	Course.find({branch:data.branch,year:data.year,sem:data.sem,div:data.div}).then((course)=>{
		console.log(course);
		console.log("##COurse Id",course[0].id);
		data.courseId=course[0].id;
		['branch','year','sem','div'].forEach((key)=>delete data[key]);
		console.log("###No ID",data);
		getStudentId().then((studentId)=>{
			console.log(studentId);
			data.id=studentId;
			console.log("##FInal Data",data);
			newStudent=new Student(data);
			newStudent.save().then((result)=>{
			console.log(result);
			res.redirect("/student/add");
		});
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
		console.log(result);
		res.redirect('/student/all');
	});
};

const get_student_edit=(req,res)=>{
	console.log(req.params.id);
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
	get_student_edit
};
const Course = require('../models/Course');
const Subject = require("../models/Subject");

const get_course_add= (req, res) => {
	Subject.find().then((result) => {
		console.log(result.length);
		res.render("Course/addCourse", { title: "Add Course", subjects: result });
	});
};

const post_course_add=(req,res)=>{
	let data=req.body;
	console.log(data);
	addSubjects([data.sub1,data.sub2,data.sub3,data.sub4,data.sub5]).then((result)=>{
		console.log(result);
		data.subjects=result;
		console.log("###No ID",data);
		getCourseId().then((courseId)=>{
			console.log("###Course Id",courseId);
			data["id"]=courseId;
			data["count"]=[0,0,0,0,0];
			console.log(data);
			newCourse=new Course(data);
			newCourse.save().then((result)=>{
			console.log(result);
			res.redirect("/course/add");
		});
		})
		
	});
};

const get_course_all=(req,res)=>{
	Course.find().then((courses)=>{
		res.render('Course/allCourses',{title:'Course',courses:courses});
		});
};

const post_course_update=(req,res)=>{
	let data=req.body;
	let id=data.id;
	console.log("Update",data);
	delete data.id;
	Course.findByIdAndUpdate(id,data).then((result)=>{
		console.log(result);
		res.json({status:1});
	});
};

const get_course_delete=(req,res)=>{
	let id=req.params.id;
	Course.findByIdAndDelete(id).then((result)=>{
		console.log(result);
		res.redirect("/course/all");
	});
};

const addSubjects=async (subjects)=>{
	console.log(subjects);
	
	for (let i = 0; i < subjects.length; i++) { 
		if (subjects[i][0]==="#"){
			subjects[i]=subjects[i].substr(1,subjects[i].length);
		}
		else{
			let id= await Subject.findOne().sort({createdAt:-1}).then((lastSubject)=>{
				let id=1;
				if(lastSubject){
					id=parseInt(lastSubject.id)+1;
				}
				console.log(id);
				return id;
			});
			let newSubject=new Subject({id:id,name:subjects[i]});
			await newSubject.save().then((response)=>{
				console.log(response);
				// subjects[i]=id;
			});
		}
	};
	return subjects;
}

const getCourseId=async ()=>{
	return Course.find().sort({createdAt:-1}).limit(1).then((lastCourse)=>{
		console.log("##lastCourse",lastCourse);
		let courseId= lastCourse[0]?parseInt(lastCourse[0].id)+1+"":"1";
		console.log("### getCourseID",courseId);
		return courseId;
	});
	
};

module.exports={
  get_course_add,
  post_course_add,
  get_course_all,
  post_course_update,
  get_course_delete
};
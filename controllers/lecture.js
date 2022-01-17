const Course= require('../models/Course');
const Lecture= require('../models/Lecture');

const get_lecture_create=(req,res)=>{
	res.render('Lecture/createLecture',{title:'Create Lecture'});
};

const post_lecture_create=(req,res)=>{
	console.log(req.body);
	let data=req.body;
	Course.find({branch:data.branch,year:data.year,sem:data.sem,div:data.div}).then((course)=>{
		console.log(course);
		console.log("##Course Id",course[0].id);
		data.courseId=course[0].id;
		['branch','year','sem','div'].forEach((key)=>delete data[key]);
		console.log("###No ID",data);
		new Lecture(data).save().then((result)=>{
		console.log(result);
		res.redirect(process.env.model+"/lecture/create");
		})
	});
};

module.exports={
  get_lecture_create,
  post_lecture_create
};
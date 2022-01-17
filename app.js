const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// Routers
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");

// Data Model
const User = require("./models/User");
const Course = require("./models/Course");
const Subject = require("./models/Subject");
const Student = require("./models/Student");
const Lecture = require("./models/Lecture");
// Express App
const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const dbURL = process.env.dbURL;
mongoose
	.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log("Database connection successful");
		app.listen(process.env.PORT, process.env.HOST);
		console.log("Listening at port " + process.env.PORT);
	})
	.catch((err) => {
		console.error("Database connection error");
		console.log(err);
	});

//register view engine
app.set("view engine", "ejs");

// 3rd party middleware
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: true }));

// Static Files
app.use(express.static("public"));

// Routers
app.get("/", (req, res) => {
	res.redirect("/user")
});

app.use("/user", userRouter);

app.get("/home", (req, res) => {
	res.render("home", { title: "Home" });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

app.use('/course',courseRouter);

app.get("/addStudent",(req,res)=>{
	res.render("addStudent",{title:"Add Student"});
});

app.post("/addStudent",(req,res)=>{
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
			res.redirect("/addStudent");
		});
		})
		
	});
});

app.get('/createLecture',(req,res)=>{
	res.render('createLecture',{title:'Create Lecture'});
});

app.post('/createLecture',(req,res)=>{
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
		res.redirect(process.env.model+"/createLecture");
		})
	});
});



app.use((req, res) => {
	console.log("Page Not Found");
	res.render("404", { title: "Page Not Found" });
});



const getStudentId=async ()=>{
	return Student.find().sort({createdAt:-1}).limit(1).then((lastStudent)=>{
		console.log("##lastStudent",lastStudent);
		let studentId= lastStudent[0]?parseInt(lastStudent[0].id)+1+"":"1";
		console.log("### getStudentID",studentId);
		return studentId;
	});	
};
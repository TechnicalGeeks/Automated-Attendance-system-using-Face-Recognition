const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// Data Model
const User = require("./models/User");
const Course = require("./models/Course");
const Subject = require("./models/Subject");
const Student = require("./models/Student");
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
	res.render("index");
});

app.post("/", (req, res) => {
	console.log(req.body);
	let username = req.body.username;
	let password = req.body.password;
	let role = req.body.role;
	User.findOne({ username: username, password: password })
		.then((result) => {
			console.log(result);
			console.log(parseInt(result.role) <= parseInt(req.body.role));
			if (parseInt(result.role) <= parseInt(role)) {
				// console.log("hi");
				res.json({ status: 1, redirect: "/home", id: result.id });
				result.status = "1";
				result.save();
			} else {
				res.json({ status: 0, err: "Access Denied" });
			}
		})
		.catch((err) => {
			res.json({ status: 0, err: err });
		});
});

app.get("/home", (req, res) => {
	res.render("home", { title: "Home" });
});

app.post("/auth", (req, res) => {
	let username = req.body.username;
	let role = req.body.role;
	console.log("##1");
	console.log(username, role);
	if (role == "" || username == "") {
		console.log("##2");
		res.json({ status: 0 });
	}
	User.findOne({ username: username }).then((result) => {
		console.log("##3");
		if (result) {
			console.log("##4");
			if (result.status == "0") {
				console.log();
				res.json({ status: 0 });
			} else {
				if (parseInt(result.role) <= parseInt(role)) {
					res.json({ status: 1 });
				} else {
					res.json({ status: 0 });
				}
			}
		} else {
			res.json({ status: 0 });
		}
	});
});

app.get("/users", (req, res) => {
	User.find().then((result) => {
		res.render("users", { title: "Users", users: result });
	});
});

app.get("/users/delete/:id", (req, res) => {
	User.findByIdAndDelete(req.params.id).then((result) => {
		console.log(result);
		res.redirect("/users");
	});
});

app.post("/users/update", (req, res) => {
	let id = req.body.id;
	let role = req.body.role;
	console.log("##Update User", req.body);
	User.findByIdAndUpdate(id, { role: role })
		.then((result) => {
			console.log(result);
			res.json({ status: 1 });
		})
		.catch((err) => {
			console.log(err);
			res.json({ status: 0, error: err });
		});
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

app.get("/profile/:id", (req, res) => {
	console.log("Profile");
	let id = req.params.id;
	User.findById(id).then((result) => {
		res.render("myProfile", { user: result, title: "My Profile" });
	});
});

app.post("/profile/:id", (req, res) => {
	let userData = req.body;
	let id = req.params.id;
	console.log(userData);
	User.findByIdAndUpdate(id, userData)
		.then((result) => {
			console.log(result);
			res.json({ status: 1 });
		})
		.catch((err) => {
			res.json({ status: 0, error: err });
		});
});

app.get("/signOut/:id", (req, res) => {
	let id = req.params.id;
	User.findByIdAndUpdate(id, { status: 0 }).then((result) => {
		console.log("###SignOut" + result);
		res.redirect("/");
	});
});

app.get("/signUp", (req, res) => {
	res.render("signUp");
});

app.post("/signUp", (req, res) => {
	console.log("##1", req.body);
	let data = req.body;
	data["status"] = "0";
	newUser = new User(data);
	newUser
		.save()
		.then((result) => {
			console.log(result);
			res.redirect("/");
		})
		.catch((err) => {
			console.log(err);
		});
});

app.get("/addCourse", (req, res) => {
	Subject.find().then((result) => {
		console.log(result.length);
		res.render("addCourse", { title: "Add Course", subjects: result });
	});
});

app.post("/addCourse",(req,res)=>{
	let data=req.body;
	console.log(data);
	addSubjects([data.sub1,data.sub2,data.sub3,data.sub4,data.sub5]).then((result)=>{
		console.log(result);
		data.subjects=result;
		console.log("###No ID",data);
		getCourseId().then((courseId)=>{
			console.log("###Course Id",courseId);
			data["id"]=courseId;
			console.log(data);
			newCourse=new Course(data);
			newCourse.save().then((result)=>{
			console.log(result);
			res.redirect("/addCourse");
		});
		})
		
	});
});

app.get("/addStudent",(req,res)=>{
	res.render("addStudent",{title:"Add Student"});
});

app.post("/addStudent",(req,res)=>{
	console.log(req.body);
})

app.use((req, res) => {
	console.log("Page Not Found");
	res.render("404", { title: "Page Not Found" });
});

const addSubjects=async (subjects)=>{
	console.log(subjects);
	
	for (let i = 0; i < subjects.length; i++) { 
		if (subjects[i][0]==="z"){
			subjects[i]=await parseInt(subjects[i].substr(1,subjects[i].length));
		}
		else{
			let id= await Subject.findOne().sort({createdAt:-1}).then((lastSubject)=>{
				let id=1;
				if(lastSubject){
					id=parseInt(lastSubject.id)+1;
				}
				return id;
			});
			let newSubject=new Subject({id:id,name:subjects[i]});
			await newSubject.save().then((response)=>{
				console.log(response);
				subjects[i]=id;
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
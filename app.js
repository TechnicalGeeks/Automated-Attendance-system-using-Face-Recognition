const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
require("dotenv").config();

// Routers
const userRouter = require("./routes/user");
const courseRouter = require("./routes/course");
const studentRouter = require("./routes/student");
const lectureRouter = require("./routes/lecture");
const dailyAttendanceRouter = require("./routes/dailyAttendance");
const attendanceRouter = require("./routes/attendance");


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

app.get("/home", (req, res) => {
	res.render("home", { title: "Home" });
});

app.get("/about", (req, res) => {
	res.render("about", { title: "About" });
});

app.use("/user", userRouter);

app.use('/course',courseRouter);

app.use('/student',studentRouter);

app.use('/lecture',lectureRouter);

app.use('/dailyattendance',dailyAttendanceRouter);

app.use('/attendance',attendanceRouter)

app.get('/train',(req,res)=>{
	res.render('trainer',{title:'Train'});
})

app.use((req, res) => {
	console.log("Page Not Found");
	res.render("404", { title: "Page Not Found" });
});




const User=require('../models/User');

const get_user_signIn=(req,res)=>{
	res.render("User/signIn")
};

const post_user_signIn=(req, res) => {
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
};

const get_user_signOut=(req, res) => {
	let id = req.params.id;
	User.findByIdAndUpdate(id, { status: 0 }).then((result) => {
		console.log("###SignOut" + result);
		res.redirect("/");
	});
};

const get_user_signUp=(req, res) => {
	res.render("User/signUp");
};

const post_user_signUp=(req, res) => {
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
};

const post_user_auth=(req, res) => {
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
};

const get_user_all= (req, res) => {
	User.find().then((result) => {
		res.render("User/users", { title: "Users", users: result });
	});
};

const get_user_delete=(req, res) => {
	User.findByIdAndDelete(req.params.id).then((result) => {
		console.log(result);
		res.redirect("/all");
	});
};

const post_user_update_role=(req, res) => {
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
};

const get_user_profile=(req, res) => {
	console.log("Profile");
	let id = req.params.id;
	User.findById(id).then((result) => {
		res.render("User/myProfile", { user: result, title: "My Profile" });
	});
};

const post_user_profile_update= (req, res) => {
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
};

module.exports={
  get_user_signIn,
  post_user_signIn,
  get_user_signUp,
  post_user_signUp,
  get_user_signOut,
  post_user_auth,
  get_user_all,
  get_user_delete,
  post_user_update_role,
  get_user_profile,
  post_user_profile_update

};

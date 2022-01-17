function auth() {
	const username = localStorage.getItem("user");
	const role = localStorage.getItem("role");
	console.log(username, role);
	fetch("/user/auth", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({ username: username, role: role }),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			if (data.status == 0) {
				alert("Access Denied");
				window.location.replace("/");
			}
		});
}
function signIn() {
	const username = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const role = document.getElementById("role").value;
	fetch("/user", {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({
			username: username,
			password: password,
			role: role,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			console.log(data);
			if (data.err) {
				alert(data.err);
			}
			if (data.status == 1) {
				alert("Successfully Logged In");
				localStorage.setItem("user", username);
				localStorage.setItem("role", role);
				localStorage.setItem("id", data.id);
				localStorage.setItem("status", data.status);
				window.location.replace(data.redirect);
			}
		})
		.catch((err) => {
			console.log(err);
			alert("Something Went Wrong :( \n Try Again !!!");
		});
}

function profile() {
	let id = localStorage.getItem("id");
	fetch("/profile/" + id);
}

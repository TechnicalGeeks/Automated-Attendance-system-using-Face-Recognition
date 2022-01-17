function edit() {
	console.log("update");
	document.getElementById("name").disabled = false;
	document.getElementById("username").disabled = false;
	document.getElementById("email").disabled = false;
	document.getElementById("contact").disabled = false;
	document.getElementById("password").disabled = false;
	let editButtons = document.getElementById("editButtons");
	editButtons.innerHTML = "";
	let submitButton = document.createElement("a");
	submitButton.setAttribute(
		"class",
		"m-2 mt-6 text-white bg-blue-500 border-2 border-white py-2 px-5 focus:outline-none hover:bg-blue-600 rounded"
	);
	submitButton.setAttribute("onclick", "submit()");
	submitButton.innerText = "Submit";
	editButtons.appendChild(submitButton);
	let cancelButton = document.createElement("a");
	cancelButton.setAttribute(
		"class",
		"m-2 mt-6 text-black bg-white border-2 border-black py-2 px-5 focus:outline-none hover:bg-black hover:text-white rounded"
	);
	cancelButton.setAttribute("onclick", "cancel()");
	cancelButton.innerText = "Cancel";
	editButtons.appendChild(cancelButton);
}

function cancel() {
	console.log("update");
	document.getElementById("name").disabled = true;
	document.getElementById("username").disabled = true;
	document.getElementById("email").disabled = true;
	document.getElementById("contact").disabled = true;
	document.getElementById("password").disabled = true;
	document.getElementById("editButtons").innerHTML = "";
}
function submit() {
	let name = document.getElementById("name").value;
	let username = document.getElementById("username").value;
	let email = document.getElementById("email").value;
	let contact = document.getElementById("contact").value;
	let password = document.getElementById("password").value;
	let id = localStorage.getItem("id");
	fetch("/user/" + id, {
		method: "POST",
		headers: {
			"Content-Type": "application/json;charset=utf-8",
		},
		body: JSON.stringify({
			username: username,
			name: name,
			email: email,
			password: password,
			contact: contact,
		}),
	})
		.then((response) => response.json())
		.then((data) => {
			if (data.status == 0) {
				alert("Update Unsuccessful");
				console.log(data.error);
			}
			if (data.status == 1) {
				alert("Update Successful");
				cancel();
			}
		});
}

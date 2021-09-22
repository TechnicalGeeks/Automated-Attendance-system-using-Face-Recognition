
function auth(){
    const username = localStorage.getItem("user");
    const role = localStorage.getItem("role");
    console.log(username,role);
    fetch("/auth",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({username:username,role:role})
    }).then(response=>response.json())
    .then((data)=>{
        console.log(data);
        if(data.status==0){
            alert("Access Denied")
            window.location.replace("/");
        }
    });
}
function signIn(){
    const username = form.username.value;
    const password = form.password.value;
    const role= form.User.value;

    fetch("/",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({username:username,password:password,role:role})
    }).then(response=>response.json())
    .then((data)=>{
        console.log(data);
        if(data.err){
            alert(data.err)
        }
        if(data.status==1){
            alert("Successfully Logged In");
            localStorage.setItem('user',username);
            localStorage.setItem('role',role);
            localStorage.setItem('status',data.status)
            window.location.replace(data.redirect);
        }
        
    }).catch((err)=>{
        console.log(err);
        alert("Something Went Wrong :( \n Try Again !!!")
    })
}
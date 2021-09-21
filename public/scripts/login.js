function signIn(){
    const username = form.username.value;
    const password = form.password.value;
    const role= form.User.value;

    fetch("/",{
        method:'POST',
        headers:{
            'Content-Type': 'application/json;charset=utf-8'
        },
        body:JSON.stringify({data:{username:username,password:password,role:role}})
    }).then(response=>response.json())
    .then((data)=>{
        console.log(data);
        if(data.err){
            alert(data.err)
        }
        if(data.status==1){
            alert("Successfully Logged In");
        }
        
    }).catch((err)=>{
        console.log(err);
        alert("Something Went Wrong :( \n Try Again !!!")
    })
}
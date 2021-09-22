const express=require('express');
const mongoose=require('mongoose');
const morgan=require('morgan');
const bodyParser=require('body-parser');
require('dotenv').config();

// Data Model
const User=require('./models/User');


// Express App
const app=express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const dbURL= process.env.dbURL;
mongoose.connect(dbURL,{ useNewUrlParser: true , useUnifiedTopology: true })
    .then(() => {
        console.log('Database connection successful');
        app.listen(process.env.PORT,process.env.HOST);
        console.log('Listening at port '+process.env.PORT);
    })
    .catch(err => {
        console.error('Database connection error')
        console.log(err);
        
    });

//register view engine
app.set('view engine','ejs');

// 3rd party middleware
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));

// Static Files
app.use(express.static('public'));

// Routers
app.get('/',(req,res)=>{
    res.render('index');
});

app.post('/',(req,res)=>{
    console.log(req.body);
    let username=req.body.username;
    let password=req.body.password;
    let role=req.body.role;
    User.findOne({username:username,password:password}).then((result)=>{
        console.log(parseInt(result.role)>=parseInt(req.body.role));
        if(parseInt(result.role)>=parseInt(req.body.role)){
            // console.log("hi");
            res.json({status:1,redirect:"/home"});
            result.status="1";
            result.save();
        }else{
            res.json({status:0,err:"Access Denied"})
        }
    }).catch((err)=>{
        res.json({status:0,err:err})
    });    
});

app.get('/home',(req,res)=>{
    res.render('home')
});

app.post('/auth',(req,res)=>{
    let username=req.body.username;
    let role=req.body.role;
    console.log("##1");
    console.log(username,role);
    if(role=="" || username==""){
        console.log("##2");
        res.json({status:0});
    }
    User.findOne({username:username}).then((result)=>{
        console.log("##3");
        if(result){
            console.log("##4");
            if(result.status=="0"){
                console.log();
                res.json({status:0});
            }
            else{
                if(parseInt(result.role)>=parseInt(role)){
                    res.json({status:1});
                }
                else{
                    res.json({status:0});
                }
            }
        }
        else{
            res.json({status:0})
        }
    })
});

app.get('/signUp',(req,res)=>{
    res.render('signUp');
});

app.post('/signUp',(req,res)=>{
    console.log("##1",req.body);
    let data=req.body;
    data["status"]="0";
    newUser=new User(data);
    newUser.save().then((result)=>{
        console.log(result);
        res.render('home');
    }).catch((err)=>{
        console.log(err);
    });
});
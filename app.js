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
    let username=req.username;
    let password=req.password;
    let role=req.role;
    User.find({name:username,password:password}).then((result,err)=>{
        if(err){
            res.json({status:0,err:err})
        };
        if(result.role){
            res.json({status:1})
        }else{
            res.json({status:0,err:"Access Denied",result:result})
        }
    })
    
})
require("dotenv").config();
const express=require("express");
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const cors=require("cors");


const {OrdersModel}=require("./model/OrdersModel");

const {HoldingsModel} =require("./model/HoldingsModel");
const {PositionsModel}= require("./model/PositionsModel");

//authentication part
const flash = require('connect-flash');
const session = require('express-session');
const passport=require("passport");
const LocalStrategy=require("passport-local");
const User=require("./model/User.js")

const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;
const app=express();

app.use(cors());
app.use(bodyParser.json());

// Create session options BEFORE using them
const sessionOptions = {
  secret: 'yourSecretKey',
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000 // 1 day
  }
};

//authentication code
app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.get("/",(req,res)=>{
    res.send("backend is deployed");
})

app.get("/demouser", async (req,res)=>{
    let fakeUser=new User({
        username:"monkeshbhai",
        email:"monkesh@gmail.com",
    });
    let registerUser=await User.register(fakeUser,"helloworld");
    res.send(registerUser);

})


app.get("/allholdings",async (req,res)=>{
    const allHoldings=await HoldingsModel.find({});
    res.json(allHoldings);
});
app.get("/allpositions",async(req,res)=>{
    const allpositions=await PositionsModel.find({});
    res.json(allpositions);
});
app.post("/newOrder",async (req,res)=>{
    let newOrder=new OrdersModel({
    name:req.body.name,
    qty:req.body.qty,
    price:req.body.price,
    mode:req.body.mode,
    });
    newOrder.save();
    res.send("order saved!");
});

app.listen(PORT,()=>{
    console.log("server is up baby!");
    mongoose.connect(uri);
    console.log("DB is connected!")
})



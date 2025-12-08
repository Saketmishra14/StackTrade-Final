require("dotenv").config();
const express=require("express");
const mongoose=require('mongoose');
const bodyParser=require("body-parser");
const cors=require("cors");

//authentication
const cookieParser = require("cookie-parser");
const authRoute = require("./Routes/AuthRoute");

const {OrdersModel}=require("./model/OrdersModel");
const {HoldingsModel} =require("./model/HoldingsModel");
const {PositionsModel}= require("./model/PositionsModel");

const PORT=process.env.PORT||3002;
const uri=process.env.MONGO_URL;
const app=express();

// ✅ Middleware (from blog)
const corsOption={
    origin: ["https://stack-trade-final.vercel.app","https://stack-trade-final-y96z.vercel.app"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  };
  app.use(cors(corsOption));
  app.options("*", cors(corsOption)); // ✅ THIS FIXES THE ERROR
  

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());
app.use("/", authRoute);

app.get("/",(req,res)=>{
    res.send("backend is deployed");
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

mongoose
  .connect(uri)
  .then(() => {
    console.log("MongoDB is connected successfully");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(console.error);


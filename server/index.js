import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import itemRoutes from './routes/items.js';


const app = express();
app.use(express.json({limit: "30mb",extended:true}));
app.use(express.urlencoded());
app.use(cors());

var database;

mongoose.connect(
  "mongodb://localhost:27017/medicaldb",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error, result) => {
    // database = result.db('medicaldb')
    console.log("DB connected");
  }
);



//Creating Schema
const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  password: String,
});

const User = new mongoose.model("User", userSchema);

const recordSchema = new mongoose.Schema({
  nameofdisease: String,
  description: String,
  date: String,
  duration: String,
  hospital: String,
  prescription: String,
  anyeffects: String,
});

const Record = new mongoose.model("Record", recordSchema);

//Routes
app.get("/", (req, res) => {
  res.send("Hello");
});
app.use('/items',itemRoutes)



const profileSchema = new mongoose.Schema({
  name: String,
  dateofbirth: String,
  phone: String,
  doses: String,
        married: String,
        kids: String,
        kidsage: String,
        familyvaccinated: String,
        kidspolio: String,
        kidstetanus: String,
        kidschickenpox: String,
        kidstb: String,
      kidspneumonia: String,
});

const Profile = new mongoose.model("Profile", profileSchema);

app.get("/profile", async (req, res) => {
  const profiledata = await Profile.find();
  // res.send("profle")
  res.send(profiledata);
});

app.post("/updateprofile", (req, res) => {
  const { name, dateofbirth, phone, doses,married,
    kids,
    kidsage,
    familyvaccinated,
    kidspolio,
    kidstetanus,
    kidschickenpox,
    kidstb,
  kidspneumonia } = req.body;

  const profile = new Profile({
    name,
    dateofbirth,
    phone,
    doses,
    married,
    kids,
    kidsage,
    familyvaccinated,
    kidspolio,
    kidstetanus,
    kidschickenpox,
    kidstb,
  kidspneumonia,
  });
  profile.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Succesfully updated." });
    }
  });
});

// const itemSchema = mongoose.Schema({
//   title:String,
//   image:String
// },{ timestamps: true })
// const Item = mongoose.model('Item',itemSchema);

// app.get("/getItems", async (req, res) => {
//   const itemdata = await Item.find();
  
//   res.send(itemdata);
// });

// app.post("/createItem", (req, res) => {
//   const { title,image } = req.body;

//   const item = new Item({
//     title,image
//   });
//   item.save((err) => {
//     if (err) {
//       res.send(err);
//     } else {
//       res.send({ message: "Succesfully updated." });
//     }
//   });
// });

app.post("/addrecord", (req, res) => {
  const {
    nameofdisease,
    description,
    date,
    duration,
    hospital,
    prescription,
    anyeffects,
  } = req.body;

  const record = new Record({
    nameofdisease,
    description,
    date,
    duration,
    hospital,
    prescription,
    anyeffects,
  });
  record.save((err) => {
    if (err) {
      res.send(err);
    } else {
      res.send({ message: "Succesfully updated." });
    }
  });
});

app.get("/myrecord",async(req,res)=>{
    const recorddata = await Record.find()
    // res.send("myrecord")
    res.send(recorddata)
})

// app.get("/profile",(req,res)=>{
//     database.collection('')
// })
app.post("/login", (req, res) => {
  const { phone, password } = req.body;
  User.findOne({ phone: phone }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "Login Successfull", user: user });
      } else {
        res.send({ message: "Password didn't match" });
      }
    } else {
      res.send({ message: "User not registered" });
    }
  });
});

app.post("/register", (req, res) => {
  const { name, phone, password } = req.body;
  User.findOne({ phone: phone }, (err, user) => {
    if (user) {
      res.send({ message: "User already registerd" });
    } else {
      const user = new User({
        name,
        phone,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "Successfully Registered, Please login now." });
        }
      });
    }
  });
});
app.listen(5000, () => {
  console.log("app started at port 5000");
});

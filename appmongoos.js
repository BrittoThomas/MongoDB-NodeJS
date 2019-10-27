
const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/Peoples", {userNewUrlParser:true});
const peopleSchema = new mongoose.Schema({
  name:String,
  age:Number
});

const People = mongoose.model("People",peopleSchema);

const doctor = new People({
  name:"Dr. Abraham Jose",
  age:"41"
});

doctor.save();


//Fruits DB
//mongoose.connect("mongodb://localhost:27017/fruitsDB", {useNewUrlParser: true});

const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

const apple = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty Solid as fruit."
});

//fruit.save();


const banana = new Fruit({
  name: "Banana",
  rating: 6,
  review: "Healthy"
});

const kiwi = new Fruit({
  name: "Kiwi",
  rating: 8,
  review: "So Special."
});

const cherry = new Fruit({
  name: "Cherry",
  rating: 9,
  review: "Sweet and delcious"
});

// Fruit.insertMany([banana, kiwi, cherry], function(err){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Successfully saved all the fruits of FruitsDB");;
//   }
// });

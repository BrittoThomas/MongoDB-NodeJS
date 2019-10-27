const MongoClient = require("mongodb").MongoClient;
const assert = require("assert");

const url = "mongodb://localhost:27017";

const dbName = "fruitsDB";

const client = new MongoClient(url, {
  useNewUrlParser: true
});

client.connect(function(err) {
  assert.equal(null, err);
  console.log("Connected successfully to server");
  const db = client.db(dbName);
  // insertDocuments(db, function() {
  //   client.close();
  // });

  findDocuments(db,function(){
    client.close();
  });

});

const insertDocuments = function(db, callback) {

    const collection = db.collection("fruits");

    // Insert some document
    collection.insertMany([
        {
          name: "Apple",
          score: 8,
          review: "Great fruit"
        },
        {
          name: "Orange",
          score: 6,
          review: "Kinda sour"
        },
        {
          name: "Banana",
          score: 9,
          review: "Good one"
        }
      ],
      function(err, result) {
        assert.equal(null, err);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
      });
  };

  const findDocuments = function(db, callback) {

      const collection = db.collection("fruits");

      // Insert some document
      collection.find({}).toArray(function(err, fruits){
        assert.equal(err,null);
        console.log("Found the following records");
        console.log(fruits);
        callback(fruits);
      });
  };

# MongoDB With Node.JS


# Installation & CLI

1. install mongodb

2. Download MongoDB for server - Unzip

3. Move Location

      sudo mv '/Users/../Downloads/monogodb-osx-x86_64-4.0.3' /usr/local/mongodb

4. Create Bash Profile File For Running MongoDB in Terminal

      open /usr/local/mongodb

      cd ~

      pwd

      touch .bash_profile

      ls -a

      open .

5. Use VIM to edit .bash_profile file

      vim .bash_profile
      <Press i key>
      export PATH=$PATH:/usr/local/mongodb/bin
      <escape key>
      :wq!

6. Create DB Folder

      mkdir -p /data/db

      open /data/db

      whoami
	       <username>

      sudo chown <username> /data/db

7. Quit Terminal and reopen to get installed mongo db accesible on the terminal


      mongo --version


8. Start MongoDB Server

      mongod
	       db ready and starts listening on port 27017

9. Running Mongo Commands - Open new tab of terminal

      mongo

	       <This open mongo shell>
         > help
         > show dbs
         > use shopDB
         > db
	           shopDB

# CRUD & Relationships

10. MongoDB CRUD Operations

        db.products.insertOne({_id:1, name:"Pen", price:1.20})

        show collections

        db.products.find()

        db.products.find({_id:1},{name:1})

        db.products.find({_id:1},{name: 1, _id: 0})

        db.products.updateOne({_id:1}, {$set:{stock:32}})

        db.products.deleteOne({_id:2})


11. MongoDB - Relationship


        db.products.insert( {  
          _id:3,
          name:"Rubber",
          price:1.30,
          stock:43,
          reviews:[  
                    {  
                      authorName:"Sally",
                      rating:5,
                      review:"Best rubber ever!"
                    },
                    {  
                      authorName:"John",
                      rating:5,
                      review:"Awesome rubber!"
                    }
                    ]
          })

        db.products.updateOne(
           {  
              _id:1
           },
           {  
              $set:{  
                 reviews:[  
                    {  
                       authorName:"Raj",
                       rating:4,
                       review:"Good one"
                    },
                    {  
                       authorName:"Yu",
                       rating:3,
                       review:"Not bad"
                    }
                 ]
              }
           })


# Native Mongo Node.JS Driver

12. MongoDB with Node.JS - NativeDriver

    MongoDB driver > Node JS Driver > Quick Start

        cd Desktop/
        mkdir Fruits
        cd Fruits/
        touch app.js
        npm init -y   		
          <y flag to install npm with default setting - Yes to every thing>
        npm i mongodb
        Atom .


13. Quit MongoDB Seerver
    Ctrl+C

14. If failed to close before quiting instance of terminal. It will prevent you to start another MonogDB Server. So yo unee dto Kill existing server

    //Kill Old MongoDB install

        sudo lsof -iTCP -sTCP:LISTEN -n -P
        sudo kill <PID>



15. DELETE Old DB

        show dbs
          ..
          fruitsDB  0.000GB
          ..
        use fruitsDB
          switched to db fruitsDB
        db.dropDatabase()
          { "dropped" : "fruitsDB", "ok" : 1 }
        show dbs
          ...

# Mongoose Package
16. Data Validation in Mongoose - Validations need to be described in Schema

    Example

        const fruitSchema = new mongoose.Schema({
                name: {
                        type: String,
                        required: true
                      },
                rating: {
                          type: Number,
                          min: 0,
                          max: 10
                        },
                review: String
        });

17. Update a Data
    3 paramaters -

    1. Condition
    2. Update Parameter and Value
    3. Callback

      Example
        Fruit.updateOne({_id:"5db5a04c93ebef3045124a4f"}, {rating:4}, function(err){
          console.log("SucccessFully Updated the record.")
        });

18. Delete a Data
    2 paramaters -

    1. Condition
    2. Callback

        Example
          Fruit.deleteOne({_id:"5db5a04c93ebef3045124a4f"}, function(err){
            if (err) {
              console.log(err);
            }else{
              console.log("Succcessfully deleted the record.");
            }
          });

19. Delete Many Data
    2 paramaters -

    1. Condition
    2. Callback

          Example
            Fruit.deleteMany({name:"Dr. Abraham Jose"}, function(err){
              if (err) {
                console.log(err);
              }else{
                console.log("Succcessfully deleted the all record with name Dr. Abraham Jose.");
              }
            });

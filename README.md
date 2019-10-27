# MongoDB - Driver with Node.JS

install mongodb

Download MongoDB for server - Unzip

sudo mv '/Users/../Downloads/monogodb-osx-x86_64-4.0.3' /usr/local/mongodb

open /usr/local/mongodb

cd ~

pwd

touch .bash_profile

ls -a

open .

vim .bash_profile
<i key>
export PATH=$PATH:/usr/local/mongodb/bin
<escape key>
:wq!

mkdir -p /data/db

open /data/db

whoami
	<username>

sudo chown <username> /data/db

Quit Terminal and reopen to get installed mongo db accesible on the terminal


mongo --version


Using

mongod
	db ready and starts listening on port 27017

<Open new tab>
mongo
	This open mongo shell
> help
> show dbs
> use shopDB
> db
	shopDB

MongoDB CRUD Operations

db.products.insertOne({_id:1, name:"Pen", price:1.20})

show collections

db.products.find()

db.products.find({_id:1},{name:1})

db.products.find({_id:1},{name: 1, _id: 0})

db.products.updateOne({_id:1}, {$set:{stock:32}})

db.products.deleteOne({_id:2})


Relationship


db.products.insert(
{  
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


MongoDB with Node.JS
NativeDriver

MongoDB driver > Node JS Driver > Quick Start

cd Desktop/
mkdir Fruits
cd Fruits/
touch app.js
npm init -y   		<y flag to install npm with default setting - Yes to every thing>
npm i mongodb
Atom .



//Kill Old MongoDB install
apples-Mac-mini-2:~ apple$ sudo lsof -iTCP -sTCP:LISTEN -n -P
apples-Mac-mini-2:~ apple$ sudo kill <PID>

#Do not excute this script it wont work, just excute commands step by step

#Build the stack
docker-compose up

#On another terminal run bash cli on the database server
docker exec -it rsalvan_mongodb bash

#On the bash open the mondoDB shell
mongo

#Run those commands on the mongo shell
#Create or use database 'test'
#use test

#Create new collection 'users'
#db.createCollection('users')

#Insert one line in users
#db.users.insertOne({username: 'dpanzoli', admin: true})

#Insert few line in users
#db.users.insertMany([{username: 'ngarric'}, {username: 'fpouit'}])

#Show existing databases
#show dbs

#Show every object in users
#db.users.find({})

#Show users that aren't admin
#db.users.find({admin: {$exists: false}})

#Close the mong shell

#To execute on machine
docker run -it -v db_volume:/data alpine

#To execute on the db_volume
cd data
ls


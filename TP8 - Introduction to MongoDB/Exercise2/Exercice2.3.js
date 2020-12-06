use test

db.createCollection('users')

db
db.users.insertOne({username: 'dpanzoli', admin: true})
db.users.insertMany([{username: 'ngarric'}, {username: 'fpouit'}])
show dbs
db.users.find({})
db.users.find({admin: {$exists: false}})
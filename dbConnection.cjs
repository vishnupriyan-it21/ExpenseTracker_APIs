const {MongoClient} = require('mongodb')

let dbConnection
function connectToDb(callBack) {
    MongoClient.connect('mongodb+srv://vishnu:vishnu@cluster0.0ki24y7.mongodb.net/?retryWrites=true&w=majority').then(function(client) {
        dbConnection = client.db()
        callBack()
    }).catch(function(error) {
        callBack(error)
    })
}

function getDb() {
    return dbConnection
}

// Exporting required functions
module.exports = {connectToDb, getDb}
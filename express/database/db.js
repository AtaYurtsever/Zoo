const {Client} = require('pg')

var client = null 
exports.getClient =  function getClient(){
    if(client) return client;
    client = new Client({
        user: "zoo_lover_99",
        host: "localhost",
        database: "zoo",
        password: "123456",
        port: "5432"
    })
    client.connect()
    return client
}
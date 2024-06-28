const {Client} = require('pg')
const client = new Client({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"9818",
    database:"postgres"
})
module.exports = client


const express = require('express')
const app = express()

const accountSid = 'ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'your_auth_token';
const client = require('twilio')(accountSid, authToken);


app.get('/', (req, res) => {
    res.send("Hola")
})

app.listen(3000, () => console.log("Start server"))
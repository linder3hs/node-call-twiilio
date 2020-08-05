
const express = require('express')
const app = express()

const accountSid = 'AC193846e53eb15555a77e162a1f8fa611';
const authToken = '477ea05cd354ef4289c25d772fa120cb';
const client = require('twilio')(accountSid, authToken);


app.get('/', () => {
    client.calls.create({
        url: 'https://firebasestorage.googleapis.com/v0/b/recognizedios.appspot.com/o/voice.xml?alt=media&token=5422d01c-2a3c-4230-b9c3-1badbbdf3d55',
        to: '+51972116793',
        from: '+12056277889'
    })
    .then(call => console.log(call.sid))
    .catch(err => console.log(err.toString()))
})

app.listen(3000, () => console.log("Start server"))
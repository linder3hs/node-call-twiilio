
const express = require('express')
const app = express()

const accountSid = 'AC193846e53eb15555a77e162a1f8fa611';
const authToken = '477ea05cd354ef4289c25d772fa120cb';
const client = require('twilio')(accountSid, authToken);


app.get('/', (req, res) => {
    client.calls
      .create({
         url: 'http://demo.twilio.com/docs/voice.xml',
         to: '+14155551212',
         from: '+15017122661'
       })
      .then(call => console.log(call.sid));
})

app.listen(3000, () => console.log("Start server"))
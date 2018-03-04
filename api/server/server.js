const express = require('express');
const bodyParser = require('body-parser')
const app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const MongoClient = require('mongodb').MongoClient

const PORT = 3001

const jsonParser = bodyParser.json()

MongoClient.connect('mongodb://localhost:27017', (err, client) => {
    if(err) {
        return console.log(err)
    }

    const db = client.db('docu')

    app.post('/notes', jsonParser, (req, res) => {
        db.collection('notes').insertOne(req.body, (err, db) => {
            if (err) {
                res.send('Error')
            }

            res.send(req.body)
        })
    })

    app.get('/notes', (req, res) => {
        db.collection('notes').find({}).toArray((err, db) => {
            if (err) {
                res.send('Error')
            }
            res.send(db)
        })
    })
})



app.listen(PORT, () => console.log('Example app listening on port', PORT))

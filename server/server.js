const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const createRouter = require('./helpers/createRouter.js')

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
  const db = client.db('qfashionDatabase')
  const storeCollection = db.collection('store')
  const storeRouter = createRouter(storeCollection)
  app.use('/store', storeRouter)
})

app.listen(3000, function(){
  console.log(`This app is listening on ${this.address().port}`);
})
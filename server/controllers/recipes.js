const MongoClient = require('mongodb').MongoClient;
const connection = 'mongodb://localhost:27017/MyLittleCheffy';
const collection = 'Recipes';

exports.getRecipes = function(req, res, next) {
  MongoClient.connect(connection, (err, database) => {
    if (err) {
        res.status(500).send({ error: 'Error connecting to data source' });
    }

    database.collection(collection).find().toArray((err, recipes) => {
      if (err) {
        res.status(500).send({ error: 'Could not find collection' });
      }

        res.json({ recipes });
    });
  });
}
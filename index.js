/*
 * Requires the MongoDB Node.js Driver
 * https://mongodb.github.io/node-mongodb-native
 */
const agg = [
    {
      '$match': {}
    }, {
      '$limit': 20
    }
  ];

/*const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://<username>:<password>@endpointpoc-pl-0.hmigw.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
    const coll = client.db('sample_airbnb').collection('listingsAndReviews');
    coll.aggregate(agg, (cmdErr, result) => {
        console.log(JSON.stringify(result))
      assert.equal(null, cmdErr);
    });
  // perform actions on the collection object
  client.close();
});*/

const { MongoClient } = require("mongodb");

// Connection URI
const uri =
  "mongodb+srv://test2345:test2345@endpointpoc-pl-0.hmigw.mongodb.net/?retryWrites=true&w=majority";

// Create a new MongoClient
const client = new MongoClient(uri);

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    // Establish and verify connection
    const findResult = await client.db('sample_airbnb').collection('listingsAndReviews').find().limit(2);
    await findResult.forEach(console.dir);
  } finally {
    console.log("Connected successfully to server");
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

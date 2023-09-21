const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://bewili3391:OgM6IQRPsNKV9pwq@cluster0.paoolqy.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);




// const {MongoClient} = require("mongodb")

// const uri = "mongodb+srv://bewili3391:OgM6IQRPsNKV9pwq@cluster0.paoolqy.mongodb.net/admin?authSource=admin&replicaSet=atlas-pd8plk-shard-0&readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=true"

// const client = new MongoClient(uri, { useNewUrlParser: true })

// async function connect() {
//     try {
//         await client.connect({ useNewUrlParser: true });
//         const db = client.db("wireshark");
//         console.log(`Connected to database ${db.databaseName}`)
        
//         const information = db.collection("information");

//         const options = { ordered: true }

//         const insertCursor = await information.insertMany([
//             {
//                 "name": "Sandeep",
//                 "ssn": 1
//             },
//             {
//                 "name": "Anna",
//                 "ssn": 2
//             }
//         ], options)

//         console.log(insertCursor.insertedCount)
//     }
//     catch (ex){
//         console.error(`Something bad happend ${ex}`)
//     }
//     finally {
//         client.close();
//     }

// }
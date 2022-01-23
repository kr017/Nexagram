import { MongoClient } from "mongodb";

// POST api/new-post
async function handler(req, res) {
  //   console.log("inside api");
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb://localhost:27017/next-js"
    );
    const db = client.db();
    const postsCollection = db.collection("post");
    const result = await postsCollection.insertOne(data);
    client.close();
    res.status(201).json({
      msg: "Insert successful",
    });
  }
}

export default handler;

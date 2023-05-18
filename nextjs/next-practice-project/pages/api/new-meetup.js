// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
  if (req.method === "POST") {
    try {
      const data = req.body;
      // const { title, image, address, description } = data;
      const client = await MongoClient.connect(
        "mongodb+srv://pritrojivadiya:a5Ws8SYWwQerk4io@cluster0.dg72ynp.mongodb.net/meetups?retryWrites=true&w=majority"
      );
      const db = client.db();

      const meetupsCollection = db.collection("meetups");
      console.log(meetupsCollection);
      const result = await meetupsCollection.insertOne(JSON.parse(data));
      console.log(result);
      client.close();
      res.status(201).json({ message: "Meetup inserted" });
    } catch (error) {
      console.log(error);
    }
  }
}

export default handler;

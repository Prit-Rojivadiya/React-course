import { MongoClient, ObjectId } from "mongodb";

import MeetupDetail from "@/components/meetups/MeetupDetail";

function MeetupDetails(props) {
  return (
    <>
      <MeetupDetail
        title={props.meetupData.title}
        image={props.meetupData.image}
        address={props.meetupData.address}
        description={props.meetupData.description}
        id={props.meetupData.id}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://pritrojivadiya:a5Ws8SYWwQerk4io@cluster0.dg72ynp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    // fallback false means we have defined all possible paths
    // fallback true means we have not defined all possible paths. We do not need to render pre generated static data
    paths: meetups.map((meetup) => ({
      params: { meetupId: meetup._id.toString() },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data for a single meetup
  const meetupId = context.params.meetupId;
  const client = await MongoClient.connect(
    "mongodb+srv://pritrojivadiya:a5Ws8SYWwQerk4io@cluster0.dg72ynp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);
  const meetup = await meetupsCollection.findOne({
    _id: new ObjectId(meetupId),
  });
  console.log(meetup);
  client.close();
  console.log(meetupId);
  return {
    props: {
      meetupData: {
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        description: meetup.description,
        id: meetup._id.toString(),
      },
    },
  };
}

export default MeetupDetails;

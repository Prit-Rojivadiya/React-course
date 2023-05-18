import Head from "next/head";
import { MongoClient } from "mongodb";
import Layout from "@/components/layout/Layout";
import MeetupList from "@/components/meetups/MeetupList";
// import { useEffect, useState } from "react";

function HomePage(props) {
  // const [loadedMeetups, setLoadedMeets] = useState([]);
  // useEffect(() => {
  //   setLoadedMeets(DUMMY_MEETUPS);
  // }, []);

  return (
    <>
      <Head>
        <title>React meetups</title>
        <meta
          name="description"
          content="Browse a huge list of highly active React meetups"
          // for dynamic content use content = {...}
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
}

// server side rendering
// this function runs at every requests so no need to revalidate

// export async function getServerSideProps(context) {
//   // has access of request and response object
//   const req = context.req;
//   const res = context.res;

//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// below function gets data when app build and use it when home page renders

export async function getStaticProps() {
  // fetch data from an api

  const client = await MongoClient.connect(
    "mongodb+srv://pritrojivadiya:a5Ws8SYWwQerk4io@cluster0.dg72ynp.mongodb.net/meetups?retryWrites=true&w=majority"
  );
  const db = client.db();

  const meetupsCollection = db.collection("meetups");
  console.log(meetupsCollection);
  const meetups = await meetupsCollection.find().toArray();
  client.close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}

export default HomePage;

import EventItem from "../components/EventItem";
import {
  json,
  redirect,
  useLoaderData,
  useParams,
  useRouteLoaderData,
} from "react-router-dom";

function EventDetailPage() {
  //   const params = useParams();
  //   const data = useLoaderData();

  // to use common loader across multipe child routes use `useRouteLoaderData` which takes id as parameter
  const data = useRouteLoaderData("event-datail");
  const event = data.event;
  return (
    <>
      <EventItem event={event} />
    </>
  );
}
export default EventDetailPage;

export async function loader({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch(`http://localhost:8080/events/${eventId}`);
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected event" },
      { status: 500 }
    );
  }
  return response;
}

export async function action({ request, params }) {
  const eventId = params.eventId;
  const response = await fetch("http://localhost:8080/events/" + eventId, {
    method: request.method,
    // method: "DELETE",
  });
  if (!response.ok) {
    throw json({ message: "Could not delete event" }, { status: 500 });
  }
  return redirect("/events");
}

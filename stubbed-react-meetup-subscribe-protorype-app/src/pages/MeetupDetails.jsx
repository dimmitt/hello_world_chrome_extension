import React from 'react';
import { meetups } from '../data';
import '../powderbluelook.css';

const MeetupDetails = () => {
  const meetup = meetups[0];
  const {
    created, description,duration,group,
    id,link,local_date,local_time,name,status,
    time,updated, utc_offset, 
    venue, visibility, 
    waitlist_count, yes_rsvp_count 
  } = meetup;
  // const {id, venue.name, venue.lat, venue.lon, venue.repinned} = venue;
  // const { created, name, id, join_mode, lat } = group;
  return <div>
      <br/>{ name}
      <br/>description:
      <br/><div style={{border: 'solid black 1px', display: 'inline-block', whiteSpace: 'pre-line', padding: '.5rem', margin: '.5rem'}}>{ description.replace(/<\/?[^>]+(>|$)/g, "")}</div>
      <br/>{ duration}
      { created}
      {/* <br/>{ group.created}
      <br/>{ group.name}
      <br/>{ group.id}
      <br/>{ group.join_mode}
      <br/>{ group.lat} */}
      <br/>id: { id}
      <br/>{ link}
      <br/>{ local_date}
      <br/>{ local_time}
      <br/>{ status}
      <br/>{ JSON.stringify(time)}
      <br/>{ updated}
      <br/>{ utc_offset}
      {/* <br/>{ venue.id}
      <br/>{ venue.name}
      <br/>{ venue.lat}
      <br/>{ venue.lon}
      <br/>{ venue.repinned} */}
      <br/>{ visibility}
      {/* <br/>{ waitlist_count}
      <br/>{ yes_rsvp_count} */}
  </div>
}
export const Component = MeetupDetails
export default MeetupDetails

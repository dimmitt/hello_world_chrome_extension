console.log('hello')
const headers = {
  "accept": "*/*",
  "accept-language": "en-US",
  "apollographql-client-name": "nextjs-web",
  "cache-control": "no-cache",
  "content-type": "application/json",
  "pragma": "no-cache",
  "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"macOS\"",
  "sec-fetch-dest": "empty",
  "sec-fetch-mode": "cors",
  "sec-fetch-site": "same-origin",
  "x-meetup-view-id": "ce9d9df1-ca78-40a6-9989-5c332f64cabf"
}
const cors = {
  "referrer": "https://www.meetup.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
}
const rsvpToMeetup = (decision=true, eventId="296377189", eventUrl="jax-code-and-coffee") => {
  console.log('reached')
  const action = decision ? "YES" : "NO";
  fetch("https://www.meetup.com/gql2", {
    headers,
    "referrer": `https://www.meetup.com/${eventUrl}/events/${eventId}/`,
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify({
      "operationName": "rsvpToEvent",
      "variables":{
        "input":{
          eventId,
          "response": action,
          "proEmailShareOptin":false,
          "guestsCount":0,
          "venueId":"27483804"
        }
      },
      "extensions":{
        "persistedQuery":{
          "version":1,
          "sha256Hash":"a503eca5efa7aa3924f5397b743f53304da7b2fcf393c105ca466f8b31f6cbd3"
        }
      }
    }),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
  .then(res => console.log("Request 3 succeeded"))
  .catch(res => console.log("Request 3 failed"));
  console.log('fin')
}


const getMeetups = (endCursor = '', count = 0) => {
  let variables;
  if (endCursor) {
    variables = { 
      "urlname": "jax-code-and-coffee",
      "after": endCursor
    }
  } else {
    variables =  { 
      "urlname": "jax-code-and-coffee"
    }
  }
  
  fetch("https://www.meetup.com/gql2", {
    headers,
    "referrer": "https://www.meetup.com/jax-code-and-coffee/events/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": JSON.stringify({
      "operationName": "getUpcomingGroupEvents",
        variables,
        "extensions":{
          "persistedQuery":{
            "version":1,
            "sha256Hash": "68fc2b5c7f53b5a810cb732718beb15d96695a483c07579cf902aa7e607d0fe6"
          }
        }
    }),
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
  .then(res => res.json())
  .then(res => {
    const eventIds = res.data.groupByUrlname.events.edges.map(event => event.node.id)
    const endCursor = res.data.groupByUrlname.events.pageInfo.endCursor
    const len = eventIds.length;
    console.log('Request 2 succeeded', {
      eventIds,
      len,
      endCursor,
      events: res.data.groupByUrlname.events
    })
    // if(len === 10 && count < 10) {
    //   getMeetups(endCursor, count+1)
    // }
  })
  .catch(res => console.log("Request 2 failed"));
  // how many events do you want to rsvp out to?
  // (default 10)
}

const getEvent = () => {
  fetch("https://api.meetup.com/gql", {
    headers,
    "body": JSON.stringify({
      query: `query($eventId: ID) {
        event(id: $eventId) {
          title
          description
          dateTime
        }
      }`,
      variables: {
        eventId: 296153162
      }
    }),
    "referrer": "https://www.meetup.com/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "method": "POST",
    "mode": "cors",
    "credentials": "include"
  })
  .then(res => res.json())
  .then(res => console.log('Request 1 succeeded', res.data))
  .catch(res => console.log("Request 1 failed"));
}
rsvpToMeetup(false);
getMeetups();
getEvent();

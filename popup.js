console.log('hello')
fetch("https://api.meetup.com/gql", {
  "headers": {
    "accept": "application/json",
    "accept-language": "en-US,en;q=0.9,ja;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\"Google Chrome\";v=\"117\", \"Not;A=Brand\";v=\"8\", \"Chromium\";v=\"117\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"macOS\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-site"
  },
  "referrer": "https://www.meetup.com/",
  "referrerPolicy": "strict-origin-when-cross-origin",
  "body": "{\"query\":\"\\n  query($eventId: ID) {\\n    event(id: $eventId) {\\n      title\\n      description\\n      dateTime\\n    }\\n  }\\n  \",\"variables\":{\"eventId\":\"296153162\"}}",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
})

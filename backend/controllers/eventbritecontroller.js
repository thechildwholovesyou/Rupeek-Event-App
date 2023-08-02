const axios = require("axios");

let getOrganizations = async (token) => {
  try {
    const url = "https://www.eventbriteapi.com/v3/users/me/organizations/";
    let response = await axios.get(url, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (e) {
    throw new Error("Error fetching organizations from Eventbrite API");
  }
};

let getEventById = async (eventId) => {
  try {
    let response=await axios.get(`https://www.eventbriteapi.com/v3/organizations/1675158385523/events/?token=62ZM4GML7DLAIG2YTKOR`)
    // const url = `https://www.eventbriteapi.com/v3/events/${eventId}/?token=${process.env.API_TOKEN}`;
    // let response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw new Error("Error fetching event from Eventbrite API");
  }
};

module.exports = {
  getOrganizations,
  getEventById,
};

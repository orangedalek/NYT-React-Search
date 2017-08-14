// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

var nytAPI = "ff2e0877f9ee43e5839c0cec2434a562";

// Helper functions for making API Calls
var helper = {

  
  runQuery: function(location) {

    console.log(location);

    // Figure out the geolocation
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json" + nytAPI;
    return axios.get(queryURL).then(function(response) {
      // If get get a result, return that result's formatted address property
      if (response.data.results[0]) {
        return response.data.results[0].formatted;
      }
      // If we don't get any results, return an empty string
      return "";
    });
  },


};

// We export the API helper
module.exports = helper;

//var tokens  = require('../config/tokens');
//var util    = require('util');
//var OAuth   =  require('oauth').OAuth;
var http    = require('http');

exports.getTumblrPosts = function(request, response){
  askServerForPosts(response);
};

exports.addTumblrPost = function(request, response){
  //to do using oauth
};

var askServerForPosts = function(localServerResponse){
  var thePosts = "";
  var request = http.get(
      { 
        hostname: 'wisechicken.tumblr.com',
        path: '/api/read/json',
        num: 50
      }, function(response){
      //collect the stream of data in chunks
      response.on('data', function (chunk){
          thePosts += chunk;
      });
      //once we get all the data send the response
      response.on('end', function(data){
        localServerResponse.end(thePosts);
      })
      }); 
  //console.log("The Posts Contain: " +thePosts);
};

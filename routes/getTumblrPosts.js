var tokens = require('../config/tokens')

exports.getTumblrPosts = function(request, response){
  var tumblrBlog =("Christen")
  var tumblrData = askServerForPost(tumblrBlog)
  response.send(JSON.stringify(tumblrData));
};

var askServerForPost = function(id){
  console.log(tokens);
  return "key: " + tokens.key + " secret " + tokens.secret;
}

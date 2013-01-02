
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};

exports.getTumblrPosts = function(request, response){
  var tumblrBlog =("Christen")
  var tumblrData = askServerForPost(tumblrBlog)
  response.send(JSON.stringify(tumblrData));
};

var askServerForPost = function(id){
  return "Here is the data";
}
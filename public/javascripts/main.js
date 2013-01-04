$(document).ready(function(){

$.ajax("/getTumblrPosts", {
  type: "GET",
  success: function (data){
    var imageURLs = [];
    data = data.slice(data.indexOf('{'), data.length -2 );
    var results = JSON.parse(data);
    for(var i = 0; i < results.posts.length; i++){
      if(results.posts[i].type === "photo"){

        if(results.posts[i].photos.length === 0){
           imageURLs.push({
            small : results.posts[i]["photo-url-250"],
            big : results.posts[i]["photo-url-1280"]})
        }  
        for(var k = 0; k < results.posts[i].photos.length; k ++){  
          imageURLs.push({
            small : results.posts[i].photos[k]["photo-url-250"],
            big : results.posts[i].photos[k]["photo-url-1280"]})
        }
      }
    }
    displayPhotos(imageURLs);
  }


})

});

var displayPhotos = function(imageURLsArray)
{
  for(var i = 0; i < imageURLsArray.length; i ++)
  {
    $("body").append("<a href='" + imageURLsArray[i].big + "'>" +
                        "<img src='" + imageURLsArray[i].small + "'/>" +
                      "</a>")
  }

};
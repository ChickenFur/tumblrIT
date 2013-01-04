$(document).ready(function(){

$.ajax("/getTumblrPosts", {
  type: "GET",
  success: function (data){
    var imageURLs = [];
    var results = $(data).find("photo-url").text();


    
    while(results.indexOf(".jpg") > 0){
      imageURLs.push (results.slice(0,  (results.indexOf(".jpg") + 4 ) ) );
      results = (results.slice(results.indexOf(".jpg") + 4 ));
    }
    displayPhotos(imageURLs);

    
  }


})

});

var displayPhotos = function(imageURLsArray)
{
  for(var i = 0; i < imageURLsArray.length; i ++)
  {
    $("body").append("<img src='" + imageURLsArray[i] + "'/>")
  }

};
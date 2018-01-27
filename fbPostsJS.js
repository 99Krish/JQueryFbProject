$(document).ready(function(){
  var ms;
  var date;
  var myFacebookToken = 'EAACEdEose0cBAPJeT9SLnYBYXAFH9UuT5XJcAr2nRZAIIoiZCoqxPTKKOOqaFEtZA580nJV7Lw3YhiBZBKZACIPJFz9VcnwNOvZB3TXw8124Vp91eUvMLyaBaTEwY2LssyZBxZCiepdVUKSftNCfzneWJVIqMdPgF15VDQCBAnNop4C2dxFTVq9pJ0spY6fhvXwZD'; 
  var url='https://graph.facebook.com/me/?fields=name,posts.limit(10)&access_token='+myFacebookToken;
  var getFacebookPostsInfo = function()
   {
		 $.ajax(url,{
				success : function(response)
					{
						 $("#facebookfeed").html("");
						
						for (var i = 0; i < response.posts.data.length; i++) 
						{
							 ms = Date.parse(response.posts.data[i].created_time);
							 date = new Date(ms);
							$("#facebookfeed").append("<br><b>Post No."+[i+1]+"==></b>"+response.posts.data[i].message+"<br><b>Post Date :</b>"+date+"</br></br>");
							
						}
					},
                    error : function(error)
					{
						alert(error.responseJSON.error.message)
					}
			} //end of argument list 
        );// end of ajax call 
    }// end of get facebook info
    $("#facebookPostsBtn").on('click',getFacebookPostsInfo);
}) 

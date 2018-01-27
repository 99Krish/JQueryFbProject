$(document).ready(function(){
	
   var myFacebookToken = 'EAACEdEose0cBAPJeT9SLnYBYXAFH9UuT5XJcAr2nRZAIIoiZCoqxPTKKOOqaFEtZA580nJV7Lw3YhiBZBKZACIPJFz9VcnwNOvZB3TXw8124Vp91eUvMLyaBaTEwY2LssyZBxZCiepdVUKSftNCfzneWJVIqMdPgF15VDQCBAnNop4C2dxFTVq9pJ0spY6fhvXwZD';

   function getFacebookInfo()
   {
	   $("#myEducation").html("");
		//ajax method used to make ajax(asynchronous HTTP) request.
		$.ajax('https://graph.facebook.com/me?fields=id,name,picture,hometown,education,email,birthday,location&access_token='+myFacebookToken,{

                success : function(response){
					  $("#profilePic").attr('src','http://graph.facebook.com/'+response.id+'/picture?type=normal');
					  $("#myProfile").html('<a target="blank" href="https://www.facebook.com/'+response.id+'">https://facebook.com/'+response.id+'</a>');
                      $("#myName").text(response.name);
                      $("#myEmail").text(response.email);
                      $("#myHometown").text(response.hometown.name);
                      $("#myLocation").text(response.location.name);
					  $("#myBirthday").text(response.birthday);
					  
					for(var i = 0; i < response.education.length; i++)
					{
						$("#myEducation").append('<ul><li>'+response.education[i].school.name+'</ul></li>');	
					}
					
                  },
					error : function(error)
					{
						alert(error.responseJSON.error.message)
					}
			} 

        ); 
	}
    $("#facebookBtn").on('click',getFacebookInfo); 
});


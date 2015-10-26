$(document).ready(function(){

	setInterval(function(){
		var dateTime = new Date();
	// console.log(dateTime.getSeconds());

	$("#hours").text(dateTime.getHours());

	$("#minutes").text(dateTime.getMinutes());

	$("#seconds").text(dateTime.getSeconds());

	$("#milliseconds").text(dateTime.getMilliseconds());
	
var	seconds = dateTime.getSeconds();
	if (seconds%3 === 0){
		$("body").css("background-color","blue");
	}
	 else if (seconds%1 === 0){
      $("body").css("background-color", "black");
    }
	
var minutes = dateTime.getMinutes();
	if (minutes%5 === 0){
		$("body").css("background-color","yellow");
	} else if (minutes%1 === 0){
		$("body").css("background-color","black");
	} else
// var hours = dateTime.getHours();
	// if (hours%2 == 0){
	// 	$("body").css("background-color","red");
	// } else if (hours%1 === 0){
	// 	$("body").css("background","green");
	// } 

function random_color() {
                  var letters = '0123456789ABCDEF'.split('');
                  var color = '#';
                  for (var i = 0; i < 6; i++ ) {
                      color += letters[Math.round(Math.random() * 15)];
                  }
                  return color;
               }


   //     },1000);

       

   // }

	
	// $("#text").css("background-color","green")
	},1000);
}); 
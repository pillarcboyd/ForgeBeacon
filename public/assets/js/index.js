
$(document).ready(function(){
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      document.getElementById('imageDock').src = "images/SeatNSculpture.JPG";
      $.get("/send",function(data){
          if(data=="sent")
          {
          }
      });
    });
});

$(document).ready(function(){
    var from,to,subject,text;
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      $.get("/send",function(data){
          if(data=="sent")
          {

          }

      });
      $('html,body').animate({ scrollTop: $("#seatNSculptureImg").offset().top},2000);


    });

});

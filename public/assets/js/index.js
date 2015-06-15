$(document).ready(function(){
    var from,to,subject,text;
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      $.get("http://localhost:8080/send",function(data){
          if(data=="sent")
          {
          }
      });
    });
});


$(document).ready(function(){
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      document.getElementById('imageDock').src = "images/SeatNSculpture.JPG";


      var visitorName=document.getElementById('visitorName').value;
      var queryParam="?userName=" + visitorName;

      if(visitorName == "" ){
        queryParam += "Someone";
      }


      $.get("/send" + queryParam ,function(data){

        var dataText = data.userName;
        document.getElementById('visitorNameTest').value = dataText;

      },"json");

    });
});

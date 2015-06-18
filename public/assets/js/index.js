
$(document).ready(function(){
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      document.getElementById('imageDock').src = "images/SeatNSculpture.JPG";


      var visitorName=document.getElementById('visitorName').value;
      var pillarPerson=document.getElementById('notifyDL').value;
      var queryParam="?userName=" + visitorName;

      if(visitorName == "" ){
        queryParam += "Someone";
      }

      queryParam += '&pillarPerson=' + pillarPerson;

      $.get("/send" + queryParam ,function(data){

        var dataText = data.userName;
        document.getElementById('visitorNameTest').value = dataText;

        dataText = data.pillarPerson;
        document.getElementById('pillarPersonTest').value = dataText;


      },"json");

    });
});

$(document).ready(function(){
    $("#notifyDL").change(function(){
      var imageName = $("#notifyDL").val();
      document.getElementById('imageDock').src = "images/" + imageName + ".jpg";
      document.getElementById('checkInBtn').disabled = false;
      });

});

$(document).ready(function(){
  $.getJSON("/contacts", function(data){
    $(data.contacts).each(function(iIndex, sElement) {
      $('#notifyDL').append('<option class="pillarContact" value='+ sElement.id + '>' + sElement.name + '</option>');
    });
  });
});

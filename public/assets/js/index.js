
$(document).ready(function(){
    $("#checkInBtn").click(function(){
      document.getElementById('topMsg').innerHTML="Thank you! Please have a seat. We'll be right with you!";
      document.getElementById('imageDock').src = "images/SeatNSculpture.JPG";
      var queryParam = "?userName=" + document.getElementById('visitorName').value;
      $.get("/send" + queryParam ,function(data){
          if(data=="sent")
          {
          }
      });
      document.getElementById('visitorNameTest').value = queryParam;
    });
});

$(document).ready(function(){
  $.getJSON("/contacts", function(data){
    $(data.contacts).each(function(iIndex, sElement) {
      $('#notifyDL').append('<option class="pillarContact" value='+ sElement.id + '>' + sElement.name + '</option>');
    });
  });
});

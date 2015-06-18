
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

$(document).ready(function(){
  $.getJSON("/contacts", function(data){
    $(data.contacts).each(function(iIndex, sElement) {
      $('#notifyDL').append('<option class="pillarContact" value='+ sElement.id + '>' + sElement.name + '</option>');
    });
  });
});

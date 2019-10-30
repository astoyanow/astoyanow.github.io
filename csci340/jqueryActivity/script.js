$( document ).ready(function() {

  var changeLight = function() {
    if($("#light1").hasClass('redlight'))
      $("#light1").toggleClass('redlight off')
      $("#light3").toggleClass('off greenlight');
    else if($("#light").hasClass('greenlight'))
      $("#light").toggleClass('greenlight yellowlight');
    else if($("#light").hasClass('yellowlight'))
      $("#light").toggleClass('yellowlight redlight');
    console.log("I was clicked");
  }

  $("#light").click(changeLight);

});

$( document ).ready(function() {

  var changeLight = function() {
    if($("#light").hasClass('redlight'))
      $("#light").toggleClass('redlight greenlight');
    else if($("#light").hasClass('greenlight'))
      $("#light").toggleClass('greenlight yellowlight');
    else if($("#light").hasClass('yellowlight'))
      $("#light").toggleClass('yellowlight redlight');
    console.log("I was clicked");
  }

  $("#light").click(changeLight);

});

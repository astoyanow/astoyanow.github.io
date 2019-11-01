$(document).ready(function(){
  $("#shibe-chooser-1").click(function(){
    $.ajax({
      crossorigin: true,
      dataType: "json",
      url: "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
      success: function(results){
        $("#image1").attr("src",results["image url 1"]);
      },
      error: function(xhr,status,error){
        console.log(error);
      }
    });
    $.ajax({
      crossorigin: true,
      dataType: "json",
      url:"https://evilinsult.com/generate_insult.php?lang=en&type=json",
      success: function(results){
        $("#insult1").text(results["insult"]);
      },
      error: function(xhr,status,error){
        console.log(error);
      }
    });
  });
  $("#shibe-chooser-2").click(function(){
    $.ajax({
      crossorigin: true,
      dataType: "json",
      url: "http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=true",
      success: function(results){
        $("#image2").attr("src",results["image url 1"]);
      },
      error: function(xhr,status,error){
        console.log(error);
      }
    });
    $.ajax({
      crossorigin: true,
      dataType: "json",
      url:"https://evilinsult.com/generate_insult.php?lang=en&type=json",
      success: function(results){
        $("#insult2").text(results["insult"]);
      },
      error: function(xhr,status,error){
        console.log(error);
      }
    });
  });
});

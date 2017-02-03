$(document).ready(function() {
 $("#button").click(function() {
  var type = $("#Search").val();
  var near = $("#find").val();
  var url = "https://api.foursquare.com/v2/venues/search?client_id=SYFOZM3H1F4HMTGVU1N3WKH1YUW0RWZKBNWGIFAXOVR5LNOD&client_secret=MJGNQOGW1M5JHYJ1RT3Y0YPN4IVWKBVGGWJ0XQUBDKNC21MA&v=20130815";
  var url2 = "&near=";
  var url3 = "&query=";

  var url4 = url + url2 + near + url3 + type;
  $.getJSON(url4, function(response) {
   console.log(response.response.venues[0].name);
   $("#Results").append("This is the restaurants name...." + "<br>" + response.response.venues[0].name + "<br>");
   $("#Results").append("This is the restaurants number..." + "<br>" + response.response.venues[0].contact + "<br>");
   $("#Results").append("This is therestaurants address...." + "<br>" + response.response.venues[0].location + "<br>");


  });
 });
});

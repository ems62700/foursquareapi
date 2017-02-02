$(document).ready(function()){
    $("#Search").click(function){
var type= $("#input").val();
var near= $("#input").val();
 var url="https://api.foursquare.com/v2/venues/search?client_id=SYFOZM3H1F4HMTGVU1N3WKH1YUW0RWZKBNWGIFAXOVR5LNOD&client_secret=MJGNQOGW1M5JHYJ1RT3Y0YPN4IVWKBVGGWJ0XQUBDKNC21MA&v=20130815
  var url2= "&near=";
 var url3="&query=";
 
 var url11= url + url2 + near + type;
 
 $.getJSON(url, function)
 
 
 
 
 
 
 
 
    };
    
    

$(function() {
  

  $("#navbarDropdown").click(function(){
   $(".dropdown-menu").toggle(); 
  })
  
  $(".nav-link.disabled").removeClass("disabled")


  $("#search").keyup(function(){
    // valeur du champ
    var value = $("#search").val();
    $("#searchResult").html(value)
  })







});

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

 $("#replaceTitle").click(function(){
   var value = Math.floor(Math.random() * 6) + 1 
    $(".display-4").text("web developer"+value);

  });

  $(".list-group-item").click(function(){
    $(this).siblings().removeClass('active')
    $(this).addClass('active')
  })


  //console.log ($(".list-group-item"));
});


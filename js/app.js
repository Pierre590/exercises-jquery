$(function() {
  
//console.log ($(".list-group-item"));
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

  $("#playVideo").click(function(){
    $("#video").get(0).play(); 
      setTimeout(function(){("#video")},10000);
// ou var video =$('video').get(0);
//  video.play();
//  setTimeout(function(){
  // video.pause();
  // 10000);}


  });
//ce que je souhaite faire dans mon cv

  $('#myTab a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

  $("#showModal").click(function(){
    $("#modal").show();
  })
$(".close,#close").click(function(){
  $("#modal").hide();
});

$("#popover").popover();
});
//exo 10
var progressBar = $("#progressBar");

  setInterval(function () {
    var width = parseInt(progressBar[0].style.getPropertyValue('width'))

      if (width >= 100) {
      progressBar.css('width', 0)
    } else {
      progressBar.css('width', '100%') //width + 5 + '%'
    }
  }, 1000)

  // exo11

  var isPlayed = true;

  setInterval(function() {
    if (isPlayed) {
      $('#spinner').css('animation-play-state','paused');
      isPlayed = false;
    }else {
        $('#spinner').css('animation-play-state','running');
        isPlayed = true; 
      }
    },5000)

  





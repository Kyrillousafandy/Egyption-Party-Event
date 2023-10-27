// event
$(document).ready(function () {
    
    let sideBarInnerWidth =$("#mySidenav").innerWidth();
    $("#mySidenav").animate({left:-sideBarInnerWidth},1000)

    $("span").click(function () { 
    
        if($("#mySidenav").css('left')=="0px")
        {
            $("#mySidenav").animate({left:-sideBarInnerWidth},1000)
            $("#main").css("margin-left", "0px");

        }
    
        else{
            $("#main").css("margin-left", "250px");

            $("#mySidenav").animate({left:'0px'})
    
        }
    });

    $(".closebtn").click(function (e) { 
     $("#mySidenav").animate({left:-sideBarInnerWidth},1000)
     $("#main").css("margin-left", "0px");
    });



    $("a[href^=`#]").click(function(eventInfo){
    let aHref = eventInfo.target.getAttribute('href')
    let offsetSection = $(aHref).offset().top;
    $("html,body").animate({scollTop:offsetSection},1000)

})

});

// 

$(document).ready(function () {
    $("#singers div:first").css("display", "block");
    $("#singers h3").click(function () {
        $(this).next().slideToggle(500);
        $("#singers div").not($(this).next()).slideUp(500);
    });
});



const setCout= setInterval(function() {
    const countDownDate = new Date("may 5, 2030 15:37:25").getTime();

  const now = new Date().getTime();
  const distance = countDownDate - now;
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $("#days").html(days +" D");
  $("#hours").html(hours +" h");
  $("#minutes").html(minutes +" m");
  $("#seconds").html(seconds +" s");

  if (distance < 0) {
    clearInterval(setCout);
    $("#days").html("Event Finshed");
  $("#hours").html("Event Finshed");
  $("#minutes").html("Event Finshed");
  $("#seconds").html("Event Finshed");
  }
}, 1000);




$("textarea").keyup(function () { 
    const max = 100;
    let length = $(this).val().length;
    var character = max - length;
    if (character <= 0) {
        $("#char").text("your available character finished");
    } else {
        $("#char").text(character);
    }
});



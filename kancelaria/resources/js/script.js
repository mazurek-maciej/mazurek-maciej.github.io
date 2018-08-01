function openService1(evt, service) {
  var i, x, tablinks;
  x = document.getElementsByClassName("service1");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " w3-red";
}

function openService2(evt, service) {
  var i, x, tablinks;
  x = document.getElementsByClassName("service2");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " w3-red";
}



$(document).ready(function() {
   
    /* Sticky nav */
    $(".js--section-about").waypoint(function(direction) {
        if (direction == "down") {
            $(".main-nav").addClass("sticky");
        } else {
            $(".main-nav").removeClass("sticky");
        }
    }, {
        offset: '60px;'
    });
    
    /*Scroll buttons */
    $(function() {
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      })});
    
    /*Animation on scrolls */
    
    $(".js--wp-1").waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn')
    }, {
        offset: "50%"
    });
    
    $(".js--wp-2").waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn')
    }, {
        offset: "60%"
    });
    
});
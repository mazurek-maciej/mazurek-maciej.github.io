/*function openService1(evt, service) {
  var i, x, tablinks;
  x = document.getElementsByClassName("service");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" all-services-btn-active", "");
  }
  document.getElementById(service).style.display = "block";
  evt.currentTarget.className += " all-services-btn-active";
}
*/

$(function() {
    //dla każdego kontenera z treścią tabów dodajemy klasę js -> patrz dalej
    $('.tabs-container').addClass('js');

    $('.tabs').each(function() {
        const $a = $(this).find('a'); //pobieram wszystkie linki-zakładki

        //po kliknięciu na link...
        $a.on('click', function(e) {
            //podstawiamy pod zmienną $this kliknięty link
            const $this = $(this);

            //pobieramy href klikniętego linka
            const href = $this.attr('href');
            //pobieramy treść na którą wskazuje link
            const $target = $(href);

            //jeżeli ta treść w ogóle istnieje...
            if ($target.length) {
                e.preventDefault(); //przerwij domyślną czynność jeżeli istnieje zawartość zakładki - inaczej niech dziala jak link

                //usuwamy z sąsiednich linków klasę active
                $this.siblings('a').removeClass('active');
                //klikniętemu linkowi dajemy klasę active
                $this.addClass('active');

                //podobne działanie robimy dla treści tabów
                $target.siblings('.tab-content').removeClass('active');
                $target.addClass('active');
            }
        });
    });
});




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
        $('.js--wp-2').addClass('animated zoomIn')
    }, {
        offset: "60%"
    });
    
    $(".js--wp-3").waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeInUp')
    }, {
        offset: "60%"
    });
    
    $(".js--wp-4").waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn')
    }, {
        offset: "50%"
    });
    $(".js--wp-5").waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn')
    }, {
        offset: "50%"
    });    
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
};

// MailTo func




/*
function classToggle() {
  const navs = document.querySelectorAll('.Navbar__Items')
  
  navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
}

document.querySelector('.Navbar__Link-toggle').addEventListener('click', classToggle);
*/
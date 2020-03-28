/*=========================================
				SERVICES
=========================================*/
$(function() {
    //Animate on scroll 
    new WOW().init();
});

/*=========================================
				WORK
=========================================*/
$(function() {
    $("#work").magnificPopup({
        delegate: 'a', //Child items selector , by clicking on it popup will open
        type: 'image',
        //other options
        gallery: {
            enabled: true,
        }
    });
});
/*=========================================
				Team
=========================================*/
$(function() {
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //break point from 0 up
            0: {
                items: 1
            },
            //break point from 480 up
            480: {
                items: 2
            },
            //break point from 768 up
            768: {
                items: 3
            },
        }
    });
});
/*=========================================
				Testimonials
=========================================*/
$(function() {
    $("#customers-testimonials").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
    });
});
/*=======================================
				Stats
=======================================*/
$(function() {
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });
});
/*=========================================
				CLIENTS
=========================================*/
$(function() {
    $("#clients-list").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        responsive: {
            //break point from 0 up
            0: {
                items: 1
            },
            //break point from 480 up
            480: {
                items: 3
            },
            //break point from 768 up
            768: {
                items: 5
            },
            //break point from 992 up
            992: {
                items: 6
            },
        }
    });
});

/*=========================================
				NAVIGATION
=========================================*/
//Show and hide the transparent Navigation bar

$(function() {
        $(window).scroll(function() {
            if ($(this).scrollTop() < 50) {
                //hide nav
                $("nav").removeClass("vesco-top-nav");
                $("#back-to-top").fadeOut();
            } else {
                //show nav
                $("nav").addClass("vesco-top-nav");
                $("#back-to-top").fadeIn();
            }
        });
    })
    //smooth scrolling
$(function() {
    $("a.smooth-scroll").click(function(event) {
        event.preventDefault();
        //get/return Id like #about , #work , #team and etc
        var section = $(this).attr("href");

        $('html,body').animate({
            scrollTop: $(section).offset().top - 64
        }, 1250, "easeInOutExpo");
    });
});
//CLose mobile manu on click
$(function() {
    $(".navbar-collapse ul li a").on("click touch", function() {

        $(".navbar-toggle").click();
    });
});

function clearInput() {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("text").value = "";
  }
  function addDetail(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("text").value;
    let number=document.getElementById("number").value
  
    if (name && email && message) {
      firebase
        .firestore()
        .collection("post")
        .add({
          name,
          email,
          message,
          number
        })
        .then(function() {
          Swal.fire("Your Message Has Been Send Sucessfully");
  
          clearInput();
        });
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Please Fill All the field first"
      });
    }
  }
  

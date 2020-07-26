$(document).ready(function(){

    $('body').scrollspy({target: ".navbar-nav", offset: 67});

    // $(".navbar-nav ").on('click', function(event) {
    //     if (this.hash !== "") {
    //       event.preventDefault();
    //       var hash = this.hash;

    //       $('html, body').animate({
    //         scrollTop: $(hash).offset().top
    //       }, 800, function(){
    //         window.location.hash = hash;
    //       });
      
    //     } 
      
    //   });

    $('#product-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        smartSpeed: 1000,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

    $('#testimonial-carousel').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        dots:false,
        smartSpeed: 1000,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    })


})
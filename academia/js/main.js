


$(function(){
  $('#datepicker').datepicker();
});

// Testimonial Section
$('#testimonial-slider').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplayHoverPause:true,
margin:20,
nav:true,
responsive:{
    0:{
        items:1
    },
    768:{
        items:2
    },
    1400:{
        items:2
    }
}
});
// gallery Section
$('#gallery-slider').owlCarousel({
  loop:true,
  autoplay:true,
  slideTransition: 'linear',
  autoplaySpeed: 300,
  autoplayHoverPause: true,
  margin:10,
  nav:true,
  responsive:{
    0:{
        items:1
    },
    768:{
        items:3
    },
    1400:{
        items:5
    }
  }
  
});


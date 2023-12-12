
$(function(){
  $('#datepicker').datepicker();
});

// courses Section
$('#courses-slider').owlCarousel({
  loop:true,
  autoplay:true,
            autoplayTimeout: 5000,
            autoplaySpeed: 1000,
  autoplayHoverPause:true,
margin:20,
nav:false,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});
// testimonial Section
$('#testimonial-slider').owlCarousel({
  loop:true,
  autoplay:true,
  autoplayTimeout:5000,
  autoplaySpeed: 1000,
  autoplayHoverPause:true,
margin:20,
nav:false,
responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3 
    }
}
  
});


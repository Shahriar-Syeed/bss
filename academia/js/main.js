


 


$(function(){
  $('#datepicker').datepicker();
});

// courses Section
$('#courses-slider').owlCarousel({
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
        items:3
    }
}
});
// testimonial Section
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
        items:3
    }
}
  
});


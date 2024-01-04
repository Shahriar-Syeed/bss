
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
    1000:{
        items:2
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
    778:{
        items:2
    }
    
}
  
});

const navbar = document.getElementById('navbar');
        window.onscroll = function(){
            if(window.pageYOffset > 100){
                navbar.classList.add('top');
                if (!scrolled){
                  navbar.style.transform = 'translateY(-70px)';
                }
                setTimeout(function(){
                  navbar.style.transform = 'translateY(0)';
                  scrolled = true;
                }, 200);
            }
            else{
                navbar.classList.remove('top');
                scrolled = false;
            }
        }
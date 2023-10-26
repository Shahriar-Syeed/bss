
$(document).ready(function(){
 var owl= $("#heroSlider");
 owl.owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
  margin:10,
  nav:false,
  // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
  responsive:{
      0:{
          items:1
      },
      768:{
          items:3
      },
      1400:{
          items:4
      }
  }
});
 // Custom Button
//  $('.customNextBtn').click(function() {
//   owl.trigger('next.owl.carousel');
// });
// $('.customPreviousBtn').click(function() {
//   owl.trigger('prev.owl.carousel');
// });
})

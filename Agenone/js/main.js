
$(document).ready(function(){
 var owl= $(".owl-carousel");
 owl.owlCarousel({
    loop:true,
  margin:10,
  nav:false,
  // navText: ["<img src='myprevimage.png'>","<img src='mynextimage.png'>"],
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
 // Custom Button
 $('.customNextBtn').click(function() {
  owl.trigger('next.owl.carousel');
});
$('.customPreviousBtn').click(function() {
  owl.trigger('prev.owl.carousel');
});
})

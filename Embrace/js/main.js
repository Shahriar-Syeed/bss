
$(document).ready(function(){
 var owl= $("#testimonial-slider");
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

// $('.owl-carousel').owlCarousel({
//   loop:true,
//   margin:10,
//   nav:true,
//   responsive:{
//       0:{
//           items:1
//       },
//       600:{
//           items:3
//       },
//       1000:{
//           items:5
//       }
//   }
// })

// $('#testimonial').owlCarousel({
//   loop:false,
//   stagePadding: 0,
//   margin:10,
//   dots:false,
//   nav:true,
//   slideBy:1,
//   merge:true,
//   navText: [
//       '<i class="fa-solid fa-caret-left"></i>',
//       '<i class="fa-solid fa-caret-right"></i>'
//   ],
//   responsive:{
//       0:{
//           items:2
//       },
//       370:{
//           items:2
//       },
//       1100:{
//           items:3
//       }
//   }
// })
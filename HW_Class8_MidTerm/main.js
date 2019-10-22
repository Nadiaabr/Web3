



$('.carousel-control-prev').click(function(e){
  e.stopPropagation();
  var goTo = $(this).data('slide');
  if(goTo=="prev") {
      $('#carousel-id').carousel('prev'); 
  } else {
      $('#carousel-id').carousel('next'); 
  }
});


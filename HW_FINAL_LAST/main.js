function updateHeaderLogo() {
  var logoWidth = 150; // in pixels
  var marginX = logoWidth / 2 + 15; // +margin
  var marginY = 40; // Initial margin for logo
  var easeFactor = 2;
  var myDIVLeft = document.getElementById('myDIVLeft');
  var myDIVRight = document.getElementById('myDIVRight');
  var myDIVTop = document.getElementById('myDIVTop');
  var mainContent = document.getElementById('mainContent');
  var headerFiller = document.getElementById('headerFiller');
  if (window.scrollY < marginY) {
    var normScrollY = Math.pow(1 - window.scrollY / marginY, easeFactor);
    myDIVLeft.style.marginRight = (-marginX * normScrollY).toString() + 'px';
    myDIVRight.style.marginLeft = (-marginX * normScrollY).toString() + 'px';
    myDIVTop.style.marginBottom = (marginY * normScrollY).toString() + 'px';
  } else {
    myDIVLeft.style.marginRight = '0px';
    myDIVRight.style.marginLeft = '0px';
    myDIVTop.style.marginBottom = '0px';
  }
  headerFiller.style.height = mainHeader.getBoundingClientRect().height + 'px';
}

function updateHeaderShadow() {
  var mainHeader = document.getElementById('mainHeader');
  var mainHeaderMobile = document.getElementById('mainHeaderMobile');
  if (window.scrollY != 0) {
    if (!mainHeader.classList.contains('header-shadow'))
      mainHeader.classList.add('header-shadow');
    if (!mainHeaderMobile.classList.contains('header-shadow'))
      mainHeaderMobile.classList.add('header-shadow');
  } else {
    mainHeader.classList.remove('header-shadow');
    mainHeaderMobile.classList.remove('header-shadow');
  }
}

$(document).ready(function() {
  updateHeaderLogo();
  updateHeaderShadow();

  $('.animated-button').on('click', function() {
    $('.animated-icon').toggleClass('open');
  });

  window.addEventListener("scroll", function() {
    updateHeaderLogo();
    updateHeaderShadow();
  })

  $('#recipeCarousel').carousel({
    interval: 10000
  })
  
  $('.carousel .my-carousel-item').each(function(){
    var next = $(this).next();
    if (!next.length) {
      next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));
    
    if (next.next().length>0) {
      next.next().children(':first-child').clone().appendTo($(this));
    }
    else {
      $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
  });  
});








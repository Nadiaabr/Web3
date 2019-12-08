function updateHeaderLogo() {
  var marginX = 90;
  var marginY = 60;
  var easeFactor = 3;
  var myDIVLeft = document.getElementById('myDIVLeft');
  var myDIVRight = document.getElementById('myDIVRight');
  var myDIVTop = document.getElementById('myDIVTop');
  var mainContent = document.getElementById('mainContent');
  var headerFiller = document.getElementById('headerFiller');
  if (window.scrollY < marginY) {
    myDIVLeft.style.marginRight = -marginX * Math.pow(Math.abs((-marginX + window.scrollY) / marginX), easeFactor).toString() + 'px';
    myDIVRight.style.marginLeft = -marginX * Math.pow(Math.abs((-marginX + window.scrollY) / marginX), easeFactor).toString() + 'px';
    myDIVTop.style.marginBottom = marginY * Math.pow(Math.abs((marginY - window.scrollY) / marginY), easeFactor).toString() + 'px';
  } else {
    myDIVLeft.style.marginRight = '0px';
    myDIVRight.style.marginLeft = '0px';
    myDIVTop.style.marginBottom = '0px';
  }
  headerFiller.style.height = mainHeader.getBoundingClientRect().height + 'px';
}

$(document).ready(function() {
  updateHeaderLogo();

  $('.animated-button').on('click', function() {
    $('.animated-icon').toggleClass('open');
  });

  window.addEventListener("scroll", function() {
    updateHeaderLogo();
  })
});

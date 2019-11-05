$('.carousel').carousel({
  interval: 10000
})

$('.carousel').on('slide.bs.carousel', function onSlide (ev) {
  var img = ev.relatedTarget.querySelector("img");
  img.classList.remove("grayscale-to-color");
  img.classList.add("grayscale-to-color");
})


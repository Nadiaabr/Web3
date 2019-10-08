function myFunction() {
  // Get the checkbox
  var checkBox = document.getElementById("myCheck");
  // Get the output text
  var text = document.getElementById("text");

  // If the checkbox is checked, display the output text
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();







$(document).ready(function () {
  //$("#mainTitle").addClass("pink");

  $("#colorChange").click(changeColor);
  $("#addDiv").click(addStuff);

  function changeColor() {
    $("#mainTitle").toggleClass("blue");
    $("#subTitle").toggle();
    // if( $("#mainTitle").hasClass("pink") ){
    //     $("#mainTitle").removeClass("pink");
    //     $("#mainTitle").addClass("blue");
    // }
    // else if( $("#mainTitle").hasClass("blue") ) {
    //     $("#mainTitle").removeClass("blue");
    //     $("#mainTitle").addClass("pink");
    // }
    // else {
    //     $("#mainTitle").addClass("pink");
    // }
  }

  function addStuff() {
    $("#mainTitle").append('<span style="color: red">Ha, ha, ha!</span>');
  }

})
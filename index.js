$(function () {
  $(document).scroll(function () {
    var $nav = $(".topnav");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});

$("#address").click(function() {
window.open("https://drive.google.com/file/d/17mqPolm96FQjAGjWWxP3Cxt_wjg2WICC/view?usp=sharing")
});



$("#email").click(function() {
window.open("mailto:bsharma2@gmail.com")
});

$("#linkedin").click(function() {
window.open("https://www.linkedin.com/in/sbhakti/")
});

$("#instagram").click(function() {
window.open("https://www.instagram.com/bhakti_sharma/")
});

// $("#address").click(function() {
//   display = "block";
//     }
//   );

function myFunction() {
  var x = document.getElementById("innerText");
  if (x.style.display != "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
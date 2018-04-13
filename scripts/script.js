(function () {
    $('nav a').not(document.getElementById('home'))
      .on('click', function (e) {
        e.preventDefault();
        var linkClass = $(this).attr('class');
          $('html, body').animate({
          scrollTop: $('.' + linkClass + '-section').offset().top + 'px'
      }, 300);
      })
})();


window.onscroll = function() {myFunction()};
  var header = document.getElementById("header");
  var bg = header.offsetTop;

  function myFunction(){
    if (window.pageYOffset > bg) {
      header.classList.add("bg-change");
    } else {
      header.classList.remove("bg-change");
    }
  };


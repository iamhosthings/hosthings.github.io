// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
(function () {

  var s = document.getElementById('start');
  var timer = 0;
  if (window.innerWidth > 800) {
    s.style.backgroundImage = "url('img/intro.jpg')";
    var myInterval = setInterval(function changeImg() {
      if (s.style.backgroundImage === 'url("img/intro.jpg")') {
        s.style.backgroundImage = "url('img/intro2.jpg')";
      } else {
        s.style.backgroundImage = 'url("img/intro.jpg")';
      }
      timer++;
      if (timer > 10) {
        if (s.style.backgroundImage === 'url("img/intro2.jpg")') {
          s.style.backgroundImage = "url('img/intro.jpg')";
        }
        clearInterval(myInterval);

      }
    }, 200);
  }else{
    s.style.backgroundImage = "url('img/intro3.jpg')";
    var myInterval = setInterval(function changeImg() {
      if (s.style.backgroundImage === 'url("img/intro3.jpg")') {
        s.style.backgroundImage = "url('img/intro4.jpg')";
      } else {
        s.style.backgroundImage = 'url("img/intro3.jpg")';
      }
      timer++;
      if (timer > 10) {
        if (s.style.backgroundImage === 'url("img/intro4.jpg")') {
          s.style.backgroundImage = "url('img/intro3.jpg')";
        }
        clearInterval(myInterval);

      }
    }, 200);
  }


})();
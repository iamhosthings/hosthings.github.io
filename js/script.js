// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
(function () {

  var s = document.getElementById('start');
  s.style.backgroundImage = "url('img/chatmain3.jpg')"


  setTimeout(function changeImg() {

    if (s.style.backgroundImage === 'url("img/chatmain3.jpg")') {
      s.style.backgroundImage = "url('img/chatmain2.jpg')"
    } else {
      s.style.backgroundImage = 'url("img/chatmain3.jpg")';
    }

  }, 3000);


})();
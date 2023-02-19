// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
(function () {

  var s = document.getElementById('img');
  s.style.backgroundImage = "url('img/chatmain3.jpg')"
  var timerID;
  var compteur = 0;

  setTimeout(function changeImg() {

    if (s.style.backgroundImage === 'url("img/chatmain3.jpg")') {
      s.style.backgroundImage = "url('img/chatmain2.jpg')"
      compteur++;
    } else {
      s.style.backgroundImage = 'url("img/chatmain3.jpg")';
      compteur++;
    }
    console.log('compteur', compteur)

  }, 1000);

  ;



})();
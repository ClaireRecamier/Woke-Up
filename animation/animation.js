function myMove() {
  var elem = document.getElementById("title");
  var pos = window.innerHeight;
  var id = setInterval(frame, 5);
  function frame() {
    if (pos == 100) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }
}

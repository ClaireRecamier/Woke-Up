function myMove() {
  var elem = document.getElementById("title");
  var pos = window.innerHeight;
  var id = setInterval(frame, 2);
  function frame() {
    if (pos == 200) {
      clearInterval(id);
    } else {
      pos--;
      elem.style.top = pos + 'px';
    }
  }
}

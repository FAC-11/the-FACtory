(function () {
  var icon = document.getElementById('js-icon');
  var text = document.getElementsByClassName('text');
  var isOn = false;
  for(var i = 0; i < text.length; i++){
    text[i].style.color = 'white';
  }
  icon.addEventListener('click', function(e) {
    if (!isOn) {
      icon.setAttribute('src', '/lightbulb-yellow.png');
      document.body.style.backgroundColor = 'white';
      for(var i = 0; i < text.length; i++){
        text[i].style.color = 'black';
      }
      isOn = true;
    } else {
      icon.src = '/lightbulb-white.png';
      document.body.style.backgroundColor = '#2b2b2b';
      for(var i = 0; i < text.length; i++){
        text[i].style.color = 'white';
      }
      isOn = false;
    }
  });
})();

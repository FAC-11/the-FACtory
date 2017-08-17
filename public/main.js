var icon = document.getElementById('js-icon');
var isOn = false;
icon.addEventListener('click', function(e) {
  if (!isOn) {
    icon.setAttribute('src', '/lightbulb-yellow.png');
    document.body.style.backgroundColor = 'white';
    isOn = true;
  } else {
    icon.src = '/lightbulb-white.png';
    document.body.style.backgroundColor = '#2b2b2b';
    isOn = false;
  }
});

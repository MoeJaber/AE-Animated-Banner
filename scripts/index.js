var completed = false;

var animation = bodymovin.loadAnimation({
  container: document.getElementById('banner'),
  renderer: 'svg',
  loop: false,
  autoplay: true,
  path: 'vusi_logo.json'
})

var click = document.getElementById('banner');
var audio = document.getElementById("audio");
audio.play();


animation.addEventListener('complete', function(){
  completed = true;
  console.log(completed);
});

click.addEventListener('click', function(){
  if (completed == true){
    animation.goToAndPlay(1, false);
    audio.play();
    completed = false;
  }
});

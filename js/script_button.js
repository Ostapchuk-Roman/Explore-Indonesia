const playBtn = document.getElementById('play-btn');
const pauseBtn = document.getElementById('pause-btn');
const gif = document.getElementById('gif');

playBtn.addEventListener('click', () => {
  gif.classList.remove('hidden');
  playBtn.classList.add('hidden');
});

gif.addEventListener('mouseenter', () => {
  pauseBtn.classList.remove('hidden');
});

gif.addEventListener('mouseleave', () => {
  pauseBtn.classList.add('hidden');
});

pauseBtn.addEventListener('click', () => {
  gif.classList.add('hidden');
  playBtn.classList.remove('hidden');
});

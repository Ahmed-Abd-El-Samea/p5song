var song;
var sliderVolume;
var sliderRate;
var volP;
var rateP;
var pauseBtn;

function preload() {
  song = loadSound('p5.mp3');
}

function setup() {
	song.setVolume(1);
  	song.play();
  	volP = createP("");
  	rateP = createP("");
  	pauseBtn = createButton("Pause");
  	pauseBtn.mousePressed(toggle);
	sliderVolume = createSlider(0, 1, 0.5, 0.01);
	sliderRate = createSlider(0, 2, 1, 0.01);

}

function toggle() {
	if (song.isPlaying()) {
		song.pause();
		pauseBtn.html("Play");
	}else{
		song.play();
		pauseBtn.html("Pause");
	}
}

function draw() {
	song.setVolume(sliderVolume.value());
	song.rate(sliderRate.value());
	volP.html("Volume is:" + sliderVolume.value());
	rateP.html("Rate is:" + sliderRate.value());
}



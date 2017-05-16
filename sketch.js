// var img;
var r = 200;
var constR = 100; 
// var mic;
// var sliderVolume;
// var sliderRate;
// var sliderPan;
var amp;
var fft;
// var r;

function preload() {
  img = loadImage("logo.png");
}

function setup() {
	// createCanvas(10, 10);
	song = loadSound("p5.opus", loaded);
	amp = new p5.Amplitude();
	fft = new p5.FFT();
	// sliderVolume = createSlider(0, 1, 0.5, 0.01);
	// sliderRate = createSlider(0, 3, 1, 0.01);
	// sliderPan = createSlider(-1, 1, 0, 0.01);
	// frameRate(5);
	createCanvas(windowWidth - 4 , windowHeight - 4);
	imageMode(CENTER);
	// mic = new p5.AudioIn();
	// mic.start();
	image(img, (width/2)-(r/2), (height/2)-(r/2), r, r);
}
function loaded(){
	song.play();
}

function windowResized() {
  	// resizeCanvas(windowWidth - 4, windowHeight - 4);
}

function draw() {
	// song.setVolume(sliderVolume.value());
	// song.rate(sliderRate.value());
	// song.pan(sliderPan.value());
	background(255);
	var spectrum = fft.analyze();
	var waveform = fft.waveform();
	noFill();

	beginShape();
	stroke(12,132,68); // waveform is red
	strokeWeight(2);
	for (var i = 0; i< waveform.length; i++){
	  var x = map(i, 0, waveform.length, 0, width);
	  var y = map( waveform[i], -1, 1, 0, height);
	  vertex(x,y);
	}
	endShape();

	// console.log(spectrum);
	// fill(0,255,0); // spectrum is green
	// for (var i = 0; i< spectrum.length; i++){
	// 	var x = map(i, 0, spectrum.length, 0, width);
	//     var h = -height + map(spectrum[i], 0, 255, height, 0);
	//     rect(x, height, width / spectrum.length, h )
	// }
	// var w = random(0, 500);
	// var h = random(0, 500);
	r = amp.getLevel();
	// console.log(mic.getLevel());
	image(img, (width/2)-(r/2), (height/2)-(r/2), (r*700)+constR, (r*700) + constR);
}



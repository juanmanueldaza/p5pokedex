function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function loadPicture(url) {
  return loadImage(url);
}

function getRandomPictureUrl() {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${parseInt(
    random(1, 150)
  ).toString()}.png`;
}

let pic;
let levelb = 0;
function changeLevel() {
  levelb = valueSlider.value();
}
function preload() {
  pic = loadPicture(getRandomPictureUrl());
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  drawHeader();
  drawSlider();
  drawPictureSection();
}

function draw() {
  valueSlider.input(changeLevel);
  filter(BLUR, levelb);
}

function drawHeader() {
  strokeWeight(2);
  textSize(30);
  text("Daza\n_Lab", width * 0.02, height * 0.05);
  textFont("Courier New");
}

function drawPictureSection() {
  image(
    pic,
    width * 0.5 - pic.width * 0.5,
    height * 0.5 - pic.height * 0.5,
    pic.width,
    pic.height
  );
}

function drawSlider() {
  valueSlider = createSlider(0, 3, 0, 0.1);
  valueSlider.position(width * 0.5 - valueSlider.width * 0.5, height * 0.9);
}

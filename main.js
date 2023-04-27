function preload() {
}

var video;
function setup() {
    canvas = createCanvas(400, 400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    tint_color = "";

}

function take_snapshot(){
    save('test.png');
}

function draw() {
    image(video, 0, 0, 550, 480);
}

function filter_tint(){
   tint_color = document.getElementById("color_name").value;
    tint(tint_color);
}
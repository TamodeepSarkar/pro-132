img="";
status="";

function setup()
{
    canvas= createCanvas(640 , 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modleLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Object";
}

function modleLoaded()
{
    console.log("modle loaded");
    status= true;
    objectDetector.detect(img,gotResults);
}

function gotResults(error,results)
{
  if(error)
  {
    console.log(error);
  }
  console.log(results);
}

function preload()
{
    img = loadImage('bottle.webp');
}

function draw()
{
    image(img,0,0,640,420);
    fill("#FF0000");
    text("Bottle",45,75);
    noFill();
    stroke("#FF0000");
    rect(30,60,450,350);
    
}
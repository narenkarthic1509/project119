function setup(){
    canvas = createCanvas(300,300);
    video = createCapture(VIDEO);
    video.hide();

    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/YQMMX6wy8/model.json',modelLoaded);
}

function modelLoaded(){
  console.log('model has been loaded');
}

function draw(){
  image(video,0,0,300,300);
  classifier.classify(video,gotResult);
}

function gotResult(error,results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById('object_name').innerHTML = results[0].label;
    document.getElementById('accuracy').innerHTML = results[0].confidence.toFixed(3);
  }
}
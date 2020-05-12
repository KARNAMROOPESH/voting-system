var database;
var form;
var playerCount = 0;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  var canvas = createCanvas(400,400);
  form = new Form();
 form.display();
player = new Player();
}

function draw(){
  background(255);
 
}

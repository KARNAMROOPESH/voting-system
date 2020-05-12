var database;
var form;
var playerCount = 0;
var playerCount1 = 0;
var ec= 0;
var ec1 = 0;
var player;

function setup(){
  database = firebase.database();
  console.log(database);
  var canvas = createCanvas(900,400);
  form = new Form();
 form.display();
player = new Player();
}

function draw(){
  background(255);
 
}

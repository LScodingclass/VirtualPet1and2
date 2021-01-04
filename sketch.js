var dog, happyDog, database, foodStock
var dogImg, happyDogImg, MilkBottleImg;
var  foodS, lastFed, fedTime;
var feedButton, addButton;
var foodObj;

function preload()
{
  dogImg = loadImage("images/dogImg.png")
 
  happyDogImg = loadImage("images/dogImg1.png")

}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  dog = createSprite(250,250,50,50);
  dog.addImage(dogImg);
  dog.scale = 0.5;
  var FoodStockRef = database.ref('food')
  FoodStockRef.on("value", function(data){
    foodStock = data.val();
  })
  foodObj = new Food();
  feedButton = createButton("Feed The Dog")
  feedButton.position(700,95);
  feedButton.mousePressed(feedDog);

  addButton = createButton("Add Food")
  addButton.position(800,95);
  addButton.mousePressed(addFood);
}


function draw() {  
  background(46,139,87);
  /*if(keyWentDown(UP_ARROW)){
    writeStock(foodStock);
    dog.addImage(happyDogImg);
  }*/

  foodObj.display();
  
  drawSprites();
  textSize(20);
  stroke("black");
  text("food: " + foodStock, 200, 50);
}

function writeStock(foodStock1){
    if (foodStock1<=0){
      foodStock1 = 0
    }
    else{
      foodStock1 = foodStock1 - 1;  
    }
    database.ref("/").update(
      {food: foodStock1}
      
      }
      )
}

function addFood(){

}




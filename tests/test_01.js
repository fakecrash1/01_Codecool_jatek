//Create the background sprite
background = createSprite(200, 200);
background.setAnimation("stage_1");

//Create the end game sprite
endGame  = createSprite(200, 200);
endGame.setAnimation("space_1");
endGame.visible = false;

//Create hero sprites
var hero1 = createSprite(50, 290);
hero1.scale = 0.3;
hero1.setAnimation("hero1");

var hero2 = createSprite(350, 290);
hero2.scale = 0.3;
hero2.setAnimation("hero2");

//Create boss sprite
var boss = createSprite(200, 80);
boss.scale = 0.35;
boss.setAnimation("boss");

//Create book sprite
var book = createSprite(200, 90);
book.scale = 0.2;
book.setAnimation("book_1");
book.visible = true;

//Create joy sprite
var joy =createSprite(50,50);
joy.setAnimation("joy");
joy.scale = 0.4;
joy.visible = false;

//Create start screen sprite
welcome = createSprite(200,200);
welcome.setAnimation("start");
welcome.scale = 0.15;

//Define game settings
var speed = 5;
var counter1 = 0;
var counter2 = 0;

function draw() {
// Draw all sprites
drawSprites();
// Set text properties and display scores
fill("white");
textSize(16);
text("Brown\n"+counter1, 25, 375);
text("Blue\n"+"     "+counter2, 340, 375);

// Controls

// Move heroes to the left
if (keyDown("left") && hero2.x > 35) {
hero2.x = hero2.x - speed;
}
if (keyDown("a") && hero1.x > 35) {
hero1.x = hero1.x - speed;
}

// Move heroes to the right
if (keyDown("right") && hero2.x < 365) {
hero2.x = hero2.x + speed;
}
if (keyDown("d") && hero1.x < 365) {
hero1.x = hero1.x + speed;
}

// Make heroes jump
if (keyDown("w") && hero1.y > 150) {
jump(hero1);
} else {
fall(hero1);
}

if (keyDown("up") && hero2.y > 150) {
jump(hero2);
} else {
fall(hero2);
}

// Throw book and drop joy when space key is pressed
if (keyWentDown("space")) {
welcome.visible = false;
bookThrow();
joyDrop();
}

// Check if book is touching heroes
if (book.isTouching(hero1)) {
counter1++;
bookReset();
bookThrow();
}

if (book.isTouching(hero2)) {
counter2++;
bookReset();
bookThrow();
}

// Reset book when it goes off screen
if (book.x < 0 || book.x > 400 || book.y > 400) {
bookReset();
bookThrow();
}

// Check if joy is touching heroes
if (joy.isTouching(hero1)) {
// If joy touches hero1, decrease the score of hero1
counter1--;
// Reset the position of joy
joyReset();
// Drop a new joy from the top
joyDrop();
}

if (joy.isTouching(hero2)) {
// If joy touches hero2, decrease the score of hero2
counter2--;
// Reset the position of joy
joyReset();
// Drop a new joy from the top
joyDrop();
}

// Reset joy when it goes off screen
if (joy.x < 0 || joy.x > 400 || joy.y > 400) {
// If joy goes off screen, reset its position
joyReset();
// Drop a new joy from the top
joyDrop();
}

// Check if either hero has reached the score limit
if (counter1 >= 10) {
// If hero1's score reaches 10, end the game with hero1 as the winner
endGameSequence("Brown");
}

if (counter2 >= 10) {
// If hero2's score reaches 10, end the game with hero2 as the winner
endGameSequence("Blue");
}
}

// Print the current date to the console
var date = new Date()
console.log(date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate())

// Function definitions

// Make a hero jump
function jump(hero) {
// Decrease the y position of the hero to make it move upwards
hero.y = hero.y - speed;
}

// Make a hero fall
function fall(hero) {
// If the hero is above the ground level, increase its y position to make it fall down
if (hero.y < 290) {
hero.y = hero.y + speed;
}
}

// Randomize the location of the boss
function bossLocation() {
// Set the x position of the boss to a random value between 50 and 350
boss.x = randomNumber(50,350);
}

// Randomize the location of joy
function joyLocation() {
// Set the x position of joy to a random value between 50 and 350
joy.x = randomNumber(50,350);
}

// Drop joy from the top of the screen
function joyDrop() {
// Set the y velocity of joy to a random value between 1 and 10
joy.velocityY = randomNumber(1,10);
// Set the x velocity of joy to a random value between -5 and 5
joy.velocityX = randomNumber(-5,5);
// Make joy visible
joy.visible = true;
// Set the y position of joy to 40
joy.y = 40;
}

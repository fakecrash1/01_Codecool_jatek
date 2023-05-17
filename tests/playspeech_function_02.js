/////*****OUT OF DRAW LOOP*****\\\\\

playSpeech("Üdvözöl a 'Kávészünet' csapat. Jó játékot!", "female", "Magyar");

//Log actual Date to console
var date = new Date()
console.log("Today's date is: "+date.getFullYear()+"/"+(date.getMonth()+1)+"/"+date.getDate())

//Background
background = createSprite(200, 200);
background.setAnimation("stage_1");

endGame  = createSprite(200, 200);
endGame.setAnimation("space_1");
endGame.visible = false;

///VARIABLES

//Start screen
welcome = createSprite(200,200);
welcome.setAnimation("start");
welcome.scale = 0.15;

//Default settings
var speed = 5;
var counter1 = 0;
var counter2 = 0;


///CHARACTERS

//Brown
var hero1 = createSprite(50, 290);
hero1.scale = 0.3;
hero1.setAnimation("hero1");
//Blue
var hero2 = createSprite(350, 290);
hero2.scale = 0.3;
hero2.setAnimation("hero2");
//Boss
var boss = createSprite(200, 80);
boss.scale = 0.35;
boss.setAnimation("boss");


///ITEMS

//book
var book = createSprite(200, 90);
book.scale = 0.2; //height 31.25px
book.setAnimation("book_1");
book.visible = true;
//joystick
var joy =createSprite(50,50);
joy.setAnimation("joy");
joy.scale = 0.4;
joy.visible = false;



//MOVEMENT
var left 

var herojump = hero1, hero2;



///FUNCTIONS

//Boss Movement
function bossLocation() {
    boss.x = randomNumber(50,350);
}

//Joystick drop
function joyLocation() {
    joy.x = randomNumber(50,350);}
    
function joyDrop() {
    joy.velocityY = randomNumber(1,10);
    joy.velocityX = randomNumber(-5,5);
    joy.visible = true;
    joy.y = 40;
}

//Book Throw
function bookThrow() {
    book.x = boss.x;
    book.y = 90;
    book.visible = true;
    book.velocityY = randomNumber(1,10);
    book.velocityX = randomNumber(-5,5);
};

//Jump & Fall
function jump(hero) {
    hero.y = hero.y - speed;}; 
    
function fall(hero) {
    if (hero.y < 290) {
        hero.y = hero.y + speed;
    }}



/////*****  DRAW LOOP BEGINS  *****\\\\\

//DRAW LOOP
function draw() {
    drawSprites();
    fill("white")
    textSize(16);
    //Counters
    text("Brown\n"+counter1, 25, 375);
    text("Blue\n"+"     "+counter2, 340, 375);

    var randomspeed = randomNumber (1, 10);    



/// CONTROLS

    //Left
    if (keyDown("left") && hero2.x > 35) {
    hero2.x = hero2.x - speed
    }
    if (keyDown("a") && hero1.x > 35) {
    hero1.x = hero1.x - speed
    };

    //Right
    if (keyDown("right") && hero2.x < 365) {
    hero2.x = hero2.x + speed
    };
    if (keyDown("d") && hero1.x < 365) {
    hero1.x = hero1.x + speed
    };

    //Jump & Fall
    if (keyDown("w") && hero1.y > 150) {
    jump(hero1);
    } 
    else {
    fall(hero1);
    };

    if (keyDown("up") && hero2.y > 150) {
    jump(hero2);
    } else {
    fall(hero2);
    };

/// GAME MECHANIC

    //Start game / PRESS SPACE
    if (keyWentDown("space")) {
        welcome.visible = false;
        bookThrow();
        joyDrop();
    }

    //Touching / Contact
    if (book.isTouching(hero1)) {
        counter1++;
        book.visible = false;
        book.velocityY = 0;
        book.velocityX = 0;
        book.x = 0;
        book.y = 0;
        bossLocation();
        bookThrow();
    };

    if (book.isTouching(hero2)) {
        counter2++;
        book.visible = false;
        book.velocityY = 0;
        book.velocityX = 0;
        bossLocation();
        bookThrow();
    };

///ITEMS

    //Book
    if (book.x < 0 || book.x > 400 || book.y > 400) {
        bossLocation();
        bookThrow();
    };

    //Counter
    if (counter1 == 10) {
        book.x = 0;
        book.y = 0;
        joy.x = 0;
        joy.y = 0;
        book.visible = false;
        hero1.visible = false;
        hero2.visible = false;
        boss.visible = false;
        endGame.visible = true;
        joy.visible =false;
        fill("white");
        textAlign(CENTER, TOP);
        textSize(20);
        text("Well Done!", 200,200);
        text("Brown is now a Full-Stack Developer!", 200, 220)
    } 

        if (counter2 == 10) {
        book.x = 0;
        book.y = 0;
        joy.x = 0;
        joy.y = 0;
        book.visible = false;
        hero1.visible = false;
        hero2.visible = false;
        boss.visible = false;
        joy.visible = false;
        endGame.visible = true;
        fill("white");
        textAlign(CENTER, TOP);
        textSize(20);
        text("Well Done!", 200,200);
        text("Blue is now a Full-Stack Developer!", 200, 220)
    }

    //Joystick
    if (joy.isTouching(hero1)) {
        counter1--;
        joy.visible = false;
        joy.velocityY = 0;
        joy.velocityX = 0;
        joy.x = 0;
        joy.y = 0;
        joyDrop();
        joyLocation();
    };

    if (joy.isTouching(hero2)) {
        counter2--;
        joy.visible = false;
        joy.velocityY = 0;
        joy.velocityX = 0;
        joyDrop();
        joyLocation();
    };

    if (joy.x < 0 || joy.x > 400 || joy.y > 400) {
        joyDrop();
        joyLocation();
        };
}



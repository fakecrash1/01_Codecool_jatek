background = createSprite(200, 200);
background.setAnimation("stage_1");


//heroes
var hero1 = createSprite(50, 290);
hero1.scale = 0.3;
hero1.setAnimation("hero1");

var hero2 = createSprite(350, 290);
hero2.scale = 0.3;
hero2.setAnimation("hero2");


//boss
var boss = createSprite(200, 80);
boss.scale = 0.35;
boss.setAnimation("boss");


//book
var book = createSprite(250, 200);
book.scale = 0.2;
book.setAnimation("book_1");
book.visible = true;


//settings
var speed = 5;
var counter1 = 0;
var counter2 = 0;

//movement
var left 


function draw() {
    drawSprites();
    fill("white")
    textSize(16);
    text("Brown\n"+counter1, 25, 375);
    text("Blue\n"+"     "+counter2, 340, 375);

    // controls

    if (keyDown("left") && hero2.x > 35) {
    hero2.x = hero2.x - speed

    }
    if (keyDown("right") && hero2.x < 365) {
        hero2.x = hero2.x + speed

    }
    if (keyDown("a") && hero1.x > 35) {
        hero1.x = hero1.x - speed
        }
        if (keyDown("d") && hero1.x < 365) {
        hero1.x = hero1.x + speed
        }
    //throw
    if (keyDown("space")) {
        book.x = boss.x;
        book.y = 90;
        book.visible = true;
        book.velocityY = speed
        } 
};

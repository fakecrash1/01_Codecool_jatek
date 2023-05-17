background = createSprite(200, 200);
background.setAnimation("stage_1");


//heroes
var hero1 = createSprite(50, 290);
hero1.scale = 0.3;
hero1.setAnimation("hero1");

var hero2 = createSprite(350, 290);
hero2.scale = 0.3;
hero2.setAnimation("hero2");

var herojump = hero1, hero2;

//boss
var boss = createSprite(200, 80);
boss.scale = 0.35;
boss.setAnimation("boss");


//book
var book = createSprite(250, 200);
book.scale = 0.2; //height 31.25px
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

var randomspeed = randomNumber (1, 10);

function jump(hero) {
    hero.y = hero.y - speed;
}; 

function fall(hero) {
  if (hero.y < 290) {
    hero.y = hero.y + speed;
  }
}



// controls

//move left
  if (keyDown("left") && hero2.x > 35) {
    hero2.x = hero2.x - speed
  }
  if (keyDown("a") && hero1.x > 35) {
    hero1.x = hero1.x - speed
  };
//move right
  if (keyDown("right") && hero2.x < 365) {
    hero2.x = hero2.x + speed
  };
  if (keyDown("d") && hero1.x < 365) {
    hero1.x = hero1.x + speed
  };
//jump
  if (keyDown("w") && hero1.y > 150) {
    jump(hero1);
  } else {
    fall(hero1);
  };
  
   if (keyDown("up") && hero2.y > 150) {
    jump(hero2);
  } else {
    fall(hero2);
  };
//throw
  setInterval(function() {
  book.x = boss.x;
  book.y = book.y+1;
  book.visible = true;
  book.velocityY = randomspeed;
}, 3000);
  book.rotation += 5
  
  if (book.isTouching(hero1)) {
    book.visible = false;
    book.x = 200;
    book.y = 200;
    book.velocityY = 0;
    counter1++;
  }
  
  if (book.isTouching(hero2)) {
    book.visible = false;
    book.x = 200;
    book.y = 200;
    book.velocityY = 0;
    counter2++;
  }
}

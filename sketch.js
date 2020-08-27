var gameState = 0;
var back;

function preload() {
  back_img = loadImage("Images/th.jpg");
  title_img = loadImage("Images/THE NAME.png");
  play_img = loadImage("Images/play.png");
  accept_img = loadImage("Images/accept.png");
  info_img = loadImage("Images/info.png");

  car_img = loadImage("Images/car.png");
  cartr_img = loadImage("Images/car_r.png");
  cartl_img = loadImage("Images/car_l.png");
  cartd_img = loadImage("Images/car_d.png");

  gun_img = loadImage("Images/gun.png");
  gunr_img = loadImage("Images/gun_r.png");
  gunl_img = loadImage("Images/gun_l.png");
  gund_img = loadImage("Images/gun_d.png");

  eff_img = loadImage("Images/effect.png");
  effr_img = loadImage("Images/effectr.png");
  effl_img = loadImage("Images/effectl.png");
  effd_img = loadImage("Images/effectd.png");

  enm_img = loadImage("Images/enm.png");
  opp_img = loadImage("Images/opp.png");

  tut_img = loadImage("Images/map.jpg");
  next_img = loadImage("Images/next.jpg");

  win_img = loadImage("Images/Win.png");
  lose_img = loadImage("Images/Lose.png");
  exit_img = loadImage("Images/exit.jpg");
}

function setup() {
  createCanvas(1365, 655);
  strokeWeight(8);

  //main form, sprites
  if (gameState === 0) {
    back = createSprite(682.5, 240, 10, 10);
    back.addImage(back_img);
    back.scale = 1.1;
  }

  //second form, sprites
  title = createSprite(710, 100, 10, 10);
  title.addImage(title_img);
  title.scale = 0.75;
  title.visible = false;

  abutton = createSprite(1300, 600, 30, 30);
  abutton.addImage(accept_img);
  abutton.scale = 0.3;
  abutton.visible = false;

  //third form
  tutorial = createSprite(385, 325, 230, 120);
  tutorial.addImage(tut_img);
  tutorial.scale = 1;
  tutorial.visible = false;

  levelinfo = createSprite(1150, 325, 500, 750);
  levelinfo.shapeColor = "black";
  levelinfo.visible = false;

  info = createSprite(1133, 110, 549, 49);
  info.addImage(info_img);
  info.scale = 0.53;
  info.visible = false;

  button = createSprite(1000, 630, 30, 30);
  button.addImage(play_img);
  button.scale = 0.8;
  button.visible = false;

  next = createSprite(850, 630, 10, 10);
  next.addImage(next_img);
  next.scale = 0.2;
  next.visible = false;

  //game
  border1 = createSprite(680, 0, 1400, 15);
  border1.shapeColor = "black";
  border1.visible = false;

  border2 = createSprite(680, 655, 1400, 15);
  border2.shapeColor = "black";
  border2.visible = false;

  border3 = createSprite(0, 325, 15, 680);
  border3.shapeColor = "black";
  border3.visible = false;

  border4 = createSprite(1365, 325, 15, 680);
  border4.shapeColor = "black";
  border4.visible = false;

  barrier1 = createSprite(125, 325, 20, 450);
  barrier1.shapeColor = "black";
  barrier1.visible = false;

  barrier2 = createSprite(725, 540, 900, 20);
  barrier2.shapeColor = "black";
  barrier2.visible = false;

  barrier3 = createSprite(725, 110, 900, 20);
  barrier3.shapeColor = "black";
  barrier3.visible = false;

  barrier4 = createSprite(1170, 325, 20, 180);
  barrier4.shapeColor = "black";
  barrier4.visible = false;

  barrier5 = createSprite(280, 325, 20, 180);
  barrier5.shapeColor = "black";
  barrier5.visible = false;

  centre = createSprite(725, 325, 120, 120);
  centre.shapeColor = "black";
  centre.visible = false;

  escapez = createSprite(60, 325, 70, 70);
  escapez.shapeColor = "green";
  escapez.visible = false;

  win = createSprite(camera.x, camera.y + 300, 10, 10);
  win.addImage(win_img);
  win.visible = false;

  lose = createSprite(10, 200, 10, 10);
  lose.addImage(lose_img);
  lose.visible = false;

  exit = createSprite(10, 200, 10, 10);
  exit.addImage(exit_img);
  exit.scale = 0.7;
  exit.visible = false;

  car = createSprite(1320, 300, 10, 10);
  car.addImage(car_img);
  car.scale = 0.8;
  car.visible = false;

  enm = createSprite(70, 60, 50, 50);
  enm.addImage(enm_img);
  enm.scale = 0.45;
  enm.setCollider("rectangle", 570, 0, 1500, 150);
  enm.visible = false;
  enmb = createSprite(enm.x, enm.y, enm.width, enm.height);
  enmb.visible = false;

  enm2 = createSprite(70, 590, 50, 50);
  enm2.addImage(enm_img);
  enm2.scale = 0.45;
  enm2.setCollider("rectangle", 570, 0, 1500, 150);
  enm2.visible = false;
  enm2b = createSprite(enm2.x, enm2.y, enm2.width, enm2.height);
  enm2b.visible = false;

  enm3 = createSprite(170, 200, 50, 50);
  enm3.addImage(enm_img);
  enm3.scale = 0.45;
  enm3.visible = false;

  enm4 = createSprite(170, 450, 50, 50);
  enm4.addImage(enm_img);
  enm4.scale = 0.45;
  enm4.visible = false;

  wfinish = createSprite(camera.x + 50, camera.y + 500, 10, 10);
  wfinish.addImage(next_img);
  wfinish.scale = 1;
  wfinish.visible = false;

  //bullets
  bul = createSprite(enm.x + 40, enm.y + 10, 15, 5);
  bul.shapeColor = "yellow";
  bul.visible = false;

  bul2 = createSprite(enm.x + 40, enm.y - 10, 15, 5);
  bul2.shapeColor = "yellow";
  bul2.visible = false;

  bul3 = createSprite(enm2.x + 40, enm2.y + 10, 15, 5);
  bul3.shapeColor = "yellow";
  bul3.visible = false;

  bul4 = createSprite(enm2.x + 40, enm2.y - 10, 15, 5);
  bul4.shapeColor = "yellow";
  bul4.visible = false;

  pbul1 = createSprite(car.x, car.y - 40, 10, 5);
  pbul1.shapeColor = "yellow";
  pbul1.visible = false;

  pbul2 = createSprite(car.x, car.y - 40, 10, 5);
  pbul2.shapeColor = "yellow";
  pbul2.visible = false;

  pbul3 = createSprite(car.x, car.y - 40, 10, 5);
  pbul3.shapeColor = "yellow";
  pbul3.visible = false;

  pbul4 = createSprite(car.x, car.y - 40, 10, 5);
  pbul4.shapeColor = "yellow";
  pbul4.visible = false;

  change = createSprite(1320, 620, 10, 10);
  change.addImage(next_img);
  change.scale = 0.3;
  change.visible = false;


  //next level
  nborder1 = createSprite(680, -200, 2000, 15);
  nborder1.shapeColor = "black";
  nborder1.visible = false;

  nborder2 = createSprite(680, 855, 2000, 15);
  nborder2.shapeColor = "black";
  nborder2.visible = false;

  nborder3 = createSprite(-300, 325, 15, 1080);
  nborder3.shapeColor = "black";
  nborder3.visible = false;

  nborder4 = createSprite(1665, 325, 15, 1080);
  nborder4.shapeColor = "black";
  nborder4.visible = false;

  block1 = createSprite(1590, 275, 150, 20);
  block1.shapeColor = "black";
  block1.visible = false;

  block2 = createSprite(1590, 375, 150, 20);
  block2.shapeColor = "black";
  block2.visible = false;

  block3 = createSprite(-225, 275, 150, 20);
  block3.shapeColor = "black";
  block3.visible = false;

  block4 = createSprite(-225, 375, 150, 20);
  block4.shapeColor = "black";
  block4.visible = false;

  block5 = createSprite(1390, 325, 20, 850);
  block5.shapeColor = "black";
  block5.visible = false;

  block6 = createSprite(1100, -100, 600, 20);
  block6.shapeColor = "black";
  block6.visible = false;

  block7 = createSprite(1525, 85, 20, 400);
  block7.shapeColor = "black";
  block7.visible = false;

  block8 = createSprite(1600, 245, 140, 50);
  block8.shapeColor = "black";
  block8.visible = false;

  block9 = createSprite(1525, 561, 20, 380);
  block9.shapeColor = "black";
  block9.visible = false;

  block10 = createSprite(1100, 755, 600, 20);
  block10.shapeColor = "black";
  block10.visible = false;

  block11 = createSprite(600, 25, 10, 450);
  block11.shapeColor = "black";
  block11.visible = false;

  block12 = createSprite(600, 625, 10, 450);
  block12.shapeColor = "black";
  block12.visible = false;

  water1 = createSprite(400, 25, 400, 450);
  water1.shapeColor = "lightblue";
  water1.visible = false;
  water2 = createSprite(400, 625, 400, 450);
  water2.shapeColor = "lightblue";
  water2.visible = false;

  bridge = createSprite(400, 327, 400, 150);
  bridge.shapeColor = "white";
  bridge.visible = false;

  car2 = createSprite(1600, 325, 10, 10);
  car2.addImage(cartl_img);
  car2.scale = 0.8;
  car2.visible = false;

  nbul1 = createSprite(car2.x, car2.y - 40, 10, 5);
  nbul1.shapeColor = "yellow";
  nbul1.visible = false;

  nbul2 = createSprite(car2.x, car2.y - 40, 10, 5);
  nbul2.shapeColor = "yellow";
  nbul2.visible = false;

  nbul3 = createSprite(car2.x, car2.y - 40, 10, 5);
  nbul3.shapeColor = "yellow";
  nbul3.visible = false;

  nbul4 = createSprite(car2.x, car2.y - 40, 10, 5);
  nbul4.shapeColor = "yellow";
  nbul4.visible = false;

  opp1 = createSprite(1300, 0, 10, 10);
  opp1.addImage(opp_img);
  opp1.scale = 0.45;
  opp1.visible = false;
  opp1.setCollider("rectangle", opp1.x - 2200, 0, 2000, 250);
  opp1b = createSprite(opp1.x, opp1.y, opp1.width, opp1.height);
  opp1b.visible = false;

  opp2 = createSprite(1300, 200, 10, 10);
  opp2.addImage(opp_img);
  opp2.scale = 0.45;
  opp2.visible = false;

  opp3 = createSprite(1300, 400, 10, 10);
  opp3.addImage(opp_img);
  opp3.scale = 0.45;
  opp3.visible = false;

  opp4 = createSprite(1300, 600, 10, 10);
  opp4.addImage(opp_img);
  opp4.scale = 0.45;
  opp4.visible = false;
  opp4.setCollider("rectangle", opp4.x - 2200, 0, 2000, 250);
  opp4b = createSprite(opp4.x, opp4.y, opp4.width, opp4.height);
  opp4b.visible = false;

  obul1 = createSprite(opp1.x - 40, opp1.y - 6, 10, 5);
  obul1.shapeColor = "yellow";
  obul1.visible = false;
  obul2 = createSprite(opp1.x - 40, opp1.y + 6, 10, 5);
  obul2.shapeColor = "yellow";
  obul2.visible = false;

  obul3 = createSprite(opp2.x - 40, opp2.y - 6, 10, 5);
  obul3.shapeColor = "yellow";
  obul3.visible = false;
  obul4 = createSprite(opp2.x - 40, opp2.y + 6, 10, 5);
  obul4.shapeColor = "yellow";
  obul4.visible = false;

  obul5 = createSprite(opp3.x - 40, opp3.y - 6, 10, 5);
  obul5.shapeColor = "yellow";
  obul5.visible = false;
  obul6 = createSprite(opp3.x - 40, opp3.y + 6, 10, 5);
  obul6.shapeColor = "yellow";
  obul6.visible = false;

  obul7 = createSprite(opp4.x - 40, opp4.y - 6, 10, 5);
  obul7.shapeColor = "yellow";
  obul7.visible = false;
  obul8 = createSprite(opp4.x - 40, opp4.y + 6, 10, 5);
  obul8.shapeColor = "yellow";
  obul8.visible = false;

  opp5 = createSprite(1600, -150, 5, 5);
  opp5.addImage(opp_img);
  opp5.scale = 0.45;
  opp5.visible = false;

  opp6 = createSprite(1600, 815, 5, 5);
  opp6.addImage(opp_img);
  opp6.scale = 0.45;
  opp6.visible = false;

  nlose = createSprite(10, 200, 10, 10);
  nlose.addImage(lose_img);
  nlose.visible = false;

  nexit = createSprite(10, 200, 10, 10);
  nexit.addImage(exit_img);
  nexit.scale = 0.7;
  nexit.visible = false;

  nescapez = createSprite(-250,325,60,60);
  nescapez.shapeColor = "green";
  nescapez.visible = false;

  nwin = createSprite(camera.x - 200, camera.y + 300, 10, 10);
  nwin.addImage(win_img);
  nwin.visible = false;

  nwfinish = createSprite(camera.x + 50, camera.y + 500, 10, 10);
  nwfinish.addImage(next_img);
  nwfinish.scale = 1;
  nwfinish.visible = false;
}


function draw() {
  background(255, 255, 255);

  //Main form
  if (gameState === 0) {
    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(45);
    text("Press space or click over this to start", 350, 570);
  }

  //change states from 0 to 1
  if ((keyCode === 32 || mousePressedOver(back)) && gameState === 0) {
    gameState = 1;
  }

  //info form
  if (gameState === 1) {
    back.destroy();
    title.visible = true;
    abutton.visible = true;

    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(20);
    text("DAY 365 of more suffering -- 1/1/2099", 10, 240);
    text("This day cannot be counted as a new year. Exactly one year ago, the whole worlds water source started decreasing, everyone started to panic. ", 10, 280);
    text("People forgot about humanity. They didn't even take a chance to look back and help the poor. The poor did not just suffer but also starved to death.", 10, 320);
    text("The new babies born were either very unhealthy or with various diseases. Now, the people whorever had a child were called to be a cursed family.", 10, 360);
    text("The rich got richer and the poor got poorer. A half litre bottle of water were sold at $110. The rich could afford it but not us.", 10, 400);

    text("By this time, 'THE MAN WITH MONEY'  or the aristocrats started running the world. As they were the  'ONLY HOPE' , they started misusing their power. ", 10, 450);
    text("They started building factories, making the people forcefully work, and ofcourse have many slaves. Well, it felt like we went back to the medieval period.", 10, 490);
    text("Few people went on with the injustice happening to them but some people like me couldn't tolerate it anymore. So us intolorents formed a team named", 10, 530);
    text("'THE REBELS'. The rebels including me started planned everything and have everything setup. Now, all we want is a perfect excecution,", 10, 570);
    text("So with that, said lets get you started.", 10, 610);

    text("Press this to continue.", 1080, 645);
  }

  //changing states from 1 to 2
  if (mousePressedOver(abutton) && gameState === 1) {
    gameState = 2;
    title.visible = false;
    abutton.visible = false;
  }

  //main menu
  if (gameState === 2) {
    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(45);
    text("Chapter - 1", 125, 60);
    text("A War at 2099", 375, 60);

    tutorial.visible = true;
    text("Tutorial", 300, 450);

    push();
    textSize(25);
    text("skip tutorial", 690, 640);
    pop();

    button.visible = true;
    levelinfo.visible = true;
    info.visible = true;
    next.visible = true;

    // changing states from 2 to 3
    if (mousePressedOver(button)) {
      gameState = 3;
      tutorial.visible = false;
      button.visible = false;
      levelinfo.visible = false;
      info.visible = false;
      next.visible = false;
    }

    if (mousePressedOver(next)) {
      gameState = 6;
      tutorial.visible = false;
      button.visible = false;
      levelinfo.visible = false;
      info.visible = false;
      next.visible = false;
    }


  }

  //game
  if (gameState === 3) {
    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(20);
    text("Use arrow keys to", 1195, 100);
    text("move", 1240, 115);
    text("Sorry no WASD", 1195, 540);
    text("Ay mate, Major Wright here..", 1390, 200);
    text("Get outta there, those punks are patrolling..", 1390, 230);
    text("Get to the escape zone at the end of map,", 1390, 260);
    text("It's green in colour..", 1390, 290);
    text("Mate, they do shoot..", 1390, 320);
    text("Use space to shoot or shoot that button..", 1390, 350);
    text("You can only shoot when your'e moving", 1390, 380);

    car.collide(border1);
    car.collide(border2);
    car.collide(border3);
    car.collide(border4);

    car.collide(barrier1);
    car.collide(barrier2);
    car.collide(barrier3);
    car.collide(barrier4);
    car.collide(barrier5);

    car.collide(centre);

    border1.visible = true;
    border2.visible = true;
    border3.visible = true;
    border4.visible = true;

    barrier1.visible = true;
    barrier2.visible = true;
    barrier3.visible = true;
    barrier4.visible = true;
    barrier5.visible = true;

    centre.visible = true;
    escapez.visible = true;

    enm.visible = true;
    enm2.visible = true;
    enm3.visible = true;
    enm4.visible = true;

    car.visible = true;

    camera.position.x = car.x;
    camera.position.y = car.y;

    enm3.velocityX = 7;
    enm4.velocityX = 7;

    //movement
    if (keyDown(UP_ARROW)) {
      car.position.y = car.position.y - 8;
      car.addImage(car_img);
      car.setCollider("rectangle", 0, 0, car.width, car.height);

      if (keyWentDown("space")) {
        pbul1.x = car.x;
        pbul1.y = car.y - 40;
        pbul1.visible = true;
        pbul1.velocityY = -20;
        if (pbul1.y <= car.y - 2000) {
          pbul1.x = car.x;
          pbul1.y = car.y - 40;
          pbul1.velocityY = 0;
        }
      }
    }
    if (pbul1.isTouching(enm3)) {
      enm3.destroy();
    }
    if (pbul1.isTouching(enm4)) {
      enm4.destroy();
    }
    if (pbul1.isTouching(enmb)) {
      enmb.destroy();
      enm.destroy();
      bul.destroy();
      bul2.destroy();
    }
    if (pbul1.isTouching(enm2b)) {
      enm2b.destroy();
      enm2.destroy();
      bul3.destroy();
      bul4.destroy();
    }

    if (keyDown(DOWN_ARROW)) {
      car.position.y = car.position.y + 8;
      car.addImage(cartd_img);
      car.setCollider("rectangle", 0, 0, car.width, car.height);

      if (keyWentDown("space")) {
        pbul2.x = car.x;
        pbul2.y = car.y + 40;
        pbul2.visible = true;
        pbul2.velocityY = 20;
        if (pbul2.y >= car.y + 2000) {
          pbul2.x = car.x;
          pbul2.y = car.y + 40;
          pbul2.velocityY = 0;
        }
      }
    }
    if (pbul2.isTouching(enm3)) {
      enm3.destroy();
    }
    if (pbul2.isTouching(enm4)) {
      enm4.destroy();
    }
    if (pbul2.isTouching(enmb)) {
      enmb.destroy();
      enm.destroy();
      bul.destroy();
      bul2.destroy();
    }
    if (pbul2.isTouching(enm2b)) {
      enm2b.destroy();
      enm2.destroy();
      bul3.destroy();
      bul4.destroy();
    }

    if (keyDown(LEFT_ARROW)) {
      car.addImage(cartl_img);
      car.position.x = car.position.x - 7;
      car.setCollider("rectangle", 0, 0, car.height + 40, car.width - 20);

      if (keyWentDown("space")) {
        pbul3.x = car.x - 40;
        pbul3.y = car.y;
        pbul3.visible = true;
        pbul3.velocityX = -20;
        if (pbul3.y <= car.x - 2000) {
          pbul3.x = car.x - 40;
          pbul3.y = car.y;
          pbul3.velocityX = 0;
        }
      }
    }
    if (pbul3.isTouching(enm3)) {
      enm3.destroy();
    }
    if (pbul3.isTouching(enm4)) {
      enm4.destroy();
    }
    if (pbul3.isTouching(enmb)) {
      enmb.destroy();
      enm.destroy();
      bul.destroy();
      bul2.destroy();
    }
    if (pbul3.isTouching(enm2b)) {
      enm2b.destroy();
      enm2.destroy();
      bul3.destroy();
      bul4.destroy();
    }

    if (keyDown(RIGHT_ARROW)) {
      car.addImage(cartr_img);
      car.position.x = car.position.x + 7;
      car.setCollider("rectangle", 0, 0, car.height + 40, car.width - 20);

      if (keyWentDown("space")) {
        pbul4.x = car.x + 40;
        pbul4.y = car.y;
        pbul4.visible = true;
        pbul4.velocityX = 20;
        if (pbul4.y >= car.x + 2000) {
          pbul4.x = car.x + 40;
          pbul4.y = car.y;
          pbul4.velocityX = 0;
        }
      }
    }
    if (pbul4.isTouching(enm3)) {
      enm3.destroy();
    }
    if (pbul4.isTouching(enm4)) {
      enm4.destroy();
    }
    if (pbul4.isTouching(enmb)) {
      enmb.destroy();
      enm.destroy();
      bul.destroy();
      bul2.destroy();
    }
    if (pbul4.isTouching(enm2b)) {
      enm2b.destroy();
      enm2.destroy();
      bul3.destroy();
      bul4.destroy();
    }


    if (car.isTouching(enm)) {
      bul.velocityX = 21;
      bul.visible = true;

      bul2.velocityX = 20;
      bul2.visible = true;
    }

    if (bul.x >= 700) {
      bul.x = enm.x + 40;
    }

    if (bul2.x >= 700) {
      bul2.x = enm.x + 40;
    }


    if (car.isTouching(enm2)) {
      bul3.velocityX = 21;
      bul3.visible = true;

      bul4.velocityX = 20;
      bul4.visible = true;
    }

    if (bul3.x >= 700) {
      bul3.x = enm2.x + 40;
    }

    if (bul4.x >= 700) {
      bul4.x = enm2.x + 40;
    }

    if (bul.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }

    if (bul2.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }

    if (bul3.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }

    if (bul4.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }

    if (enm3.isTouching(border4)) {
      enm3.x = 200;
    }

    if (enm4.isTouching(border4)) {
      enm4.x = 200;
    }

    if (enm3.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }

    if (enm4.isTouching(car)) {
      car.visible = false;
      gameState = 5;
    }
  }

  if (car.isTouching(escapez)) {
    gameState = 4;
    win.visible = true;
    wfinish.visible = true;
  }

  if (mousePressedOver(wfinish) && gameState === 4) {
    gameState = 6;
    camera.x = 682.5;
    camera.y = 322.5;

    win.visible = false;
    wfinish.visible = false;

    border1.visible = false;
    border2.visible = false;
    border3.visible = false;
    border4.visible = false;

    barrier1.visible = false;
    barrier2.visible = false;
    barrier3.visible = false;
    barrier4.visible = false;
    barrier5.visible = false;

    centre.visible = false;
    escapez.visible = false;

    enm.visible = false;
    enm2.visible = false;
    enm3.visible = false;
    enm4.visible = false;

    car.destroy();

  }

  if (gameState === 5) {
    lose.x = car.x;
    lose.y = car.y - 100;
    lose.visible = true;

    exit.x = car.x;
    exit.y = car.y + 50;
    exit.visible = true;
  }

  if (mousePressedOver(exit) && gameState === 5) {
    gameState = 2;

    car.x = 1320;
    car.y = 300;

    enm3.x = 170;
    enm4.x = 170;

    camera.x = 682.5;
    camera.y = 322.5;

    lose.visible = false;
    exit.visible = false;

    border1.visible = false;
    border2.visible = false;
    border3.visible = false;
    border4.visible = false;

    barrier1.visible = false;
    barrier2.visible = false;
    barrier3.visible = false;
    barrier4.visible = false;
    barrier5.visible = false;

    centre.visible = false;
    escapez.visible = false;

    enm.visible = false;
    enm2.visible = false;
    enm3.visible = false;
    enm4.visible = false;

    car.visible = false;
  }

  if (gameState === 6) {
    change.visible = true;

    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(50);
    text("The Rebellion", 500, 100);

    textSize(25);
    text("Welcome to the rebellion, Major Wright is the only military officer in the rebels, he's also a double agent, so, he is our only intel.", 10, 180);
    text("I'm quite impressed by what you did there in your tutorials, but that's not enough. I want you to be more stronger and better at this.", 10, 220);
    text("Me and Major Wright have come up with a plan to have a suprise attack on them.", 10, 260);
    text("In the Ivory plateaus, those punks have setup a factory near our only water source. So we have to bring that thing down.", 10, 300);
    text("BUT they have kept real high security over there. So we have to sneek in.", 10, 340);
    text("Looking at your driving skills, we have decided that you will be driving major's car, while he can shoot.", 10, 380);
    text("By the way GOOD LUCK! and don't DIE....", 10, 420);

    if (mousePressedOver(change)) {
      gameState = 7;
      change.visible = false;
    }

  }

  if (gameState === 7) {
    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(50);
    text("No bullets this game",1700,325);
    text("Just kidding",-100,225);

    camera.x = car2.x;
    camera.y = car2.y;

    car2.collide(nborder1);
    car2.collide(nborder2);
    car2.collide(nborder3);
    car2.collide(nborder4);

    car2.collide(block1);
    car2.collide(block2);
    car2.collide(block3);
    car2.collide(block4);
    car2.collide(block5);
    car2.collide(block6);
    car2.collide(block7);
    car2.collide(block9);
    car2.collide(block10);

    nborder1.visible = true;
    nborder2.visible = true;
    nborder3.visible = true;
    nborder4.visible = true;

    block1.visible = true;
    block2.visible = true;
    block3.visible = true;
    block4.visible = true;
    block5.visible = true;
    block6.visible = true;
    block7.visible = true;
    block8.visible = true;
    block9.visible = true;
    block10.visible = true;
    block11.visible = true;
    block12.visible = true;

    water1.visible = true;
    water2.visible = true;  
    bridge.visible = true;
    nescapez.visible = true;

    car2.visible = true;

    opp1.visible = true;
    opp2.visible = true;
    opp3.visible = true;
    opp4.visible = true;
    opp5.visible = true;
    opp6.visible = true;

    opp5.velocityX = -8;
    opp6.velocityX = -8;

    if (opp5.x <= 800) {
      opp5.x = 1600;
    }
    if (opp6.x <= 800) {
      opp6.x = 1600;
    }

    if (car2.isTouching(block8)) {
      car2.y = 390;
    }


    if (keyDown(UP_ARROW)) {
      car2.position.y = car2.position.y - 8;
      car2.addImage(car_img);
      car2.setCollider("rectangle", 0, 0, car2.width, car2.height);

      if (keyWentDown("space")) {
        nbul1.x = car2.x;
        nbul1.y = car2.y - 40;
        nbul1.visible = true;
        nbul1.velocityY = -25;
        if (nbul1.y <= car2.y - 2000) {
          nbul1.x = car2.x;
          nbul1.y = car2.y - 40;
          nbul1.velocityY = 0;
        }
      }
    }

    if (keyDown(DOWN_ARROW)) {
      car2.position.y = car2.position.y + 8;
      car2.addImage(cartd_img);
      car2.setCollider("rectangle", 0, 0, car2.width, car2.height);

      if (keyWentDown("space")) {
        nbul2.x = car2.x;
        nbul2.y = car2.y + 40;
        nbul2.visible = true;
        nbul2.velocityY = 25;
        if (nbul2.y >= car2.y + 2000) {
          nbul2.x = car2.x;
          nbul2.y = car2.y + 40;
          nbul2.velocityY = 0;
        }
      }
    }

    if (keyDown(LEFT_ARROW)) {
      car2.addImage(cartl_img);
      car2.position.x = car2.position.x - 7;
      car2.setCollider("rectangle", 0, 0, car2.height + 40, car2.width - 20);

      if (keyWentDown("space")) {
        nbul3.x = car2.x - 40;
        nbul3.y = car2.y;
        nbul3.visible = true;
        nbul3.velocityX = -25;
        if (nbul3.y <= car2.x - 2000) {
          nbul3.x = car2.x - 40;
          nbul3.y = car2.y;
          nbul3.velocityX = 0;
        }
      }
    }

    if (keyDown(RIGHT_ARROW)) {
      car2.addImage(cartr_img);
      car2.position.x = car2.position.x + 7;
      car2.setCollider("rectangle", 0, 0, car2.height + 40, car2.width - 20);

      if (keyWentDown("space")) {
        nbul4.x = car2.x + 40;
        nbul4.y = car2.y;
        nbul4.visible = true;
        nbul4.velocityX = 25;
        if (nbul4.y >= car2.x + 2000) {
          nbul4.x = car2.x + 40;
          nbul4.y = car2.y;
          nbul4.velocityX = 0;
        }
      }

    }
    if (car2.isTouching(opp1) || car2.isTouching(opp4)) {
      obul1.velocityX = -21;
      obul1.visible = true;

      obul2.velocityX = -20;
      obul2.visible = true;

      obul3.velocityX = -21;
      obul3.visible = true;

      obul4.velocityX = -20;
      obul4.visible = true;

      obul5.velocityX = -20;
      obul5.visible = true;

      obul6.velocityX = -21;
      obul6.visible = true;

      obul7.velocityX = -21;
      obul7.visible = true;

      obul8.velocityX = -20;
      obul8.visible = true;

    }

    if (obul1.x <= opp1.x - 750) {
      obul1.x = opp1.x - 40;
    }
    if (obul2.x <= opp1.x - 750) {
      obul2.x = opp1.x - 40;
    }
    if (obul3.x <= opp2.x - 750) {
      obul3.x = opp2.x - 40;
    }
    if (obul4.x <= opp2.x - 750) {
      obul4.x = opp2.x - 40;
    }
    if (obul5.x <= opp3.x - 750) {
      obul5.x = opp3.x - 40;
    }
    if (obul6.x <= opp3.x - 750) {
      obul6.x = opp3.x - 40;
    }
    if (obul7.x <= opp4.x - 750) {
      obul7.x = opp4.x - 40;
    }
    if (obul8.x <= opp4.x - 750) {
      obul8.x = opp4.x - 40;
    }

    if (nbul1.isTouching(opp1b) || nbul2.isTouching(opp1b) || nbul3.isTouching(opp1b) || nbul4.isTouching(opp1b)) {
      opp1.destroy();
      opp1b.destroy();
      obul1.destroy();
      obul2.destroy();
    }
    if (nbul1.isTouching(opp2) || nbul2.isTouching(opp2) || nbul3.isTouching(opp2) || nbul4.isTouching(opp2)) {
      opp2.destroy();
      obul3.destroy();
      obul4.destroy();
    }
    if (nbul1.isTouching(opp3) || nbul2.isTouching(opp3) || nbul3.isTouching(opp3) || nbul4.isTouching(opp3)) {
      opp3.destroy();
      obul5.destroy();
      obul6.destroy();
    }
    if (nbul1.isTouching(opp4b) || nbul2.isTouching(opp4b) || nbul3.isTouching(opp4b) || nbul4.isTouching(opp4b)) {
      opp4.destroy();
      opp4b.destroy();
      obul7.destroy();
      obul8.destroy();
    }

    if(car2.isTouching(nescapez)){
      gameState = 9;
    }
    if(gameState === 9){
      nwin.visible = true;
      nwfinish.visible = true;
      
      nborder1.visible = false;
      nborder2.visible = false;
      nborder3.visible = false;
      nborder4.visible = false;

      block1.visible = false;
      block2.visible = false;
      block3.visible = false;
      block4.visible = false;
      block5.visible = false;
      block6.visible = false;
      block7.visible = false;
      block8.visible = false;
      block9.visible = false;
      block10.visible = false;
      block11.visible = false;
      block12.visible = false;

      water1.visible = false;
      water2.visible = false;
      bridge.visible = false;

      opp1.visible = false;
      opp2.visible = false;
      opp3.visible = false;
      opp4.visible = false;
      opp5.visible = false;
      opp6.visible = false;

      obul1.visible = false;
      obul2.visible = false;
      obul3.visible = false;
      obul4.visible = false;
      obul5.visible = false;
      obul6.visible = false;
      obul7.visible = false;
      obul8.visible = false;

      nbul1.visible = false;
      nbul2.visible = false;
      nbul3.visible = false;
      nbul4.visible = false;

      car2.destroy();;
    }


    if (car2.isTouching(water1) || car2.isTouching(water2) || car2.isTouching(opp5) || car2.isTouching(opp6) || car2.isTouching(obul1) || car2.isTouching(obul2) || car2.isTouching(obul3) || car2.isTouching(obul4) || car2.isTouching(obul5) || car2.isTouching(obul6) || car2.isTouching(obul7) || car2.isTouching(obul8)) {
      gameState = 8;
    }
    if (gameState === 8) {
      nlose.x = car2.x;
      nlose.y = car2.y - 100;
      nlose.visible = true;

      nexit.x = car2.x;
      nexit.y = car2.y + 50;
      nexit.visible = true;

      car2.x = 1600;
      car2.y = 325;

      opp5.x = 1600;
      opp6.x = 1600;

      nborder1.visible = false;
      nborder2.visible = false;
      nborder3.visible = false;
      nborder4.visible = false;

      block1.visible = false;
      block2.visible = false;
      block3.visible = false;
      block4.visible = false;
      block5.visible = false;
      block6.visible = false;
      block7.visible = false;
      block8.visible = false;
      block9.visible = false;
      block10.visible = false;
      block11.visible = false;
      block12.visible = false;

      water1.visible = false;
      water2.visible = false;
      bridge.visible = false;

      opp1.visible = false;
      opp2.visible = false;
      opp3.visible = false;
      opp4.visible = false;
      opp5.visible = false;
      opp6.visible = false;

      obul1.visible = false;
      obul2.visible = false;
      obul3.visible = false;
      obul4.visible = false;
      obul5.visible = false;
      obul6.visible = false;
      obul7.visible = false;
      obul8.visible = false;

      nbul1.visible = false;
      nbul2.visible = false;
      nbul3.visible = false;
      nbul4.visible = false;

      car2.visible = false;
    }
  }
  if (mousePressedOver(nexit) && gameState === 8) {
    gameState = 6;
    nlose.destroy();
    nexit.destroy();

    camera.x = 682.5;
    camera.y = 332.5;
  }
  if (mousePressedOver(nwfinish) && gameState === 9){
    gameState = 10;

    nwin.visible = false;
    nwfinish.visible = false;
    
    camera.x = 682.5;
    camera.y = 332.5;
  }

  if(gameState === 10){
    textFont("Baskerville Old Face");
    textStyle(BOLD);
    fill("black");
    textSize(60);
    text("Well done, You have completed the game.",100,280);
    text("Stay tuned for more updates",250,330);
    textSize(30);
    text("Credits -- Alita D'souza,Zayn Zakir Hussain",10,630);
  }

  console.log(gameState);

  drawSprites();

}
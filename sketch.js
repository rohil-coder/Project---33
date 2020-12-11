  const Engine = Matter.Engine;
  const World = Matter.World;
  const Bodies = Matter.Bodies;
  const Events = Matter.Events;
 
  var engine;
  var world;
  var ground;
  var particles = [];
  var plinkos = [];
  var divisions = [];
  var divisionHeight=300;
  var score =0;
  var particle;
  var count = 0;
  var gameState = "play";


  function setup() 
  {
      createCanvas(800, 800);
      engine = Engine.create();
      world = engine.world;
      ground = new Ground(width/2, height, width, 20);


      for (var k = 0; k <=width; k = k + 80) 
      {
        divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
      }


      for (var j = 75; j <=width; j=j+50) 
      {
        plinkos.push(new Plinko(j,75));
      }

      for (var j = 50; j <=width-10; j=j+50) 
      {
      
        plinkos.push(new Plinko(j,175));
      }

      for (var j = 75; j <=width; j=j+50) 
      {
      
        plinkos.push(new Plinko(j,275));
      }

      for (var j = 50; j <=width-10; j=j+50) 
      {
      
        plinkos.push(new Plinko(j,375));
      }
    }
 


  function draw() 
  {
    background("black");
    textSize(20)
    text("Score : "+score,20,30);
    textSize(20)
    text("500", 25, 700);
    textSize(20)
    text("500", 110, 700);
    textSize(20)
    text("500", 180, 700);
    textSize(20)
    text("500", 260, 700);
    textSize(20)
    text("100", 340, 700);
    textSize(20)
    text("100", 410, 700);
    textSize(20)
    text("100", 490, 700);
    textSize(20)
    text("200", 570, 700);
    textSize(20)
    text("200", 650, 700);
    textSize(20)
    text("200", 730, 700);
    Engine.update(engine);
  
    
    for (var i = 0; i < plinkos.length; i++) {
      
      plinkos[i].display();
      
    }
    if(frameCount%60===0){
      particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    }
  
    for (var j = 0; j < particles.length; j++) {
    
      particles[j].display();
    }
    for (var k = 0; k < divisions.length; k++) {
      
      divisions[k].display();
    }
    if(particle!=null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x<340)
        {
          score = score+500;
          particle = null;
          if(count>=5) gameState = "end";
        }
      }
    }
    if(particle!=null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x<570)
        {
          score = score+100;
          particle = null;
          if(count>=5) gameState = "end";
        }
      }
    }
    if(particle!=null)
    {
      particle.display();
      if(particle.body.position.y>760)
      {
        if(particle.body.position.x>570)
        {
          score = score+200;
          particle = null;
          if(count>=5) gameState = "end";
        }
      }
    }
}
function mousePressed()
{
  if(gameState!=="end")
  {
    count++;
    particle = new Particle(mouseX, 10, 10, 10);
  }
}
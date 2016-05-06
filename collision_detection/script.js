/*

Begin by following the steps in the workshop notes.

Next, add the following features:
- the gap goes red when the puck is over it
- the puck can't go beyond the arena borders
- create an item that makes the puck bigger
- create an item that makes the puck smaller

*/
var puck_x = 210;
var puck_y = 210;
var puck = document.getElementById('puck');
var speed = 50;
var width = 50;
var height = 50;



document.getElementById('puck').style.left = puck_x+'px';
puck.style.top = puck_y+'px';

function logCoordinates() {
     console.log('x;'+puck_x+' y:'+puck_y);
     
}

function checkCollision() {
    if (puck_x > 250 && puck_x < 350 && puck_y > 150 && puck_y < 250) {
        document.getElementById('gap').style.backgroundColor='red';
    }
    else {document.getElementById('gap').style.backgroundColor='white';} 
}



document.getElementById('right').addEventListener('click', function() {
    if (puck_x < 600) {
    puck_x += speed;
   puck.style.left = puck_x+'px';
   logCoordinates();
   checkCollision();
    }
  
 });
   
   document.getElementById('left').addEventListener('click', function() {
    if (puck_x < 600) {
    puck_x -= speed;
   puck.style.left = puck_x+'px';
   logCoordinates();
      checkCollision();
    }
});
   
   document.getElementById('up').addEventListener('click', function() {
    if (puck_y < 400) {
    puck_y -= speed;
   puck.style.top = puck_y+'px';
   logCoordinates();
      checkCollision();
    }
});
   
   document.getElementById('down').addEventListener('click', function() {
    if (puck_y < 400) {
    puck_y += speed;
   puck.style.top = puck_y+'px';
   logCoordinates();
      checkCollision();
    }
});
   
   

   
/*
  document.getElementById('BIGGER').addEventListener('click', function() {
        puck -= 10;
        document.getElementById('puck').style.top = puck + 'px';
        puck -= 10;
        document.getElementById('puck').style.top = puck + 'px';
      }
    );
  */
  
  function ChangeSize () {
    var puck= document.getElementById("puck");
    puck.style.width="100px";
    puck.style.height="100px";
  }
  
  function OnResize(puck) {
   var w= puck.offsetWidth;
   var h= puck.offsetHeight;
  }
// FOR PDE
// Para iPad usar mouseX & mouseY y borrar jQuery mousemove y window resize
// Para desktop pasar variables por jQuery


float time = 0;

// Asigno un valor inicial a Y sino el sketch no toma los valores de mousemove
float jmouseY = 2000;

jQuery(document).mousemove(function(e){
    jmouseX = e.pageX;
    jmouseY = e.pageY;
    //console.log(e.pageY);
}); 

void setup() {
  
  background(#FFFFFF);
  size(window.innerWidth, window.innerHeight);
  smooth();

}

void draw() {

  float jmouseX = 10;
  
  float x = jmouseX - 20;
  while (x < width) {
      point(x, jmouseY * noise(x / 80, time) * 2);
      x = x + 1;
  }

  time = time + 0.01;

}

/*
$(window).resize(function() {

  // FOR PDE
  var canvElem = document.getElementById("p5can");
  var newWidth = document.documentElement.clientWidth;
  var newHeight = document.documentElement.clientHeight;
  canvElem.style.position = "fixed";
  canvElem.setAttribute("width", newWidth);
  canvElem.setAttribute("height", newHeight);
  canvElem.style.top = 0 +"px";
  canvElem.style.left = 0 +"px";
  // size() is Processing, everything else 
  // in this function is javascript
  size(newWidth, newHeight);
  
}); 
*/
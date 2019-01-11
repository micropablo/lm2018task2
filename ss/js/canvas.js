var canvas = document.querySelector("#lienzo");
var ctx = canvas.getContext("2d");

// El método HTMLCanvasElement.getContext(): retorna un contexto de dibujo en el lienzo, o null si el identificador del contexto no está soportado.


/*=============================================
CIRCULOS
=============================================*/

           

               // Dibuja Formas
               ctx.beginPath();
               ctx.arc(170,200,50,0,Math.PI*2,true);  // Circulo exterior
              ctx.fillStyle = "#fdddca";
            ctx.fill();
               ctx.moveTo(201,200);
               ctx.arc(170,200,35,0,Math.PI,false);   // Boca
               
               ctx.moveTo(155,200);

               ctx.arc(150,200,5,0,Math.PI*2,true);  // Ojo Izquierdo
              
               ctx.moveTo(195,200);
               ctx.arc(190,200,5,0,Math.PI*2,true);  // Ojo Derecho
               
               ctx.stroke();
ctx.fillStyle="rgb(255,0,0)";
    ctx.strokeStyle="rgb(0,0,255)";
    ctx.lineWidth=5;
    ctx.beginPath();
    ctx.moveTo(170,250);
    ctx.lineTo(10,400);
    ctx.lineTo(290,400);
    ctx.lineTo(170,250);
    ctx.fill();
    ctx.stroke();   
    //piernas
  


// pierna 1
var grd = ctx.createLinearGradient(79,40,80,65)
grd.addColorStop(0,"#f00"); //color en punto inicial
grd.addColorStop(0.6,"#0f0"); //color en punto medio
grd.addColorStop(1,"#00f");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(88, 400, 25, 80);
// pierna 2
var grd = ctx.createLinearGradient(79,40,80,65)
grd.addColorStop(0,"#f00"); //color en punto inicial
grd.addColorStop(0.6,"#0f0"); //color en punto medio
grd.addColorStop(1,"#00f");
// Fill with gradient
ctx.fillStyle = grd;
ctx.fillRect(187, 400, 25, 80);
var img = new Image();
img.src = "img/left.png";
img.onload = function(){
  ctx.drawImage(img,20,460,100,40);
}
var img2 = new Image();
img2.src = "img/right.png";
img2.onload = function(){
  ctx.drawImage(img2,180,460,100,40);
}

var trineo = new Image();
trineo.src = "img/noeltrineo.png";
trineo.onload = function(){
  ctx.drawImage(trineo,550,45,500,500);
}


//estrella navidad svg
var ctx = document.getElementById("lienzo").getContext("2d");
    ctx.save();
    ctx.lineJoin = 'miter';
    ctx.strokeStyle = 'rgb(0, 0, 0)';
    ctx.lineCap = 'butt';
    ctx.lineWidth = 1.000000;
    ctx.fillStyle = 'rgb(255, 255, 0)';
    ctx.beginPath();
    ctx.transform(0.206236, 0.000000, 0.000000, 0.205711, 32.274469, 51.410524);
    ctx.moveTo(342.857130, 449.505040);
    ctx.lineTo(234.764940, 344.516400);
    ctx.lineTo(279.468630, 488.419550);
    ctx.lineTo(200.881970, 359.847880);
    ctx.lineTo(208.393950, 510.347410);
    ctx.lineTo(164.250710, 366.271350);
    ctx.lineTo(134.098980, 513.910810);
    ctx.lineTo(127.172840, 363.383190);
    ctx.lineTo(61.251941, 498.885850);
    ctx.lineTo(91.978093, 351.364870);
    ctx.lineTo(-5.569921, 466.216610);
    ctx.lineTo(60.877887, 330.971560);
    ctx.lineTo(-62.167941, 417.955810);
    ctx.lineTo(35.826363, 303.484630);
    ctx.lineTo(-104.985860, 357.135850);
    ctx.lineTo(18.397601, 270.631190);
    ctx.lineTo(-131.333260, 287.578290);
    ctx.lineTo(9.686712, 234.475540);
    ctx.lineTo(-139.554650, 213.653670);
    ctx.lineTo(10.241036, 197.289490);
    ctx.lineTo(-129.133450, 140.006950);
    ctx.lineTo(20.025741, 161.409550);
    ctx.lineTo(-100.724450, 71.265628);
    ctx.lineTo(38.426018, 129.090210);
    ctx.lineTo(-56.112700, 11.748970);
    ctx.lineTo(64.285711, 102.362200);
    ctx.lineTo(1.898679, -34.803371);
    ctx.lineTo(95.979959, 82.904945);
    ctx.lineTo(69.664621, -65.466342);
    ctx.lineTo(131.517300, 71.941014);
    ctx.lineTo(142.927140, -78.313274);
    ctx.lineTo(168.664780, 70.159311);
    ctx.lineTo(217.082890, -72.536949);
    ctx.lineTo(205.088300, 77.671789);
    ctx.lineTo(287.472380, -48.500313);
    ctx.lineTo(238.499240, 94.006409);
    ctx.lineTo(349.672790, -7.713676);
    ctx.lineTo(266.798250, 118.136810);
    ctx.lineTo(399.775840, 47.260185);
    ctx.lineTo(288.207210, 148.546780);
    ctx.lineTo(434.633360, 112.967060);
    ctx.lineTo(301.380910, 183.325570);
    ctx.lineTo(452.055130, 185.278350);
    ctx.lineTo(305.491610, 220.287880);
    ctx.lineTo(450.946490, 259.650470);
    ctx.lineTo(300.281000, 257.111240);
    ctx.lineTo(431.377070, 331.410340);
    ctx.lineTo(286.076510, 291.481900);
    ctx.lineTo(394.576520, 396.049020);
    ctx.lineTo(263.770630, 321.240230);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();
    //gorro navidad
    var sombrero = new Image();
sombrero.src = "img/gorro.png";
sombrero.onload = function(){
  ctx.drawImage(sombrero,130,120,110,70);
}

//muñeco navidad
    var muñeco = new Image();
muñeco.src = "img/muñeco.png";
muñeco.onload = function(){
  ctx.drawImage(muñeco,250,170,150,200);
}
//texto feliz navidad y prospero año nuevo 
var canvas = document.getElementById("lienzo");
    if (canvas && canvas.getContext) {
    var ctx = canvas.getContext("2d");
      if (ctx) {
            var centerX = canvas.width/2;
            ctx.textAlign="center";
            
            ctx.font="30pt Verdana";
            ctx.fillStyle = "blue";
            ctx.fillText("FELIZ NAVIDAD",centerX,60);
      
            ctx.font="25pt Verdana";
            ctx.strokeStyle="green";
            ctx.lineWidth = 2;
            ctx.strokeText("HAPPY NEW YEAR 2019",centerX,120);
          }
    }

var canvas = document.querySelector("canvas");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

c.fillStyle = "red";
c.beginPath();
// c.strokeStyle = "blue";
c.fillRect(window.innerWidth/2,window.innerHeight/2,100,100);
c.fillStyle = "green";
// c.fillRect(300,100,100,100);
// c.fillStyle = "yellow";
// c.fillRect(40,200,100,100);

// c.beginPath();
// c.moveTo(500,500);
// c.lineTo(300,300);

// c.moveTo(200,500);
// c.lineTo(700,550);
// c.stroke();

// c.arc(innerWidth/2, innerHeight/2, 20, ( 2 * Math.PI / 360 * 180 ), 2 * Math.PI / 360 * 0  , false);
// c.beginPath();



// for(var i = 0;i<100;i++){
//     c.beginPath();
//     x = Math.random() * window.innerWidth;
//     y = Math.random() * window.innerHeight;
//     radius = Math.random() * 25 + 25;
//     c.arc(x,y,radius,0,Math.PI * 2,false);
//     c.stroke();
// }


// console.log(this);

var mousePointer = {
    x:0,
    y:0
}

document.addEventListener("mousemove",function (event){

    
    mousePointer.x = event.x;
    mousePointer.y = event.y;
    console.log(mousePointer);
})



function Circle(x, y, dx, dy, radius){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.radius = radius;
        
        this.draw = function (){
            c.beginPath();
            c.strokeStyle = "rgba(0,0,0,.5)";
            c.arc(this.x,this.y,this.radius,0,Math.PI * 2,false);
            c.stroke();
            c.fillStyle = "rgba(0,0,0,.5)";
            c.fill();
        }
        this.update = function (){
            if(this.x  > window.innerWidth - this.radius || this.x  < 0 + this.radius){
                this.dx *= -1;
            }
            if(this.y > window.innerHeight - this.radius || this.y < 0 + this.radius){
                this.dy *= -1;
            }
            this.x += this.dx;
            this.y += this.dy;

            // if(mousePointer.x - this.x > this.radius){
            //    this.x += 5;
            //    this.y += 5;
            // }
            var distanceFromPointerX = mousePointer.x - this.x;

            var distanceFromPointerY = mousePointer.y - this.y;

            var distanceCover = this.radius * 2;

            if(distanceFromPointerX < distanceCover && distanceFromPointerX > -distanceCover && distanceFromPointerY < distanceCover && distanceFromPointerY > -distanceCover){
                if(distanceFromPointerX >= 0){
                    this.x -= 5;
                }else{
                    this.x +=5;
                }
                if(distanceFromPointerY >= 0){
                    this.y -= 5;
                }else{
                    this.y += 5;
                }
                
            }

            this.draw();
        }
    }

    




var circleArray = [];

for (var i = 0 ; i<50;i++){
    var radius = Math.random() * 25 + 25;
    var x = Math.random() * (window.innerWidth - radius * 2) + radius;
    var y = Math.random() * (window.innerHeight - radius * 2) + radius;

    var dx = Math.random() * 4 - 1.5;
    var dy = Math.random() * 4 - 1.5;

    var circle1 = new Circle(x,y,dx,dy,radius);

    circleArray.push(circle1);
}

function makeCircle(){
    for(var i = 0;i < circleArray.length;i++){
        circleArray[i].update();
    }
}

function makeRectangle(){
    var recWidth = 400;
    var recHeight = 75;
    c.beginPath();
    c.fillStyle = "red";
    c.fillRect(innerWidth/2 - recWidth/2,innerHeight/2 - recHeight/2,recWidth,recHeight);
}

function fillText(){
    var textWidth = 400;
    var textHeight = 75;
    c.beginPath();
    c.font = "40px Arial";
    c.fillText("Febino Solutions",innerWidth/2 - 150,innerHeight/2 - 15);
    c.font = "20px Arial";
    c.fillText("Website will Load soon",innerWidth/2 - 110,innerHeight/2 +30);
    c.fillText("(Coming Soon)",innerWidth/2 - 75,innerHeight/2+60);
    
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,window.innerWidth,window.innerHeight);
    fillText();
    // makeRectangle();
    
    makeCircle();

    
    
    // c.beginPath();
    // c.arc(x,y,radius,0,Math.PI * 2,false);
    // c.stroke();
    // if(x  > window.innerWidth - radius || x  < 0 + radius){
    //     dx *= -1;
    // }
    // if(y > window.innerHeight - radius || y < 0 + radius){
    //     dy *= -1;
    // }
    // x += dx;
    // y += dy;

}

animate();










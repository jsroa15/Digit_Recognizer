window.addEventListener("load",()=>{

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    var rect=canvas.getBoundingClientRect();
    var x=0,y=0, painting=false;
    
    canvas.height="300";
    canvas.width="300";
    
    ctx.fillStyle = "white";
    
    ctx.fillRect(0,0,300,300);


    canvas.addEventListener('mousedown',function(e){
        x=e.clientX-rect.left;
        y=e.clientY-rect.top;
        painting=true;
    });
    
    
    canvas.addEventListener('mousemove',function(e){

        if(painting===true){

            draw(x,y,e.clientX-rect.left, e.clientY-rect.top);
            x=e.clientX-rect.left;
            y=e.clientY-rect.top;
        }
    });
    
    
    canvas.addEventListener('mouseup',function(e){

        if(painting===true){

            draw(x,y,e.clientX-rect.left, e.clientY-rect.top);
            x=0;
            y=0;
            painting=false
        }
    });


    function draw(x1,y1,x2,y2){
        ctx.beginPath();
        ctx.lineWidth=10;
        ctx.lineCap='round';

        ctx.moveTo(x1,y1);
        ctx.lineTo(x2,y2);
        ctx.stroke();
        ctx.closePath();

    }

    //Function to clear canvas
    document.getElementById('clear').addEventListener('click', function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "white";
        ctx.fillRect(0,0,300,300);

    }, false);;



});
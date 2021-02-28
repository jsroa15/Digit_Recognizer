window.addEventListener("load",()=>{

    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    var rect=canvas.getBoundingClientRect();
    var x=0,y=0, painting=false;
    
    canvas.height="350";
    canvas.width="350";
    
    ctx.fillStyle = "white";
    
    ctx.fillRect(0,0,350,350);


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


    /* CLEAR BUTTON */
		var clearButton = $( "#clearButton" );

		clearButton.on( "click", function()
		{

			document.getElementById("chartContainer").style.display = "none";
			context.clearRect( 0, 0, 350, 350 );
			context.fillStyle="white";
			context.fillRect(0,0,canvas.width,canvas.height);


		});

});


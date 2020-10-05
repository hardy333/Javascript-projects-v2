const canvas=document.getElementById("canvas");
const ctx=canvas.getContext("2d");
const generateButton=document.querySelector(".generate-tree-button");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;



 


 function drawTree(startX,startY,len,angle,branchWidth,color1,color2){

 	ctx.beginPath();
 	ctx.save();
 	ctx.strokeStyle=color1;
 	ctx.fillStyle=color2;
 	ctx.shadowBlur=15;
 	let alpha=Math.random()/10;
 	// ctx.shadowColor="rgba(255,255,255,"+alpha+")";
 	ctx.shadowColor="black";

 	ctx.lineWidth=branchWidth;

 	ctx.translate(startX,startY);
 	ctx.rotate(angle*Math.PI/180);

 	ctx.moveTo(0,0);
 	// ctx.lineTo(0,-len);

 	// ramdenad klaknili totebi eqneba
 	let curveture=Math.floor(Math.random()*30);

 	if(angle > 0){
 		ctx.bezierCurveTo(curveture,-len/2,curveture,-len/2,0,-len);
 	}else{
 		ctx.bezierCurveTo(curveture,-len/2,-curveture,-len/2,0,-len);

 	}

 	ctx.stroke();



 	if(len < 15){
 		//  foltebi 
 		ctx.beginPath();
 		ctx.arc(0,-len,10,0,Math.PI*2/3);
 		ctx.fill();





 		ctx.restore();
 		return;

 	}

 	// totebis gadxra 
 	let curve=Math.random()*10+10;

 	drawTree(0,-len,len*0.70,angle+curve,branchWidth*0.6);
 	drawTree(0,-len,len*0.75,angle-curve,branchWidth*0.6);
 	ctx.restore();
     
 	
 }
 	drawTree(canvas.width/2,canvas.height-50,120,0,20,"black","green");



 function generateRandomTree(){
 	ctx.clearRect(0,0,canvas.width,canvas.height);
 	let centerPointX=canvas.width/2;
 	let len=Math.floor(Math.random()*20+140);
 	let angle=0;
 	let branchWidth=Math.random()*80+1;

 	//  Color1
 	let r1=Math.floor(Math.random()*256);
 	let g1=Math.floor(Math.random()*256);
 	let b1=Math.floor(Math.random()*256);
 	//  Color2  for lifs 
 	let r2=Math.floor(Math.random()*256);
 	let g2=Math.floor(Math.random()*256);
 	let b2=Math.floor(Math.random()*256);


 	let color1=`rgb(${r1}, ${g1} , ${b1})`;
 	let color2=`rgb(${r2}, ${g2}, ${b2})`;
 	generateButton.style.background=color1;

 	drawTree(centerPointX,canvas.height-50,len,angle,branchWidth,color1,color2);

 }

 generateButton.addEventListener("click",generateRandomTree);
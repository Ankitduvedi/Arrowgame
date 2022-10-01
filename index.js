var bow =document.querySelector(".Bow img");
var Arrow = document.querySelector(".Arrow img")
var grid = document.querySelector(".grid");
var divTarget = document.querySelector(".div-target")
var bool = "true";
var rot1="0";
var pos =Math.floor(Math.random()*600)
document.querySelector(".target img").style.top = pos+"px";
document.querySelector(".div-target").style.top = pos+"px";

for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
  }
for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    divTarget.appendChild(div);
  }

  for (let i = 0; i < 100; i++) {
    document.querySelectorAll(".grid div")[i].addEventListener("mouseover", function clicked(){
        if(bool === "true"){
        if(i<50){
            var rot = (i - 50)*0.6 ;
            bow.style.transform= "rotate("+rot+"deg)";
            rot1 = ((i - 50)*0.6 - 20)
            Arrow.style.transform= "rotate("+rot1+"deg)"; 
        }
        if(i>49){
            var rot = (i - 50)*0.6 ;
            bow.style.transform= "rotate("+rot+"deg)"; 
             rot1 = ((i - 50)*0.6 - 20);
            Arrow.style.transform= "rotate("+rot1+"deg)"; 
            }
        }
        
        document.querySelectorAll(".grid div")[i].addEventListener("click", function clic(){
                bool = "false";
                let i=90;
                let j=0;
                let k=0;
                time = setInterval(move, 1);
                function move() {
                i++;
                i++;
                i++;
                i++;
                var degr = (Math.PI*rot)/180;
                j= (310 + k*(Math.tan(degr)));
                k++;
                k++;
                k++;
                k++;
                document.querySelector(".Arrow img").style.left = i + "px";
                document.querySelector(".Arrow img").style.top = j + "px";
                if(i >1150){
                    clearTimeout(time);
                }
                }
               

        })
    })}

   
    

// bow.addEventListener("drag",function(){
//     bow.addEventListener("scrolldown",rotateDown)

// });

// function rotateDown(){
//     bow.style.transform= "rotate(30deg)"; 
// }
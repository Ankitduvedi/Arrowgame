var bow =document.querySelector(".Bow img");
var grid = document.querySelector(".grid");

for (let i = 0; i < 100; i++) {
    let div = document.createElement("div");
    grid.appendChild(div);
  }

  for (let i = 0; i < 100; i++) {
    document.querySelectorAll(".grid div")[i].addEventListener("mouseover", function clicked(){
        if(i<50){
            var rot = (i - 50)*0.6 ;
            bow.style.transform= "rotate("+rot+"deg)"; 
        }
        if(i>49){
            var rot = (i - 50)*0.6 ;
            bow.style.transform= "rotate("+rot+"deg)"; 
        }
        
    })}

// bow.addEventListener("drag",function(){
//     bow.addEventListener("scrolldown",rotateDown)

// });

// function rotateDown(){
//     bow.style.transform= "rotate(30deg)"; 
// }
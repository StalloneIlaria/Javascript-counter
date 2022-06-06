
/*let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('zero');
let zero = 0;


plus.addEventListener('click', function(){
    zero +=1;
    output.innerHTML= zero;
})

minus.addEventListener('click', function(){
    zero -=1;
    output.innerHTML= zero;
})

reset.addEventListener('click', function(){
    zero =0;
    output.innerHTML= zero;
})*/



let display = document.createElement("div");
document.getElementById("box").appendChild(display);
display.classList.add("display");

let num = document.createElement("p");
let displayNumber = document.createTextNode("0");
num.appendChild(displayNumber);
display.appendChild(num);


let counterBox = document.createElement("div");
counterBox.classList.add("counterBox");
display.after(counterBox)

let minusBox = document.createElement("button");
let minusText= document.createTextNode("-");
minusBox.classList.add("minus");
minusBox.appendChild(minusText);
counterBox.appendChild(minusBox);


let plusBox = document.createElement("button");
let plusText= document.createTextNode("+");
plusBox.classList.add("plus");
plusBox.appendChild(plusText);
counterBox.appendChild(plusBox);

let reset =document.createElement("button");
let resetText= document.createTextNode("reset");
reset.classList.add("reset");
reset.appendChild(resetText);
counterBox.appendChild(reset);




let i=0;

plusBox.addEventListener("click", () => {
  i++;
  num.innerHTML = i;
});

minusBox.addEventListener("click", () => {
  i--;
  num.innerHTML =i;
});

reset.addEventListener("click", () => {
  i=0;
  num.innerHTML=i;
});
const resEl=document.querySelector("#res");

function Solve(val){
 resEl.value+=val;
}

function Clear(){
  resEl.value='';
}

function Back(){
  resEl.value=resEl.value.slice(0,-1);
}

function Result(){
  let num1=resEl.value;
  let num2=eval(num1);
  resEl.value=num2;
}
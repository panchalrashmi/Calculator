function display(val){

    document.getElementById('result').value += val;

    return val

}
function solve(){

    let x = document.getElementById('result').value;

    let y = eval(x);

    document.getElementById('result').value = y;

    return y
;
}
function clearScreen(){

    document.getElementById('result').value = ''
}

function square(){
    let z=document.getElementById('result').value;
   let square=Math.pow(z,2);
 document.getElementById('result').value = square;
 
return square;
}
function cube(){
    let z=document.getElementById('result').value;
   let cube=Math.pow(z,3);

  document.getElementById('result').value = cube;
  return cube;

}
function log(){
    let z=document.getElementById('result').value;
   let log=Math.log(z);

  document.getElementById('result').value = log;
  return log;

}


function factorial(){
    

    function fact(n){
        let answer = 1;
        if (n == 0 || n == 1){
          return answer;
        }
        else if(n > 1){
          for(var i = n; i >= 1; i--){
            answer = answer * i;
          }
          return answer;
        }
        else{
          return "number has to be positive."
        }  
      }
      let n=document.getElementById('result').value;
      answer = fact(n);
      document.getElementById('result').value=answer;

}
  

function percent(){
    let n=document.getElementById('result').value;
let num=n/100;
    document.getElementById('result').value=num;
    return num;


}
function squareroot(){
  let z=document.getElementById('result').value;
  let squareRoot=Math.sqrt(z);
  document.getElementById('result').value=squareRoot;
    return squareRoot;
}

function sin(){
let Theta=document.getElementById('result').value;
let angle= Math.sin(Theta* Math.PI / 180);
  document.getElementById('result').value = angle
  return angle;
}

function cos(){
let Theta=document.getElementById('result').value;
let angle= Math.cos(Theta* Math.PI / 180);
  document.getElementById('result').value = angle
  return angle;
}
function tan(){
  let Theta=document.getElementById('result').value;
  let angle= Math.tan(Theta* Math.PI / 180);
    document.getElementById('result').value = angle
    return angle
  ;
  }
   function back(){
    let screenInput=document.getElementById('result').value;
  let backspace=screenInput.substr(0,screenInput.length-1)
    document.getElementById('result').value = backspace;
    return backspace;
  }
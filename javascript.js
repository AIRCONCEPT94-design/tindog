function calc(){
 var  humanAge = parseInt(document.querySelector("#value").value);
 var dogAge = ((humanAge - 2) * 4) + 21;
 var calculate;  
 calculate = dogAge;
 document.querySelector("#result").innerHTML= calculate +" years old" 
}


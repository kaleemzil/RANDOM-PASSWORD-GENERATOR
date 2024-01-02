const pass= document.getElementById("inputPassword");
const count = 8;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = ",./;'\][-+-*/";

const allChar = upperCase+lowerCase+number+symbols;

function genPassword(){
    let password = ""; 
    password += upperCase[Math.floor(Math.random()*upperCase.length)];
    password += lowerCase[Math.floor(Math.random()*lowerCase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

 for(let i=0 ;  count > password.length;i++){
    password += allChar[Math.floor(Math.random()*allChar.length)];
 }
 pass.value = password;
}


/*
 message befor pwd   
 pwd placeholder               
 variabile nome
 variabile cognome
 variabile colore
 variabile pwd = 1+2+3
 pwdplaceholder.innerHTMl = variabile pwd
 */

//pwd 1
var message = ("This is your Password: ")

var pwdPlaceholder = document.getElementById("pwd")
console.log("pwd placeholder", pwdPlaceholder)

var nome = prompt("come ti chiami?");
console.log("Name", nome);

var surname = prompt("Qual'è il tuo cognome");
console.log("Surname", surname);

var favColor = prompt("Qual'è il tuo colore preferito");
console.log("favColor", favColor);

var pwd = nome + surname + favColor;
console.log("psw", pwd);

pwdPlaceholder.innerHTML = message + pwd + "21";

//pwd 2


var message2 = ("This is your 2nd Password: ")
var pwd2Placeholder = document.getElementById("pwd-2");
var pwd2 = surname + nome + favColor;
pwd2Placeholder.innerHTML = message2 + pwd2 + "21";

//pwd 3

var message3 = ("This is your 3rd Password: ");
var pwd3Placeholder = document.getElementById("pwd-3");
var pwd3 = favColor + nome + surname + "21";
pwd3Placeholder.innerHTML = message3 + pwd3
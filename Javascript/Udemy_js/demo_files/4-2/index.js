/*var p = document.createElement('p');
document.body.appendChild(p);

p.id = "1";
p.className = "cls"*/

/*var myPs = document.getElementsByTagName("p");

console.log(myPs[1]);*/

myPs = document.getElementsByTagName("p");

for(i = 0; i < myPs.length; i++){
    myPs[i].className = "essay paragraph";
}

var esPs = document.getElementsByClassName("essay");

console.log(esPs);

myPs[1].style.color = "red";

document.getElementById('1').style.color = "blue";
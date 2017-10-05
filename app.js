//creando petición de número de tarjeta
function isValidCard(){
do{
var pregunta = prompt("ingrese el número de tarjeta de crédito");
} while (!pregunta){
}

//invertir números
var num= [];
for(var i= 0; i < pregunta.length; i++){
  num.unshift(pregunta[i]);
} console.log(num);
num.unshift("s")

// operación para números pares e impares

var resultado= 0;
for(var j=1; j < num.length; j++){
  if (j % 2 === 0){
  if((num[j]*2)>=10)
}
}


}isValidCard();

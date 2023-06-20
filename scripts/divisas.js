function convertir () {
let valor = parseInt (document.getElementById("valor").value);
let resultado = 0;
let Cdolar = 37.55;
let Ceuro = 40.63;
let Vdolar = 40.05;
let Veuro = 45.42;

if (document.getElementById ("Cdolar").checked) {resultado = valor / Cdolar;
alert ("el cambio de pesos a dólares es: $" + resultado.toFixed(2));}
else if (document.getElementById ("Ceuro").checked) {{resultado = valor / Ceuro;
alert ("el cambio de pesos a euros es: $" + resultado.toFixed(2));}}
else if (document.getElementById ("Vdolar").checked) {{resultado = Vdolar / valor;
alert ("el cambio de pesos a euros es: $" + resultado.toFixed(2));}}
else if (document.getElementById ("Veuro").checked) {{resultado = Veuro / valor;
alert ("el cambio de pesos a euros es: $" + resultado.toFixed(2));}}

else {
    alert ("Tienes que completar todos los requerimientos")
}
}
const productos = [
{ nombre: "Semillas de Chirivía", precio: 20 },
{ nombre: "Kit de Judías", precio: 60 },
{ nombre: "Semillas de Coliflor", precio: 80 },
{ nombre: "Brote de Patata", precio: 50 },
{ nombre: "Bulbo de Tulipán", precio: 20 },
{ nombre: "Semillas de Col Rizada", precio: 70 },
{ nombre: "Semillas de Allium", precio: 30 },
{ nombre: "Semillas de Ajo", precio: 40 },
{ nombre: "Brote de Arroz", precio: 40 }
];
let carrito = []

let selection = prompt ("¡Un poco de agricultura podría inyectar una nueva vida en la economía local! ¿desea comprar algo? -si- o -no-")

while (selection != "si" && selection != "no") {alert ("por favor ingresa si o no")
selection = prompt ("Bienvenido ¿desea comprar algo? Conteste con si o no")
}

if (selection == "si")
{alert ("Semillas de Primavera")
let allproductos = productos.map ((producto) => producto.nombre + " " + producto.precio + "$");
alert (allproductos.join (" - "))
}
else if (selection == "no")
{alert ("Gracias por pasar ¡Hasta pronto!")}

while (selection != "no")
{let producto = prompt ("agrega un producto a tu carrito")
let precio = 0
if (producto == "Semillas de Chirivía" || producto == "Kit de Judías" || producto == "Semillas de Coliflor" || producto == "Brote de Patata" || producto == "Bulbo de Tulipán" || producto == "Semillas de Col Rizada" || producto == "Semillas de Allium" || producto == "Semillas de Ajo" || producto == "Brote de Arroz")
{switch (producto)
    {
        case "Semillas de Chirivía":
        precio = 20;
        break;
        case "Kit de Judías":
        precio = 60;
        break;
        case "Semillas de Coliflor":
        precio = 80;
        break;
        case "Brote de Patata":
        precio = 50;
        break;
        case "Bulbo de Tulipán":
        precio = 20;
        break;
        case "Semillas de Col Rizada":
        precio = 70;
        break;
        case "Semillas de Allium":
        precio = 30;
        break;
        case "Semillas de Ajo":
        precio = 40;
        break;
        case "Brote de Arroz":
        precio = 40;
        break;
    }
let unidades = parseInt (prompt ("cuántas unidades desea llevar"))
carrito.push ({producto, unidades, precio})
console.log (carrito)
}
else
{alert ("no disponemos de ese producto")}
selection = prompt ("¿desea algo más -si- o -no-?")

while (selection === "no")
{alert ("gracias por comprar en Pierre`s ¡nos vemos!")
carrito.forEach ((carritofinal) =>
{console.log (`producto: ${carritofinal.producto}, unidades: ${carrito.unidades}, total a pagar ${carritofinal.unidades * carritofinal.precio}`)
})
break;
}
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar por su compra es ${total}`)
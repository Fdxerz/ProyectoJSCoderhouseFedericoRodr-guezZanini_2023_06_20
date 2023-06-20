let carrito = [];
let total = 0;

function agregarProducto(nombre, precio) {
  let productoExistente = carrito.find((producto) => producto.nombre === nombre);
  if (productoExistente) {
    productoExistente.cantidad++;
    productoExistente.subtotal = productoExistente.cantidad * productoExistente.precio;
  } else {
    let nuevoProducto = {
      nombre: nombre,
      precio: precio,
      cantidad: 1,
      subtotal: precio
    };
    carrito.push(nuevoProducto);
  }
  actualizarCarrito();
}

function actualizarCarrito() {
  let carritoBody = document.getElementById("carrito-body");
  carritoBody.innerHTML = "";
  total = 0;
  carrito.forEach((producto) => {
    let row = document.createElement("tr");
    row.innerHTML = `
      <td>${producto.nombre}</td>
      <td>$${producto.precio}</td>
      <td>${producto.cantidad}</td>
      <td>$${producto.subtotal}</td>
      <td><button onclick="eliminarProducto('${producto.nombre}')">Eliminar</button></td>
    `;
    carritoBody.appendChild(row);
    total += producto.subtotal;
  });
  document.getElementById("total").textContent = `$${total}`;
}

function eliminarProducto(nombre) {
  carrito = carrito.filter((producto) => producto.nombre !== nombre);
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  actualizarCarrito();
}
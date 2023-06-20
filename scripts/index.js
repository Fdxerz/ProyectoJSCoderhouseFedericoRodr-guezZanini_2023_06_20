function convertir () {
    let valor = parseInt (document.getElementById("valor").value);
    let resultado = 0;
    let oro = 0.1;
    let qi = 10;

    
    if (document.getElementById ("cambioOro").checked) {resultado = valor / qi;
    alert ("el cambio de oro a qi es: " + resultado.toFixed(2) + "QI");}
    else if (document.getElementById ("cambioQi").checked) {{resultado = valor / oro;
    alert ("el cambio de qi a oro es: " + resultado.toFixed(2) + "G");}}
    else {
        alert ("Tienes que completar todos los requerimientos")
    }
    }

function retroceder() {
  window.location.href = "../pages/progreso.html";
}

function comprar() {
  window.location.href = "../pages/404notfound.html";
}

function presentar(estacion){
    let año = document.getElementById("año").value;
    let presentacion = document.getElementById("presentacion");
    let imagen = document.getElementById("imagen")


switch(estacion){
    case 'Primavera':
        if (año % 2 !== 0){
            presentacion.textContent = "El Valiente Arbolito"
            imagen.src = "../img/01-El Valiente Arbolito.png";
        } else {
            if (año % 2 === 0){
                presentacion.textContent = "Maravillas Naturales: Explorando nuestro exhuberante mundo"
                imagen.src = "../img/05-Maravillas Naturales Explorando_nuestro exhuberante mundo.png";
            }
        }
        break;
    case 'Verano':
        if (año % 2 !== 0){
            presentacion.textContent = "El Viaje del Rey de la Pradera"
            imagen.src = "../img/02-El Viaje del Rey de la Pradera.png";
        } else {
            if (año % 2 === 0){
                presentacion.textContent = "Wumbus"
                imagen.src = "../img/06-Wumbus.png";
            }
        }
        break;
    case 'Otoño':
        if (año % 2 !== 0){
            presentacion.textContent = "Misterium"
            imagen.src = "../img/03-Misterium.png";
        } else {
            if (año % 2 === 0){
                presentacion.textContent = "Aúlla bajo la lluvia"
                imagen.src = "../img/07-Aúlla bajo la lluvia.png";
            }
        }
        break;
    case 'Invierno':
        if (año % 2 !== 0){
            presentacion.textContent = "El Milagro en Rancho Estrellafría"
            imagen.src = "../img/04-El Milagro en Rancho Estrellafría.png";
        } else {
            if (año % 2 === 0){
                presentacion.textContent = "El Expreso a Ciudad Zuzu"
                imagen.src = "../img/08-El Expreso a Ciudad Zuzu.png";
            }
        }

}     
}


    let carro = []; 


    fetch('../json/productos.json')
      .then(response => response.json())
      .then(data => {
        const productoListElemento = document.getElementById('producto-list');

        data.forEach(producto => {
          const productoElemento = document.createElement('div');
          productoElemento.classList.add('producto');

          const productoImageElemento = document.createElement('img');
          productoImageElemento.src = producto.image;
          productoImageElemento.alt = producto.nombre;

          const productoInfoElemento = document.createElement('div');
          productoInfoElemento.classList.add('producto-info');

          const productoNombreElemento = document.createElement('span');
          productoNombreElemento.textContent = producto.nombre;

          const productoStockElemento = document.createElement('span');
          productoStockElemento.textContent = `Stock: ${producto.stock}`;

          const productoPrecioElemento = document.createElement('span');
          productoPrecioElemento.textContent = `Precio: $${producto.precio}`;

          const addButton = document.createElement('button');
          addButton.textContent = 'Agregar al carrito';
          addButton.onclick = () => addToCarro(producto.id, producto.nombre, producto.precio, producto.stock);

          productoInfoElemento.appendChild(productoNombreElemento);
          productoInfoElemento.appendChild(productoStockElemento);
          productoInfoElemento.appendChild(productoPrecioElemento);

          productoElemento.appendChild(productoImageElemento);
          productoElemento.appendChild(productoInfoElemento);
          productoElemento.appendChild(addButton);

          productoListElemento.appendChild(productoElemento);
        });
      });

    function addToCarro(productoId, productoNombre, productoPrecio, productoStock) {

      let producto = carro.find(item => item.id === productoId);


      if (producto) {

        if (producto.quantity < productoStock) {
          producto.quantity++;
        } else {
          alert('No hay suficiente stock disponible.');
        }
      } else {

        carro.push({ id: productoId, nombre: productoNombre, precio: productoPrecio, stock: productoStock, quantity: 1 });
      }

      renderCarro();
    }

    function removeFromCarro(productoId) {

      const index = carro.findIndex(item => item.id === productoId);

      if (index !== -1) {
        carro.splice(index, 1);
      }

      renderCarro();
    }

    function clearCarro() {
      carro = [];
      renderCarro();
    }

    function renderCarro() {
      const carroItemsElemento = document.getElementById('carro-items');
      const carroTotalElemento = document.querySelector('.carro-total');
      const vacioCarroElemento = document.getElementById('carro_vacio');

      carroItemsElemento.innerHTML = '';
      carroTotalElemento.innerHTML = `Precio total: <span>$0</span>`;
      vacioCarroElemento.style.display = carro.length === 0 ? 'block' : 'none';

      let totalPrecio = 0;

      carro.forEach(item => {
        const carroItemElemento = document.createElement('div');
        carroItemElemento.classList.add('carro-item');

        const productoNombreElemento = document.createElement('span');
        productoNombreElemento.textContent = item.nombre;

        const productoQuantityElemento = document.createElement('span');
        productoQuantityElemento.textContent = `Cantidad: ${item.quantity}`;

        const productoPrecioElemento = document.createElement('span');
        productoPrecioElemento.textContent = `Precio: $${item.precio}`;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Eliminar';
        removeButton.onclick = () => removeFromCarro(item.id);

        carroItemElemento.appendChild(productoNombreElemento);
        carroItemElemento.appendChild(productoQuantityElemento);
        carroItemElemento.appendChild(productoPrecioElemento);
        carroItemElemento.appendChild(removeButton);

        carroItemsElemento.appendChild(carroItemElemento);

        totalPrecio += item.precio * item.quantity;
      });

      carroTotalElemento.innerHTML = `Precio total: <span>$${totalPrecio}</span>`;
    }


    const roja = document.querySelector('.roja');
const amarilla = document.querySelector('.amarilla');
const verde = document.querySelector('.verde');

function encenderLuz(luz) {
  roja.classList.remove('encendida');
  amarilla.classList.remove('encendida');
  verde.classList.remove('encendida');
  luz.classList.add('encendida');
}

let contador = 1;

setInterval(() => {
  if (contador === 1) {
    encenderLuz(roja);
  } else if (contador === 2) {
    encenderLuz(amarilla);
  } else if (contador === 3) {
    encenderLuz(verde);
  }
  contador = (contador % 3) + 1;
}, 1000);
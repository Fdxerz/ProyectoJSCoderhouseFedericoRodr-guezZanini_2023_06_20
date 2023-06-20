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
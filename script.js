import {barcelona,roma,paris,londres} from './cities.js'

//Obtenemos los elementos del DOM

//Primero los elementos que se pulsan
const links =  document.querySelectorAll('a')

//Ahora lo que va a cambiar
let titleElement = document.getElementById('title')
let subTitleElement = document.getElementById('subtitle')
let paragraph = document.getElementById('paragraph')
let price = document.getElementById('price')

//Agregamos los enlaces iterables con el evento click

links.forEach(function(link){ //links es el iterable y link es cada uno de los nodos
    
    //En el css le hemos dicho que si tiene la clase active cambie asi que lo vamos a cambiar dinamicamente
    link.addEventListener('click',function () {

        //BORRAMOS EL ACTIVE, recorriendo de nuevo links con el for each
        links.forEach(function(link){
            link.classList.remove('active')
        });

        //AGRAGAMOS EL ACTIVE
        this.classList.add('active') //this se refiere al que has pulsado

        //TRAER LA INFO DEL OBJETO CORRESPONDIENTE A LA ELECCIÓN
        let content = giveMeContent(this.textContent); //Le pasamos el this pq es el pulsado, pero tenemos que mandar el
                                                    // texto no el nodo completo solo esa propiedad

        //MOSTRAR EL CONTENIDO EN EL DOM 
        titleElement.innerHTML = content.titulo; //ya tenemos el obeto completo y igualamos el dom a la propiedades de este
        subTitleElement.innerHTML = content.subtitulo;
        paragraph.innerHTML = content.parrafo;
        price.innerHTML = 'Precio medio: ' + content.precio + ' €';

    });

    
});

//Funcion para traer la info correcta desde cities.js 

const giveMeContent = (link) => { //le pasamos un link que va a llevar un string con el nombre de la ciudad
    
    //Hacemos una relacion entre el enlace(viene del html) y los objetos(de cities.js)
    let content = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París' : paris,
        'Londres': londres
    };

    return content[link];
}
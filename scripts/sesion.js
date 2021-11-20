var collection = localStorage.getItem('myArray')

collection = JSON.parse(collection);

// para cerrar sesion

function closeSesion(){
    collection.forEach(function(element){
        console.log(element)
        element.estado = false;
    })
    localStorage.setItem('myArray', JSON.stringify(collection));
    window.location.href = '/index.html'

}
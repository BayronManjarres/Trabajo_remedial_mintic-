var collection = localStorage.getItem('myArray')

collection = JSON.parse(collection);
console.log(collection);

// desde la pagina principal chequeo el estado de sesion en el localStorage

function ingresar(){
    collection.forEach(function(element){
        if(element.estado){
            window.location.href = '/game.html'
        }else{
            window.location.href = '/login.html'
        }
    })
}



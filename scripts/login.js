

var collection = localStorage.getItem('myArray')

collection = JSON.parse(collection);
console.log(collection)


function logear(){

    var nameUser = document.getElementById('user-nick').value
    var passUser = document.getElementById('user-pass').value

    collection.forEach(function(element){
        
        if(element.UserName == nameUser && element.pass == passUser){
            element.estado = true;
            localStorage.setItem('myArray', JSON.stringify(collection));
            window.location.href = '/game.html'
        }
        else{
            alert('usuario o contraseña incorrectos')
            document.getElementById('user-nick').value = ''
            document.getElementById('user-pass').value = ''
        }
    })

}

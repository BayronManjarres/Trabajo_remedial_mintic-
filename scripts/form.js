 var collection = []
            
function validar() {

                var usuarioName = document.getElementById('user').value
                var password = document.getElementById('pass').value
                var repeatPassword = document.getElementById('repPass').value
                var email = document.getElementById('mail').value


                //expresiones regulares
                patronUpper = /^[A-Z]+/
                patroNumAndNumber = /^[A-Z-0-9]+/
                patronArroba =/(@)/
                
                // test
                respuesta1 = patronUpper.test(usuarioName)
                respuesta2 = patroNumAndNumber.test(password)
                respuesta3 = patronArroba.test(email)

                // validacion de los campos
                if(!respuesta1) {
                    alert("debe contener mayusculas")
                    location.reload();
                }
                else{
                    console.log('validacion correcta')
                }
                if(!respuesta2) {
                    alert("debe contener mayusculas y numeros")
                    location.reload();
                }
                else{
                    console.log('validacion correcta')
                }
                if(password === repeatPassword){
                    console.log('correcto')
                }
                else{
                    console.log('la contraseñas son diferentes')
                    location.reload();
                }
                if(!respuesta3){
                    alert("por favor coloque un correo valido")
                    location.reload();
                }
                else{
                    console.log('validacion correcta')
                }

                var registro = {
                    userName: usuarioName,
                    pass: password,
                    mail: email,
                    estado: false
                }
                collection.push(registro)
                localStorage.setItem('myArray', JSON.stringify(collection));

                /*  el redireccionamiento esta en el codigo de abajo en un metodo,
                    pero perfectamente puede estar aqui.
                */
            }

/* esta parte del codigo es vue.js, no hace parte de lo requeriemientos,
    simplemente se esta usando para la manipulacion de doom.
*/
const ruta = "/public/reverso-carta.svg" // ruta default del imagenes 

const app1 = {
    data(){
        return{
            bolean : true,
            cartas: [{url:ruta},
                     {url:ruta},
                     {url:ruta},
                     {url:ruta},
                     {url:ruta}]
        }
    },
    methods : {
        validavalue(){
            if(this.bolean)  {
                setTimeout(()=>{ 
                    this.cartas[0].url = '/public/as-corazones.svg'
                    this.cartas[1].url = '/public/k-corazones.svg'
                    this.cartas[2].url = '/public/q-corazones.svg'
                    this.cartas[3].url = '/public/j-corazones.svg'
                    this.cartas[4].url = '/public/10-corazones.svg'
                }, 1000);

                setTimeout(()=>{
                    window.location.href = '/login.html'
                },2000)
                
            }                    
        }
    }
}

Vue.createApp(app1).mount('#app1');
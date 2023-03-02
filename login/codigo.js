function logear(){

    var usuario, password;
    usuario = document.getElementById('usuario').value;
    password = document.getElementById('password').value;
    error = document.getElementById('error');
    mensajeError = "Hermano la cagaste";
    
    if ( usuario ==="" || password==="") { 
        error.src = "https://cdn.pixabay.com/photo/2017/02/12/21/29/false-2061131__480.png"
    }
}

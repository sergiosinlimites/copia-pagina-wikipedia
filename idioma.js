(function(){
    
    function dimeRespuesta(){
        let idioma = document.getElementById("buscarLenguaje").value;
        console.log(idioma);
        if(idioma == "es"){
            alert("funciona");
        }
    }

    document.getElementById("botonCambiador").onclick = function (){
        dimeRespuesta();
    }
})();


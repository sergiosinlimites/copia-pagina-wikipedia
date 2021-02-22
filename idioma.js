(function(){
    
    function dimeRespuesta(){
        let idioma = document.getElementById("buscarLenguaje").value;
        if(idioma == "es"){
            document.getElementById("jsBuscarLenguaje").innerHTML = "ES";
        }
        else if(idioma == "en"){
            document.getElementById("jsBuscarLenguaje").innerHTML = "EN";
        }
        else if(idioma == "it"){
            document.getElementById("jsBuscarLenguaje").innerHTML = "IT";
        }
        else if(idioma == "fr"){
            document.getElementById("jsBuscarLenguaje").innerHTML = "FR";
        }
        setTimeout(dimeRespuesta, 1000);
    }
    dimeRespuesta();
})();


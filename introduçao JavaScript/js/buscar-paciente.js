
var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
    //http://api-pacientes.herokuapp.com/pacientes
    console.log("Buscando pacientes...");

    var xhr = new XMLHttpRequest();

    xhr.open("GET", "http://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function(){    
        
        var erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200){ //testando código de erro de carregamento
            var resposta = xhr.responseText;
            //console.log(resposta);
            var pacientes = JSON.parse(resposta);
            //console.log(pacientes);

            pacientes.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);            
            });
        }else{
            console.log("Página não carregada, erro "+xhr.status +" -- "+ xhr.responseText);            
            erroAjax.classList.remove("invisivel"); //add("mensagens-erro");
            //erroAjax.classList.add("mensagens-erro");
        }
        
    });

    xhr.send();

});
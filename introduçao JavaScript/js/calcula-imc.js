
var titulo = document.querySelector(".titulo");
titulo.textContent = "Pimentel Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i =0; i < pacientes.length; i++){

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    var peso = tdPeso.textContent; //peso do paciente

    var tdAltura = paciente.querySelector(".info-altura");
    var altura = tdAltura.textContent;

    var infoImc = paciente.querySelector(".info-imc");

    var pesoEhValido = validaPeso(peso);
    var alturaEhValida = validaAltura(altura);

    if(!pesoEhValido){
        // alert("Peso inválido! Verifique o campo correspondente");
        infoImc.textContent = "Peso Inválido";
        paciente.classList.add("paciente-invalido"); //adiciona uma nova classe ao objeto
    }
    else if(!alturaEhValida){
        //alert("Altura inválida! Verifique o campo correspondente");
        infoImc.textContent = "Altura inválida";
        paciente.classList.add("paciente-invalido");  //adiciona uma nova classe ao objeto
    }
    else{
        var imc = calculaImc(peso, altura);
        infoImc.textContent = imc;
    }
}

titulo.addEventListener("click", function(){
    alert("Olá eu fui clicado");
});

function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}
 function validaAltura(altura){
    if(altura >=0 && altura <=3.0){
        return true;
    }else{
        return false;
    }
 }


function calculaImc(peso,altura){
    var imc = 0;
    imc = peso/(altura * altura);
    return imc.toFixed(0);
}
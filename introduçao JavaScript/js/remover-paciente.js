var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){ //função setTimeout da um tempo para execultar outra função
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.remove();
    },500);    
});



/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){ //dblclick evento de duplo click
        console.log("foi um duplo click");
        this.remove();
    }); 
});*/



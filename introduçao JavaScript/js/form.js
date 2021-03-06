var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault(); //previne eventos padrão no formulário.
   
	var form = document.querySelector("#form-adiciona");

    //extraindo informações do paciente do formulário
    var paciente = obtemPacienteDoFormulario(form);

    var erros = validaPaciente(paciente);

    console.log(erros);
    if(erros.length >0){
        exibeMensagensDeErro(erros);
        return;
    }
    
    adicionaPacienteNaTabela(paciente);

    form.reset(); //limpa os campos do formulário
    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
    //cria a tr e a td da tabela do paciente
    var pacienteTr = montaTr(paciente);
    //adiciona o paciente na tabela   
    var tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr); //adiciona o <tr> com seus filhos a tabela
}

function exibeMensagensDeErro(erros){    
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = ""; //controla o html de um elemento, no caso toda a  <ul> do form

    erros.forEach(function(erro){
        var li = document.createElement("li");
        li.textContent = erro;        
        ul.appendChild(li);
    });    
}

function obtemPacienteDoFormulario(form){
    //declarando um objeto e adicionando informções a ele
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente){
    var pacienteTr = document.createElement("tr"); //cria um elemento no html, no caso uma tr de um formulário
    pacienteTr.classList.add("paciente"); //adicionando uma classe ao tr

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome")); //adiciona o <td> ao <tr> da tabela
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe){
    var td = document.createElement("td"); //cria os <td> da tabela
    td.textContent = dado; //adiciona valor ao <td> da tabela
    td.classList.add(classe); //adiciona uma classe no <tr>
    return td;
}

function validaPaciente(paciente){
    var erros = [];

    if(paciente.nome.length == 0){
        erros.push("O campo Nome não pode ser vazio!");
    }

    if(!validaPeso(paciente.peso)){
      erros.push("Peso é Inválido!");
    }

    if(!validaAltura(paciente.altura)){
        erros.push("Altura é Inválido!");
    }

    if(paciente.peso.length == 0){
        erros.push("O campo Peso não pode ser vazio!");
    }

    if(paciente.altura.length == 0){
        erros.push("O campo Altura não pode ser vazio!");
    }

    if(paciente.gordura.length == 0){
        erros.push("O campo Gordura não pode ser vazio!");
    }
    return erros;
}
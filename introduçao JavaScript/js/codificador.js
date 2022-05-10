const inputTexto = document.querySelector(".input-texto")
const mensagem = document.querySelector(".mensagem")

const h6 = document.querySelector("#h6")
const p = document.querySelector("#p")

const matrizCodigo = [["a", "ai"], ["e", "enter"], ["i", "imes"], ["o", "ober"], ["u", " ufat"]];

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value)
    if (inputTexto.value == '') {
        inputTexto.placeholder = 'Este campo é obrigatório'
        if (mensagem.placeholder.length != 0) {
            resetMensagem()
        }
    } senão {
        inputTexto.placeholder = 'Digite seu texto'
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"
    }
}

function encriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textoEncriptado = desencriptar(inputTexto.value)
    if (inputTexto.value == '') {
        inputTexto.placeholder = 'Este campo é obrigatório'
        if (mensagem.placeholder.length != 0) {
            resetMensagem()
        }
    } senão {
        inputTexto.value = ''
        inputTexto.placeholder = 'Digite seu texto.'        
        mensagem.value = textoEncriptado
        mensagem.style.backgroundImage="none"
        // window.alert("Sucesso!!!")
    }
}


function desencriptar(stringEncriptada) {
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringEncriptada;
}

function btnCopiar() {
    if (mensagem.valor == '') {
        mensagem.placeholder = 'Nenhuma linda encontrada'
        inputTexto.placeholder = 'Digite um texto que você deseja criptografar ou descriptografar'
        mensagem.style.backgroundImage="none"
    } senão {
        navigator.clipboard.writeText(mensagem.value);
        mensagem.valor = ''
        Mensagem.placeholder = 'Mensagem copiada com sucesso!'
        inputTexto.placeholder = 'Digite seu texto'
        
    }
}

function btnColar() {    
        navigator.clipboard.writeText(inputTexto.value);
        mensagem.valor = ''
        Mensagem.placeholder = 'Mensagem copiada com sucesso!'    
}

função resetMensagem() {
    mensagem.style.backgroundImage='url("/imagens/resultado.png")'
    linda.placeholder = ''
    h6.value = 'título aqui h6'
    p.value = 'parágrafo da mensagem aqui'
}


/////// Miscelânea \\\\\
// Enviar com enter \\
inputTexto.onkeydown = function (e) {
    if (e.keyCode == 13) {
        btnEncriptar()
    }
}

const textarea = document.querySelector('.texto');
const resposta = document.querySelector('.resposta');
const img = document.querySelector('.img-msg');

function btnEncriptar() {
    const textoCript = encriptar(textarea.value);
    resposta.value = textoCript;
    textarea.value = '';
    img.style.display = 'none';
}

function encriptar(strEncriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    strEncriptada = strEncriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(strEncriptada.includes(matrizCodigo[i][0])) {
            strEncriptada = strEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }

    return strEncriptada;
}

function btnDesencriptar() {
    const textoDecript = desencriptar(textarea.value);
    resposta.value = textoDecript;
    textarea.value = '';
}

function desencriptar(strDesencriptada) {
    let matrizCodigo = [['e', 'enter'], ['i', 'imes'], ['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    strDesencriptada = strDesencriptada.toLowerCase();

    for(let i = 0; i < matrizCodigo.length; i++) {
        if(strDesencriptada.includes(matrizCodigo[i][1])) {
            strDesencriptada = strDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return strDesencriptada;
}

function copiar() {
    navigator.clipboard.writeText(document.querySelector(".resposta").value)
}

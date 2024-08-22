
document.getElementById('raw_data').addEventListener('input', function (e) {
    this.value = this.value.replace(/[^a-z0-9\s]/gi, '');
});
const rawData = document.getElementById('raw_data');
const responseContainer = document.querySelector('.result_container');
var mode = 'encriptar';
const encryptButton = document.querySelector('.button_encrypt');
const decryptButton = document.querySelector('.button_decrypt');
const img_404 = `<img class="img_404" src="./image.png">
            <h3 class="subtitle">Ningun mensaje fue encontrado</h3>
            <p class="subtitle_description">
                Ingresa el mensaje que desees encriptar o desencriptar
            </p>`;

encryptButton.addEventListener('click', function() {
    mode = 'encriptar';
    encryptButton.style.backgroundColor = '#0A3871';
    decryptButton.style.backgroundColor = '#D8DFE8';
    clear();
});

decryptButton.addEventListener('click', function() {
    mode = 'desencriptar';
    encryptButton.style.backgroundColor = '#D8DFE8';
    decryptButton.style.backgroundColor = '#0A3871';
    clear();
});
rawData.addEventListener('input', function() {
    if (rawData.value === '') {
        responseContainer.innerHTML = img_404;
        return;
    }
    
    if (mode === 'encriptar') {
        responseContainer.innerHTML = `
            <div class="response_container"> 
                <p class="Traduccion_content">${encriptar(rawData.value)}</p> 
            </div>
            <button class="copy_text">Copiar</button>
        `;
    } else {
        responseContainer.innerHTML = `
            <div class="response_container"> 
                <p class="Traduccion_content">${desencriptar(rawData.value)}</p> 
            </div>
            <button class="copy_text">Copiar</button>
        `;
    }
    
    const copyButton = document.querySelector('.copy_text');
    copyButton.addEventListener('click', function() {
        const textToCopy = document.querySelector('.Traduccion_content').textContent;
        navigator.clipboard.writeText(textToCopy).then(function() {
            console.log('Texto copiado al portapapeles');
        }).catch(function(err) {
            console.error('Error al copiar el texto: ', err);
        });
    });
});

function clear(){
    rawData.value = '';
    responseContainer.innerHTML = img_404;
}
function encriptar(texto) {
    return texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}
function desencriptar(textoEncriptado) {
    return textoEncriptado
        .replace(/ufat/g, 'u')
        .replace(/ober/g, 'o')
        .replace(/ai/g, 'a')
        .replace(/imes/g, 'i')
        .replace(/enter/g, 'e');
}
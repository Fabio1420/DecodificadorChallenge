var textarea = document.querySelector('.textoarea_digite_seu_texto');
var inputCriptog = document.querySelector('.button_criptografar');
var inputDescriptog = document.querySelector('.button_descriptografar');
var resultado = document.querySelector('.container_return_box');
var img = document.querySelector('.img_enigma');
var buttonCopiar = document.querySelector('.container_return_button_copiar');

function Criptografar_code(text){
    let textUsuario = text.value;
    let Code = textUsuario.replace(/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");

    return Code;
}
function Descriptografar_Code(text){
    let textUsuario = text.value;
    let Code = textUsuario.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    return Code;
}

function copy(){
    navigator.clipboard.writeText(resultado.innerText);
    resultado.textContent = `O seu texto foi copiado. Fique a vontade para criptografar ou descriptografar suas mensagens que nós garantimos sua segurança!`;
    buttonCopiar.style.display = 'none';
}
inputCriptog.addEventListener('click', ()=>{

    resultado.textContent = Criptografar_code(textarea);
    textarea.value = '';

    img.style.display = 'none';
    buttonCopiar.style.display = 'block';

})

inputDescriptog.addEventListener('click', ()=>{

    resultado.textContent = Descriptografar_Code(textarea);
    textarea.value = '';

    img.style.display = 'none';
    buttonCopiar.style.display = 'block';
})

buttonCopiar.addEventListener('click', copy)
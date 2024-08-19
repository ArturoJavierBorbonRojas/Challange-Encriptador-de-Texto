
function encriptar(){

    let textoOriginal = document.getElementById("text_in").value;
    const regex = /^[a-z\s]*$/;

    if (!regex.test(textoOriginal)){
        document.getElementById("text_def").value = "No se aceptan aceptan acentos ni carácteres especiales.";
        return;
    }

    let textoEncriptado = textoOriginal
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/a/g, "ai")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat");
    document.getElementById("text_def").value = textoEncriptado;
}

function descriptar(){

    let textoEncriptado = document.getElementById("text_in").value;
    const regex = /^[a-z\s]*$/;

    if(!regex.test(textoEncriptado)){
        document.getElementById("text_def").value = "No se aceptan aceptan acentos ni carácteres especiales.";
        return;
    }

    let textoOriginal = textoEncriptado
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ai/g, "a" )
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u");
    document.getElementById("text_def").value = textoOriginal;
}

function copiar() {
    let texto = document.getElementById("text_def");
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado: " + texto.value);
}

// Función para limpiar los campos de texto
function clearText() {
    document.getElementById("text_in").value = "";
    document.getElementById("text_def").value = "";
}




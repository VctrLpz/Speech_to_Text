// tomamos las entradas de los elementos 
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const texto = document.getElementById('texto');

// creamos un nuevo speecrecognition
let recognition = new webkitSpeechRecognition();
recognition.lang = 'es-MX';
recognition.continuous = true;
recognition.interimResults = false;

//obtememos los reslultados 
recognition.onresult = (event) =>{
    const results = event.results;
    const frase = results[results.length - 1][0].transcript;
    texto.value += frase;
    
}
// Para salvar el resultado en un txt 
    const guardarArchivoDeTexto = (contenido) => {
        const a = document.createElement("a");
        const archivo = new Blob([contenido], { type: 'text/json' });
        a.href = URL.createObjectURL(archivo);
        a.download = "muestra.txt";
        a.click();
        URL.revokeObjectURL(url);
    }
    stop.onclick = () => {
        guardarArchivoDeTexto(texto.value);
        
    }
 var key =  0 ;

//iniciamos el reconocimiento 

do{
     recognition.start();
}while(key== 1)


//Detenemos el reconocimiento 
stop.addEventListener('click' , () =>{
    key= 1;
    recognition.stop();
    texto.value = "";
})


// Aqui é testado o suporte do browse 
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;


// aqui criamos uma instância do objeto SpeechRecognition
var recognizer = new window.SpeechRecognition();

// obtemos a div com o id "transcrição que criamos no documento html"
var transcricao = document.getElementById("transcricao");

// aqui definimos a propriedade continuous, ou seja, o microfone mantém a escuta mesmo depois do resultado
recognizer.continuous = true;

// aqui temos a função onresult, que através de um callback retorna o que é processado da captura do som
recognizer.onresult = function(event){
	// limpamos a div "transcricao"
	transcricao.textContent = "";

	// e criamos um loop para varrer se há alguma string no evento
	for (var i = event.resultIndex; i < event.results.length; i++) {
		if(event.results[i].isFinal){
			transcricao.textContent = event.results[i][0].transcript;
		}else{
        	transcricao.textContent += event.results[i][0].transcript;
		}

	}
}

// aqui iniciamos a API, no nosso caso inicia quando a página carrega
recognizer.start();
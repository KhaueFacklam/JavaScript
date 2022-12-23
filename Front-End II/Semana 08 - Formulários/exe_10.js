

window.onload = function(){
	var formulario = document.getElementById("myForm")
	formulario.addEventListener("submit", validaFormulario)
}

function validaFormulario(event){
	let formulario = document.getElementById("myForm")
	const numElementos = formulario.elements.length
	let submeter = true
	
	for(let i=0; i < numElementos; i++){
		let controle = formulario.elements[i];
		
		if(controle.value == ""){
			controle.style.border = "1px solid red"
			submeter = false
		}else{
			controle.style.border = "1px solid green"
		}
	}

	if(submeter == false){
		alert('Preencher Campos Obrigatórios')
		event.preventDefault()
	}
}



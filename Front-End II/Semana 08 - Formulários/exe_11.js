

window.onload = function(){
	var formulario = document.getElementById("myForm");
	formulario.addEventListener("submit", validaFormulario)
	formulario.CPF.addEventListener("keypress", mascaraCPF);
	formulario.telefone.addEventListener("keypress", mascaraFone);
}

function mascaraCPF(event){
	
	if(event.keyCode < 48 || event.keyCode > 57){
		event.preventDefault();
	}
	if(this.value.length == 3){
		this.value = this.value + ".";
	}
	if(this.value.length == 7){
		this.value = this.value + ".";
	}
		if(this.value.length == 11){
		this.value = this.value + "-";
	}
	if(this.value.length >= 14){
		alert("CAMPO CPF TOTALMENTE PREENCHIDO")
		event.preventDefault();
	}
}
function mascaraFone(event){
	if(event.keyCode < 48 || event.keyCode > 57){
		event.preventDefault();
	}
		if(this.value.length == 0){
		this.value = this.value + "(";
	}
	if(this.value.length == 3){
		this.value = this.value + ") ";
	}
	if(this.value.length == 10){
		this.value = this.value + "-";
	}
	if(this.value.length >= 15){
		alert("CAMPO TELEFONE TOTALMENTE PREENCHIDO")
		event.preventDefault();
	}
}

function validaFormulario(event){
	let formulario = document.getElementById("myForm")
	const numElementos = formulario.elements.length
	let submeter=true
	for(let i=0; i < numElementos; i++){
		let controle = formulario.elements[i];
		
		if(controle.value == ""){
			controle.style.border="1px solid red"
			submeter=false
			//alert(controle.id)
		}else{
			controle.style.border="1px solid green"
		}
	}
		if(submeter == false){
			alert('Preencher Campos Obrigatórios')
			event.preventDefault()
		}
}




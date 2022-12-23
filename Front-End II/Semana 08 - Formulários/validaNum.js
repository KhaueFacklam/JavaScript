window.onload = function(){
	var formulario = document.getElementById("formulario");
	formulario.telefone.addEventListener("keypress", verificaNumero);
	formulario.cpf.addEventListener("keypress", verificaNumero);
}
function verificaNumero(event){
	if(event.keyCode < 48 || event.keyCode > 57){
		event.preventDefault()
	}
}
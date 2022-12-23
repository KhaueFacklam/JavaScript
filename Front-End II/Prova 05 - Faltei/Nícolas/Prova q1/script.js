var nome = [], senha = []
var p = document.createElement("p");
document.querySelector("#entrar1").addEventListener("click", function () {
    let login = document.cadastrar.user1.value;
    let password = document.cadastrar.senha1.value;
    for (let i = 0; i < nome.length; i++) {
        if (login == nome[i]) {
            var repetido = true;
            break;
        }
    }
    if (login.length < 4) {
        p.innerHTML = "O login deve possuir ao menos 4 caracteres";
    } else if(password.length < 5){
        p.innerHTML =  "A senha deve possuir ao menos 5 caracteres";
    }else if (repetido) {
        p.innerHTML = "Login já cadastrado";
    }else{
        p.innerHTML = "Usuário criado";
        nome.push(login);
        senha.push(password);
    }
    document.body.appendChild(p);
})

document.querySelector("#entrar2").addEventListener("click", function () {
    let login = document.login.user2.value;
    let password = document.login.senha2.value;
    for (let i = 0; i < nome.length; i++) {
        if (login == nome[i]) {
            var LogExiste = true;
            break;
        }
    }
    for (let i = 0; i < senha.length; i++) {
        if (password == senha[i]) {
            var PassExiste = true;
            break;
        }
    }
    if(!LogExiste || !PassExiste){
        p.innerHTML = "Usuário/senha inexistente";
        console.log(PassExiste)
    }else if(LogExiste && PassExiste){
        p.innerHTML = "logou";
    }
})
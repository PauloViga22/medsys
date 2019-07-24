var botaoAdm = document.querySelector("#login-adm-principal");
var botaoFuncionario = document.querySelector("#login-funcionario-principal");

var botaoVoltarAdm = document.querySelector("#btn-voltar-login-adm");
var botaoVoltarFuncionario = document.querySelector("#btn-voltar-login-funcionario");


// AÇÕES DO ADMINISTRADOR
var loginFuncionarioPrincipal = document.getElementById("login-funcionario-principal");
var loginAdmSecundario = document.getElementById("login-adm-secundario");

botaoAdm.addEventListener("click", function(event) {
    event.preventDefault();
    MostraLoginAdm();
});

botaoVoltarAdm.addEventListener("click", function(event) {
	event.preventDefault();
    MostraLoginAdmBtnVoltar();
	
});

function MostraLoginAdm() {
	if (loginFuncionarioPrincipal.classList.contains("d-none")) {
		loginFuncionarioPrincipal.classList.remove("d-none");
		loginAdmSecundario.classList.add("d-none");
	} else {
		loginFuncionarioPrincipal.classList.add("d-none");
		loginAdmSecundario.classList.remove("d-none");
	}
}

function MostraLoginAdmBtnVoltar(){
    loginFuncionarioPrincipal.classList.remove("d-none");
	loginAdmSecundario.classList.add("d-none");
}




// AÇÕES DO FUNCIONÁRIO
var loginFuncionarioSecundario = document.getElementById("login-funcionario-secundario");
var loginAdmPrincipal = document.getElementById("login-adm-principal");

botaoFuncionario.addEventListener("click", function(event) {
	event.preventDefault();
	MostraLoginFuncionario();
});

botaoVoltarFuncionario.addEventListener("click", function(event) {
	event.preventDefault();
	MostraLoginFuncionarioBtnVoltar();
});

function MostraLoginFuncionario() {
	if (loginFuncionarioSecundario.classList.contains("d-none")) {
		loginFuncionarioSecundario.classList.remove("d-none");
		loginAdmPrincipal.classList.add("d-none");
	} else {
		loginFuncionarioSecundario.classList.add("d-none");
		loginAdmPrincipal.classList.remove("d-none");
	}
}

function MostraLoginFuncionarioBtnVoltar() {
	loginFuncionarioSecundario.classList.add("d-none");
	loginAdmPrincipal.classList.remove("d-none");
}


// VERIFICAÇÃO DO LOGIN ADM

var usuarioAdm = 'teste';
var senhaAdm = 'teste123';

var inputUserAdm = document.querySelector("#input-user-adm");
var inputSenhaAdm = document.querySelector("#input-senha-adm");


var botaoEntrarAdm = document.querySelector("#btn-entrar-login-adm");

botaoEntrarAdm.addEventListener('click',function(event){
    event.preventDefault();
    
    if(usuarioAdm !== inputUserAdm.value){
        alert("Usuario inválido");
        inputUserAdm.value = '';
    }
    
    if(senhaAdm !== inputSenhaAdm.value){
        alert("Senha Inválida");
        inputSenhaAdm.value = '';
    }


});

// VERIFICAÇÃO DO LOGIN FUNCIONARIO

var usuarioFuncionario = 'func';
var senhaFuncionario = 'func123';

var inputUserFuncionario = document.querySelector("#input-user-funcionario");
var inputSenhaFuncionario = document.querySelector("#input-senha-funcionario");

var botaoEntrarFuncionario = document.querySelector("#btn-entrar-login-funcionario");

botaoEntrarFuncionario.addEventListener("click", function(){
    event.preventDefault();
    

    if(usuarioFuncionario !== inputUserFuncionario.value){
        alert("Usuario inválido");
        inputUserFuncionario.value = '';
    }

    if (senhaFuncionario !== inputSenhaFuncionario.value){
        alert("Senha Inválida");
        inputSenhaFuncionario.value = '';
    }
});
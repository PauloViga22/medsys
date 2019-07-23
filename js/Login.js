var botaoAdm = document.querySelector("#login-adm1");
var botaoFuncionario = document.querySelector("#login-funcionario1");
var botaoVoltarAdm = document.querySelector("#btn-voltar-login-adm");
var botaoLoginAdm = document.querySelector("#btn-entrar-login-adm");
var botaoVoltarFuncionario = document.querySelector("#btn-voltar-login-funcionario");
var botaoLoginFuncionario = document.querySelector("#btn-entrar-login-funcionario");



botaoAdm.addEventListener("click", function(event) {
	event.preventDefault();

	var loginFuncionario1 = document.getElementById("login-funcionario1");
	var loginAdm2 = document.getElementById("login-adm2");

    if (loginFuncionario1.classList.contains('d-none')) {
        loginFuncionario1.classList.remove("d-none");
        loginAdm2.classList.add("d-none");
    } else {
        loginFuncionario1.classList.add("d-none");
        loginAdm2.classList.remove("d-none");
    }

});

botaoVoltarAdm.addEventListener("click", function(event) {
    event.preventDefault();
    var loginFuncionario1 = document.getElementById("login-funcionario1");
	var loginAdm2 = document.getElementById("login-adm2");
	loginFuncionario1.classList.remove("d-none");
    loginAdm2.classList.add("d-none");
});







botaoFuncionario.addEventListener("click", function(event) {
	event.preventDefault();

	var loginFuncionario2 = document.getElementById("login-funcionario2");
	var loginAdm1 = document.getElementById("login-adm1");

	if (loginFuncionario2.classList.contains('d-none')) {
        loginFuncionario2.classList.remove("d-none");
        loginAdm1.classList.add("d-none");
    } else {
        loginFuncionario2.classList.add("d-none");
        loginAdm1.classList.remove("d-none");
    }
});

botaoVoltarFuncionario.addEventListener("click", function(event) {
    event.preventDefault();
    var loginFuncionario2 = document.getElementById("login-funcionario2");
	var loginAdm1 = document.getElementById("login-adm1");

    loginFuncionario2.classList.add("d-none");
    loginAdm1.classList.remove("d-none");
	
});



function scream() {
    alert("AEEEEEEEEEEEEEEEEEEEEEEEEEE");
}

function askMe() {
    var name = prompt("Qual o seu nome?");
    if(name == null || name == "") {
        name = "Visitante";
    }
    else {
        name = name.trim();
    }
    alert("Ola " + name + ", seja bem vindo ao meu site!");
}

function changeText() {
    var h1 = document.getElementsByTagName("h1")[0];
    h1.innerText = "Texto alterado com JavaScript";

    alert(h1.innerText);
    /* document.querySelector("h1").innerText = "Texto alterado com JavaScript"; */
}

function incrementa() {
    var p = document.getElementById("paragrafo");
    var numero = parseInt(p.innerText);
    numero += 1;
    p.innerText = numero;
}

function decrementa() {
    var p = document.getElementById("paragrafo");
    var numero = parseInt(p.innerText);
    numero -= 1;
    p.innerText = numero;
}
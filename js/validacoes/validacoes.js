import faixaEtaria from './validarIdade.js';

const camposDoFormulario = document.querySelectorAll("[required]");
const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const buyerData = {
        "nome": e.target.elements["nome"].value,
        "email": e.target.elements["email"].value,
        "tipo": e.target.elements["tipo"].value,
        "dataNascimento": e.target.elements["dataNascimento"].value
    }

    localStorage.setItem("buyer", JSON.stringify(buyerData));

    window.location.href = './ingressoComprado.html'
})


camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo(campo));
    campo.addEventListener("invalid", evento => evento.preventDefault());
})

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooShort',
    'customError'
];

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    dataNascimento: {
        valueMissing: "Por favor, coloque a sua data de nascimento.",
        customError: "Você não pode entrar no evento."
    },
    tipo: {
        valueMissing: "Por favor, escolha seu tipo de Ingresso."
    }
}

function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('');

    if (campo.name == "dataNascimento" && campo.value != "") {
        faixaEtaria(campo);
    }

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro];
            console.log(mensagem);
        }
    })
    const mensagemErro = campo.parentNode.querySelector('.mensagem__erro');
    const validadorDeInput = campo.checkValidity();

    if (!validadorDeInput) {
        mensagemErro.textContent = mensagem;
    } else {
        mensagemErro.textContent = "";
    }
}
export default function faixaEtaria (campo) {
    const dataNascimento = new Date(campo.value);
    if (!idadeLivre(dataNascimento) && !idadeAcompanhado(dataNascimento)) {
        campo.setCustomValidity('Você não poderá entrar no evento!')
    } if (!idadeLivre(dataNascimento) && idadeAcompanhado(dataNascimento)) {
        campo.setCustomValidity('Lembre-se: Você só poderá entrar acompanhado de um Adulto.')
    }
}

function idadeLivre (data) {
    const dataAtual = new Date();
    const dataMais16 = new Date(data.getUTCFullYear() + 16, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais16;
}

function idadeAcompanhado (data) {
    const dataAtual = new Date();
    const dataMais13 = new Date(data.getUTCFullYear() + 13, data.getUTCMonth(), data.getUTCDate());

    return dataAtual >= dataMais13;
}
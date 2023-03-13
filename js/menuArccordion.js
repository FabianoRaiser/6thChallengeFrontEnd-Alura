const botoesMenu = document.querySelectorAll(".drop-down-arrow");
const arccordionCabecalho = document.querySelectorAll('.info__card-cabecalho');

arccordionCabecalho.forEach(cabecalho => {
    cabecalho.addEventListener('click', () => {
        const arccordionResposta = cabecalho.nextElementSibling;
        cabecalho.classList.toggle('ativo');
        if (cabecalho.classList.contains('ativo')) {
            arccordionResposta.style.maxHeight = arccordionResposta.scrollHeight + 'px';
        } else {
            arccordionResposta.style.maxHeight = 0;   
        }
        
        const index = Array.from(arccordionCabecalho).indexOf(cabecalho)
        botoesMenu[index].classList.toggle('fa-caret-down');
        botoesMenu[index].classList.toggle('fa-caret-up');

    })
})



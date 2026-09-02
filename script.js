 const btnCurtir = document.getElementById('btn-curtir');
    const iconeCoracao = document.getElementById('icone-coracao');
    const textoCurtir = document.getElementById('texto-curtir');
    const contadorCurtidas = document.getElementById('contador-curtidas');

    let curtiu = false;
    let totalCurtidas = 0;

    btnCurtir.addEventListener('click', () => {
        curtiu = !curtiu;

        if (curtiu) {
            totalCurtidas++;
            iconeCoracao.classList.remove('fa-regular');
            iconeCoracao.classList.add('fa-solid');
            btnCurtir.classList.add('curtido');
            textoCurtir.textContent = 'Curtido';
        } else {
            totalCurtidas--;
            iconeCoracao.classList.remove('fa-solid');
            iconeCoracao.classList.add('fa-regular');
            btnCurtir.classList.remove('curtido');
            textoCurtir.textContent = 'Curtir';
        }

        contadorCurtidas.textContent = totalCurtidas;
    });
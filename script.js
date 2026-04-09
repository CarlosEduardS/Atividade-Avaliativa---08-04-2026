document.addEventListener("DOMContentLoaded", function() {
    // Carrossel apenas no primeiro post
    const images = ["imgs/post1.png", "imgs/post2.png", "imgs/post3.png"];
    // Fotos de perfil para troca rapida
    const perfilImg = ['imgs/userImg.png','imgs/profileIcon.png'];
    // Definição dos index
    let index = 0;
    let indexProfile = 1;
    // Pegando as tags img (1 so pega a tag do primeiro cartao para carrosel)
    const imgElement = document.querySelector(".box:first-child img");
    const profileImg = document.getElementById('profileImg');

    profileImg.addEventListener('click', function(){
        //Mudança de foto de perfil
        indexProfile ++;
        if (indexProfile > 1)
            indexProfile = 0;
        profileImg.src = perfilImg[indexProfile];
    })

    setInterval(() => {
        //carrosel infinito entre 3 fotos
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 1500);
});

// Função de Like para cada post
function Like(button) {
    // encontra o div pai (box) do botão clicado
    const box = button.closest(".box");
    // dentro desse box, pega o <span> que guarda o número de likes
    const likeSpan = box.querySelector("span");
    // incrementa o valor
    let currentLikes = parseInt(likeSpan.innerText);
    likeSpan.innerText = currentLikes + 1;
}

// variavel para verificar thema atual
let dark = false;

// Dark/Light Mode
function Mode() {
    document.body.classList.toggle("darkMode");
    // chamando botao de troca de modo
    const button = document.getElementById('Theme')

    //trocando o nome com base no modo
    dark = !dark
    if (dark)
        button.innerText = 'Light Mode'
    else
        button.innerText = 'Dark Mode'
}

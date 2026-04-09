document.addEventListener("DOMContentLoaded", function() {
    // Carrossel apenas no primeiro post
    const images = ["imgs/post1.png", "imgs/post2.png", "imgs/post3.png"];
    let index = 0;
    const imgElement = document.querySelector(".box:first-child img"); // pega só a primeira imagem

    setInterval(() => {
        index = (index + 1) % images.length;
        imgElement.src = images[index];
    }, 2000);
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

// Dark/Light Mode
function Mode() {
    document.body.classList.toggle("darkMode");
}

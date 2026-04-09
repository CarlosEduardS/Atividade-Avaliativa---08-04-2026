document.addEventListener("DOMContentLoaded", function() {
    const images = ["imgs/post1.png", "imgs/post2.png", "imgs/post3.png"];
    let index = 0;
    const imgElement = document.getElementById("postImage");

    setInterval(() => {
        index = (index + 1) % images.length; // avança e volta ao início
        imgElement.src = images[index];
    }, 3000); // troca a cada 3 segundos
});

dark = false;
likes = 0;

function Like() {
    likes++;
    document.getElementById('likes').innerText = `Likes: ${likes}`;
}

function Mode() {
    document.body.classList.toggle("dark-mode");
    dark = !dark;
    if (dark) {
        document.getElementsByTagName('h1')[0].style.color = '#fff';
        document.getElementsByTagName('header')[0].classList.add('darkMode');
        document.getElementsByTagName('header')[0].style.backgroundColor = '#444';
        document.getElementsByTagName('div')[0].style.backgroundColor = '#555';
        document.getElementsByTagName('h4')[0].style.color = '#fff';
        document.body.classList.add('darkMode');
    } else {
        document.getElementsByTagName('h1')[0].style.color = '#333';
        document.getElementsByTagName('header')[0].classList.remove('darkMode');
        document.getElementsByTagName('div')[0].style.backgroundColor = '#eee';
        document.getElementsByTagName('header')[0].style.backgroundColor = '#eee';
        document.getElementsByTagName('h4')[0].style.color = '#333';
        document.body.classList.remove('darkMode');
    }
}
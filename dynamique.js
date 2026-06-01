const containt = document.querySelector(".contenair");
const image = [
    "./1.png",
    "./2.jpg",
    "./3.jpg",
    "./4.jpg",
    "./5.jpg",
    "./6.jpg",
    "./7.jpg",
    "./8.jpg",
    "./9.jpg",
];
// console.log(image.length[0]);
function Raindrop() {
    const rain = document.createElement("div");
    rain.classList.add("rain");
    /*position aleatoie*/
    rain.style.left = Math.random() * window.innerWidth + "px";
    /*vitesse aleatoire*/
    rain.style.animationDuration = (4 + Math.random() * 5) + "s";
    /*taille aleatoire*/
    let size = 70 + Math.random() * 60 + "px";
    rain.style.width = size;
    rain.style.height = size;
    /*image*/
    const photo = document.createElement("img");
    // photo.classList.add(".")
    photo.src = image[Math.floor(Math.random() * image.length)];/*Math.floor permet d'avoir le meme valeur de math.radom mais avec x-1 a la dernier valeur */
    rain.appendChild(photo);
    /*click*/
    rain.addEventListener('click', () => {
        rain.classList.toggle('affiche');
    });
    /*supprime apres la chute */
    setTimeout(() => {
        rain.remove();
    }, 8000);
    containt.appendChild(rain);


}
setInterval(Raindrop, 800);


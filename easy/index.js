const cover = document.querySelector(".card-image");
const title = document.querySelector(".card-content h5");
const artist = document.querySelector(".artist");
const audio = document.querySelector("audio");

const data = {
    title: "What You Know",
    artist: "Two Door Cinema Club",
    cover: "files/banner-Two-Door-Cinema-Club.jpg",
    file: "files/What-You-Know.mp3"
}

cover.style.background = `url('${data.cover}') no-repeat center center/ cover`;
title.innerText = data.title;
// artist.innerText = `<i class='material-icons'>account_circle</i> ${data.artist}`
artist.innerText = data.artist;
audio.src = data.file;

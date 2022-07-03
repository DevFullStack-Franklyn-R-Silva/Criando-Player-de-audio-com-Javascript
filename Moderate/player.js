window.player = {
    title: document.querySelector(".card-content h5"),
    cover: document.querySelector(".card-image"),
    artist: document.querySelector(".artist"),
    audio: document.querySelector("audio"),
    data: {
        title: "What You Know",
        artist: "Two Door Cinema Club",
        cover: "files/banner-Two-Door-Cinema-Club.jpg",
        file: "files/What-You-Know.mp3"
    },
    start() {
        this.cover.style.background = `url('${this.data.cover}') no-repeat center center/ cover`;
        this.title.innerText = this.data.title;
        this.artist.innerText = this.data.artist;
        this.audio.src = this.data.file;
    }
};

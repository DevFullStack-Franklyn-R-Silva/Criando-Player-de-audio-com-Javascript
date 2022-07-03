import { secondsToMinutes } from "./utils.js";

export default {
    get() {
        this.cover = document.querySelector(".card-image");
        this.title = document.querySelector(".card-content h5");
        this.artist = document.querySelector(".artist");
        this.playPause = document.querySelector("#play-pause");
        this.mute = document.querySelector("#mute");
        this.volume = document.querySelector("#vol-control");
        this.seekbar = document.querySelector("#seekbar");
        this.currentDuration = document.querySelector("#current-duration");
        this.totalDuration = document.querySelector("#total-duration");
        this.nextTrack = document.querySelector("#next-track");
        this.previousTrack = document.querySelector("#previous-track");
        
        this.music1 = document.querySelector("#music1");
        this.music2 = document.querySelector("#music2");
        this.music3 = document.querySelector("#music3");
        this.music4 = document.querySelector("#music4");
        this.music5 = document.querySelector("#music5");
        this.music6 = document.querySelector("#music6");
        this.music7 = document.querySelector("#music7");
        this.music8 = document.querySelector("#music8");
        this.music9 = document.querySelector("#music9");
        this.music10 = document.querySelector("#music10");

    },
    createAudioElement(audio) {
        this.audio = new Audio(audio);
    },
    actions() {
        this.playPause.onclick = () => this.togglePlayPause();
        this.audio.onended = () => this.next();

        this.mute.onclick = () => this.toggleMute();
        this.audio.ontimeupdate = () => this.timeUpdate();
        this.volume.oninput = () => this.setVolume(this.volume.value);
        this.volume.onchange = () => this.setVolume(this.volume.value);
        this.seekbar.oninput = () => this.setSeek(this.seekbar.value);
        this.seekbar.onchange = () => this.setSeek(this.seekbar.value);
        this.seekbar.max = this.audio.duration;
        this.totalDuration.innerText = secondsToMinutes(this.audio.duration);

        this.nextTrack.onclick = () => this.next();
        this.previousTrack.onclick = () => this.back();

        this.music1.onclick = () => this.listMusic1();
        this.music2.onclick = () => this.listMusic2();
        this.music3.onclick = () => this.listMusic3();
        this.music4.onclick = () => this.listMusic4();
        this.music5.onclick = () => this.listMusic5();
        this.music6.onclick = () => this.listMusic6();
        this.music7.onclick = () => this.listMusic7();
        this.music8.onclick = () => this.listMusic8();
        this.music9.onclick = () => this.listMusic9();
        this.music10.onclick = () => this.listMusic10();
    }
};
function playMusic() {
    const music = document.getElementById("bgMusic");
    const letter = document.getElementById("letter");

    music.play();
    letter.classList.add("show");
}
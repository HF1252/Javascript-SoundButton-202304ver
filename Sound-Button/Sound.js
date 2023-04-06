const sounds = ['AllesExisiteren', 'DankeSchön', 'Weinen', 'Fehler', 'Egal'];

sounds.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = sound;

    btn.addEventListener('click', () => {
        stopMp3()

        document.getElementById(sound).play();
    })

    document.getElementById('buttons').appendChild(btn);
})

function stopMp3() {
    sounds.forEach(sound => {
        const mp3 = document.getElementById(sound);

        mp3.pause();
        mp3.currentTime = 0;
    })
}
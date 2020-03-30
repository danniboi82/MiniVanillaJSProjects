let play = document.getElementById('play');
let stop = document.getElementById('stop');
let video = document.getElementById('video');
let pause = document.getElementById('pause');
let progress = document.getElementById('progress');
let timestamp = document.getElementById('timestamp');

//PlayPause
function toggleVideoStatus() {
    return video.paused ? video.play() : video.pause();
}

function updateIcon() {
    if (video.paused) {
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>'
    } else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'

    }
}

function handleProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    let min = Math.floor(video.currentTime / 60);
    if(min < 10) {
        min = `0${String(min)}`;
    }
    let sec = Math.floor(video.currentTime % 60);
    if(sec < 10) {
        sec = `0${String(sec)}`;
    }
    timestamp.innerHTML = `${min}:${sec}`;
}

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

function setVideoProgress(e) {
    video.currentTime = (+progress.value * video.duration) / 100;
}


//Event Listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updateIcon);
video.addEventListener('play', updateIcon);
video.addEventListener('timeupdate', handleProgress);

play.addEventListener("click", toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
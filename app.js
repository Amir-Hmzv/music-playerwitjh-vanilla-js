const musicContainer = document.querySelector('.music-container')
const title = document.querySelector('.title')
const playBtn = document.querySelector('.play')
const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const audio = document.querySelector('audio')
const img = document.querySelector('.img-container img')
const progressContainer = document.querySelector('.progress-container')
const progress = document.querySelector('.progress-container .progress')





const songs = ['fresh', 'Hidden', 'Ho3ein']

let songIndex = 2


loadSong(songs[songIndex])

function loadSong(song) {
    audio.src = `music/${song}.mp3`
    img.src =  `img/${song}.jpg`
    title.innerHTML = song

}
function playSong(){
    
    if (playBtn.querySelector('i.fas').classList.contains('fa-play')) {
        playBtn.querySelector('i.fas').classList.remove('fa-play')
        playBtn.querySelector('i.fas').classList.add('fa-pause')
        audio.play()
    }else{
        playBtn.querySelector('i.fas').classList.add('fa-play')
        playBtn.querySelector('i.fas').classList.remove('fa-pause')
        audio.pause()
    }
  
}
function prevSong() {
    songIndex--
    if (songIndex < 0) {
        songIndex = songs.length -1
    }
    loadSong(songs[songIndex])
    playSong()
}
function nextSong() {
    songIndex++
    if (songIndex > songs.length -1) {
        songIndex = 0
    }
    loadSong(songs[songIndex])
    playSong()
}

function updateprogress(e){
    const  {duration,currentTime} = e.srcElement

            const precent = (currentTime / duration) * 100

            progress.style.width =  `${precent}%`
}
 
function setprogress(e) {
    const width = this.clientWidth
    const offset = e.offsetX
    const duration = audio.duration

    audio.currentTime = (offset / width) * duration

}




//event
playBtn.addEventListener('click', playSong)
prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)
audio.addEventListener('timeupdate',updateprogress)
progressContainer.addEventListener('click',setprogress)

audio.addEventListener('ended', nextSong)
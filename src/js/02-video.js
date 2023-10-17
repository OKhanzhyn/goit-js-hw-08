
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

// player.on('play', function() {
//     console.log('played the video!');
// });
// --- ver 1 ---
player.on('timeupdate', throttle(function (data) {
    player.getCurrentTime().then(function (seconds) {
        console.log(seconds);
        localStorage.setItem("videoplayer-current-time", seconds);
    })
},  2000));









// --- ver 2 ---

// player.on('timeupdate', throttle(function(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime.toString());
// }, 1000));


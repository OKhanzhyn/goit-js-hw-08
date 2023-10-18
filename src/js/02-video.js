
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const LOCAL_KEY = 'videoplayer-current-time';
// метод on
player.on(
    'timeupdate',
    throttle(function ({ seconds }) {
        localStorage.setItem(LOCAL_KEY, seconds);
    }, 2000)
);
// відображення в локалсторедж
player.setCurrentTime(localStorage.getItem(LOCAL_KEY) || 0);











// --- ver 1 ---
// player.on('timeupdate', throttle(function (data) {
//     player.getCurrentTime().then(function (seconds) {
//         console.log(seconds);
//         localStorage.setItem("videoplayer-current-time", seconds);
//     })
// },  2000));

// --- ver 2 ---

// player.on('timeupdate', throttle(function(data) {
//     const currentTime = data.seconds;
//     localStorage.setItem('videoplayer-current-time', currentTime.toString());
// }, 1000));


import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

const LOCALSTORAGE_KEY = "videoplayer-current-time";
const savedPlaybackTime = localStorage.getItem(LOCALSTORAGE_KEY);

function getPlaybackTime(data) {
    localStorage.setItem(LOCALSTORAGE_KEY, data.seconds);
}

player.on('timeupdate', throttle(getPlaybackTime, 1000));

player.setCurrentTime(savedPlaybackTime)
    .then(function (seconds) { })
    .catch(function (error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
    }
});
// 获取元素
const video = document.getElementById('video-player');
const playIcon = document.getElementById('play-icon');

// 点击播放图标时控制播放或暂停
playIcon.addEventListener('click', () => {
    if (video.paused) {
        video.play(); // 播放视频
    } else {
        video.pause(); // 暂停视频
    }
});

// 更新播放图标的显示状态
video.addEventListener('play', () => {
    playIcon.classList.add('hidden'); // 隐藏播放图标
});

video.addEventListener('pause', () => {
    playIcon.classList.remove('hidden'); // 显示播放图标
});

// 视频结束时显示播放图标
video.addEventListener('ended', () => {
    playIcon.classList.remove('hidden');
});

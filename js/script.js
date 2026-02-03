document.addEventListener('DOMContentLoaded', () => {
    const audios = document.querySelectorAll('audio');
    audios.forEach(audio => {
        audio.addEventListener('play', (e) => {
            audios.forEach(other => {
                if (other!== e.target) {
                    other.pause();
                    // 这里不重置进度，保持独立进度条
                }
            });
        });
    });
});
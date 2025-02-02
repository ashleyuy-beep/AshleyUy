document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('background-video');
    
    video.addEventListener('ended', function() {
        window.location.href = 'home.html';
    });
});
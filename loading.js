// loading.js

window.addEventListener('load', function () {
    // Wait for 2 seconds before hiding the loading screen
    setTimeout(function () {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.style.display = 'none';
    }, 2000); // 2000 milliseconds = 2 seconds
});

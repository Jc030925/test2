// MODIFIED FOR TESTING: Clickable na agad ang heart button
window.checkDateUnlock = function() {
    // Inalis muna natin ang date check at timer para makita mo ang 3rd page
    goToThirdPage();
};

function goToThirdPage() {
    const finalStage = document.getElementById('final-stage');
    const thirdStage = document.getElementById('third-stage');
    const bgMusic = document.getElementById('bgMusic');
    const finalMusic = document.getElementById('finalMusic');

    // Smooth Music Transition (Fade out Page 1/2 Music, Fade in Page 3 Music)
    let fadeOut = setInterval(() => {
        if (bgMusic.volume > 0.1) {
            bgMusic.volume -= 0.1;
        } else {
            bgMusic.pause();
            clearInterval(fadeOut);
            finalMusic.volume = 0;
            finalMusic.play().catch(e => console.log("Final music blocked"));
            let fadeIn = setInterval(() => {
                if (finalMusic.volume < 0.9) {
                    finalMusic.volume += 0.1;
                } else {
                    clearInterval(fadeIn);
                }
            }, 200);
        }
    }, 200);

    // Smooth Page Transition (Fade out Page 2, Fade in Page 3)
    finalStage.style.opacity = '0';
    setTimeout(() => {
        finalStage.style.display = 'none';
        thirdStage.style.display = 'block';
        
        // Siguraduhin na naka-scroll sa taas ang letter
        thirdStage.scrollTop = 0; 
        
        setTimeout(() => {
            thirdStage.classList.add('show');
        }, 50);
    }, 2000); // 2 seconds transition para cinematic
}

// NOTE: Panatilihin mo lang lahat ng ibang functions mo sa ilalim (startCountdown, fireworks, etc.)

var audio = document.getElementById('audio');

document.getElementById("enter").addEventListener("click", function() {
    const target = document.getElementById("enter");

    target.style.transition = 'opacity 0.70s ease-out';
    target.style.opacity = '0';

    target.addEventListener('transitionend', () => target.remove());

    if (typeof window.orientation == 'undefined') { 
        audio.play();
    }
});

document.getElementById('yessir').addEventListener('click', () => {
    const header = document.querySelector('h1');
    const btnContainer = document.querySelector('.btns');

    header.textContent = "You had no options 🤍";
    header.classList.add('text-change-animation');

    btnContainer.style.display = 'none';

    // Create and insert 'val.png' under the header
    const image = document.createElement('img');
    image.src = './val.png';
    image.className = 'val-image image-change-animation';
    header.insertAdjacentElement('afterend', image);
});

const noButton = document.getElementById('nooo');

function blowUpButton() {
    noButton.classList.add('blow-up');
    setTimeout(() => {
        noButton.style.display = 'none';
    }, 800); // Delay to allow animation to finish
}

noButton.addEventListener('click', blowUpButton);

// Create animated floating hearts
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '💖';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * (30 - 10) + 10}px`;
    heart.style.animationDuration = `${Math.random() * (5 - 2) + 2}s`;
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 5000);
}

setInterval(createHeart, 300);

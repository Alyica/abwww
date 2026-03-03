// JS - Preprosta animacija ob nalaganju
window.addEventListener('load', () => {
    const container = document.querySelector('.container');
    container.style.opacity = '0';
    container.style.transition = 'opacity 1s ease-in-out';
    
    setTimeout(() => {
        container.style.opacity = '1';
    }, 100);
});

// Logika za morebitno dodajanje rezultatov preko konzole (za vajo)
console.log("Stran Alja Brejc uspešno naložena!");

// Lightbox Functionality
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.querySelector('.lightbox-img');
const captionText = document.querySelector('.caption-text');
const closeBtn = document.querySelector('.close');
const galleryImgs = document.querySelectorAll('.gallery-img');

// Odpri lightbox ko klikneš na sliko
galleryImgs.forEach(img => {
    img.addEventListener('click', function() {
        lightbox.classList.add('active');
        lightboxImg.src = this.src;
        lightboxImg.alt = this.alt;
        captionText.textContent = this.alt;
    });
});

// Zapri lightbox
closeBtn.addEventListener('click', () => {
    lightbox.classList.remove('active');
});

// Zapri ko klikneš izven slike
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.classList.remove('active');
    }
});

// Zapri z ESC tipko
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});
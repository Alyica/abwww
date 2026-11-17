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
document.addEventListener('DOMContentLoaded', function() {
    const resultTabs = document.querySelectorAll('.results-tab');

    function selectResultTab(tab) {
        resultTabs.forEach((resultTab) => {
            const selected = resultTab === tab;
            resultTab.setAttribute('aria-selected', String(selected));
            resultTab.tabIndex = selected ? 0 : -1;
            document.getElementById(resultTab.getAttribute('aria-controls')).hidden = !selected;
        });
    }

    resultTabs.forEach((tab, index) => {
        tab.addEventListener('click', () => selectResultTab(tab));
        tab.addEventListener('keydown', (event) => {
            let nextIndex;
            if (event.key === 'ArrowRight') {
                nextIndex = (index + 1) % resultTabs.length;
            } else if (event.key === 'ArrowLeft') {
                nextIndex = (index - 1 + resultTabs.length) % resultTabs.length;
            } else if (event.key === 'Home') {
                nextIndex = 0;
            } else if (event.key === 'End') {
                nextIndex = resultTabs.length - 1;
            } else {
                return;
            }

            event.preventDefault();
            resultTabs[nextIndex].focus();
            selectResultTab(resultTabs[nextIndex]);
        });
    });

    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const captionText = document.querySelector('.caption-text');
    const closeBtn = document.querySelector('.close');
    const galleryImgs = document.querySelectorAll('.gallery-img');

    galleryImgs.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.classList.add('active');
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            captionText.textContent = this.alt;
        });
    });

    closeBtn.addEventListener('click', () => {
        lightbox.classList.remove('active');
        lightboxImg.src = '';
        captionText.textContent = '';
    });

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.classList.remove('active');
            lightboxImg.src = '';
            captionText.textContent = '';
        }
    });
});

// Zapri z ESC tipko
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.classList.remove('active');
    }
});
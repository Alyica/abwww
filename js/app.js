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
const kartyanevek = document.querySelectorAll('.jatekos');
const hely = document.getElementsByClassName('dropzone');
let szamlalo = 0;

kartyanevek.forEach(kartyanev => {
    kartyanev.addEventListener('dragstart', (event) => {
        event.target.id = "kartyanev_" + szamlalo; // ID beállítása
        event.dataTransfer.setData('text/plain', event.target.id); // Az id mentése
        szamlalo++;
    });
});

Array.from(hely).forEach(element => {
    element.addEventListener('drop', (event) => {
        event.preventDefault(); // Megakadályozzuk az alapértelmezett viselkedést
        const id = event.dataTransfer.getData('text/plain'); // Az elvitt kártya ID-ja
        const fogottkartya = document.getElementById(id); // Kártya elem lekérése
        element.appendChild(fogottkartya); // A kártya hozzáadása a célhelyhez
        element.style.backgroundColor = ""; // A háttérszín visszaállítása
        fogottkartya.style.margin="0px";
        
    });

    element.addEventListener('dragover', (event) => {
        event.preventDefault(); // Engedélyezzük az elem áthúzását
        element.style.backgroundColor = "#DA291C"; // Átmeneti színváltoztatás, jelezve, hogy ide húzható
    });

    element.addEventListener('dragleave', () => {
        element.style.backgroundColor = ""; // Töröljük a háttérszínt, ha elhagyjuk a területet
    });
});

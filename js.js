const kartyanevek = document.querySelectorAll('.jatekos');
const hely = document.getElementsByClassName('dropzone');
let szamlalo = 0;

kartyanevek.forEach(kartyanev => {
    kartyanev.addEventListener('dragstart', (event) => {
        event.target.id = "kartyanev_" + szamlalo; 
        event.dataTransfer.setData('text/plain', event.target.id); 
        szamlalo++;
    });
});

Array.from(hely).forEach(element => {
    let vizsg = false;
    element.addEventListener('drop', (event) => {
        event.preventDefault(); 
        const id = event.dataTransfer.getData('text/plain'); 
        const fogottkartya = document.getElementById(id);
        if(vizsg==false){
            element.appendChild(fogottkartya); 
            element.style.backgroundColor = ""; 
            fogottkartya.style.margin="0px";
            element.style.opacity= "100%";
            vizsg=true;
        } 
        
    });

    element.addEventListener('dragover', (event) => {
        event.preventDefault(); 
        element.style.backgroundColor = "#DA291C"; 
    });

    element.addEventListener('dragleave', () => {
        element.style.backgroundColor = ""; 
    });
});

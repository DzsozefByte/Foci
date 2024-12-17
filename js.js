kartyanevek=document.querySelectorAll('.jatekos');
const hely=document.getElementsByClassName('dropzone');

kartyanevek.forEach(kartyanev => {
    kartyanev.addEventListener('dragstart',(event)=>{
        event.dataTransfer.setData('text/plain', event.target.id);
    })
});
hely.forEach(element => {
    element.addEventListener('drop',(event)=>{
        event.preventDefault();
        const id=event.dataTransfer.getData('text/plain');
        const fogottkartya=document.getElementById(id);
        hely.appendChild(fogottkartya);
    });
    
    element.addEventListener('dragover',(event)=>{
        event.preventDefault();
    })
});

export default function initTextLimit(){
    const p = document.querySelector('.game p')
    const maxText = 20;

    if(p.textContent.length > maxText){
        p.textContent = p.textContent.slice(0, maxText) + '...';
    }
}
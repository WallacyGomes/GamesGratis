export default function textLimit() {
    const gameDescricao = document.querySelectorAll('.game p');
    const gameTitulo = document.querySelectorAll('.game h2')
    const maxText = 30;
    const maxTextTitulo = 26;
    
    gameDescricao.forEach(texto => {
        const textOriginal = texto.textContent;
        const textLimited = texto.textContent.slice(0, maxText) + '(...)';

        if(texto.textContent.length > maxText){
            texto.textContent = textLimited;
            texto.classList.add('limitado');

            texto.addEventListener('click', () => {
                if(texto.textContent === textLimited) {
                    texto.textContent = textOriginal;
                    texto.classList.remove('limitado');
                }
            })
        }
    })

    gameTitulo.forEach(texto => {
        const textOriginal = texto.textContent;
        const textLimited = texto.textContent.slice(0, maxTextTitulo) + '(...)';

        if(texto.textContent.length > maxTextTitulo){
            texto.textContent = textLimited;
            texto.classList.add('limitado');

            texto.addEventListener('click', () => {
                if(texto.textContent === textLimited) {
                    texto.textContent = textOriginal;
                    texto.classList.remove('limitado');
                }
            })
        }
    })
}
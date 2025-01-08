
export function renderHeader() {
    header()
}

function header() {
    const page = document.querySelector('div.page');
    const header = document.createElement('header')
    const greetingTextContainer = document.createElement('div');
    const greetingText = document.createElement('p');
    const greatingZero = document.createElement('p');
    
    header.className = 'header'
    greetingTextContainer.className = 'greeting-text-container';
    greetingText.className = 'greeting-text'
    greatingZero.className = 'greeting-zero'

    greetingText.innerText = 'Hell';
    greatingZero.innerText = '0'

    page.appendChild(header)
    header.appendChild(greetingTextContainer);
    greetingTextContainer.appendChild(greetingText);
    greetingTextContainer.appendChild(greatingZero)
}
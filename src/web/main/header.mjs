
export function renderHeader() {
    header()
}

function header() {
    const page = document.querySelector('div.page');
    const header = document.createElement('header')
    const greetingTextContainer = document.createElement('div');
    const greetingText = document.createElement('h1');
    const greatingZero = document.createElement('p');
    
    header.className = 'header'
    greetingTextContainer.className = 'greeting-text-container';
    greetingText.className = 'greeting-text'
    greetingText.ariaLabel = 'hello'
    greetingText.tabIndex = 0
    greatingZero.className = 'greeting-zero'

    greetingText.innerText = 'Hell';
    greatingZero.innerText = '0'

    page.appendChild(header)
    header.appendChild(greetingTextContainer);
    greetingTextContainer.appendChild(greetingText);
    greetingTextContainer.appendChild(greatingZero)
}
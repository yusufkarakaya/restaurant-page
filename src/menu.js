function createMenu() {
    const menu = document.createElement('div')

    menu.appendChild(createParagraph('welcome to menu page'))

    return menu
}

function createParagraph(text) {
    const paragraph = document.createElement('p')
    paragraph.textContent = text
    return paragraph
}

function loadMenu() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createMenu())
    return main
}

export default loadMenu
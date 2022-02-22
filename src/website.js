import loadContact from "./contact"
import loadHome from "./home"
import loadMenu from "./menu"

function createHeader() {
    const header = document.createElement('header')
    header.classList.add('header')
    const titleLogo = document.createElement('h1')
    titleLogo.classList.add('logo')
    titleLogo.textContent = 'mediterranean restaurant'
    titleLogo.addEventListener('click', () => {
        const home = document.getElementById('home')
        setActiveButton(home)
        loadHome()
    })

    header.appendChild(titleLogo)
    header.appendChild(createNav())

    return header
}

function createNav() {
    const nav = document.createElement('nav')
    nav.classList.add('nav')

    const menu = document.createElement('button')
    menu.classList.add('button-nav')
    menu.textContent = 'Menu'
    menu.addEventListener('click', () => {
        setActiveButton(menu)
        loadMenu()
    })

    const home = document.createElement('button')
    home.classList.add('button-nav')
    home.setAttribute('id', 'home')
    home.textContent = 'Home'
    home.addEventListener('click', () => {
        setActiveButton(home)
        loadHome()
    })

    const contact = document.createElement('button')

    contact.classList.add('button-nav')
    contact.textContent = 'Contact'
    contact.addEventListener('click', () => {
        setActiveButton(contact)
        loadContact()
    })

    nav.appendChild(home)
    nav.appendChild(menu)
    nav.appendChild(contact)

    return nav
}

function setActiveButton(button) {
    const buttons = document.querySelectorAll(".button-nav");

    buttons.forEach((button) => {
        if (button !== this) {
            button.classList.remove("active");
        }
    });
    button.classList.add("active");
}

function createMain() {
    const main = document.createElement('main')
    main.setAttribute('id', 'main')
    main.setAttribute('class', 'main')
    return main
}

function createFooter() {
    const footer = document.createElement('footer')
    const copy = document.createElement('p')
    copy.textContent = 'Made by Yusuf Karakaya'
    footer.appendChild(copy)

    return footer
}

function initializeWebsite() {
    const content = document.getElementById('content')

    content.appendChild(createHeader());
    content.appendChild(createMain());
    content.appendChild(createFooter());

    setActiveButton(document.querySelector(".button-nav"));

    loadHome()
}

export default initializeWebsite


function createHome() {

    const home = document.createElement('div')
    const homeImage = document.createElement('img')
    homeImage.classList.add('images')
    homeImage.src = 'images/home-image.jpg'
    homeImage.alt = 'meditarranean food'

    home.appendChild(homeImage)
    return home
}

function loadHome() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createHome())
    return main
}

export default loadHome
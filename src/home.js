function createHome() {

    const home = document.createElement('div')
    home.classList.add('home')
    const homeLeft = document.createElement('div')
    const homeRight = document.createElement('div')
    homeLeft.classList.add('homeLeft')
    homeRight.classList.add('homeRight')

    const title = document.createElement('h1')
    title.innerHTML = "Make your next meal " + '</br>' + "A memorable one"
    const description = document.createElement('p')
    description.textContent = "Our Mediterranean influenced kitchen gains inspiration from the best cuisine the Levant has to offer"


    homeLeft.appendChild(title)
    homeLeft.appendChild(description)
    home.appendChild(homeLeft)
    home.appendChild(homeRight)

    return home
}

function loadHome() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createHome())
    return main
}

export default loadHome
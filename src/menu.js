function createMenu() {
    const menu = document.createElement('div')
    menu.classList.add('menu')
    const createUl = document.createElement('ul')

    const moussaka = document.createElement('li')
    moussaka.textContent = 'Moussaka'
    const mousakkaProfil = document.createElement('img')
    mousakkaProfil.src = 'images/moussaka.jpeg'
    mousakkaProfil.alt = 'Moussaka'
    mousakkaProfil.classList.add('menu-img')
    moussaka.appendChild(mousakkaProfil)

    const lambChopsPlate = document.createElement('li')
    lambChopsPlate.textContent = 'Lamb Chops Plate'
    const lambChopsPlateProfil = document.createElement('img')
    lambChopsPlateProfil.src = 'images/lamb.jpeg'
    lambChopsPlateProfil.alt = 'lambChopsPlate'
    lambChopsPlateProfil.classList.add('menu-img')
    lambChopsPlate.appendChild(lambChopsPlateProfil)

    const falafelPlate = document.createElement('li')
    falafelPlate.textContent = 'Falafel Plate'
    const falafelPlateProfil = document.createElement('img')
    falafelPlateProfil.src = 'images/falafel.jpeg'
    falafelPlateProfil.alt = 'falafelPlate'
    falafelPlateProfil.classList.add('menu-img')
    falafelPlate.appendChild(falafelPlateProfil)


    const kebabSpecialPlate = document.createElement('li')
    kebabSpecialPlate.textContent = 'Kebab Special Plate'
    const kebabSpecialPlateProfil = document.createElement('img')
    kebabSpecialPlateProfil.src = 'images/kebap.jpg'
    kebabSpecialPlateProfil.alt = 'kebabSpecialPlate'
    kebabSpecialPlateProfil.classList.add('menu-img')
    kebabSpecialPlate.appendChild(kebabSpecialPlateProfil)

    createUl.appendChild(kebabSpecialPlate)
    createUl.appendChild(falafelPlate)
    createUl.appendChild(lambChopsPlate)
    createUl.appendChild(moussaka)
    menu.appendChild(createUl)

    return menu
}

function loadMenu() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createMenu())
    return main
}

export default loadMenu
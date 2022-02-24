function createContact() {
    const contact = document.createElement('div')
    contact.classList.add('contact')

    const title = document.createElement('h1')
    title.textContent = 'Get in Touch!'


    const phoneNumber = document.createElement('p')
    phoneNumber.textContent = '📞 123 456 789'
    phoneNumber.classList.add('adress')

    const address = document.createElement('p')
    address.textContent = '🏠 Culver City 90054, Los Angeles, USA'
    address.classList.add('adress')

    contact.appendChild(title)
    contact.appendChild(phoneNumber)
    contact.appendChild(address)

    return contact
}

function loadContact() {
    const main = document.getElementById('main')
    main.textContent = ''
    main.appendChild(createContact())
}

export default loadContact
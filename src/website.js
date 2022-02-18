function createHeader() {
    const header = document.createElement('h1')
    header.textContent = 'Restraunt Page'

    return header
}

function initializeWebsite() {
    const content = document.getElementById('content')

    content.appendChild(createHeader())
}

export default initializeWebsite
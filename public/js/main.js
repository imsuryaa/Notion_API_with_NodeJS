const eventsElement = document.querySelector('#events')
const loadingElement = document.querySelector('#loading')

let loading = false

const getEvents = async () => {
    loading = true
    const res = await fetch('http://localhost:5000/events')
    const data = res.json()
    loading = false
    return data
}

const addEventsToDom = async () => {
    const events = await getEvents()
    
    if(!loading) {
        loadingElement.innerHTML = ''
    }
    events.forEach(event => {
        const div = document.createElement('div')
        div.className = 'events'
        div.innerHTML = `
            <h3>${event.title}</h3>
            <ul>
                <li><strong>Date: </strong>${event.date}</li>
                <li><strong>Description: </strong>${event.description}</li>
            </ul>
            <div class='tags'>${event.tags}</div>
            <br />
        `
        eventsElement.appendChild(div)
    })
}

addEventsToDom()
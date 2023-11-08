const start = document.getElementById('start')
const ready = document.getElementById('ready')
const leave = document.getElementById('leave')

const result = document.getElementById('result')

ready.addEventListener('click', function() {
    start.innerHTML = '<h1>Snyggt! Välkommen till fängelsehålan.</h1>'
    firstRoom.style.display = 'block'
})

leave.addEventListener('click', function() {
    start.innerHTML = '<h1>Du har avslutat spelet</h1>'
    result.innerHTML = "We're sad to see you go... Tack för att du urforskade Dungeons!"
})
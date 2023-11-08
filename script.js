const start = document.getElementById('start')
const ready = document.getElementById('ready')
const leave = document.getElementById('leave')

const firstRoom = document.getElementById('first-room')
const sword = document.getElementById('sword')
const slingshot = document.getElementById('slingshot')
const weapons = []

const result = document.getElementById('result')

ready.addEventListener('click', function() {
    start.innerHTML = '<h1>Snyggt! Välkommen till fängelsehålan.</h1>'
    firstRoom.style.display = 'block'
})

leave.addEventListener('click', function() {
    start.innerHTML = '<h1>Du har avslutat spelet</h1>'
    result.innerHTML = "We're sad to see you go... Tack för att du urforskade Dungeons!"
})

sword.addEventListener('click', function() {
    firstRoom.style.display = 'none'
    swordRoom.style.display = 'block' 
    addWeapon('Svärd')   
    saveGameState()
    document.body.style.backgroundImage = "url('/images/dragon2.jpg')"
})

slingshot.addEventListener('click', function() {
    firstRoom.style.display = 'none'
    slingshotRoom.style.display = 'block'
    addWeapon('Slangbella')
    document.body.style.backgroundImage = "url('/images/dragon2.jpg')"
})
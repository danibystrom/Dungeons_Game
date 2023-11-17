    document.addEventListener('DOMContentLoaded', main)
    const start = document.getElementById('start')
    const ready = document.getElementById('ready')
    const leave = document.getElementById('leave')

    const firstRoom = document.getElementById('first-room')
    const sword = document.getElementById('sword')
    const slingshot = document.getElementById('slingshot')
    let weapons = []

    const swordRoom = document.getElementById('sword-room')
    const swordFight = document.getElementById('sword-fight')

    const slingshotRoom = document.getElementById('slingshot-room')
    const slingshotFight = document.getElementById('slingshot-fight')

    const winningRoom = document.getElementById('winning-room')
    const loosingRoom = document.getElementById('loosing-room')
    const playAgainWinning = document.getElementById('play-again-winning')
    const playAgainLoosing = document.getElementById('play-again-loosing')

    const result = document.getElementById('result')

    function main() {
        loadGameState()
        saveGameState()
    }

    ready.addEventListener('click', function() {
        firstRoom.style.display = 'block'
    })

    leave.addEventListener('click', function() {
        start.innerHTML = '<h1>Du har avslutat spelet</h1>'
        result.innerHTML = "We're sad to see you go... Tack för att du urforskade Dungeons!"
        document.body.style.backgroundImage = "url('/images/toothless.jpg')"
    })

    sword.addEventListener('click', function() {
        firstRoom.style.display = 'none'
        swordRoom.style.display = 'block' 
        addWeapon('Svärd')  
        saveGameState() 
    })

    slingshot.addEventListener('click', function() {
        firstRoom.style.display = 'none'
        slingshotRoom.style.display = 'block'
        addWeapon('Slangbella')
        saveGameState()
    })

    swordFight.addEventListener('click', function() {
        swordRoom.style.display = 'none'
        winningRoom.style.display = 'block'
    })

    slingshotFight.addEventListener('click', function() {
        slingshotRoom.style.display = 'none'
        loosingRoom.style.display = 'block'
    })

    playAgainWinning.addEventListener('click', function() {
        resetGameState()
        window.location.href = "index.html"
    })

    playAgainLoosing.addEventListener('click', function() {
        resetGameState()
        window.location.href = "index.html"
    })

    function addWeapon(weapon) {
        weapons.push(weapon)
        console.log(weapons)
    }

    function saveGameState() {
        let weaponString = JSON.stringify(weapons)
        localStorage.setItem('weapons', weaponString)    
    }

    function loadGameState() {
        let weaponString = localStorage.getItem('weapons')
        if(weaponString) {
            weapons = JSON.parse(weaponString)
        }
    }

    function resetGameState () {
        localStorage.removeItem('gameState')
        weapons.length = 0
    }
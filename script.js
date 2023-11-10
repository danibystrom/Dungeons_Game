    const start = document.getElementById('start')
    const ready = document.getElementById('ready')
    const leave = document.getElementById('leave')

    const firstRoom = document.getElementById('first-room')
    const sword = document.getElementById('sword')
    const slingshot = document.getElementById('slingshot')
    const weapons = []

    const swordRoom = document.getElementById('sword-room')
    const swordFight = document.getElementById('sword-fight')

    const slingshotRoom = document.getElementById('slingshot-room')
    const slingshotFight = document.getElementById('slingshot-fight')

    const winningRoom = document.getElementById('winning-room')
    const loosingRoom = document.getElementById('loosing-room')
    const playAgainWinning = document.getElementById('play-again-winning')
    const playAgainLoosing = document.getElementById('play-again-loosing')

    const result = document.getElementById('result')

    loadGameState()

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
        document.body.style.backgroundImage = "url('/images/dragon2.jpg')"
    })

    slingshot.addEventListener('click', function() {
        firstRoom.style.display = 'none'
        slingshotRoom.style.display = 'block'
        addWeapon('Slangbella')
        document.body.style.backgroundImage = "url('/images/dragon2.jpg')"
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

    function addWeapon(weapon) {
        weapons.push(weapon)
        console.log(weapons)
    }

    function saveGameState() {
        localStorage.setItem('gameState', JSON.stringify(weapons))
    }

    function loadGameState() {
        const saveGameState = localStorage.getItem('gameState')
        if(saveGameState) {
            weapons.length = 0
            weapons.push(...JSON.parse(saveGameState))
        }
    }

    function resetGameState () {
        localStorage.removeItem('gameState')
        weapons.length = 0
    }
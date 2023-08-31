const defeatedImages = {
    "Warrior": "image/defeated-warrior.png",
    "Rogue": "image/defeated-rogue.png",
    "Black Mage": "image/defeated-bm.png",
    "White Mage": "image/defeated-wm.png",
};

const celebratoryGIFs = {
    "Warrior": "image/celebration-warrior.gif",
    "Rogue": "image/celebration-rogue.gif",
    "Black Mage": "image/celebration-bm.gif",
    "White Mage": "image/celebration-wm.gif",
};

function celebrateWinningTeam(winningTeam, teamId) {
    for (let i = 0; i < winningTeam.length; i++) {
        const character = winningTeam[i];
        const characterImage = document.getElementById(`${teamId.toLowerCase()}-char${i + 1}`);

        if (!character.isAlive()) {
            characterImage.src = defeatedImages[character.name];
            characterImage.classList.remove('defeated');
        } else {
            characterImage.src = celebratoryGIFs[character.name];
        }
    }

    const defeatedCharacters = winningTeam.filter(character => !character.isAlive());

    for (const defeatedCharacter of defeatedCharacters) {
        defeatedCharacter.characterImage.classList.add('defeated');
    }
}

class Character {
    constructor(name, healthPoints, evasionChance) {
        this.name = name;
        this.healthPoints = healthPoints;
        this.maxHealthPoints = healthPoints;
        this.evasionChance = evasionChance;
    }

    isAlive() {
        return this.healthPoints > 0;
    }

    takeDamage(attackerName, attackerTeamId, defenderTeamId, damage) {
        if (Math.random() > this.evasionChance) {
            const prevHP = this.healthPoints;
            this.healthPoints -= damage;
            if (this.healthPoints < 0) {
                this.healthPoints = 0;
            }
    
            console.log(`${defenderTeamId} ${this.name} took ${damage} damage from ${attackerTeamId} ${attackerName}. HP: ${this.healthPoints}/${this.maxHealthPoints}`);
    
            // Update image if HP drops to 0
            if (this.healthPoints === 0) {
                const characterImage = document.getElementById(`${defenderTeamId.toLowerCase()}-char${this.teamIndex + 1}`);
                if (characterImage) {
                    characterImage.src = defeatedImages[this.name];
                    characterImage.classList.add('defeated'); // Add the defeated class
                }
            }
        } else {
            console.log(`${defenderTeamId} ${this.name} evaded the attack from ${attackerTeamId} ${attackerName}! HP: ${this.healthPoints}/${this.maxHealthPoints}`);
        }
    }
}

class Warrior extends Character {
    constructor() {
        super('Warrior', 650, 0.05);
        this.protectingAlly = null;
    }

    slash(target, attackerTeamId, defenderTeamId) {
        target.takeDamage(this.name, attackerTeamId, defenderTeamId, 50);
    }

    protega(ally) {
        this.protectingAlly = ally;
        console.log(`${this.name} used Protega to protect ${ally.name}.`);
    }
}

class Rogue extends Character {
    constructor() {
        super('Rogue', 550, 0.1);
    }

    slash(target, attackerTeamId, defenderTeamId) {
        target.takeDamage(this.name, attackerTeamId, defenderTeamId, 50);
    }

}

class Monk extends Character {
    constructor() {
        super('Monk', 600, 0.05);
    }

    punch(target, attackerTeamId, defenderTeamId) {
        target.takeDamage(this.name, attackerTeamId, defenderTeamId, 60);
    }
}

class WhiteMage extends Character {
    constructor() {
        super('White Mage', 450, 0.05);
    }

    strike(target, attackerTeamId) {
        target.takeDamage(this.name, attackerTeamId, attackerTeamId, 50);
    }

    curaga(ally, attackerTeamId) {
        this.heal(ally, 40);
        console.log(`${attackerTeamId} ${this.name} used Curaga on ${attackerTeamId} ${ally.name}. HP: ${ally.healthPoints}/${ally.maxHealthPoints}`);
    }

    heal(target, amount) {
        target.healthPoints += amount;
        if (target.healthPoints > target.maxHealthPoints) {
            target.healthPoints = target.maxHealthPoints;
        }
    }

    findAllyToHeal(team1, team2) {
        const allTeams = [...team1, ...team2];
        const injuredAllies = allTeams.filter(
            character => character !== this && character.isAlive() && character.healthPoints < character.maxHealthPoints
        );
        if (injuredAllies.length > 0) {
            return injuredAllies[Math.floor(Math.random() * injuredAllies.length)];
        }
        return null;
    }

    canHeal() {
        const injuredAlly = this.findAllyToHeal(team1, team2);
        return injuredAlly && injuredAlly.healthPoints < injuredAlly.maxHealthPoints;
    }
}

class BlackMage extends Character {
    constructor() {
        super('Black Mage', 500, 0.05);
    }

    strike(target, attackerTeamId, defenderTeamId) {
        target.takeDamage(this.name, attackerTeamId, defenderTeamId, 30);
    }

    firaga(target, attackerTeamId, defenderTeamId) {
        target.takeDamage(this.name, attackerTeamId, defenderTeamId, 80);
    }
}

const warrior = new Warrior();
const rogue = new Rogue();
const monk = new Monk();
const whiteMage = new WhiteMage();
const blackMage = new BlackMage();

const team1 = [
    new Warrior(),
    new Rogue(),
    new BlackMage(),
    new WhiteMage()
];

const team2 = [
    new Warrior(),
    new Rogue(),
    new BlackMage(),
    new WhiteMage()
];

function updateCharacterImagesAndHealthBars(team, teamId) {
    for (let i = 0; i < team.length; i++) {
        const character = team[i];
        const hpElement = document.getElementById(`${teamId}-hp${i + 1}`);
        const characterImage = document.getElementById(`${teamId}-char${i + 1}`);

        hpElement.textContent = `${character.name}: ${character.healthPoints}/${character.maxHealthPoints} hp`;
        hpElement.style.width = `${(character.healthPoints / character.maxHealthPoints) * 100}%`;
        hpElement.style.backgroundColor = character.healthPoints > 0.5 * character.maxHealthPoints ? 'green' : 'red';

        if (!character.isAlive()) {
            characterImage.src = defeatedImages[character.name];
        }
    }
}

function performTurn(attackerTeam, defenderTeam, attackerTeamId, defenderTeamId, maxTurns, callback) {
    if (maxTurns <= 0 || (attackerTeam.every(character => !character.isAlive()) || defenderTeam.every(character => !character.isAlive()))) {
        callback();
        return;
    }

    const currentAttacker = attackerTeam.shift();

    if (!currentAttacker || !currentAttacker.isAlive()) {
        performTurn(attackerTeam, defenderTeam, attackerTeamId, defenderTeamId, maxTurns, callback);
        return;
    }

    const opponents = defenderTeam.filter(character => character.isAlive());

    if (opponents.length === 0) {
        performTurn(attackerTeam, defenderTeam, attackerTeamId, defenderTeamId, maxTurns - 1, callback);
        return;
    }

    const target = opponents[Math.floor(Math.random() * opponents.length)];

    if (currentAttacker instanceof Warrior) {
        if (currentAttacker.protectingAlly === null && attackerTeam.some(ally => ally instanceof WhiteMage && ally.isAlive() && ally.canHeal())) {
            const allyToProtect = attackerTeam.find(ally => ally instanceof WhiteMage && ally.isAlive() && ally.canHeal());
            if (allyToProtect) {
                currentAttacker.protega(allyToProtect);
            } else {
                currentAttacker.slash(target, attackerTeamId, defenderTeamId);
            }
        } else {
            currentAttacker.slash(target, attackerTeamId, defenderTeamId);
        }
    } else if (currentAttacker instanceof Rogue) {
        currentAttacker.slash(target, attackerTeamId, defenderTeamId);
    } else if (currentAttacker instanceof Monk) {
        currentAttacker.punch(target, attackerTeamId, defenderTeamId);
    } else if (currentAttacker instanceof WhiteMage) {
        currentAttacker.curaga(target, attackerTeamId);
    } else if (currentAttacker instanceof BlackMage) {
        if (currentAttacker !== target) {
            currentAttacker.firaga(target, attackerTeamId, defenderTeamId);
        }
    }

    setTimeout(() => {
        updateCharacterImagesAndHealthBars(team1, 'team1');
        updateCharacterImagesAndHealthBars(team2, 'team2');

        performTurn(attackerTeam, defenderTeam, attackerTeamId, defenderTeamId, maxTurns, callback);
    }, 200);
}

function startFight() {
    const maxTurns = 50;

    function performNextTurn() {
        let currentTurns = maxTurns;

        if (currentTurns <= 0 || (team1.every(character => !character.isAlive()) || team2.every(character => !character.isAlive()))) {
            console.log("Fight is over!");

            if (team1.every(character => !character.isAlive())) {
                celebrateWinningTeam(team2, 'team2');
            } else if (team2.every(character => !character.isAlive())) {
                celebrateWinningTeam(team1, 'team1');
            }

            return;
        }

        console.log(`Turn ${51 - currentTurns}`);

        performTurn(team1.slice(), team2.slice(), 'Team 1', 'Team 2', maxTurns, () => {
            updateCharacterImagesAndHealthBars(team1, 'team1');
            updateCharacterImagesAndHealthBars(team2, 'team2');

            if (team2.every(character => !character.isAlive())) {
                console.log('Team 1 wins the battle!');
            }

            performTurn(team2.slice(), team1.slice(), 'Team 2', 'Team 1', maxTurns, () => {
                updateCharacterImagesAndHealthBars(team1, 'team1');
                updateCharacterImagesAndHealthBars(team2, 'team2');

                if (team1.every(character => !character.isAlive())) {
                    console.log('Team 2 wins the battle!');
                }

                currentTurns--;
                setTimeout(performNextTurn, 1000);
            });
        });
    }

    performNextTurn();
}

document.getElementById("start-button").addEventListener("click", startFight);
startFight();

const playAgain = document.getElementById('playAgain')

playAgain.addEventListener('click', ()=>{

    location.reload()
  })

  function endGame() {
    const team1Alive = team1.every(character => character.isAlive());
    const team2Alive = team2.every(character => character.isAlive());
    const victorySound = new Audio('/code-fantasy/client/sounds/theme_victoire.mp3');
    const fightSound = new Audio('/code-fantasy/client/sounds/Combat theme 1.mp3')



    if (!team1Alive || !team2Alive) {
        playAgain.style.display = 'block';
        victorySound.play();
        // fightSound.pause();

// Stop fightSound when victorySound is played.
// fightSound.addEventListener('ended', () => {
//     victorySound.play();
// });

victorySound.play();

        
    } else {
        playAgain.style.display = 'none';
        fightSound.play();
    }

    if (team1Alive) {
        console.log('Team 1 wins the battle!');
    } else {
        console.log('Team 2 wins the battle!');
    }
}
endGame()
    const fightSound = new Audio('/code-fantasy/client/sounds/Combat theme 1.mp3')

    fightSound.play();
// Attach click event to the start button



////// checkpoint//////

function changeBackground(imageUrl) {
    document.body.style.backgroundImage = `url('${imageUrl}')`;
  }


  const startfight = document.getElementById('startfight')
  startfight.addEventListener('click', ()=>{
    location.href = "fight.html";
  })


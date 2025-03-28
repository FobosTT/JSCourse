const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 20;
const MODE_ATTACK = "ATTACK";
const MODE_STRONG_ATTACK = "STRONG_ATTACK";
const enteredValue = prompt("Max Life for you and the monster.", "100");

let chosenMaxLife = parseInt(enteredValue);

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
  chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;
adjustHealthBars(chosenMaxLife);

function reset() {
  currentMonsterHealth = chosenMaxLife;
  currentPlayerHealth = chosenMaxLife;
  hasBonusLife = true;
  resetGame(chosenMaxLife);
}

function stateHandler() {
  const initialPlayerHealth = currentPlayerHealth;
  const playerDamageTaken = dealPlayerDamage(MONSTER_ATTACK_VALUE);
  currentPlayerHealth -= playerDamageTaken;

  if (currentPlayerHealth <= 0 && hasBonusLife) {
    hasBonusLife = false;
    removeBonusLife();
    currentPlayerHealth = initialPlayerHealth;
    alert("You'd be dead champ. But you've got one more chance");
    setPlayerHealth(initialPlayerHealth);
  }

  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Monster was defeated');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Player was defeated');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Both lost');
  }
  if (currentPlayerHealth <= 0 || currentMonsterHealth <= 0) {
    reset();
  }
}

function attackMonster(mode) {
  let maxDamage;
  if (mode === MODE_ATTACK) {
    maxDamage = ATTACK_VALUE;
  } else if (mode === MODE_STRONG_ATTACK) {
    maxDamage = ATTACK_VALUE * 2;
  } else {
    alert("Undefined attack type");
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  stateHandler();
}


function healPlayer() {
  let healing;
  if (currentPlayerHealth >= chosenMaxLife - HEAL_VALUE) {
    healing = chosenMaxLife - currentPlayerHealth;
  } else {
    healing = HEAL_VALUE;
  }
  increasePlayerHealth(healing);
  currentPlayerHealth += healing;
  stateHandler();
}


function attackHandler() {
  attackMonster('ATTACK');
}

function strongAttackHandler() {
  attackMonster('STRONG_ATTACK');
}


attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', logGameStatus);

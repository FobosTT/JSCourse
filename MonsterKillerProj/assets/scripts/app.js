const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const HEAL_VALUE = 10;

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
adjustHealthBars(chosenMaxLife);

function stateHandler() {
  if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
    alert('Monster was defeated');
  } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
    alert('Player was defeated');
  } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0) {
    alert('Both lost');
  }
}

function attackMonster(mode) {
  if (mode === 'attack') {
    maxDamage = ATTACK_VALUE;
  } else if (mode === 'strongAttack') {
    maxDamage = ATTACK_VALUE * 2;
  }
  const damage = dealMonsterDamage(maxDamage);
  currentMonsterHealth -= damage;
  stateHandler();
}

function attackHandler() {
  attackMonster('attack');
  stateHandler();
}

function strongAttackHandler() {
  attackMonster('strongAttack');
  stateHandler();
}

function healPlayer() {
  increasePlayerHealth(HEAL_VALUE);
  currentPlayerHealth += HEAL_VALUE;
  stateHandler();
}

function logGameStatus() {
  console.log('Monster health: ' + currentMonsterHealth);
  console.log('Player health: ' + currentPlayerHealth);
  console.log('Monster attack: ' + MONSTER_ATTACK_VALUE);
  console.log('Player attack: ' + ATTACK_VALUE);
  console.log('Heal value: ' + HEAL_VALUE); 
  console.log('Strong attack: ' + ATTACK_VALUE * 2);
}

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayer);
logBtn.addEventListener('click', logGameStatus);

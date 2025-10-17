console.log('script.js loaded');

const killers = [
  'Trapper',
  'Wraith',
  'Hillbilly',
  'Nurse',
  'Myers',
  'Hag',
  'Doctor',
  'Huntress',
  'Bubba',
  'Nightmare',
  'Pig',
  'Clown',
  'Spirit',
  'Legion',
  'Plague',
  'Ghostface',
  'Demogorgon',
  'Oni',
  'Deathslinger',
  'Executioner',
  'Twins',
  'Trickster',
  'Nemesis',
  'Cenobite',
  'Artist',
  'Onryo',
  'Dredge',
  'Wesker',
  'Knight',
  'Skullmerchant',
  'Singularity',
  'Xenomorph',
  'Chucky',
  'Unknown',
  'Vecna',
  'Dracula',
  'Houndmaster',
  'Animatronic',
];

function getRandomInt() {
  return Math.floor(Math.random() * killers.length);
}

function lineup(){
    const selected = [];
    while (selected.length < 5){
        const current = killers[getRandomInt()];
        if (!selected.includes(current)){
            selected.push(current)
        }
    }
    return selected.join(", ");
}

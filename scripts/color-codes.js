const bgColor = document.getElementById('page-color');
const trackerColor = document.getElementById('counter-num');
const confirmColor = document.getElementById('reset-confirm');
const typeId = document.getElementById('type-1');
const typeIdAttr = typeId.getAttribute('value');

let bug = '#69923A';
let dark = '#5C5C5C';
let dragon = '#3183AF';
let electric = '#CEB512';
let fairy = '#F939BF';
let fighting = '#D56723';
let fire = '#CA5502';
let flying = '#0F97BD';
let ghost = '#7B62A3';
let grass = '#719E2E';
let ground = '#938239';
let ice = '#188FB4';
let normal = '#7D888C';
let poison = '#7E3C90';
let psychic = '#BD0F74';
let rock = '#87741C';
let steel = '#697377';
let water = '#31719B';

switch (typeIdAttr) {
    case 'bug':
        bgColor.style.backgroundColor = bug;
        trackerColor.style.backgroundColor = bug;
        confirmColor.style.backgroundColor = bug;
        break;
    case 'dark':
        bgColor.style.backgroundColor = dark;
        trackerColor.style.backgroundColor = dark;
        confirmColor.style.backgroundColor = dark;
        break;
    case 'dragon':
        bgColor.style.backgroundColor = dragon;
        trackerColor.style.backgroundColor = dragon;
        confirmColor.style.backgroundColor = dragon;
        break;
    case 'electric':
        bgColor.style.backgroundColor = electric;
        trackerColor.style.backgroundColor = electric;
        confirmColor.style.backgroundColor = electric;
        break;
    case 'fairy':
        bgColor.style.backgroundColor = fairy;
        trackerColor.style.backgroundColor = fairy;
        confirmColor.style.backgroundColor = fairy;
        break;
    case 'fighting':
        bgColor.style.backgroundColor = fighting;
        trackerColor.style.backgroundColor = fighting;
        confirmColor.style.backgroundColor = fighting;
        break;
    case 'fire':
        bgColor.style.backgroundColor = fire;
        trackerColor.style.backgroundColor = fire;
        confirmColor.style.backgroundColor = fire;
        break;
    case 'flying':
        bgColor.style.backgroundColor = flying;
        trackerColor.style.backgroundColor = flying;
        confirmColor.style.backgroundColor = flying;
        break;
    case 'ghost':
        bgColor.style.backgroundColor = ghost;
        trackerColor.style.backgroundColor = ghost;
        confirmColor.style.backgroundColor = ghost;
        break;
    case 'grass':
        bgColor.style.backgroundColor = grass;
        trackerColor.style.backgroundColor = grass;
        confirmColor.style.backgroundColor = grass;
        break;
    case 'ground':
        bgColor.style.backgroundColor = ground;
        trackerColor.style.backgroundColor = ground;
        confirmColor.style.backgroundColor = ground;
        break;
    case 'ice':
        bgColor.style.backgroundColor = ice;
        trackerColor.style.backgroundColor = ice;
        confirmColor.style.backgroundColor = ice;
        break;
    case 'normal':
        bgColor.style.backgroundColor = normal;
        trackerColor.style.backgroundColor = normal;
        confirmColor.style.backgroundColor = normal;
        break;
    case 'poison':
        bgColor.style.backgroundColor = poison;
        trackerColor.style.backgroundColor = poison;
        confirmColor.style.backgroundColor = poison;
        break;
    case 'psychic':
        bgColor.style.backgroundColor = psychic;
        trackerColor.style.backgroundColor = psychic;
        confirmColor.style.backgroundColor = psychic;
        break;
    case 'rock':
        bgColor.style.backgroundColor = rock;
        trackerColor.style.backgroundColor = rock;
        confirmColor.style.backgroundColor = rock;
        break;
    case 'steel':
        bgColor.style.backgroundColor = steel;
        trackerColor.style.backgroundColor = steel;
        confirmColor.style.backgroundColor = steel;
        break;
    case 'water':
        bgColor.style.backgroundColor = water;
        trackerColor.style.backgroundColor = water;
        confirmColor.style.backgroundColor = water;
        break;
}

console.log(bgColor.style.backgroundColor);

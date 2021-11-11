const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestId;
let score = 0;
let lifes = 3;
let movementsArr = [];
let bombs = 0;
let counterLife = 60;


let shooting = 0;
let throwingGrenades = false;
let walking = 0;
let knife = 0;
let scream = 0;
let fires = [];
let rebels = [];
let veterans = [];
let weapons = [{
        'id': 0,
        'name': 'handGuns',
        'bullets': 1000000
    },
    {
        'id': 1,
        'name': 'machineGuns',
        'bullets': 200
    },
    {
        'id': 2,
        'name': 'flamethrower',
        'bullets': 30
    }
];


const music = new Audio('./audio/MainTheme.webm');
const coinSound = new Audio('./audio/coin.mp3');
const tenkiu = new Audio('./audio/tenkiu.mp3');
const marcoDead = new Audio('./audio/marcoDead.mp3');
const rebelDead = new Audio('./audio/rebelDead.mp3');
const rebelScream = new Audio('./audio/rebelScream.mp3');

//console.log("entre defaults")
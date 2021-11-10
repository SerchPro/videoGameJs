const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestId;
let score = 0;
let lifes = 3;
let movementsArr = [];
let bombs = 0;
let counterLife = 60;
const music = new Audio('./audio/MainTheme.webm');
const coinSound = new Audio('./audio/coin.mp3');
let shooting = false;
let throwingGrenades = false;
let walking = 0;
let knife = 0;
let scream = 0;
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


//console.log("entre defaults")
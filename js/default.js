const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
let frames = 0;
let requestId;
let score = 0;
let lifes = 3;

//console.log("entre defaults")
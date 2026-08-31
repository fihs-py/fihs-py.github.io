const wow = document.getElementById("wow");
const inputbox = document.getElementById("input1");

const randomL = document.getElementById("randomL");
const minL = document.getElementById("min");
const maxL = document.getElementById("max");

const uwuL = document.getElementById("uwuify");
const inputuwu = document.getElementById("uwu");
function getInput(){
    wow.textContent = `You typed "${inputbox.value}" :3`;
}
function genRandom(){
    let min = Number(minL.value);
    let max = Number(maxL.value);
    
    randomL.textContent = (Math.floor(Math.random() * (max - min + 1)) + min);
}

function test(text = inputuwu ? inputuwu.value : "", between = '-', chance = 0.62, suffix = "~") {
    const result = String(text).replace(/\b(\w)(\w*)\b/g, (m, p1, rest) => {
        if (Math.random() < chance) {
            return p1 + between + p1 + rest;
        }
        return p1 + rest;
    });

    uwuL.textContent = result + suffix;
}
const wow = document.getElementById("wow");
const inputbox = document.getElementById("input1");

const randomL = document.getElementById("randomL");
const minL = document.getElementById("min");
const maxL = document.getElementById("max");
function getInput(){
    wow.textContent = `You typed "${inputbox.value}" :3`
}
function genRandom(){
    let min = Number(minL.value);
    let max = Number(maxL.value);
    
    randomL.textContent = (Math.floor(Math.random() * (max - min + 1)) + min);
}
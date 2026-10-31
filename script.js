const slider = document.getElementById('guess-slider');
const needle = document.getElementById('needle');

slider.addEventListener("input", () => {
    const angle = Number(slider.value) * 1.8 - 90;
    needle.style.transform = "rotate(" + angle + "deg)";

});

let target = Math.floor(Math.random() * 101);
const guessButton = document.getElementById('guess-button');
const result = document.getElementById('result');

guessButton.addEventListener("click", () => {
    const guess = Number(slider.value);
    const distance = Math.abs(guess - target);

    let points = 0;
    if (distance <= 5) {
        points = 4;
    } else if (distance > 5 && distance <= 10) {
        points = 3;
    } else if (distance > 10 && distance <= 15) {
        points = 2;
    } else  {
        points = 0;
    } 

    result.textContent = "Guess: " + guess + ", Target: " + target + ", Points: " + points;
    guessButton.disabled = true;
    slider.disabled = true;
    nextRoundButton.disabled = false;

    const targetAngle = target * 1.8 - 90;
    targetMarker.style.transform = "rotate(" + targetAngle + "deg)";
    targetMarker.style.display = "block";
})

const clueStage = document.getElementById('clue-stage');
const guessStage = document.getElementById('guess-stage');
const clueInput = document.getElementById('clue-input');
const clueDisplay = document.getElementById('clue-display');
const leftInput = document.getElementById('left-label-input');
const rightInput = document.getElementById('right-label-input');
const leftLabel = document.getElementById('left-label');
const rightLabel = document.getElementById('right-label');
const hideTargetButton = document.getElementById('hide-target-button');

hideTargetButton.addEventListener("click", () => {
    if (clueInput.value.trim() === "" || leftInput.value.trim() === "" || rightInput.value.trim() === "") {
        alert("Enter both endpoints and a clue!");
        return;
    }
    leftLabel.textContent = leftInput.value.trim();
    rightLabel.textContent = rightInput.value.trim();
    clueDisplay.textContent = clueInput.value.trim();
    clueStage.style.display = "none";
    guessStage.style.display = "block";
    endpointInputs.style.display = "none";
    targetMarker.style.display = "none";
});

const secretTarget = document.getElementById('secret-target');
secretTarget.textContent = "Secret Target: " + target;

const nextRoundButton = document.getElementById('next-round-button');
nextRoundButton.addEventListener("click", () => {
    target = Math.floor(Math.random() * 101);
    secretTarget.textContent = "Secret Target: " + target;
    clueInput.value = "";
    result.textContent = "";
    clueDisplay.textContent = "";
    leftInput.value = "";
    rightInput.value = "";
    slider.value = 50;
    needle.style.transform = "rotate(0deg)";
    guessButton.disabled = false;
    slider.disabled = false;
    nextRoundButton.disabled = true;
    guessStage.style.display = "none";
    clueStage.style.display = "flex";
    endpointInputs.style.display = "flex";
    targetMarker.style.transform = "rotate(" + (target * 1.8 - 90) + "deg)";
    targetMarker.style.display = "block";

});

const endpointInputs = document.getElementById("endpoint-inputs");
const targetMarker = document.getElementById('target-marker');
targetMarker.style.transform = "rotate(" + (target * 1.8 - 90) + "deg)";
targetMarker.style.display = "block";



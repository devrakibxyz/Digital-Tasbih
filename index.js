// SubhanAllah
const subhanAllahDisplay = document.getElementById("subhanAllahDisplay");
const subhanAllahIncrimentBtn = document.getElementById(
  "subhanAllahIncrimentBtn"
);
const subhanAllahDecrimentBtn = document.getElementById(
  "subhanAllahDecrimentBtn"
);

subhanAllahInc = 0;

subhanAllahIncrimentBtn.addEventListener("click", function () {
  if (subhanAllahInc === 33) {
    return alert("you are done now try another");
  }
  subhanAllahInc += 1;
  subhanAllahDisplay.innerText = subhanAllahInc;
});

subhanAllahDecrimentBtn.addEventListener("click", function () {
  if (subhanAllahInc === 0) {
    return alert("you press wrong");
  }
  subhanAllahInc -= 1;
  subhanAllahDisplay.innerText = subhanAllahInc;
});

// Allhamdulillah

const alhamdulillahDisplay = document.getElementById("alhamdulillahDisplay");
const alhamdulillahIncrimentBtn = document.getElementById(
  "alhamdulillahIncrimentBtn"
);
const alhamdulillahDecrimentBtn = document.getElementById(
  "alhamdulillahDecrimentBtn"
);

AllhamduliaahhInc = 0;

alhamdulillahIncrimentBtn.addEventListener("click", function () {
  if (AllhamduliaahhInc === 33) {
    return alert("you are done now try another");
  }
  AllhamduliaahhInc += 1;
  alhamdulillahDisplay.innerText = AllhamduliaahhInc;
});

alhamdulillahDecrimentBtn.addEventListener("click", function () {
  if (AllhamduliaahhInc === 0) {
    return alert("you press wrong");
  }
  AllhamduliaahhInc -= 1;
  alhamdulillahDisplay.innerText = AllhamduliaahhInc;
});

// AllhahuAkbor

const allahAkberDisplay = document.getElementById("allahAkberDisplay");
const allahAkberIncrimentBtn = document.getElementById(
  "allahAkberIncrimentBtn"
);
const allahAkberDecrimentBtn = document.getElementById(
  "allahAkberDecrimentBtn"
);

allahhuakborInc = 0;
allahAkberIncrimentBtn.addEventListener("click", function () {
  if (allahhuakborInc === 33) {
    return alert("you are done");
  }
  allahhuakborInc += 1;
  allahAkberDisplay.innerText = allahhuakborInc;
});
allahAkberDecrimentBtn.addEventListener("click", function () {
  if (allahhuakborInc === 0) {
    return alert("you press wrong");
  }
  allahhuakborInc -= 1;
  allahAkberDisplay.innerText = allahhuakborInc;
});

// Reset Button

const resetBtn = document.getElementById("resetBtn");
resetBtn.addEventListener("click", function () {
  subhanAllahDisplay.innerText = 0;
  subhanAllahInc = 0;
  alhamdulillahDisplay.innerText = 0;
  AllhamduliaahhInc = 0;
  allahAkberDisplay.innerText = 0;
  allahhuakborInc = 0;
});

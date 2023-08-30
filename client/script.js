window.onload = defaut();

function defaut() {
  warriordiv.classList.toggle("active");
  warriordiv.style.display = "flex";
  thiefdiv.style.display = "none";
  monkdiv.style.display = "none";
  bmdiv.style.display = "none";
  wmdiv.style.display = "none";
}

function sound() {
  var snd = new Audio("/clientmd/sounds/create.mp3"); //wav is also supported
  snd.play(); //plays the sound
}

function nextsound() {
  var snd = new Audio("/clientmd/sounds/next.mp3"); //wav is also supported
  snd.play(); //plays the sound
}

function redirect() {
  var url = "http://127.0.0.1:5501/clientmd/playercreation.html";
  window.location(url);
}

warriorpic.addEventListener("click", () => {
  warriordiv.classList.toggle("active");
  warriordiv.style.display = "flex";
  thiefdiv.style.display = "none";
  wmdiv.style.display = "none";
  bmdiv.style.display = "none";
  monkdiv.style.display = "none";
});

thiefpic.addEventListener("click", () => {
  thiefdiv.classList.toggle("active");
  thiefdiv.style.display = "flex";
  warriordiv.style.display = "none";
  wmdiv.style.display = "none";
  bmdiv.style.display = "none";
  monkdiv.style.display = "none";
});

monkpic.addEventListener("click", () => {
  monkdiv.classList.toggle("active");
  monkdiv.style.display = "flex";
  warriordiv.style.display = "none";
  wmdiv.style.display = "none";
  bmdiv.style.display = "none";
  thiefdiv.style.display = "none";
});

bmpic.addEventListener("click", () => {
  bmdiv.classList.toggle("active");
  bmdiv.style.display = "flex";
  warriordiv.style.display = "none";
  wmdiv.style.display = "none";
  monkdiv.style.display = "none";
  thiefdiv.style.display = "none";
});

wmpic.addEventListener("click", () => {
  wmdiv.classList.toggle("active");
  wmdiv.style.display = "flex";
  warriordiv.style.display = "none";
  monkdiv.style.display = "none";
  bmdiv.style.display = "none";
  thiefdiv.style.display = "none";
});

// Sélectionnez la div du job "Warrior"
const warriorDiv = document.getElementById("warrior");
// Ajoutez un gestionnaire d'événements au clic sur la div
warriorDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/1`);
  const jobData = await response.json();
  console.log(jobData);
});

const thiefDiv = document.getElementById("thief");
// Ajoutez un gestionnaire d'événements au clic sur la div
thiefDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/2`);
  const jobData = await response.json();
  console.log(jobData);
});

const monkDiv = document.getElementById("monk");
// Ajoutez un gestionnaire d'événements au clic sur la div
monkDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/3`);
  const jobData = await response.json();
  console.log(jobData);
});

const blackmageDiv = document.getElementById("blackmage");
// Ajoutez un gestionnaire d'événements au clic sur la div
blackmageDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/5`);
  const jobData = await response.json();
  console.log(jobData);
});

const whitemageDiv = document.getElementById("whitemage");
// Ajoutez un gestionnaire d'événements au clic sur la div
whitemageDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/4`);
  const jobData = await response.json();
  console.log(jobData);
});

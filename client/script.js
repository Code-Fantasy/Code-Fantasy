// const { log } = require("console");

window.onload = defaut();

function defaut() {
  warriordiv.classList.toggle("active");
  warriordiv.style.display = "flex";
  thiefdiv.style.display = "none";
  monkdiv.style.display = "none";
  bmdiv.style.display = "none";
  wmdiv.style.display = "none";
}

// function sound() {
//   var snd = new Audio("/clientmd/sounds/create.mp3"); //wav is also supported
//   snd.play(); //plays the sound
// }

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

// Déclarez une variable pour stocker l'ID du job sélectionné
let selectedJobId = null;

// Sélectionnez les div des personnages
const warriorDiv = document.getElementById("warrior");
const thiefDiv = document.getElementById("thief");
const monkDiv = document.getElementById("monk");
const blackmageDiv = document.getElementById("blackmage");
const whitemageDiv = document.getElementById("whitemage");

// Ajoutez un gestionnaire d'événements au clic sur la div warrior
warriorDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/1`);
  const jobData = await response.json();
  selectedJobId = jobData.idJobs_Jobs; // Attribuez l'ID du job sélectionné
  console.log(jobData);
});

// Ajoutez un gestionnaire d'événements au clic sur la div thief
thiefDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/2`);
  const jobData = await response.json();
  selectedJobId = jobData.idJobs_Jobs; // Attribuez l'ID du job sélectionné
  console.log(jobData);
});

// Ajoutez un gestionnaire d'événements au clic sur la div monk
monkDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/3`);
  const jobData = await response.json();
  selectedJobId = jobData.idJobs_Jobs; // Attribuez l'ID du job sélectionné
  console.log(jobData);
});

// Ajoutez un gestionnaire d'événements au clic sur la div blackmage
blackmageDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/5`);
  const jobData = await response.json();
  selectedJobId = jobData.idJobs_Jobs; // Attribuez l'ID du job sélectionné
  console.log(jobData);
});

// Ajoutez un gestionnaire d'événements au clic sur la div whitemage
whitemageDiv.addEventListener("click", async () => {
  // Effectuez une requête à votre serveur pour obtenir les informations du job
  const response = await fetch(`http://localhost:8000/job/4`);
  const jobData = await response.json();
  selectedJobId = jobData.idJobs_Jobs; // Attribuez l'ID du job sélectionné
  console.log(jobData);
});




let createdPlayerId = null; // Variable pour stocker l'ID du joueur créé


const createPlayer = async () => {
  try {
    const playerName = document.getElementById("inputchara").value;

    const response = await fetch("http://localhost:8000/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name_Player: playerName }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log("Server Response for Player Creation:", data); 
      createdPlayerId = data.idPlayer_Player; // Stockez l'ID du joueur créé
      console.log("Created player ID:", createdPlayerId);
      alert("Player created successfully!");
    } else {
      alert("An error occurred while creating the player.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};

const assignJobToPlayer = async () => {
  if (!selectedJobId) {
    alert("Please select a job first.");
    return;
  }

  if (!createdPlayerId) {
    alert("Please create a player first.");
    return;
  }

  try {
    const response = await fetch("http://localhost:8000/job/assign-to-player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idPlayer_Player: createdPlayerId, idJobs_Jobs: selectedJobId }),
    });

    if (response.ok) {
      alert("Job assigned to player successfully!");
    } else {
      alert("An error occurred while assigning the job.");
    }
  } catch (error) {
    console.error("Error:", error);
  }
};


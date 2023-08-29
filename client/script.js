 window.onload = defaut();

function defaut() {
  warriordiv.classList.toggle('active');
  warriordiv.style.display = 'flex';
  thiefdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    wmdiv.style.display = 'none';

}


function sound(){
  var snd = new Audio('/clientmd/sounds/create.mp3')//wav is also supported
  snd.play()//plays the sound
}

function nextsound(){
  var snd = new Audio('/clientmd/sounds/next.mp3')//wav is also supported
  snd.play()//plays the sound
}



function redirect()
    {
    var url = "http://127.0.0.1:5501/clientmd/playercreation.html";
    window.location(url);
    }




    warriorpic.addEventListener('click', ()=> {
      warriordiv.classList.toggle('active');
      warriordiv.style.display = 'flex';
      thiefdiv.style.display = 'none';
      wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';
  });

  thiefpic.addEventListener('click', ()=> {
    thiefdiv.classList.toggle('active');
    thiefdiv.style.display = 'flex';
    warriordiv.style.display = 'none';
    wmdiv.style.display = 'none';
      bmdiv.style.display = 'none';
      monkdiv.style.display = 'none';
});

monkpic.addEventListener('click', ()=> {
  monkdiv.classList.toggle('active');
  monkdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});

bmpic.addEventListener('click', ()=> {
  bmdiv.classList.toggle('active');
  bmdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  wmdiv.style.display = 'none';
    monkdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});

wmpic.addEventListener('click', ()=> {
  wmdiv.classList.toggle('active');
  wmdiv.style.display = 'flex';
  warriordiv.style.display = 'none';
  monkdiv.style.display = 'none';
    bmdiv.style.display = 'none';
    thiefdiv.style.display = 'none';
});


document.getElementById("createbtn").addEventListener("click", () => {
  const selectedCharacter = getSelectedCharacter(); // Fonction à implémenter
  const playerName = document.getElementById("inputchara").value;
  if (selectedCharacter && playerName) {
    // Appel à votre backend pour enregistrer le personnage dans la base de données
    createPlayer(selectedCharacter, playerName);
  } else {
    console.log("Veuillez sélectionner un personnage et renseigner un nom.");
  }
});

function getSelectedCharacter() {
  const selectedCharacterImage = document.querySelector("#characters img.selected"); // Sélection de l'image du personnage sélectionné
  const selectedCharacterName = selectedCharacterImage.getAttribute("alt"); // Récupération du nom du personnage depuis l'attribut "alt" de l'image
  const selectedCharacterUrl = selectedCharacterImage.getAttribute("src"); // Récupération de l'URL de l'image du personnage

  if (selectedCharacterName && selectedCharacterUrl) {
    return {
      name_Jobs: selectedCharacterName,
      url_Jobs: selectedCharacterUrl,
      // Ajoutez d'autres propriétés si nécessaires pour les autres champs de la table jobs
    };
  } else {
    console.log("Aucun personnage sélectionné.");
    return null; // Aucun personnage sélectionné
  }
}

function createPlayer(characterInfo, playerName) {
  const data = {
    name_Player: playerName,
    level_Player: 1, // Niveau initial du joueur, à adapter si nécessaire
    // ... d'autres champs si nécessaires ...
  };


fetch("http://localhost:8080/register", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(data),
})
  .then(response => response.json())
  .then(result => {
    console.log(result.message); // Affiche le message de succès de l'enregistrement
  })
  .catch(error => {
    console.error("Une erreur s'est produite :", error);
  });
}


 // Prepare the data to send in the POST request
 const userData = {
  name: name,
  firstname: firstname,
  address: addressInput.value,
  city: city,
  zipcode: zipcode,
  phone: phone,
  mail: email,
};


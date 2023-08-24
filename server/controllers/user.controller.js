// Importation du module MySQL
const mysql = require("mysql");

// Création d'une connexion à la base de données en utilisant les informations d'environnement
const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Connexion à la base de données
conn.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    throw err;
  }
  console.log("Connected to the database");
});



// Fonction pour créer un joueur dans la base de données
const createPlayer = (req, res) => {
  const { name_Player } = req.body;
  const query = "INSERT INTO player (name_Player) VALUES (?)";
  conn.query(query, [name_Player], (err, result) => {
    if (err) {
      console.error('erreur')
      res.status(500).json({error: 'erreur'})
  } else {
      res.status(200).json({message: 'utilisateur enregistré'});
  }
  });
};

// Fonction pour obtenir un joueur par son ID
const getPlayerById = (req, res) => {
  const playerId = req.params.id;
   const query = `SELECT * FROM player WHERE idPlayer_Player = ${playerId}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.error("Error fetching player by ID:", err);
      res.status(500).json({ error: "Erreur lors de la récupération du joueur par ID" });
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

// Fonction pour créer son perso dans la base de données
const createJob = (req, res) => {
  const job = req.body;
  const { stats_Jobs, HP_Jobs, attack_Jobs, dodge_Jobs, skills_Jobs, slash_Jobs, protera_Jobs, strike_Jobs, firaga_Jobs, curaga_Jobs, url_Jobs } = job;
  const query = "INSERT INTO Jobs (stats_Jobs, HP_Jobs, attack_Jobs, dodge_Jobs, skills_Jobs, slash_Jobs, protera_Jobs, strike_Jobs, firaga_Jobs, curaga_Jobs, url_Jobs) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(query, [stats_Jobs, HP_Jobs, attack_Jobs, dodge_Jobs, skills_Jobs, slash_Jobs, protera_Jobs, strike_Jobs, firaga_Jobs, curaga_Jobs, url_Jobs], (err, result) => {
    if (err) {
      console.error("Error creating job:", err);
      res.status(500).json({ error: "Erreur lors de la création de l'emploi" });
    } else {
      res.status(201).json({ message: "Emploi créé avec succès", jobId: result.insertId });
    }
  });
};

// Fonction pour choisir son arène
const createStage = (req, res) => {
  const stage = req.body;
  const { url_Stage } = stage;
  const query = "INSERT INTO Stage (url_Stage) VALUES (?)";
  conn.query(query, [url_Stage], (err, result) => {
    if (err) {
      console.error("Error creating stage:", err);
      res.status(500).json({ error: "Erreur lors de la création de l'arène" });
    } else {
      res.status(201).json({ message: "Arène créée avec succès", stageId: result.insertId });
    }
  });
};

// Fonction pour choisir la musique
const createSound = (req, res) => {
  const sound = req.body;
  const { battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound } = sound;
  const query = "INSERT INTO Sound (battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound) VALUES (?, ?, ?)";
  conn.query(query, [battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound], (err, result) => {
    if (err) {
      console.error("Error creating sound:", err);
      res.status(500).json({ error: "Erreur lors de la création du son" });
    } else {
      res.status(201).json({ message: "Son créé avec succès", soundId: result.insertId });
    }
  });
};


// Fonction pour gérer l'xp
const createXP = (req, res) => {
  
  const { value_XP } = req.body;
  const query = "INSERT INTO xp (value_XP) VALUES (?)";
  conn.query(query, [value_XP], (err, result) => {
    if (err) {
      console.error("Error creating XP:", err);
      res.status(500).json({ error: "Erreur lors de la création de l'XP" });
    } else {
      res.status(201).json({ message: "XP créée avec succès", xpId: result.insertId });
    }
  });
};


// Fonction pour choisir son équipe
const createTeam = (req, res) => {
  const { name_Teams } = req.body;
  const query = "INSERT INTO teams (name_Teams) VALUES (?)";
  conn.query(query, [name_Teams], (err, result) => {
    if (err) {
      console.error("Error creating team:", err);
      res.status(500).json({ error: "Erreur lors de la création de l'équipe" });
    } else {
      res.status(201).json({ message: "Équipe créée avec succès", teamId: result.insertId });
    }
  });
};

// Fonction pour gérer les crystaux
const createCrystal = (req, res) => {
  const crystal = req.body;
  const { name, url } = crystal;
  const query = "INSERT INTO Crystal (name_Crystal, url_Crystal) VALUES (?, ?)";
  conn.query(query, [name, url], (err, result) => {
    if (err) {
      console.error("Error creating crystal:", err);
      res.status(500).json({ error: "Erreur lors de la création du cristal" });
    } else {
      res.status(201).json({ message: "Cristal créé avec succès", crystalId: result.insertId });
    }
  });
};

// Fonction pour supprimer un utilisateur par son ID
const deleteUserById = (req, res) => {
  const userId = req.params.id;
  const query = "DELETE FROM player WHERE idPlayer_Player = ?";
  conn.query(query, [userId], (err, result) => {
    if (err) {
      console.error("Error deleting user:", err);
      res.status(500).json({ error: "Erreur lors de la suppression de l'utilisateur" });
    } else {
      res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    }
  });
};

// Exportation des fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
  createPlayer,
  getPlayerById,
  createJob,
  createStage,
  createSound,
  createXP,
  createTeam,
  createCrystal,
  deleteUserById,
};


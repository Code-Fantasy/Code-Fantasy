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
  if (err) throw err;
  console.log("Connected to the database");
});

// Fonction pour créer un joueur dans la base de données
const createPlayer = (player, callback) => {
  const { name } = player;
  const query = "INSERT INTO Player (name) VALUES (?)";
  conn.query(query, [name], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

// Fonction pour obtenir un joueur par son ID
const getPlayerById = (playerId, callback) => {
  const query = "SELECT * FROM Player WHERE idPlayer = ?";
  conn.query(query, [playerId], (err, rows) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, rows[0]);
    }
  });
};

// Fonction pour créer son perso dans la base de données
const createJob = (job, callback) => {
  const { stats, HP, attack, dodge, skills, slash, protera, strike, firaga, curaga, url } = job;
  const query = "INSERT INTO Jobs (stats, HP, attack, dodge, skills, slash, protera, strike, firaga, curaga, url) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  conn.query(query, [stats, HP, attack, dodge, skills, slash, protera, strike, firaga, curaga, url], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

// Fonction pour choisir son arène
const createStage = (stage, callback) => {
  const { url } = stage;
  const query = "INSERT INTO Stage (url) VALUES (?)";
  conn.query(query, [url], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

//Fonction pour choisir la musique
const createSound = (sound, callback) => {
  const { battleTheme, victoryTheme, menuTheme } = sound;
  const query = "INSERT INTO Sound (battleTheme, victoryTheme, menuTheme) VALUES (?, ?, ?)";
  conn.query(query, [battleTheme, victoryTheme, menuTheme], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

//Fonction pour gérer l'xp
const createXP = (xp, callback) => {
  const { value } = xp;
  const query = "INSERT INTO XP (value_XP) VALUES (?)";
  conn.query(query, [value], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};


//Fonction pour choisir son équipe
const createTeam = (team, callback) => {
  const { name } = team;
  const query = "INSERT INTO Teams (name_Teams) VALUES (?)";
  conn.query(query, [name], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
    }
  });
};

//Fonction pour gérer les crystaux
const createCrystal = (crystal, callback) => {
  const { name, url } = crystal;
  const query = "INSERT INTO Crystal (name_Crystal, url_Crystal) VALUES (?, ?)";
  conn.query(query, [name, url], (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, result.insertId);
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
};

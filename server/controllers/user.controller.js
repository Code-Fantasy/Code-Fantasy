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


// Fonction pour assigner un emploi à un joueur
const assignJobToPlayer = (req, res) => {
  const { idPlayer_Player, idJobs_Jobs } = req.body;
  const query = "INSERT INTO playerjobs (idPlayer_Player, idJobs_Jobs) VALUES (?, ?)";
  conn.query(query, [idPlayer_Player, idJobs_Jobs], (err, result) => {
    if (err) {
      console.error("Error assigning job to player:", err);
      res.status(500).json({ error: "Erreur lors de l'assignation de l'emploi au joueur" });
    } else {
      res.status(201).json({ message: "Emploi assigné au joueur avec succès" });
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

// Fonction pour assigner un joueur à une arène
const assignPlayerToStage = (req, res) => {
  const { idPlayer_Player, idStage_Stage } = req.body;
  const query = "INSERT INTO playerstage (idPlayer_Player, idStage_Stage) VALUES (?, ?)";
  conn.query(query, [idPlayer_Player, idStage_Stage], (err, result) => {
    if (err) {
      console.error("Error assigning player to stage:", err);
      res.status(500).json({ error: "Erreur lors de l'assignation du joueur à l'arène" });
    } else {
      res.status(201).json({ message: "Joueur assigné à l'arène avec succès" });
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

// Fonction pour assigner un son à un stage
const assignSoundToStage = (req, res) => {
  const { idSound_Sound, idStage_Stage } = req.body;
  const query = "INSERT INTO soundstage (idSound_Sound, idStage_Stage) VALUES (?, ?)";
  conn.query(query, [idSound_Sound, idStage_Stage], (err, result) => {
    if (err) {
      console.error("Error assigning sound to stage:", err);
      res.status(500).json({ error: "Erreur lors de l'assignation du son à la scène" });
    } else {
      res.status(201).json({ message: "Son assigné à la scène avec succès" });
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

// Fonction pour assigner de l'xp au job
const assignXpToJobs = (req, res) => {
  const { idXP_XP, idJobs_Jobs } = req.body;
  const query = "INSERT INTO xpjobs (idXP_XP, idJobs_Jobs) VALUES (?, ?)";
  conn.query(query, [idXP_XP, idJobs_Jobs], (err, result) => {
    if(err) {
      console.error("Error assigning xp to jobs:", err);
      res.status(500).json({ error: "Erreur lors de l' assignation de l'xp au jobs" });
    } else {
      res.status(201).json({ message: "XP assigné aux jobs avec succès" });
    }
  })
}


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

// Fonction pour assigner une team à un joueur
const assignTeamsToPlayers = (req, res) => {
  const { idTeams_Teams, idPlayer_Player } = req.body;
  const query = "INSERT INTO teamplayer (idTeams_Teams, idPlayer_Player) VALUES (?, ?)";
  conn.query(query, [idTeams_Teams, idPlayer_Player], (err, result) => {
    if (err) {
      console.error("Error assigning player to team:", err);
      res.status(500).json({ error: "Erreur lors de l'assignation du joueur à l'équipe" });
    } else {
      res.status(201).json({ message: "Joueur assigné à l'équipe avec succès" });
    }
  });
};

// Fonction pour gérer les crystaux
const createCrystal = (req, res) => {
  const { name_Crystal, url_Crystal } = req.body;
  const query = "INSERT INTO Crystal (name_Crystal, url_Crystal) VALUES (?, ?)";
  conn.query(query, [name_Crystal, url_Crystal], (err, result) => {
    if (err) {
      console.error("Error creating crystal:", err);
      res.status(500).json({ error: "Erreur lors de la création du cristal" });
    } else {
      res.status(201).json({ message: "Cristal créé avec succès", crystalId: result.insertId });
    }
  });
};

// Fonction pour assigner un crystal à un jobs
const assignCrystalToJobs = (req, res) => {
  const { idCrystal_Crystal, idJobs_Jobs } = req.body;
  const query = "INSERT INTO crystaljobs (idCrystal_Crystal, idJobs_Jobs) VALUES (?, ?)";
  conn.query(query, [idCrystal_Crystal, idJobs_Jobs], (err, result) => {
    if (err) {
      console.error("Error assigning crystal to jobs:", err);
      res.status(500).json({ error: "Erreur lors de l'assignation du crystal à une équipe" });
      } else {
      res.status(201).json({ message: "Crystal assigné à l'équipe avec succès" });
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

// Supprimer l'association entre une équipe et un job
const removeTeamFromJob = (req, res) => {
  const { idTeams_Teams, idJobs_Jobs } = req.body;
  const query = "DELETE FROM teamjobs WHERE idTeams_Teams = ? AND idJobs_Jobs = ?";
  conn.query(query, [idTeams_Teams, idJobs_Jobs], (err, result) => {
    if (err) {
      console.error("Error removing team from job:", err);
      res.status(500).json({ error: "Erreur lors de la suppression de l'association équipe-emploi" });
    } else {
      res.status(200).json({ message: "Association équipe-emploi supprimée avec succès" });
    }
  });
};

// Supprimer l'association entre les joueurs et une map
const removePlayersFromStage = (req, res) => {
  const { idStage_Stage, idPlayer_Player } = req.body;
  const query = "DELETE FROM playerstage WHERE idStage_Stage = ? AND idPlayer_Player = ?";
  conn.query(query, [idStage_Stage, idPlayer_Player], (err, result) => {
    if (err) {
      console.error("Error removing team from job:", err);
      res.status(500).json({ error: "Erreur lors de la suppression de l'association joueur-stage" });
    } else {
      res.status(200).json({ message: "Association joueur-stage supprimée avec succès" });
    }
  });
};

// Exportation des fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
  createPlayer,
  getPlayerById,
  createJob,
  assignJobToPlayer,
  createStage,
  assignPlayerToStage,
  createSound,
  assignSoundToStage,
  createXP,
  assignXpToJobs,
  createTeam,
  assignTeamsToPlayers,
  createCrystal,
  assignCrystalToJobs,
  deleteUserById,
  removeTeamFromJob,
  removePlayersFromStage,
};


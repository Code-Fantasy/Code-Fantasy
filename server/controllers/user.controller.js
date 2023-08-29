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
  const { name_Player, level_Player } = req.body; // Ajout de level_Player
  const query = "INSERT INTO player (name_Player, level_Player) VALUES (?, ?)"; // Inclusion de level_Player dans la requête
  conn.query(query, [name_Player, level_Player], (err, result) => {
    if (err) {
      console.error("erreur");
      res.status(500).json({ error: "erreur" });
    } else {
      res.status(200).json({ message: "utilisateur enregistré" });
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
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du joueur par ID" });
    } else {
      res.status(200).json(rows[0]);
    }
  });
};

//Fonction pour récuperer une classe par son id
const getJobByid = (req, res) => {
  const jobId = req.params.id;
  const query = `SELECT * FROM jobs WHERE idJobs_Jobs = ${jobId}`;
  conn.query(query, (err, rows) => {
    if (err) {
      console.error("Error fetching player by ID:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération du joueur par ID" });
    } else {
      res.status(200).json(rows[0]);
    }
  });
}

// Fonction pour modifier un joueur dans la base de données
const updatePlayer = (req, res) => {
  const playerId = req.params.id; // ID du joueur à modifier
  const { name_Player, level_Player } = req.body; // Nouvelles données du joueur

  const query =
    "UPDATE player SET name_Player = ?, level_Player = ? WHERE idPlayer_Player = ?";
  conn.query(query, [name_Player, level_Player, playerId], (err, result) => {
    if (err) {
      console.error("erreur");
      res.status(500).json({ error: "erreur" });
    } else {
      if (result.affectedRows === 0) {
        res.status(404).json({ message: "Joueur non trouvé" });
      } else {
        res.status(200).json({ message: "Joueur modifié avec succès" });
      }
    }
  });
};

// Fonction pour créer son perso dans la base de données
const createJob = (req, res) => {
  const job = req.body;
  const {
    name_Jobs,
    HP_Jobs,
    attack_Jobs,
    dodge_Jobs,
    skills_Jobs,
    url_Jobs,
  } = job;
  const query =
    "INSERT INTO Jobs (name_Jobs, HP_Jobs, attack_Jobs, dodge_Jobs, skills_Jobs, url_Jobs) VALUES (?, ?, ?, ?, ?, ?)";
  conn.query(
    query,
    [
      name_Jobs,
      HP_Jobs,
      attack_Jobs,
      dodge_Jobs,
      skills_Jobs,
      url_Jobs,
    ],
    (err, result) => {
      if (err) {
        console.error("Error creating job:", err);
        res
          .status(500)
          .json({ error: "Erreur lors de la création de l'emploi" });
      } else {
        res
          .status(201)
          .json({ message: "Emploi créé avec succès", jobId: result.insertId });
      }
    }
  );
};

// Fonction pour assigner un emploi à un joueur
const assignJobToPlayer = (req, res) => {
  const { idPlayer_Player, idJobs_Jobs } = req.body;
  const query =
    "INSERT INTO playerjobs (idPlayer_Player, idJobs_Jobs) VALUES (?, ?)";
  conn.query(query, [idPlayer_Player, idJobs_Jobs], (err, result) => {
    if (err) {
      console.error("Error assigning job to player:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de l'assignation de l'emploi au joueur" });
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
      res
        .status(201)
        .json({ message: "Arène créée avec succès", stageId: result.insertId });
    }
  });
};

// Fonction pour assigner un joueur à une arène
const assignPlayerToStage = (req, res) => {
  const { idPlayer_Player, idStage_Stage } = req.body;
  const query =
    "INSERT INTO playerstage (idPlayer_Player, idStage_Stage) VALUES (?, ?)";
  conn.query(query, [idPlayer_Player, idStage_Stage], (err, result) => {
    if (err) {
      console.error("Error assigning player to stage:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de l'assignation du joueur à l'arène" });
    } else {
      res.status(201).json({ message: "Joueur assigné à l'arène avec succès" });
    }
  });
};

// Fonction pour choisir la musique
const createSound = (req, res) => {
  const sound = req.body;
  const { battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound } = sound;
  const query =
    "INSERT INTO Sound (battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound) VALUES (?, ?, ?)";
  conn.query(
    query,
    [battleTheme_Sound, victoryTheme_Sound, menuTheme_Sound],
    (err, result) => {
      if (err) {
        console.error("Error creating sound:", err);
        res.status(500).json({ error: "Erreur lors de la création du son" });
      } else {
        res
          .status(201)
          .json({ message: "Son créé avec succès", soundId: result.insertId });
      }
    }
  );
};

// Fonction pour assigner un son à un stage
const assignSoundToStage = (req, res) => {
  const { idSound_Sound, idStage_Stage } = req.body;
  const query =
    "INSERT INTO soundstage (idSound_Sound, idStage_Stage) VALUES (?, ?)";
  conn.query(query, [idSound_Sound, idStage_Stage], (err, result) => {
    if (err) {
      console.error("Error assigning sound to stage:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de l'assignation du son à la scène" });
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
      res
        .status(201)
        .json({ message: "XP créée avec succès", xpId: result.insertId });
    }
  });
};

// Fonction pour assigner de l'xp au player
const assignXpToPlayer = (req, res) => {
  const { idXP_XP, idPlayer_Player } = req.body;
  const query = "INSERT INTO xpplayer (idXP_XP, idPlayer_Player) VALUES (?, ?)";
  conn.query(query, [idXP_XP, idPlayer_Player], (err, result) => {
    if (err) {
      console.error("Error assigning xp to player:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de l' assignation de l'xp au joueur" });
    } else {
      res.status(201).json({ message: "XP assigné aux joueur avec succès" });
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
      res
        .status(201)
        .json({ message: "Équipe créée avec succès", teamId: result.insertId });
    }
  });
};

// Fonction pour assigner une team à un joueur
const assignTeamsToPlayers = (req, res) => {
  const { idTeams_Teams, idPlayer_Player } = req.body;
  const query =
    "INSERT INTO teamplayer (idTeams_Teams, idPlayer_Player) VALUES (?, ?)";
  conn.query(query, [idTeams_Teams, idPlayer_Player], (err, result) => {
    if (err) {
      console.error("Error assigning player to team:", err);
      res
        .status(500)
        .json({ error: "Erreur lors de l'assignation du joueur à l'équipe" });
    } else {
      res
        .status(201)
        .json({ message: "Joueur assigné à l'équipe avec succès" });
    }
  });
};

// Fonction pour gérer les crystaux
const createCrystal = (req, res) => {
  const { name_Crystal, stats_Crystal, url_Crystal } = req.body;
  const query = "INSERT INTO Crystal (name_Crystal, stats_Crystal, url_Crystal) VALUES (?, ?, ?)";
  conn.query(query, [name_Crystal, stats_Crystal, url_Crystal], (err, result) => {
    if (err) {
      console.error("Error creating crystal:", err);
      res.status(500).json({ error: "Erreur lors de la création du cristal" });
    } else {
      res.status(201).json({
        message: "Cristal créé avec succès",
        crystalId: result.insertId,
      });
    }
  });
};

// Fonction pour assigner un crystal à une team
const assignCrystalToTeams = (req, res) => {
  const { idCrystal_Crystal, idTeams_Teams } = req.body;
  const query =
    "INSERT INTO crystalteams (idCrystal_Crystal, idTeams_Teams) VALUES (?, ?)";
  conn.query(query, [idCrystal_Crystal, idTeams_Teams], (err, result) => {
    if (err) {
      console.error("Error assigning crystal to teams:", err);
      res.status(500).json({
        error: "Erreur lors de l'assignation du crystal à une équipe",
      });
    } else {
      res
        .status(201)
        .json({ message: "Crystal assigné à l'équipe avec succès" });
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
      res
        .status(500)
        .json({ error: "Erreur lors de la suppression de l'utilisateur" });
    } else {
      res.status(200).json({ message: "Utilisateur supprimé avec succès" });
    }
  });
};

// Supprimer l'association entre une équipe et un job
const removeTeamFromJob = (req, res) => {
  const { idTeams_Teams, idJobs_Jobs } = req.body;
  const query =
    "DELETE FROM teamjobs WHERE idTeams_Teams = ? AND idJobs_Jobs = ?";
  conn.query(query, [idTeams_Teams, idJobs_Jobs], (err, result) => {
    if (err) {
      console.error("Error removing team from job:", err);
      res.status(500).json({
        error: "Erreur lors de la suppression de l'association équipe-emploi",
      });
    } else {
      res
        .status(200)
        .json({ message: "Association équipe-emploi supprimée avec succès" });
    }
  });
};

// Supprimer l'association entre les joueurs et une map
const removePlayersFromStage = (req, res) => {
  const { idStage_Stage, idPlayer_Player } = req.body;
  const query =
    "DELETE FROM playerstage WHERE idStage_Stage = ? AND idPlayer_Player = ?";
  conn.query(query, [idStage_Stage, idPlayer_Player], (err, result) => {
    if (err) {
      console.error("Error removing team from job:", err);
      res.status(500).json({
        error: "Erreur lors de la suppression de l'association joueur-stage",
      });
    } else {
      res
        .status(200)
        .json({ message: "Association joueur-stage supprimée avec succès" });
    }
  });
};

// Exportation des fonctions pour les rendre disponibles dans d'autres fichiers
module.exports = {
  createPlayer,
  getPlayerById,
  updatePlayer,
  createJob,
  getJobByid,
  assignJobToPlayer,
  createStage,
  assignPlayerToStage,
  createSound,
  assignSoundToStage,
  createXP,
  assignXpToPlayer,
  createTeam,
  assignTeamsToPlayers,
  createCrystal,
  assignCrystalToTeams,
  deleteUserById,
  removeTeamFromJob,
  removePlayersFromStage,
};

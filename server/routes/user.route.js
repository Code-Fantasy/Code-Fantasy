const router = require("express").Router();
const userController = require("../controllers/user.controller");

// Créer un nouveau joueur
router.post("/register", userController.createPlayer);

// Sélectionner un joueur grâce à son ID
router.get("/player/:id", userController.getPlayerById);

// Créer un nouveau job (personnage)
router.post("/job/create", userController.createJob);

// Créer un nouveau stage (scène)
router.post("/stage/create", userController.createStage);

// Créer un nouveau son
router.post("/sound/create", userController.createSound);

// Gérer les points d'expérience (XP)
router.post("/xp/create", userController.createXP);

// Créer une nouvelle équipe
router.post("/team/create", userController.createTeam);

// Gérer les cristaux
router.post("/crystal/create", userController.createCrystal);

// Supprimer un job (personnage)
router.delete("/job/:id", userController.deleteUserById);

// Assigner un emploi à un joueur
router.post("/job/assign-to-player", userController.assignJobToPlayer);

// Assigner un crystal à un job
router.post ("/crystal/assign-to-jobs", userController.assignCrystalToJobs);

// Assigner une team à un job
router.post ("/teams/assign-to-jobs", userController.assignTeamsToJobs);

// Assigner un joueur à une arène (scène)
router.post("/player/assign-to-stage", userController.assignPlayerToStage);

// Assigner un son à une scène
router.post("/sound/assign-to-stage", userController.assignSoundToStage);

// Assigner l'xp aux jobs
router.post("/xp/assign-to-jobs", userController.assignXpToJobs);

// Supprimer l'association entre une équipe et un job
router.delete("/teams/remove-from-job", userController.removeTeamFromJob);

// Supprimer l'association entre un joueur et un stage
router.delete("/player/remove-from-stage", userController.removePlayersFromStage);


module.exports = router;
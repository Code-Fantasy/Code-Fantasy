-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1:3306
-- Généré le : mer. 23 août 2023 à 08:44
-- Version du serveur : 8.0.31
-- Version de PHP : 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `codefantasy`
--
CREATE DATABASE IF NOT EXISTS `codefantasy` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `codefantasy`;

-- --------------------------------------------------------

--
-- Structure de la table `crystal`
--

DROP TABLE IF EXISTS `crystal`;
CREATE TABLE IF NOT EXISTS `crystal` (
  `idCrystal_Crystal` int NOT NULL AUTO_INCREMENT,
  `name_Crystal` varchar(255) DEFAULT NULL,
  `url_Crystal` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idCrystal_Crystal`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `crystaljobs`
--

DROP TABLE IF EXISTS `crystaljobs`;
CREATE TABLE IF NOT EXISTS `crystaljobs` (
  `idCrystal_Crystal` int NOT NULL,
  `idJobs_Jobs` int NOT NULL,
  PRIMARY KEY (`idCrystal_Crystal`,`idJobs_Jobs`),
  KEY `idJobs_Jobs` (`idJobs_Jobs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
CREATE TABLE IF NOT EXISTS `jobs` (
  `idJobs_Jobs` int NOT NULL AUTO_INCREMENT,
  `stats_Jobs` varchar(255) DEFAULT NULL,
  `HP_Jobs` varchar(255) DEFAULT NULL,
  `attack_Jobs` varchar(255) DEFAULT NULL,
  `dodge_Jobs` varchar(255) DEFAULT NULL,
  `skills_Jobs` varchar(255) DEFAULT NULL,
  `slash_Jobs` varchar(255) DEFAULT NULL,
  `protera_Jobs` varchar(255) DEFAULT NULL,
  `strike_Jobs` varchar(255) DEFAULT NULL,
  `firaga_Jobs` varchar(255) DEFAULT NULL,
  `curaga_Jobs` varchar(255) DEFAULT NULL,
  `url_Jobs` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idJobs_Jobs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `player`
--

DROP TABLE IF EXISTS `player`;
CREATE TABLE IF NOT EXISTS `player` (
  `idPlayer_Player` int NOT NULL AUTO_INCREMENT,
  `name_Player` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idPlayer_Player`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `player`
--

INSERT INTO `player` (`idPlayer_Player`, `name_Player`) VALUES
(6, 'Maryam');

-- --------------------------------------------------------

--
-- Structure de la table `playerjobs`
--

DROP TABLE IF EXISTS `playerjobs`;
CREATE TABLE IF NOT EXISTS `playerjobs` (
  `idPlayer_Player` int NOT NULL,
  `idJobs_Jobs` int NOT NULL,
  PRIMARY KEY (`idPlayer_Player`,`idJobs_Jobs`),
  KEY `idJobs_Jobs` (`idJobs_Jobs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `playerstage`
--

DROP TABLE IF EXISTS `playerstage`;
CREATE TABLE IF NOT EXISTS `playerstage` (
  `idStage_Stage` int NOT NULL,
  `idPlayer_Player` int NOT NULL,
  PRIMARY KEY (`idStage_Stage`,`idPlayer_Player`),
  KEY `idPlayer_Player` (`idPlayer_Player`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `sound`
--

DROP TABLE IF EXISTS `sound`;
CREATE TABLE IF NOT EXISTS `sound` (
  `idSound_Sound` int NOT NULL AUTO_INCREMENT,
  `battleTheme_Sound` varchar(255) DEFAULT NULL,
  `soundDesign_Sound` varchar(255) DEFAULT NULL,
  `victoryTheme_Sound` varchar(255) DEFAULT NULL,
  `menuTheme_Sound` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idSound_Sound`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `soundstage`
--

DROP TABLE IF EXISTS `soundstage`;
CREATE TABLE IF NOT EXISTS `soundstage` (
  `idSound_Sound` int NOT NULL,
  `idStage_Stage` int NOT NULL,
  PRIMARY KEY (`idSound_Sound`,`idStage_Stage`),
  KEY `idStage_Stage` (`idStage_Stage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `stage`
--

DROP TABLE IF EXISTS `stage`;
CREATE TABLE IF NOT EXISTS `stage` (
  `idStage_Stage` int NOT NULL AUTO_INCREMENT,
  `url_Stage` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idStage_Stage`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `teamjobs`
--

DROP TABLE IF EXISTS `teamjobs`;
CREATE TABLE IF NOT EXISTS `teamjobs` (
  `idTeams_Teams` int NOT NULL,
  `idJobs_Jobs` int NOT NULL,
  PRIMARY KEY (`idTeams_Teams`,`idJobs_Jobs`),
  KEY `idJobs_Jobs` (`idJobs_Jobs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `teams`
--

DROP TABLE IF EXISTS `teams`;
CREATE TABLE IF NOT EXISTS `teams` (
  `idTeams_Teams` int NOT NULL AUTO_INCREMENT,
  `name_Teams` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idTeams_Teams`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `xp`
--

DROP TABLE IF EXISTS `xp`;
CREATE TABLE IF NOT EXISTS `xp` (
  `idXP_XP` int NOT NULL AUTO_INCREMENT,
  `value_XP` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idXP_XP`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

-- --------------------------------------------------------

--
-- Structure de la table `xpjobs`
--

DROP TABLE IF EXISTS `xpjobs`;
CREATE TABLE IF NOT EXISTS `xpjobs` (
  `idXP_XP` int NOT NULL,
  `idJobs_Jobs` int NOT NULL,
  PRIMARY KEY (`idXP_XP`,`idJobs_Jobs`),
  KEY `idJobs_Jobs` (`idJobs_Jobs`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `crystaljobs`
--
ALTER TABLE `crystaljobs`
  ADD CONSTRAINT `crystaljobs_ibfk_1` FOREIGN KEY (`idCrystal_Crystal`) REFERENCES `crystal` (`idCrystal_Crystal`),
  ADD CONSTRAINT `crystaljobs_ibfk_2` FOREIGN KEY (`idJobs_Jobs`) REFERENCES `jobs` (`idJobs_Jobs`);

--
-- Contraintes pour la table `playerjobs`
--
ALTER TABLE `playerjobs`
  ADD CONSTRAINT `playerjobs_ibfk_1` FOREIGN KEY (`idPlayer_Player`) REFERENCES `player` (`idPlayer_Player`),
  ADD CONSTRAINT `playerjobs_ibfk_2` FOREIGN KEY (`idJobs_Jobs`) REFERENCES `jobs` (`idJobs_Jobs`);

--
-- Contraintes pour la table `playerstage`
--
ALTER TABLE `playerstage`
  ADD CONSTRAINT `playerstage_ibfk_1` FOREIGN KEY (`idStage_Stage`) REFERENCES `stage` (`idStage_Stage`),
  ADD CONSTRAINT `playerstage_ibfk_2` FOREIGN KEY (`idPlayer_Player`) REFERENCES `player` (`idPlayer_Player`);

--
-- Contraintes pour la table `soundstage`
--
ALTER TABLE `soundstage`
  ADD CONSTRAINT `soundstage_ibfk_1` FOREIGN KEY (`idSound_Sound`) REFERENCES `sound` (`idSound_Sound`),
  ADD CONSTRAINT `soundstage_ibfk_2` FOREIGN KEY (`idStage_Stage`) REFERENCES `stage` (`idStage_Stage`);

--
-- Contraintes pour la table `teamjobs`
--
ALTER TABLE `teamjobs`
  ADD CONSTRAINT `teamjobs_ibfk_1` FOREIGN KEY (`idTeams_Teams`) REFERENCES `teams` (`idTeams_Teams`),
  ADD CONSTRAINT `teamjobs_ibfk_2` FOREIGN KEY (`idJobs_Jobs`) REFERENCES `jobs` (`idJobs_Jobs`);

--
-- Contraintes pour la table `xpjobs`
--
ALTER TABLE `xpjobs`
  ADD CONSTRAINT `xpjobs_ibfk_1` FOREIGN KEY (`idXP_XP`) REFERENCES `xp` (`idXP_XP`),
  ADD CONSTRAINT `xpjobs_ibfk_2` FOREIGN KEY (`idJobs_Jobs`) REFERENCES `jobs` (`idJobs_Jobs`);
--
-- Base de données : `crud`
--
CREATE DATABASE IF NOT EXISTS `crud` DEFAULT CHARACTER SET utf8mb3 COLLATE utf8mb3_general_ci;
USE `crud`;

-- --------------------------------------------------------

--
-- Structure de la table `user`
--

DROP TABLE IF EXISTS `user`;
CREATE TABLE IF NOT EXISTS `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `zipcode` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=89 DEFAULT CHARSET=utf8mb3;

--
-- Déchargement des données de la table `user`
--

INSERT INTO `user` (`id`, `name`, `firstname`, `address`, `zipcode`, `city`, `phone`, `mail`) VALUES
(6, 'François', 'Jean-Pierre', '5 rue du codeur', '59594', 'Las Vegas', '0605060708', 'jpf@gmail.com'),
(69, 'Delecroix', 'Alexis', '2 rue du codeur', '59591', 'Amsterdam', '0602030405', 'alexis@gmail.com'),
(70, 'Bourhan Aref', 'Dane', '4 rue du codeur', '59593', 'Moscou', '0604050607', 'dane@gmail.com'),
(77, 'Deroo', 'Kylian', '8 rue du codeur', '59598', 'Tokyo', '0608091011', 'kylian@gmail.com'),
(74, 'Asloum', 'Fouzia', '7 rue du codeur', '59597', 'Prague', '0607080910', 'sana@gmail.com'),
(65, 'Driouich', 'Maryam', '6 rue du codeur', '59595', 'Londre', '0607080910', 'maryam@gmail.com'),
(76, 'Serin', 'Charles', '3 rue du codeur', '59593', 'Berlin', '0603040506', 'charles@gmail.com'),
(59, 'Balhoul', 'Liza', '9 rue du codeur', '59599', 'Madrid', '0609010203', 'liza@gmail.com'),
(60, 'Percinet', 'Renaud', '10 rue du codeur', '59600', 'Lisbonne', '0610010203', 'renaud@gmail.com'),
(61, 'Dylan', 'Dylan', '11 rue du codeur', '59601', 'Pekin', '0610020304', 'dylan@gmail.com'),
(62, 'Alapid', 'Sebastien', '12 rue du codeur', '59602', 'Belward', '0610030405', 'seb@gmail.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

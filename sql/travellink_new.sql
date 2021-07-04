-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:8889
-- Généré le : jeu. 25 mars 2021 à 16:43
-- Version du serveur :  5.7.32
-- Version de PHP : 7.4.12

SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `travellink_new`
--
CREATE DATABASE IF NOT EXISTS `travellink_new` DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;
USE travellink_new;

-- --------------------------------------------------------

--
-- Structure de la table `activite`
--

CREATE TABLE `activite` (
  `id` int(11) NOT NULL,
  `formule_id` int(11) NOT NULL,
  `etape_id` int(11) NOT NULL,
  `titre_activite` varchar(255) NOT NULL,
  `lieu_activite` varchar(255) DEFAULT NULL,
  `categorie_activite` varchar(255) DEFAULT NULL
) ;

--
-- Déchargement des données de la table `activite`
--

INSERT INTO `activite` (`id`, `formule_id`, `etape_id`, `titre_activite`, `lieu_activite`, `categorie_activite`) VALUES
(1, 1, 1, 'Découverte de la ville', '-', 'Découverte'),
(2, 2, 1, 'Déjeuner à l\'Elephant House', '-', 'Restauration'),
(3, 3, 1, 'Collines de Calton Hill et d\'Arthur\'s Seat', '-', 'Découverte'),
(4, 1, 2, 'Visite du château d\'Édimbourg', '-', 'Visite musée'),
(5, 2, 2, 'Dégustation d\'un Fudge', '-', 'Restauration'),
(6, 3, 2, 'Passage au Museum Context', '-', 'Shopping'),
(7, 1, 3, 'Train pour Fort William', '-', 'Transport'),
(8, 2, 3, 'Viaduc de Glenfinnan', '-', 'Découverte'),
(9, 3, 3, 'Soirée au White Hart Inn', '-', 'Détente'),
(10, 1, 4, 'Visite de la ville, marché aux poissons', '-', 'Découverte'),
(11, 2, 4, 'Visite du jardin Hama-Rikyu', '-', 'Découverte'),
(12, 3, 4, 'Visite du parc Ueno (temples)', '-', 'Découverte'),
(13, 1, 5, 'Visite de Karuizawa (le vent se lève)', '-', 'Découverte'),
(14, 2, 5, 'Les chutes de Shiaito (en pleine forêt)', '-', 'Découverte'),
(15, 3, 5, 'Dîner au Karuizawa', '-', 'Restauration'),
(16, 1, 6, 'Visite de la ville de Sendai', '-', 'Découverte'),
(17, 2, 6, 'Explorer la jolie baie de Matsushima', '-', 'Découverte'),
(18, 3, 6, 'Château Aobajô', '-', 'Visite musée'),
(19, 1, 7, 'Visite de Londres', '-', 'Découverte'),
(20, 2, 7, 'Déjeuner au Simpson\'s in the Strand', '-', 'Restauration'),
(21, 3, 7, 'Visite Leytonstone (quartier d\'enfance)', '-', 'Découverte'),
(22, 1, 8, 'Visite du cinema British museum', '-', 'Visite musée'),
(23, 2, 8, 'Déjeuner au metrograph commissary', '-', 'Restauration'),
(24, 3, 8, 'Le Royal Albert Hall, l’hôtel Hilton London', '-', 'Visite musée'),
(25, 1, 9, 'Visite lieux de tournage Les 39 marches', '-', 'Découverte'),
(26, 2, 9, 'Dejeuner au Lakeside Diner', '-', 'Déjeuner'),
(27, 3, 9, 'Diffusion de films d\'Hitchcock', '-', 'Détente'),
(28, 1, 10, 'Visite de Times square', '-', 'Découverte'),
(29, 2, 10, 'Déjeuner chez Joe\'s pizza', '-', 'Restauration'),
(30, 3, 10, 'Visite des différents lieux de tournage', '-', 'Découverte'),
(31, 1, 11, 'Activité Escalade', '-', 'Détente'),
(32, 2, 11, 'Parc de Flushing-Meadows', '-', 'Découverte'),
(33, 3, 11, 'Balade sur le Staten Island Ferry', '-', 'Découverte'),
(34, 1, 12, 'Création d\'un costume spiderman', '-', 'Détente'),
(35, 2, 12, 'Luna Park (accès à tous les manèges)', '-', 'Détente'),
(36, 3, 12, 'Soirée théatre au broadchurch theatre', '-', 'Détente'),
(37, 1, 13, 'Rendez vous au 66 Perry Street ', '-', 'Découverte'),
(38, 2, 13, 'Breakfast cupcakes 401 Bleecker St', '-', 'Restauration'),
(39, 3, 13, 'Fontaines de Columbus / Central Park', '-', 'Découverte'),
(40, 1, 14, 'Déjeuner au the loeb Boathouse', '-', 'Découverte'),
(41, 2, 14, 'Shopping au century 21 (21 Dey Street)', '-', 'Shopping'),
(42, 3, 14, 'Musée Guggenheim', '-', 'Visite musée'),
(43, 1, 15, 'Le ferry de Staten Island', '-', 'Détente'),
(44, 2, 15, 'Boire un cosmo et dîner au onieals soho', '-', 'Restauration'),
(45, 3, 15, 'Spectacle au New York City Ballet', '-', 'Détente'),
(46, 1, 16, 'Quartiers typiques (Madrid de los autrias)', '-', 'Découverte'),
(47, 2, 16, 'Déjeuner restau Sergio arola gastro', '-', 'Restauration'),
(48, 3, 16, 'Découverte de la Plaza Mayor', '-', 'Découverte'),
(49, 1, 17, 'Visite couvent des \"Descalzas Reales\"', '-', 'Découverte'),
(50, 2, 17, 'Dîner au restaurant Santceloni', '-', 'Restauration'),
(51, 3, 17, 'Soirée au Villa Rosa (Plaza de Santa Ana)', '-', 'Détente'),
(52, 1, 18, 'Cours de guitare avec un professeur', '-', 'Cours'),
(53, 2, 18, 'Déjeuner Terraza del Casino de Madrid', '-', 'Restauration'),
(54, 3, 18, 'Carmin Cabaret soirée transformiste', '-', 'Détente'),
(55, 1, 19, 'Avenue mythique de Via Laietana', '-', 'Découverte'),
(56, 2, 19, 'Sagrada Familia / musée', '-', 'Découverte'),
(57, 3, 19, 'Arrêt au 14 carrer de las Floristas', '-', 'Restauration'),
(58, 1, 20, 'Visite de l\'université de Barcelone', '-', 'Découverte'),
(59, 2, 20, 'Excursion catamaran large de Port Vell', '-', 'Détente'),
(60, 3, 20, 'Soirée discothèque à La Paloma', '-', 'Découverte'),
(61, 1, 21, 'Visite de christchurch', '-', 'Découverte'),
(62, 2, 21, 'Balade en barque sur la rivière Avon', '-', 'Détente'),
(63, 3, 21, 'Port Hills et sa chaîne de collines', '-', 'Découverte'),
(64, 1, 22, 'Visite du village des grenadines', '-', 'Découverte'),
(65, 2, 22, 'Balade en helicoptère', '-', 'Détente'),
(66, 3, 22, 'Dîner sur le lac', '-', 'Restauration'),
(67, 1, 23, 'Visite de Dunedin et sa gare', '-', 'Découverte'),
(68, 2, 23, 'Concert de cornemuse Lord of the rings', '-', 'Détente'),
(69, 3, 23, 'Dîner au plato menu Lord of the Ring', '-', 'Restauration'),
(70, 1, 24, 'Visite du village de l\'Ajim', '-', 'Découverte'),
(71, 2, 24, 'Déjeuner à la Cantina de Chalmun', '-', 'Restauration'),
(72, 3, 24, 'Musée de Guellala', '-', 'Visite musée'),
(73, 1, 25, 'Visite du village de Ksar Ouled Soltan', '-', 'Découverte'),
(74, 2, 25, 'Visite guidée de Chenini', '-', 'Découverte'),
(75, 3, 25, 'Visite de Ksar Hadada', '-', 'Découverte'),
(76, 1, 26, 'Visite de Sidi Bouhlel, Café Lakhdher', '-', 'Découverte'),
(77, 2, 26, 'Visite de Chott el-Gharsa', '-', 'Découverte'),
(78, 3, 26, 'Concert de musique électronique', '-', 'Détente'),
(79, 1, 27, 'Visite du Chott El-Gharsa', '-', 'Découverte'),
(80, 2, 27, 'Déjeuner à l\'Hôtel Sidi Driss', '-', 'Détente'),
(81, 3, 27, 'Nuit à la belle étoile à Torzeur', '-', 'Restauration'),
(82, 1, 28, 'Visite de Port Royal', '-', 'Découverte'),
(83, 2, 28, 'Visite de la ville de Kingstown', '-', 'Détente'),
(84, 3, 28, 'Dîner au jack\'s', '-', 'Détente'),
(85, 1, 29, 'Bronzage farniente et visite de l\'île', '-', 'Découverte'),
(86, 2, 29, 'Atelier costumes Pirates des Caraïbes', '-', 'Détente'),
(87, 3, 29, 'Plongée découverte des fonds marins', '-', 'Découverte'),
(88, 1, 30, 'Tour dans la capitale : Port-au-Prince', '-', 'Découverte'),
(89, 2, 30, 'Village de Noailles initiation à l\'art local', '-', 'Découverte'),
(90, 3, 30, 'Station balnéaire de Labadie / citadelle', '-', 'Restauration'),
(91, 1, 31, 'Découverte de la ville de Burkittsville', '-', 'Découverte'),
(92, 2, 31, 'Gathland State Park (zone de loisirs)', '-', 'Détente'),
(93, 3, 31, 'Dîner à Maria’s Taqueria', '-', 'Restauration'),
(94, 1, 32, 'Randonnée White Rocks Trail Overlook', '-', 'Découverte'),
(95, 2, 32, 'Accrobranche durant l\'après-midi', '-', 'Détente'),
(96, 3, 32, 'Dîner autour du feu, nuit à la belle étoile', '-', 'Restauration'),
(97, 1, 33, 'Seneca Creek State Park', '-', 'Détente'),
(98, 2, 33, 'Balade dans la Stickman Forest', '-', 'Découverte'),
(99, 3, 33, 'Diner dans le campement(diffusion film)', '-', 'Détente');

-- --------------------------------------------------------

--
-- Structure de la table `avis`
--

CREATE TABLE `avis` (
  `id` int(11) NOT NULL,
  `utilisateur_id` int(11) DEFAULT NULL,
  `experience_id` int(11) NOT NULL,
  `commentaire` longtext,
  `nb_etoiles` int(11) NOT NULL
) ;

--
-- Déchargement des données de la table `avis`
--

INSERT INTO `avis` (`id`, `utilisateur_id`, `experience_id`, `commentaire`, `nb_etoiles`) VALUES
(1, 1, 2, 'Bla bla bla 1', 2),
(2, 1, 3, 'Bla bla bla 2', 4),
(3, 2, 1, 'Bla bla bla 3', 5),
(4, 2, 2, 'Bla bla bla 4', 5),
(5, 3, 1, 'Bla bla bla 5', 4),
(6, 3, 3, 'Bla bla bla 6', 1);

-- --------------------------------------------------------

--
-- Structure de la table `commande`
--

CREATE TABLE `commande` (
  `id` int(11) NOT NULL,
  `utilisateur_id` int(11) DEFAULT NULL,
  `experience_id` int(11) NOT NULL,
  `num_reservation` varchar(20) NOT NULL,
  `mode_paiement` varchar(255) DEFAULT NULL,
  `nb_participants` int(11) NOT NULL,
  `montant_total` double NOT NULL
) ;

--
-- Déchargement des données de la table `commande`
--

INSERT INTO `commande` (`id`, `utilisateur_id`, `experience_id`, `num_reservation`, `mode_paiement`, `nb_participants`, `montant_total`) VALUES
(1, 1, 2, '145687', 'Carte bancaire', 2, 4000),
(2, 2, 1, '145688', 'Virement bancaire', 3, 2100),
(3, 3, 2, '145689', 'PayPal', 1, 2300);

-- --------------------------------------------------------

--
-- Structure de la table `doctrine_migration_versions`
--

CREATE TABLE `doctrine_migration_versions` (
  `version` varchar(191) NOT NULL,
  `executed_at` datetime DEFAULT NULL,
  `execution_time` int(11) DEFAULT NULL
) ;

--
-- Déchargement des données de la table `doctrine_migration_versions`
--

INSERT INTO `doctrine_migration_versions` (`version`, `executed_at`, `execution_time`) VALUES
('DoctrineMigrations\\Version20210323214119', '2021-03-23 21:41:24', 59);

-- --------------------------------------------------------

--
-- Structure de la table `etape`
--

CREATE TABLE `etape` (
  `id` int(11) NOT NULL,
  `experience_id` int(11) NOT NULL,
  `jour_etape` int(11) NOT NULL,
  `quartier_etape` varchar(255) DEFAULT NULL,
  `ville_etape` varchar(255) NOT NULL,
  `pays_etape` varchar(255) NOT NULL,
  `latitude_etape` double DEFAULT NULL,
  `longitude_etape` double DEFAULT NULL
) ;

--
-- Déchargement des données de la table `etape`
--

INSERT INTO `etape` (`id`, `experience_id`, `jour_etape`, `quartier_etape`, `ville_etape`, `pays_etape`, `latitude_etape`, `longitude_etape`) VALUES
(1, 1, 1, '-', 'Édimbourg', 'Écosse', 55.953252, -3.188267),
(2, 1, 2, '-', 'Édimbourg', 'Écosse', 55.864237, -4.251806),
(3, 1, 3, '-', 'Fort William', 'Écosse', 56.819817, -5.105218),
(4, 2, 1, '-', 'Tokyo', 'Japon', 35.6894, 139.692),
(5, 2, 2, '-', 'Karuizawa', 'Japon', 35.7906, 140.019),
(6, 2, 3, '-', 'Sendai', 'Japon', 38.268216, 140.8693559),
(7, 3, 1, '-', 'Londres', 'Angleterre', 51.5072, -0.1275),
(8, 3, 2, '-', 'Londres', 'Angleterre', 51.5072, -0.1275),
(9, 3, 3, '', 'Londres', 'Angleterre', 51.5072, -0.1275),
(10, 4, 1, '-', 'New-York', 'États-Unis', 40.6643, -73.9385),
(11, 4, 2, '-', 'New-York', 'États-Unis', 40.6644, -73.9386),
(12, 4, 3, '-', 'New-York', 'États-Unis', 40.6645, -73.9387),
(13, 5, 1, '-', 'New-York', 'États-Unis', 40.6646, -73.9388),
(14, 5, 2, '-', 'New-York', 'États-Unis', 40.6647, -73.9389),
(15, 5, 3, '-', 'New-York', 'États-Unis', 40.6646, -73.9388),
(16, 6, 1, '-', 'Madrid', 'Espagne', 40.4167, -3.70325),
(17, 6, 2, '-', 'Madrid', 'Espagne', 40.4167, -3.70325),
(18, 6, 3, '-', 'Madrid', 'Espagne', 40.4167, -3.70325),
(19, 7, 1, '-', 'Barcelone', 'Espagne', 41.3879, 2.16992),
(20, 7, 2, '-', 'Barcelone', 'Espagne', 41.388, 2.16993),
(21, 7, 3, '-', 'Barcelone', 'Espagne', 41.3881, 2.16994),
(22, 8, 1, '-', 'Christchurch', 'Nouvelle-Zélande', -43.5320544, 172.6362254),
(23, 8, 2, '-', 'Lake Tekapo', 'Nouvelle-Zélande', -44.004674, 170.477121),
(24, 8, 3, '-', 'Dunedin', 'Nouvelle-Zélande', -45.87416, 170.50361),
(25, 9, 1, '-', 'Ajim', 'Tunisie', 33.7323, 10.7605),
(26, 9, 2, '-', 'Ksar Ouled Soltan', 'Tunisie', 32.77, 10.49),
(27, 9, 3, '-', 'Sidi Bouhlel', 'Tunisie', 36.8687, 10.34174),
(28, 10, 1, '-', 'Saint-Vincent-et-les-Grenadines', 'Caraïbes', 12.9809094054845, -61.2873915886385),
(29, 10, 2, '-', 'Tobago Cays, St-Vincent-et-les-Grenadines', 'Caraïbes', 12.9809094054846, -61.2873915886386),
(30, 10, 3, '-', 'Haïti', 'Caraïbes', 18.971187, -72.285215),
(31, 11, 1, '-', 'Burkittsville', 'Etats-Unis', 39.4009, -77.628),
(32, 11, 2, '-', 'Forêt de White Rocks', 'Etats-Unis', 39.4009, -77.628),
(33, 11, 3, '-', 'Stickman Forest', 'Etats-Unis', 39.4009, -77.628);

-- --------------------------------------------------------

--
-- Structure de la table `experience`
--

CREATE TABLE `experience` (
  `id` int(11) NOT NULL,
  `genre_cine_id` int(11) NOT NULL,
  `theme` varchar(255) NOT NULL,
  `titre_experience` varchar(255) DEFAULT NULL,
  `description_experience` longtext,
  `ville_destination` varchar(255) DEFAULT NULL,
  `pays_destination` varchar(255) NOT NULL,
  `latitude_destination` double DEFAULT NULL,
  `longitude_destination` double DEFAULT NULL,
  `type_sejour` varchar(255) NOT NULL,
  `date_depart` date NOT NULL,
  `date_retour` date NOT NULL
) ;

--
-- Déchargement des données de la table `experience`
--

INSERT INTO `experience` (`id`, `genre_cine_id`, `theme`, `titre_experience`, `description_experience`, `ville_destination`, `pays_destination`, `latitude_destination`, `longitude_destination`, `type_sejour`, `date_depart`, `date_retour`) VALUES
(1, 5, 'Harry Potter', 'À l\'école de Poudlard', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Édimbourg', 'Écosse', 56, -4, 'Semaine', '2021-04-12', '2021-04-18'),
(2, 5, 'Studios Ghibli ', 'Dans les pas de Miyazaki', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Tokyo', 'Japon', 34.88, 131.379711, 'Long séjour', '2021-05-10', '2021-06-01'),
(3, 8, 'Alfred Hitchcock ', 'Dans l\'ombre d\'Alfred Hitchcock', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Londres', 'Angleterre', 51.5072, -0.1275, 'Week-end', '2021-04-15', '2021-04-18'),
(4, 1, 'Spiderman ', 'Glissez-vous dans la peau du célèbre homme-araignée', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'New York', 'États-Unis', 40.6643, -73.9385, 'Semaine', '2021-05-15', '2021-05-21'),
(5, 9, 'Sex and the City ', 'Sex and the City tour ', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'New York', 'États-Unis', 40.6644, -73.9386, 'Week-end', '2021-06-02', '2021-06-04'),
(6, 6, 'Almodovar', 'Madrid, muse d\'almodovar', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Madrid', 'Espagne', 40.4167, -3.70325, 'Week-end', '2021-07-02', '2021-07-05'),
(7, 3, 'L\'Auberge espagnole', 'Barcelone, au rythme de L\'Auberge espagnole', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Barcelone', 'Espagne', 41.3879, 2.16992, 'Semaine', '2021-07-15', '2021-07-22'),
(8, 5, 'Lord of the ring', 'Rendez-vous en terre du milieu ', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Christchurch', 'Nouvelle-Zélande ', 34, 166, 'Long séjour', '2021-08-01', '2021-08-21'),
(9, 5, 'Star wars ', 'Vivre Star Wars en Tunisie', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Tunis', 'Tunisie', 33.886917, 9.537499, 'Semaine', '2021-07-01', '2021-07-08'),
(10, 2, 'Pirates des Caraïbes', 'À l\'abordage en compagnie de Jack Sparrow', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Haïti', 'Caraïbes', 12.9809094054845, -61.2873915886385, 'Semaine', '2021-07-10', '2021-07-17'),
(11, 7, 'Projet Blair Witch', 'Dans la forêt de l\'effroi', 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia, officia. Eligendi soluta distinctio blanditiis consequuntur, odio accusamus ad repellat et doloribus odit laboriosam tempore? Incidunt obcaecati eum quo officia quisquam.', 'Burkittsville', 'États-Unis', 39.4009, -77.628, 'Week-end', '2021-07-12', '2021-07-15');

-- --------------------------------------------------------

--
-- Structure de la table `formule`
--

CREATE TABLE `formule` (
  `id` int(11) NOT NULL,
  `type_formule` varchar(255) NOT NULL
) ;

--
-- Déchargement des données de la table `formule`
--

INSERT INTO `formule` (`id`, `type_formule`) VALUES
(1, 'Court-métrage'),
(2, 'Long-métrage'),
(3, 'Trilogie');

-- --------------------------------------------------------

--
-- Structure de la table `genre_cine`
--

CREATE TABLE `genre_cine` (
  `id` int(11) NOT NULL,
  `genre` varchar(255) NOT NULL
) ;

--
-- Déchargement des données de la table `genre_cine`
--

INSERT INTO `genre_cine` (`id`, `genre`) VALUES
(1, 'Action'),
(2, 'Aventure'),
(3, 'Comédie'),
(4, 'Drame'),
(5, 'Fantasy'),
(6, 'Cinéma d\'auteur'),
(7, 'Horreur'),
(8, 'Policier'),
(9, 'Romance'),
(10, 'Série TV'),
(11, 'Thriller'),
(12, 'Western');

-- --------------------------------------------------------

--
-- Structure de la table `genre_cine_utilisateur`
--

CREATE TABLE `genre_cine_utilisateur` (
  `genre_cine_id` int(11) NOT NULL,
  `utilisateur_id` int(11) NOT NULL
) ;

--
-- Déchargement des données de la table `genre_cine_utilisateur`
--

INSERT INTO `genre_cine_utilisateur` (`genre_cine_id`, `utilisateur_id`) VALUES
(1, 4),
(3, 3),
(4, 1),
(5, 3),
(7, 4),
(8, 2),
(10, 4),
(11, 2),
(12, 1);

-- --------------------------------------------------------

--
-- Structure de la table `hebergeur`
--

CREATE TABLE `hebergeur` (
  `id` int(11) NOT NULL,
  `pseudo_hebergeur` varchar(255) NOT NULL,
  `date_naissance_hebergeur` date NOT NULL,
  `sexe_hebergeur` varchar(255) DEFAULT NULL,
  `profession_hebergeur` varchar(255) DEFAULT NULL,
  `ville_hebergeur` varchar(255) NOT NULL,
  `pays_hebergeur` varchar(255) NOT NULL,
  `nb_hebergements_effectues` int(11) DEFAULT NULL,
  `nb_experiences_vecues` int(11) DEFAULT NULL,
  `lien_couch_surfing` varchar(255) DEFAULT NULL
) ;

--
-- Déchargement des données de la table `hebergeur`
--

INSERT INTO `hebergeur` (`id`, `pseudo_hebergeur`, `date_naissance_hebergeur`, `sexe_hebergeur`, `profession_hebergeur`, `ville_hebergeur`, `pays_hebergeur`, `nb_hebergements_effectues`, `nb_experiences_vecues`, `lien_couch_surfing`) VALUES
(1, 'Lilou82', '1982-04-21', 'femme', 'Actrice', 'Édimbourg', 'Écosse', 24, 5, 'lilou82@couchsurfing.com'),
(2, 'YoyoHFT', '1992-04-22', 'homme', 'Dentiste', 'Madrid', 'Espagne', 12, 15, 'yoyohft@couchsurfing.com'),
(3, 'PrinceLaca', '1982-04-23', 'non binaire', 'Chirurgien', 'Barcelone', 'Espagne', 9, 2, 'princelaca@couchsurfing.com'),
(4, 'Dojo1000', '1995-04-24', 'non binaire', 'Professeur', 'Tokyo', 'Japon', 3, 1, 'dojo1000@couchsurfing.com'),
(5, 'Svenxx245', '2001-04-25', 'homme', 'Graphiste', 'Sendai', 'Japon', 16, 1, 'svenxx245@couchsurfing.com'),
(6, 'Gasp73', '1973-04-26', 'homme', 'Professeur de yoga', 'Fort William', 'Écosse', 2, 1, 'gasp73@couchsurfing.com'),
(7, 'Belilolo', '1988-04-27', 'femme', 'Infirmière', 'Londres', 'Angleterre', 17, 0, 'belilolo@couchsurfing.com'),
(8, 'Tcharimono', '1991-04-28', 'non binaire', 'Infirmier', 'La Havane', 'Cuba', 8, 12, 'tcharimono@couchsurfing.com'),
(9, 'Plotre22', '2000-04-29', 'homme', 'Producteur', 'Madrid', 'Espagne', 4, 8, 'plotre22@couchsurfing.com'),
(10, 'Mindla', '1987-10-03', 'femme', 'Créatrice', 'Paris', 'France', 12, 16, 'mindla@couchsurfing.com');

-- --------------------------------------------------------

--
-- Structure de la table `image_experience`
--

CREATE TABLE `image_experience` (
  `id` int(11) NOT NULL,
  `experience_id` int(11) NOT NULL,
  `url_image` varchar(255) NOT NULL,
  `type_image` varchar(255) NOT NULL
) ;

--
-- Déchargement des données de la table `image_experience`
--

INSERT INTO `image_experience` (`id`, `experience_id`, `url_image`, `type_image`) VALUES
(1, 1, '../img/imgExperience/potter_image_1.jpg', 'Bannière'),
(2, 1, '../img/imgExperience/potter_image_2.jpg', 'Profil'),
(3, 1, '../img/imgExperience/potter_image_3.jpg', 'Vignette'),
(4, 1, '../img/imgExperience/potter_image_4.jpg', 'Vignette'),
(5, 1, '../img/imgExperience/potter_image_5.jpg', 'Vignette'),
(6, 2, '../img/imgExperience/ghibli_image_1.jpg', 'Bannière'),
(7, 2, '../img/imgExperience/ghibli_image_2.png', 'Profil'),
(8, 2, '../img/imgExperience/ghibli_image_3.jpg', 'Vignette'),
(9, 2, '../img/imgExperience/ghibli_image_4.jpg', 'Vignette'),
(10, 2, '../img/imgExperience/ghibli_image_5.jpg', 'Vignette'),
(11, 3, '../img/imgExperience/hitchcock_image_1.jpg', 'Bannière'),
(12, 3, '../img/imgExperience/hitchcock_image_2.jpg', 'Profil'),
(13, 3, '../img/imgExperience/hitchcock_image_3.jpg', 'Vignette'),
(14, 3, '../img/imgExperience/hitchcock_image_4.jpg', 'Vignette'),
(15, 3, '../img/imgExperience/hitchcock_image_5.jpg', 'Vignette'),
(16, 4, '../img/imgExperience/spiderman_image_1.jpg', 'Bannière'),
(17, 4, '../img/imgExperience/spiderman_image_2.jpg', 'Profil'),
(18, 4, '../img/imgExperience/spiderman_image_3.png', 'Vignette'),
(19, 4, '../img/imgExperience/spiderman_image_4.jpg', 'Vignette'),
(20, 4, '../img/imgExperience/spiderman_image_5.jpeg', 'Vignette'),
(21, 5, '../img/imgExperience/sex_city_image_1.jpg', 'Bannière'),
(22, 5, '../img/imgExperience/sex_city_image_2.jpg', 'Profil'),
(23, 5, '../img/imgExperience/sex_city_image_3.jpg', 'Vignette'),
(24, 5, '../img/imgExperience/sex_city_image_4.jpg', 'Vignette'),
(25, 5, '../img/imgExperience/sex_city_image_5.jpg', 'Vignette'),
(26, 6, '../img/imgExperience/almodovar_image_1.jpg', 'Bannière'),
(27, 6, '../img/imgExperience/almodovar_image_2.png', 'Profil'),
(28, 6, '../img/imgExperience/almodovar_image_3.jpg', 'Vignette'),
(29, 6, '../img/imgExperience/almodovar_image_4.png', 'Vignette'),
(30, 6, '../img/imgExperience/almodovar_image_5.jpg', 'Vignette'),
(31, 7, '../img/imgExperience/auberge_image_1.jpg', 'Bannière'),
(32, 7, '../img/imgExperience/auberge_image_2.jpg', 'Profil'),
(33, 7, '../img/imgExperience/auberge_image_3.jpg', 'Vignette'),
(34, 7, '../img/imgExperience/auberge_image_4.jpeg', 'Vignette'),
(35, 7, '../img/imgExperience/auberge_image_5.jpg', 'Vignette'),
(36, 8, '../img/imgExperience/seigneur_image_1.jpg', 'Bannière'),
(37, 8, '../img/imgExperience/seigneur_image_2.jpg', 'Profil'),
(38, 8, '../img/imgExperience/seigneur_image_3.jpg', 'Vignette'),
(39, 8, '../img/imgExperience/seigneur_image_4.jpg', 'Vignette'),
(40, 8, '../img/imgExperience/seigneur_image_5.jpg', 'Vignette'),
(41, 9, '../img/imgExperience/star_wars_image_1.jpg', 'Bannière'),
(42, 9, '../img/imgExperience/star_wars_image_2.jpg', 'Profil'),
(43, 9, '../img/imgExperience/star_wars_image_3.jpg', 'Vignette'),
(44, 9, '../img/imgExperience/star_wars_image_4.jpg', 'Vignette'),
(45, 9, '../img/imgExperience/star_wars_image_5.jpg', 'Vignette'),
(46, 10, '../img/imgExperience/pirates_image_1.jpg', 'Bannière'),
(47, 10, '../img/imgExperience/pirates_image_2.jpg', 'Profil'),
(48, 10, '../img/imgExperience/pirates_image_3.jpg', 'Vignette'),
(49, 10, '../img/imgExperience/pirates_image_4.jpg', 'Vignette'),
(50, 10, '../img/imgExperience/pirates_image_5.jpg', 'Vignette'),
(51, 11, '../img/imgExperience/blairwitch_image_1.png', 'Bannière'),
(52, 11, '../img/imgExperience/blairwitch_image_2.png', 'Profil'),
(53, 11, '../img/imgExperience/blairwitch_image_3.png', 'Vignette'),
(54, 11, '../img/imgExperience/blairwitch_image_4.png', 'Vignette'),
(55, 11, '../img/imgExperience/blairwitch_image_5.png', 'Vignette');

-- --------------------------------------------------------

--
-- Structure de la table `tarif`
--

CREATE TABLE `tarif` (
  `id` int(11) NOT NULL,
  `experience_id` int(11) NOT NULL,
  `formule_id` int(11) NOT NULL,
  `tarif` double NOT NULL
) ;

--
-- Déchargement des données de la table `tarif`
--

INSERT INTO `tarif` (`id`, `experience_id`, `formule_id`, `tarif`) VALUES
(1, 1, 1, 700),
(2, 1, 2, 900),
(3, 1, 3, 1100),
(4, 2, 1, 2000),
(5, 2, 2, 2300),
(6, 2, 3, 2600),
(7, 3, 1, 650),
(8, 3, 2, 950),
(9, 3, 3, 1250),
(10, 4, 1, 650),
(11, 4, 2, 850),
(12, 4, 3, 1050),
(13, 5, 1, 1500),
(14, 5, 2, 1750),
(15, 5, 3, 2000),
(16, 6, 1, 1400),
(17, 6, 2, 1600),
(18, 6, 3, 1800),
(19, 7, 1, 650),
(20, 7, 2, 850),
(21, 7, 3, 1050),
(22, 8, 1, 4500),
(23, 8, 2, 5500),
(24, 8, 3, 6500),
(25, 9, 1, 550),
(26, 9, 2, 650),
(27, 9, 3, 750),
(28, 10, 1, 1500),
(29, 10, 2, 1750),
(30, 10, 3, 2000),
(31, 11, 1, 1000),
(32, 11, 2, 1200),
(33, 11, 3, 1400);

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(11) NOT NULL,
  `email` varchar(180) NOT NULL,
  `roles` json NOT NULL,
  `password` varchar(255) NOT NULL,
  `pseudo_utilisateur` varchar(255) DEFAULT NULL,
  `url_photo` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `prenom` varchar(255) DEFAULT NULL,
  `sexe_utilisateur` varchar(255) DEFAULT NULL,
  `telephone` varchar(255) DEFAULT NULL,
  `inscription_newsletter` tinyint(1) DEFAULT NULL,
  `date_naissance_utilisateur` date DEFAULT NULL,
  `num_piece_identite` varchar(255) DEFAULT NULL,
  `date_expiration` date DEFAULT NULL,
  `adresse1` varchar(255) DEFAULT NULL,
  `adresse2` varchar(255) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `cp` varchar(255) DEFAULT NULL,
  `pays` varchar(255) DEFAULT NULL,
  `nb_points_fidelite` int(11) DEFAULT NULL
) ;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `email`, `roles`, `password`, `pseudo_utilisateur`, `url_photo`, `nom`, `prenom`, `sexe_utilisateur`, `telephone`, `inscription_newsletter`, `date_naissance_utilisateur`, `num_piece_identite`, `date_expiration`, `adresse1`, `adresse2`, `ville`, `cp`, `pays`, `nb_points_fidelite`) VALUES
(1, 'bellissima89@gmail.com', '[\"ROLE_USER\"]', 'copain', 'Bellissima89', 'image1.png', 'Duchamp', 'Sophie', 'femme', '0912459563', 1, '2000-05-13', 'X2394561', '2023-05-13', 'Adresse 1', 'Complément d\'adresse 1', 'Paris', '75017', 'France', 50),
(2, 'balot4556@gmail.com', '[\"ROLE_USER\"]', 'soleil', 'Balot4556', 'image2.png', 'Renard', 'Jean', 'homme', '0675858895', 1, '1986-08-23', 'X2392262', '2025-10-11', 'Adresse 2', 'Complément d\'adresse 2', 'Marseille', '13002', 'France', 80),
(3, 'flotteur88@gmail.com', '[\"ROLE_USER\"]', 'chat', 'Flotteur88', 'image3.png', 'Fardier', 'Frédéric', 'non binaire', '0623235295', 0, '1954-05-22', 'X1194563', '2024-09-01', 'Adresse 3', 'Complément d\'adresse 3', 'Avignon', '84000', 'France', 120),
(4, 'bebertdu20@hotmail.fr', '[\"ROLE_USER\"]', 'lapin', 'Bebert1978', 'image4.png', 'Gollas', 'Bernard', 'homme', '0678934562', 0, '1978-12-03', 'X5687654', '2022-06-20', 'Adresse 4', 'Complément d\'adresse 4', 'Paris', '75020', 'France', 10);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `activite`
--
ALTER TABLE `activite`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_B87555152A68F4D1` (`formule_id`),
  ADD KEY `IDX_B87555154A8CA2AD` (`etape_id`);

--
-- Index pour la table `avis`
--
ALTER TABLE `avis`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_8F91ABF0FB88E14F` (`utilisateur_id`),
  ADD KEY `IDX_8F91ABF046E90E27` (`experience_id`);

--
-- Index pour la table `commande`
--
ALTER TABLE `commande`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_6EEAA67DFB88E14F` (`utilisateur_id`),
  ADD KEY `IDX_6EEAA67D46E90E27` (`experience_id`);

--
-- Index pour la table `doctrine_migration_versions`
--
ALTER TABLE `doctrine_migration_versions`
  ADD PRIMARY KEY (`version`);

--
-- Index pour la table `etape`
--
ALTER TABLE `etape`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_285F75DD46E90E27` (`experience_id`);

--
-- Index pour la table `experience`
--
ALTER TABLE `experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_590C10380B69653` (`genre_cine_id`);

--
-- Index pour la table `formule`
--
ALTER TABLE `formule`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `genre_cine`
--
ALTER TABLE `genre_cine`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `genre_cine_utilisateur`
--
ALTER TABLE `genre_cine_utilisateur`
  ADD PRIMARY KEY (`genre_cine_id`,`utilisateur_id`),
  ADD KEY `IDX_9C2264C180B69653` (`genre_cine_id`),
  ADD KEY `IDX_9C2264C1FB88E14F` (`utilisateur_id`);

--
-- Index pour la table `hebergeur`
--
ALTER TABLE `hebergeur`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `image_experience`
--
ALTER TABLE `image_experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_694ED63546E90E27` (`experience_id`);

--
-- Index pour la table `tarif`
--
ALTER TABLE `tarif`
  ADD PRIMARY KEY (`id`),
  ADD KEY `IDX_E7189C946E90E27` (`experience_id`),
  ADD KEY `IDX_E7189C92A68F4D1` (`formule_id`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UNIQ_1D1C63B3E7927C74` (`email`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `activite`
--
ALTER TABLE `activite`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `avis`
--
ALTER TABLE `avis`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `commande`
--
ALTER TABLE `commande`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `etape`
--
ALTER TABLE `etape`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `experience`
--
ALTER TABLE `experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `formule`
--
ALTER TABLE `formule`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `genre_cine`
--
ALTER TABLE `genre_cine`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `hebergeur`
--
ALTER TABLE `hebergeur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `image_experience`
--
ALTER TABLE `image_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tarif`
--
ALTER TABLE `tarif`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `activite`
--
ALTER TABLE `activite`
  ADD CONSTRAINT `FK_B87555152A68F4D1` FOREIGN KEY (`formule_id`) REFERENCES `formule` (`id`),
  ADD CONSTRAINT `FK_B87555154A8CA2AD` FOREIGN KEY (`etape_id`) REFERENCES `etape` (`id`);

--
-- Contraintes pour la table `avis`
--
ALTER TABLE `avis`
  ADD CONSTRAINT `FK_8F91ABF046E90E27` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`),
  ADD CONSTRAINT `FK_8F91ABF0FB88E14F` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`);

--
-- Contraintes pour la table `commande`
--
ALTER TABLE `commande`
  ADD CONSTRAINT `FK_6EEAA67D46E90E27` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`),
  ADD CONSTRAINT `FK_6EEAA67DFB88E14F` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`);

--
-- Contraintes pour la table `etape`
--
ALTER TABLE `etape`
  ADD CONSTRAINT `FK_285F75DD46E90E27` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`);

--
-- Contraintes pour la table `experience`
--
ALTER TABLE `experience`
  ADD CONSTRAINT `FK_590C10380B69653` FOREIGN KEY (`genre_cine_id`) REFERENCES `genre_cine` (`id`);

--
-- Contraintes pour la table `genre_cine_utilisateur`
--
ALTER TABLE `genre_cine_utilisateur`
  ADD CONSTRAINT `FK_9C2264C180B69653` FOREIGN KEY (`genre_cine_id`) REFERENCES `genre_cine` (`id`) ON DELETE CASCADE,
  ADD CONSTRAINT `FK_9C2264C1FB88E14F` FOREIGN KEY (`utilisateur_id`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE;

--
-- Contraintes pour la table `image_experience`
--
ALTER TABLE `image_experience`
  ADD CONSTRAINT `FK_694ED63546E90E27` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`);

--
-- Contraintes pour la table `tarif`
--
ALTER TABLE `tarif`
  ADD CONSTRAINT `FK_E7189C92A68F4D1` FOREIGN KEY (`formule_id`) REFERENCES `formule` (`id`),
  ADD CONSTRAINT `FK_E7189C946E90E27` FOREIGN KEY (`experience_id`) REFERENCES `experience` (`id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

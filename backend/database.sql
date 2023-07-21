-- Dump database coffeeFirst_db

CREATE DATABASE IF NOT EXISTS `coffeeFirst_db`;
USE `coffeeFirst_db`;

-- Table structure for table `machine`

DROP TABLE IF EXISTS `machine`;
CREATE TABLE `machine` (
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`machine_name` VARCHAR(200)
);

-- Dumping data for table `machine`

INSERT INTO `machine` (`id`, `machine_name`) VALUES (1, 'Machine de gauche'), (2, 'Machine de droite');

-- Table structure for table `member`

DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
`id` int NOT NULL AUTO_INCREMENT PRIMARY KEY,
`name` VARCHAR(200) NOT NULL ,
`machine_id` INT,
FOREIGN KEY (machine_id) REFERENCES machine(id)
); 

-- Dumping data for table `member`

INSERT INTO `member` (`id`, `name`) VALUES (1, 'Val'), (3, 'Fantine'), (5, 'Rudy'), (6, 'Anthony'), (8, 'Félicien'), (9, 'Alex Trot'), (11, 'Alex Plaza'), (15, 'Hugo'), (18, 'Jocelyn'), (19, 'Khouloud'), (20, 'Marie'), (22, 'Michael'), (23, 'Romain'), (24, 'Sacha');


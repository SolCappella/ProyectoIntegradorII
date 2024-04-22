CREATE DATABASE  IF NOT EXISTS `proyectoprogra` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `proyectoprogra`;
-- MySQL dump 10.13  Distrib 8.0.36, for macos14 (x86_64)
--
-- Host: 127.0.0.1    Database: proyectoprogra
-- ------------------------------------------------------
-- Server version	5.7.39

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `postId` int(11) NOT NULL,
  `usuarioId` int(10) unsigned NOT NULL,
  `texto` text NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_comentarios_post` (`postId`),
  KEY `fk_comentarios_usuario` (`usuarioId`),
  CONSTRAINT `fk_comentarios_post` FOREIGN KEY (`postId`) REFERENCES `productos` (`id`),
  CONSTRAINT `fk_comentarios_usuario` FOREIGN KEY (`usuarioId`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (1,1,1,'Excelente producto!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(2,1,2,'Muy Bueno!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(3,1,3,'Muy buena compra!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(4,2,1,'Supero mis expectativas!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(5,2,2,'Un producto muy practico','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(6,2,3,'Me sorprendio, no vino con ninguna falla','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(7,3,1,'¡La mejor compra que he hecho en mucho tiempo!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(8,3,2,'Funciona de maravilla, ¡la recomiendo!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(9,3,3,'Me ha ahorrado mucho tiempo de limpieza. Estoy encantada.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(10,4,2,'¡Increíble! No puedo creer lo saludables que quedan las papas fritas.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(11,4,3,'Una excelente alternativa para comer sano sin renunciar al sabor.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(12,4,4,'Ya no puedo vivir sin ella. ¡Una compra 10/10!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(13,5,4,'Me encanta la rapidez con la que prepara los batidos. Excelente compra.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(14,5,5,'Increíble potencia. La mejor licuadora que he tenido.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(15,5,1,'Muy fácil de limpiar. La recomiendo a todos mis amigos.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(16,6,1,'Hace que planchar sea mucho más fácil y rápido. ¡Muy contento!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(17,6,2,'La mejor plancha que he tenido. Deja la ropa impecable en minutos.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(18,6,3,'Me sorprende lo potente que es. Logra eliminar hasta las arrugas más difíciles.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(19,7,1,'Lo uso todas las mañanas. ¡El mejor exprimidor que he tenido!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(20,7,2,'Muy práctico y eficiente. Exprime hasta la última gota.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(21,7,3,'Fácil de limpiar y ocupa poco espacio en la cocina. ¡Me encanta!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(22,8,2,'La uso a diario. ¡Una maravilla!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(23,8,3,'Muy versátil y fácil de limpiar. La recomiendo.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(24,8,4,'Increíble potencia. Me facilita mucho en la cocina.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(25,9,4,'La utilizo todos los días. Calienta el agua en segundos.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(26,9,5,'Muy práctica y segura. Perfecta para preparar té o café.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(27,9,1,'El mejor complemento para mi cocina. ¡No puedo vivir sin ella!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(28,10,1,'Me ha ahorrado mucho tiempo en la cocina. ¡Una maravilla!','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(29,10,2,'Muy útil para preparar comidas rápidas. La recomiendo totalmente.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL),(30,10,3,'Excelente calidad y fácil de usar. No puedo estar más satisfecho.','2024-04-22 01:54:57','2024-04-22 01:54:57',NULL);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `usuario_id` int(10) unsigned NOT NULL,
  `imagen_archivo` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `usuario_id` (`usuario_id`),
  CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,1,'./images/products/img-cafetera-moulinex.jpg','Cafetera Moulinex','La cafetera Moulinex es un dispositivo diseñado para preparar café de forma fácil y rápida.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(2,1,'./images/products/minipimermixer.png','Minipimer Mixer Licuadora de Mano Spica','Cuenta con dos velocidades. Cuchillas de acero inoxidable. Incluye accesorios','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(3,1,'./images/products/aspiradorainalambrica.png','Aspiradora Robot','Limpia automáticamente tu casa. Programable y fácil de usar.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(4,1,'./images/products/freidora.png','Freidora sin aceite','Disfruta de alimentos crujientes sin utilizar aceite. Saludable y fácil de limpiar.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(5,1,'./images/products/licuadora.png','Licuadora de alta velocidad','Prepara jugos y batidos sin esfuerzo. Potente y duradera.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(6,2,'./images/products/vaporizadorplancha.png','Plancha de vapor','Elimina las arrugas de tus prendas con rapidez y eficacia. Vapor continuo y golpe de vapor.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(7,2,'./images/products/jugueraelectrica.png','Exprimidor eléctrico','Prepara jugos frescos de forma rápida y sencilla. Fácil de desmontar y limpiar.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(8,2,'./images/products/batidorademano.png','Batidora de mano','Potente batidora de mano con múltiples velocidades. Ideal para preparar salsas, purés y más.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(9,2,'./images/products/pavaelectrica.png','Pava eléctrica','Hierve agua rápidamente con esta pava eléctrica. Diseño moderno y resistente.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL),(10,2,'./images/products/picadoradealimentos.png','Picadora de alimentos','Pica y tritura alimentos fácilmente. Cuchillas de acero inoxidable y diseño ergonómico.','2024-04-22 01:53:46','2024-04-22 01:53:46',NULL);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deletedAt` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'john.doe@gmail.com','johndoe123','1999-04-28',41284385,'./images/products/defaultprofile.jpg','2024-04-22 01:50:00','2024-04-22 01:50:00',NULL),(2,'anna.smith@gmail.com','password123','1990-12-15',50231022,'./images/products/defaultprofile.jpg','2024-04-22 01:50:00','2024-04-22 01:50:00',NULL),(3,'robert.jones@gmail.com','password123','1985-07-09',70894561,'./images/products/defaultprofile.jpg','2024-04-22 01:50:00','2024-04-22 01:50:00',NULL),(4,'laura.white@gmail.com','password123','1993-03-21',20415678,'./images/products/defaultprofile.jpg','2024-04-22 01:50:00','2024-04-22 01:50:00',NULL),(5,'david.brown@gmail.com','password123','1988-11-30',31908765,'./images/products/defaultprofile.jpg','2024-04-22 01:50:00','2024-04-22 01:50:00',NULL);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-22 14:40:33

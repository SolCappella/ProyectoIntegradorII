-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost:8889
-- Tiempo de generación: 20-06-2024 a las 20:35:38
-- Versión del servidor: 5.7.39
-- Versión de PHP: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoprogra`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--

CREATE TABLE `comentarios` (
  `id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `texto` text NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `product_id`, `usuario_id`, `texto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, 1, 'Excelente producto!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(2, 1, 2, 'Muy Bueno!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(3, 1, 3, 'Muy buena compra!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(4, 2, 1, 'Supero mis expectativas!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(5, 2, 2, 'Un producto muy practico', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(6, 2, 3, 'Me sorprendio, no vino con ninguna falla', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(7, 3, 1, '¡La mejor compra que he hecho en mucho tiempo!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(8, 3, 2, 'Funciona de maravilla, ¡la recomiendo!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(9, 3, 3, 'Me ha ahorrado mucho tiempo de limpieza. Estoy encantada.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(10, 4, 2, '¡Increíble! No puedo creer lo saludables que quedan las papas fritas.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(11, 4, 3, 'Una excelente alternativa para comer sano sin renunciar al sabor.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(12, 4, 4, 'Ya no puedo vivir sin ella. ¡Una compra 10/10!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(13, 5, 4, 'Me encanta la rapidez con la que prepara los batidos. Excelente compra.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(14, 5, 5, 'Increíble potencia. La mejor licuadora que he tenido.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(15, 5, 1, 'Muy fácil de limpiar. La recomiendo a todos mis amigos.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(16, 6, 1, 'Hace que planchar sea mucho más fácil y rápido. ¡Muy contento!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(17, 6, 2, 'La mejor plancha que he tenido. Deja la ropa impecable en minutos.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(18, 6, 3, 'Me sorprende lo potente que es. Logra eliminar hasta las arrugas más difíciles.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(19, 7, 1, 'Lo uso todas las mañanas. ¡El mejor exprimidor que he tenido!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(20, 7, 2, 'Muy práctico y eficiente. Exprime hasta la última gota.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(21, 7, 3, 'Fácil de limpiar y ocupa poco espacio en la cocina. ¡Me encanta!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(22, 8, 2, 'La uso a diario. ¡Una maravilla!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(23, 8, 3, 'Muy versátil y fácil de limpiar. La recomiendo.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(24, 8, 4, 'Increíble potencia. Me facilita mucho en la cocina.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(25, 9, 4, 'La utilizo todos los días. Calienta el agua en segundos.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(26, 9, 5, 'Muy práctica y segura. Perfecta para preparar té o café.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(27, 9, 1, 'El mejor complemento para mi cocina. ¡No puedo vivir sin ella!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(28, 10, 1, 'Me ha ahorrado mucho tiempo en la cocina. ¡Una maravilla!', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(29, 10, 2, 'Muy útil para preparar comidas rápidas. La recomiendo totalmente.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL),
(30, 10, 3, 'Excelente calidad y fácil de usar. No puedo estar más satisfecho.', '2024-04-22 01:54:57', '2024-04-22 01:54:57', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `usuario_id` int(10) UNSIGNED NOT NULL,
  `imagen_archivo` varchar(255) DEFAULT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(1500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `imagen_archivo`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 1, './images/products/img-cafetera-moulinex.jpg', 'Cafetera Moulinex', 'La cafetera Moulinex es un dispositivo diseñado para preparar café de forma fácil y rápida.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(2, 1, './images/products/minipimermixer.png', 'Minipimer Mixer Licuadora de Mano Spica', 'Cuenta con dos velocidades. Cuchillas de acero inoxidable. Incluye accesorios', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(3, 1, './images/products/aspiradorainalambrica.png', 'Aspiradora Robot', 'Limpia automáticamente tu casa. Programable y fácil de usar.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(4, 1, './images/products/freidora.png', 'Freidora sin aceite', 'Disfruta de alimentos crujientes sin utilizar aceite. Saludable y fácil de limpiar.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(5, 1, './images/products/licuadora.png', 'Licuadora de alta velocidad', 'Prepara jugos y batidos sin esfuerzo. Potente y duradera.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(6, 2, './images/products/vaporizadorplancha.png', 'Plancha de vapor', 'Elimina las arrugas de tus prendas con rapidez y eficacia. Vapor continuo y golpe de vapor.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(7, 2, './images/products/jugueraelectrica.png', 'Exprimidor eléctrico', 'Prepara jugos frescos de forma rápida y sencilla. Fácil de desmontar y limpiar.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(8, 2, './images/products/batidorademano.png', 'Batidora de mano', 'Potente batidora de mano con múltiples velocidades. Ideal para preparar salsas, purés y más.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(9, 2, './images/products/pavaelectrica.png', 'Pava eléctrica', 'Hierve agua rápidamente con esta pava eléctrica. Diseño moderno y resistente.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL),
(10, 2, './images/products/picadoradealimentos.png', 'Picadora de alimentos', 'Pica y tritura alimentos fácilmente. Cuchillas de acero inoxidable y diseño ergonómico.', '2024-04-22 01:53:46', '2024-04-22 01:53:46', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario` varchar(100) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `email`, `contraseña`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, NULL, 'john.doe@gmail.com', 'johndoe123', '1999-04-28', 41284385, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(2, NULL, 'anna.smith@gmail.com', 'password123', '1990-12-15', 50231022, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(3, NULL, 'robert.jones@gmail.com', 'password123', '1985-07-09', 70894561, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(4, NULL, 'laura.white@gmail.com', 'password123', '1993-03-21', 20415678, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(5, NULL, 'david.brown@gmail.com', 'password123', '1988-11-30', 31908765, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(6, NULL, 'solcappe1@gmail.com', '$2a$10$D9srQqBx/jIjtUvNheCCW.gc.R39R7D.pGTv1ZHb8Xch7Uo65j9UC', NULL, NULL, NULL, '2024-06-18 16:24:56', '2024-06-18 16:24:56', NULL),
(7, NULL, 'usuarioprueba@gmail.com', '$2a$10$rPdIuC4T7srVVTTBNNF.fOy4x3bTJYxfxgPLmHCdtjvUyCm5LFB9m', NULL, NULL, NULL, '2024-06-18 17:08:42', '2024-06-18 17:08:42', NULL),
(8, NULL, 'usu@gmail.com', '$2a$10$.wUpE431QA/yBtraQYCAeetyY5K7eVgZdo586dkeawR4ag1lQIdW2', NULL, NULL, NULL, '2024-06-18 17:19:57', '2024-06-18 17:19:57', NULL),
(9, NULL, 'digital@gmail.com', '$2a$10$q9K7rkY1gDHrfh7/0gw7w.7SvhSatTshQgf1Qdurei0nDum4j6RWW', NULL, NULL, NULL, '2024-06-18 17:38:30', '2024-06-18 17:38:30', NULL),
(10, NULL, 'digitalh@gmail.com', '$2a$10$OERaevps8BDbP9DrXJ2kxePoJs9gnTwVQEjizAbPwgFxQyIJsWPHG', NULL, NULL, NULL, '2024-06-18 17:43:01', '2024-06-18 17:43:01', NULL),
(11, NULL, 'digitalhouse@gmail.com', '$2a$10$rwLjQDWcaFJ05u60WvPpf.Lwij8W58Kvdgwimrcy/UlB9fAOdx7v.', NULL, NULL, NULL, '2024-06-18 18:17:41', '2024-06-18 18:17:41', NULL),
(12, NULL, 'digitalhouses@gmail.com', '$2a$10$FRm8pANAVyxUex5NkrUIM.HBds9Zq2PFrJmiZuSZYW8eHkSUsf5ua', NULL, NULL, NULL, '2024-06-18 18:18:27', '2024-06-18 18:18:27', NULL),
(13, NULL, 'digitalhous@gmail.com', '$2a$10$hIju9aLSUn4FwqIuDmtMv.F3CdP8xGTBbBTcxZk1Wij4fr3cgvene', NULL, NULL, NULL, '2024-06-18 18:19:03', '2024-06-18 18:19:03', NULL),
(14, NULL, 'digitalho@gmail.com', '$2a$10$2KV.mErU0XbcLbZXFohqVOBLCp54PXjb/EJLJ966/BZsWQ9A60Wz2', NULL, NULL, NULL, '2024-06-18 18:21:36', '2024-06-18 18:21:36', NULL),
(15, NULL, 'digitalo@gmail.com', '$2a$10$SRdzjPIzmoNDRIM6.fN6v.ALDPJltmfzabGg9uDbT1srMKdPQxlGy', NULL, NULL, NULL, '2024-06-18 18:21:43', '2024-06-18 18:21:43', NULL),
(16, NULL, 'digitaloooo@gmail.com', '$2a$10$2ZOlmROdnsnpoTjXJEZ64.FRUiK0.D/IxYXDQm6rKEeHqBu9vG2Xu', NULL, NULL, NULL, '2024-06-18 18:22:07', '2024-06-18 18:22:07', NULL),
(17, NULL, 'digitalooo@gmail.com', '$2a$10$7.hV5z21tP87ZERsXhiPM.LlbwvzgWp8pBVgaNQm8x.62WQ3IG.7W', NULL, NULL, NULL, '2024-06-18 18:22:44', '2024-06-18 18:22:44', NULL),
(18, NULL, 'digitalhhh@gmail.com', '$2a$10$W1EfS.cbf60DF8EqAMhKHuZXXt9u37eRNvzVibBeFBCjutV6poi5q', NULL, NULL, NULL, '2024-06-18 18:32:56', '2024-06-18 18:32:56', NULL),
(19, NULL, 'digitalhhhh@gmail.com', '$2a$10$aeX2g.aAtkrkImmwTfsn2OaMIZg7oaQ5lSQVWICe4IJT3IVVquHu.', NULL, NULL, NULL, '2024-06-18 18:33:19', '2024-06-18 18:33:19', NULL),
(20, NULL, 'digitalhhhhhhh@gmail.com', '$2a$10$VXMWfu2ug46coSfFe8pZGurtjrwAUJvOMb31SWX1lok7tNDn5CK42', NULL, NULL, NULL, '2024-06-18 18:37:05', '2024-06-18 18:37:05', NULL),
(21, NULL, 'digitalhhhhh0000hh@gmail.com', '$2a$10$ZNCktnzOo7wQZE6HDU3w2.ILiK2.s1WRvasBONlJktdz8zKh77eb6', NULL, NULL, NULL, '2024-06-18 18:37:12', '2024-06-18 18:37:12', NULL),
(22, NULL, 'digiital@gmail.com', '$2a$10$EAbLQZkG/Ll3IfbMW3T1vOBuDG6l60/aXkDvXQnj7N5ECnqD60Vx.', NULL, NULL, NULL, '2024-06-18 18:47:24', '2024-06-18 18:47:24', NULL),
(23, NULL, 'digiiital@gmail.com', '$2a$10$hd2dKDeE7MHCUWhMgfPXcuBzJEMDtQM/5Lb1mHUD/IHb3bXWU6Is2', NULL, NULL, NULL, '2024-06-18 18:47:34', '2024-06-18 18:47:34', NULL),
(24, NULL, 'digiiiital@gmail.com', '$2a$10$43Z1RqZ3t5lYIhb3hAVRIeow8X02H29CHMWDXeMfyS3Bjum1Mh5VG', '9090-09-09', 53535445, '', '2024-06-18 18:56:26', '2024-06-18 18:56:26', NULL),
(25, NULL, 'solcappee@gmail.com', '$2a$10$hT3Zi2xFrZ7a74htXZJdQOf0yHZtdo9vWid8VcwhdYZP9LlX8CKtG', NULL, NULL, NULL, '2024-06-18 19:24:00', '2024-06-18 19:24:00', NULL),
(26, NULL, 'sol@gmail.com', '$2a$10$V32Mv1ynbke69.nUOkAabuR5A16oJPXIqgVd6eoVLyZQR6TH9C6Gy', NULL, 3424, NULL, '2024-06-18 20:09:46', '2024-06-18 20:09:46', NULL),
(27, NULL, 'solcappe2@gmail.com', '$2a$10$8NE035JK9HOvJ3eziu9YVOT2C5PTdieMzxmHGke.Pe4Z2S.diAqbC', NULL, 342532, '', '2024-06-18 20:14:58', '2024-06-18 20:14:58', NULL),
(28, NULL, 'solcappe123@gmail.com', '$2a$10$8x3FgkC/Tl3/wA.KkecyXuUNUvEO9uBh97CQnLVl5Ain1OhvcqAFS', '0433-04-23', 460254355, '', '2024-06-18 20:16:20', '2024-06-18 20:16:20', NULL),
(29, NULL, 'solcappe1234@gmail.com', '$2a$10$MkihDwL7VHm2iDw7rbUbx.vMZR1eQb64PA5NPjsRD9TBco0IWkiti', '5233-02-04', 43253523, '', '2024-06-18 20:19:12', '2024-06-18 20:19:12', NULL),
(30, NULL, 'ssss@gmail.com', '$2a$10$YTcWT69tLeFkSYrpB2GzbOPwySWW1zZ2djlcLJbbv9TuItT0VPMGe', '0242-03-31', 4324324, '', '2024-06-18 20:49:43', '2024-06-18 20:49:43', NULL),
(31, NULL, 'solk@gmail.com', '$2a$10$Y76jFB9q5S0PG8h1UJw0e.aIWIQASn7IuOAKzlAFrP4aGvtEq9Bju', '0002-04-23', 3234232, '', '2024-06-18 20:50:08', '2024-06-18 20:50:08', NULL),
(32, NULL, 'lo@gmail.com', '$2a$10$ps95AsHbeUv16/57xk6sDOs/NUMw5qU694hXmWdxx9Zb3PemNAnRe', NULL, NULL, NULL, '2024-06-18 21:17:46', '2024-06-18 21:17:46', NULL),
(33, NULL, 'lola@gmail.com', '$2a$10$Yfkvz0.U7FtedhzbDgg9de5mRkP2pl.gTk6kL9pGn775YnYc0iquK', NULL, NULL, NULL, '2024-06-18 21:18:03', '2024-06-18 21:18:03', NULL),
(34, NULL, 'sas@gmail.com', '$2a$10$9Xlnz6mdGbXHVouO.1aMQOFA5OU9iO13yCl6glHcQX5g8yj4bcGj2', NULL, NULL, NULL, '2024-06-18 21:19:38', '2024-06-18 21:19:38', NULL),
(35, NULL, 'lllll@gmail.com', '$2a$10$yk6Y5el8ZC./eN2mG7vzreH2Nq8j9MGqnFaZNm17KS0yh8B2wrMfO', NULL, NULL, NULL, '2024-06-18 21:50:05', '2024-06-18 21:50:05', NULL),
(36, NULL, 'pppp@gmail.com', '$2a$10$fn0o5mTr2npwLhz/naFoxuWd43o.X1K/U5IX48yvCpFkkbRxjRGXC', NULL, 324324242, '', '2024-06-18 22:15:01', '2024-06-18 22:15:01', NULL),
(37, NULL, 'cccc@gmail.com', '$2a$10$o8lkQFZAhyb8pNTS4lnyd.fkdeYgSUzRdDVKQvimzEuH7UuiG78EO', '3009-08-07', 335535335, '', '2024-06-18 22:38:41', '2024-06-18 22:38:41', NULL),
(38, NULL, 'llll@gmail.com', '$2a$10$ti6dfbOIqq5a83V0pQklHeieUNXkqX9thpHFPmUnC3xMCcyWQc3Ua', '0676-05-04', 3436436, '', '2024-06-18 22:44:28', '2024-06-18 22:44:28', NULL),
(39, NULL, 'sssss@gmail.com', '$2a$10$j90fIpDl0/6tlAbwL31j4uFcezluk1Y5zi.lIqfqPavCBtL8PvMjO', '0999-09-09', 779778879, '', '2024-06-18 22:46:16', '2024-06-18 22:46:16', NULL),
(40, NULL, 'dd@gmail.com', '$2a$10$kVuYnWLwO257ARObIg/haO3rJIsClXfvBiv85HKtOU15o9cQ/66.O', NULL, 32222333, '', '2024-06-19 00:13:48', '2024-06-19 00:13:48', NULL),
(41, NULL, 'kk@gmail.com', '$2a$10$w6/d5NnrJcfR9WkvGXtS2u1Ii52xe20jGR0FRIV7/OMZxdH77mrxO', NULL, 43434343, '', '2024-06-19 00:18:21', '2024-06-19 00:18:21', NULL),
(42, NULL, 'vv@gmail.com', '$2a$10$WgCe8vvpAjrHAQpps8qJ2.l.WIjal1aiC3pyQHoPTPz36fDWN2MqK', NULL, 43434343, '', '2024-06-19 00:18:30', '2024-06-19 00:18:30', NULL),
(43, NULL, 'zz@gmail.com', '$2a$10$jC8i4Nnv7BLnyCxsMasbQu/OCwlnUfEnhA8IUxwAyZ0JpA9QjpuHG', '2004-05-04', 4343433, '', '2024-06-19 00:22:30', '2024-06-19 00:22:30', NULL),
(44, NULL, 's@gmail.com', '$2a$10$xBdjmseqAQ5wXAx4qwJkxuSStLAH5tRvvEwcxpzeDWL.u8RNT7B22', '0003-04-05', 42432532, '', '2024-06-19 00:38:55', '2024-06-19 00:38:55', NULL),
(45, NULL, 'l@gmail.com', '$2a$10$1t5S9oblDfxi6MIOelahCugV9MP3FmafkcTjlBqaeouhGELtoBYwu', '0043-03-23', 42342, '', '2024-06-19 00:39:27', '2024-06-19 00:39:27', NULL),
(46, NULL, 'lolloo@gmail.com', '$2a$10$NF.BrejRVjRzFrPU30a1KujYW3UNnu/6mPUXF21/pxjFfMnAu0P9i', '4343-03-04', 3122444, '', '2024-06-19 01:15:32', '2024-06-19 01:15:32', NULL),
(47, NULL, 'pp@gmail.com', '$2a$10$3NaWvzQmkpSi.Hv6Kab9bOhl8x4hCSn0CYC1GNMRf7Q8m.5RQRu0e', '4433-03-12', 32233332, '', '2024-06-19 01:36:42', '2024-06-19 01:36:42', NULL),
(48, NULL, 'email@gmail.com', '$2a$10$YzykM9mc80lIoViSbQVIZeGoEWm2J70vajXLK3.bvf/bmxAtyk/MG', '3344-02-12', 3445433, '', '2024-06-19 01:43:32', '2024-06-19 01:43:32', NULL),
(49, NULL, 'xx@gmail.com', '$2a$10$mx5MqgT/Nu50Q4gT43X4P.4v/74CFF3LllLKvZxU9qRKTmHDfSV6C', '3344-02-12', 343333444, '', '2024-06-19 01:49:54', '2024-06-19 01:49:54', NULL),
(50, NULL, 'lucas@gmail.com', '$2a$10$GOYr5isl4r4abVSDG6xCCupVMIbvkmdGjOBAWJRCJ99GN7nQha5ju', '2004-12-06', 48934567, '', '2024-06-19 23:19:11', '2024-06-19 23:19:11', NULL),
(51, NULL, 'maite@gmail.com', '$2a$10$V8dAJZp0KvnJ9w6kmJdEOur6qrq0rPubu4vYHKP.yiZzTvonNYy4y', '5055-04-03', 354335433, '', '2024-06-20 16:25:41', '2024-06-20 16:25:41', NULL),
(52, NULL, 'ppa@gmail.com', '$2a$10$6dIN4mloeQp993zDvkHFSeCABQY1EI93XZZTzez1WchAN.uZE69qC', '2323-04-24', 423423423, '', '2024-06-20 17:13:37', '2024-06-20 17:13:37', NULL),
(53, NULL, 'solcaaaaa@gmail.com', '$2a$10$2jgj7px3mkWKzd.xdknMHOP3nmQsQ0EQjo85PzQ1zS81MIjy.MbYy', '2004-06-04', 4567348, '', '2024-06-20 17:24:29', '2024-06-20 17:24:29', NULL),
(54, NULL, 'tata@gmail.com', '$2a$10$Vt5bbQd68cggqa/zBcL38eF87h6S2h7e/EVukisO2hQThDyi7zoRy', '2004-06-04', 4567348, '', '2024-06-20 17:25:17', '2024-06-20 17:25:17', NULL),
(55, NULL, 'sssssssssssssssss@gmail.com', '$2a$10$.iTkv46m3wJsgms89rPYVe8khGO780oDEg5E7OLwMA602VVs/ohhG', '2004-04-04', 3445433, '', '2024-06-20 17:29:33', '2024-06-20 17:29:33', NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_comentarios_post` (`product_id`),
  ADD KEY `fk_comentarios_usuario` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_comentarios_post` FOREIGN KEY (`product_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `fk_comentarios_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `productos_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

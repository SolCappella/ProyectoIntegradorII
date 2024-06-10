-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 10-06-2024 a las 19:49:00
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

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
  `email` varchar(100) NOT NULL,
  `contraseña` varchar(100) NOT NULL,
  `fecha` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `foto` varchar(500) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `email`, `contraseña`, `fecha`, `dni`, `foto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'john.doe@gmail.com', 'johndoe123', '1999-04-28', 41284385, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(2, 'anna.smith@gmail.com', 'password123', '1990-12-15', 50231022, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(3, 'robert.jones@gmail.com', 'password123', '1985-07-09', 70894561, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(4, 'laura.white@gmail.com', 'password123', '1993-03-21', 20415678, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL),
(5, 'david.brown@gmail.com', 'password123', '1988-11-30', 31908765, './images/products/defaultprofile.jpg', '2024-04-22 01:50:00', '2024-04-22 01:50:00', NULL);

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
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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

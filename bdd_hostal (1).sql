-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-07-2023 a las 19:41:45
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bdd_hostal`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `connection` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `queue` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `payload` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `exception` longtext COLLATE utf8mb4_unicode_ci NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_100000_create_password_resets_table', 1),
(2, '2019_08_19_000000_create_failed_jobs_table', 1),
(3, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(4, '2022_08_03_182517_create_tbl_baner_table', 1),
(5, '2022_08_03_182518_create_tbl_tipo_habitacion_table', 1),
(6, '2022_08_03_182519_create_tbl_piso_table', 1),
(7, '2022_08_03_182520_create_tbl_est_habitacion_table', 1),
(8, '2022_08_03_182521_create_tbl_habitacion_table', 1),
(9, '2022_08_03_182522_create_tbl_clientes_table', 1),
(10, '2022_08_03_182523_create_tbl_reservas_table', 1),
(11, '2022_08_03_182524_create_tbl_checkin_table', 1),
(12, '2022_08_03_182525_create_tbl_prudctos_table', 1),
(13, '2022_08_03_182526_create_tbl_cuenta_table', 1),
(14, '2022_08_03_182527_create_tbl_img_instalacion_table', 1),
(15, '2022_08_03_182528_create_tbl_instalaciones_table', 1),
(16, '2022_08_03_182529_create_tbl_insta_img_table', 1),
(17, '2022_08_03_182530_create_tbl_menu_table', 1),
(18, '2022_08_03_182531_create_tbl_rol_table', 1),
(19, '2022_08_03_182532_create_tbl_rol_menu_table', 1),
(20, '2022_08_03_182533_create_tbl_usuario_table', 1),
(21, '2023_05_03_221127_create_tbl_detalle_cuenta', 1),
(22, '2023_05_04_194043_add__i_n_s_t__p_o_r_t_a_d_a_to_tbl_instalaciones_table', 2),
(23, '2023_05_11_174816_add_tiphab_costo_to_tbl_tipo_habitacion_table', 3),
(24, '2023_05_11_181744_add_tiphab_costo_to_tbl_tipo_habitacion_table', 4),
(25, '2023_05_19_205417_create_tbl_resernias_table', 5),
(26, '2023_06_12_202526_add_det_cantidad_to_tbl_detalle_cuenta_table', 6),
(27, '2023_06_19_203026_tbl_accion', 7),
(28, '2023_06_19_203734_tbl_compra_ventas_productos', 7),
(29, '2023_06_19_205416_add_comp_vent_id_to_tbl_prudtos', 8);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(64) COLLATE utf8mb4_unicode_ci NOT NULL,
  `abilities` text COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `personal_access_tokens`
--

INSERT INTO `personal_access_tokens` (`id`, `tokenable_type`, `tokenable_id`, `name`, `token`, `abilities`, `last_used_at`, `created_at`, `updated_at`) VALUES
(55, 'App\\Models\\Usuario', 22, 'auth_token', 'ac3f3ca24ee3e367d597f4f61710f54da1082f902ae9fee0e9de28bbd1ae4f71', '[\"*\"]', '2023-07-05 22:34:58', '2023-07-05 22:23:57', '2023-07-05 22:34:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_accion`
--

CREATE TABLE `tbl_accion` (
  `ACC_ID` int(11) NOT NULL,
  `ACC_NOMBRE` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ACC_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_accion`
--

INSERT INTO `tbl_accion` (`ACC_ID`, `ACC_NOMBRE`, `ACC_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'COMPRA', 1, '2023-06-19 21:03:34', '2023-06-19 21:03:34'),
(2, 'VENTA', 1, '2023-06-19 21:03:34', '2023-06-19 21:03:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_baner`
--

CREATE TABLE `tbl_baner` (
  `BAN_ID` int(11) NOT NULL,
  `BAN_TITULO` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BAN_DESCRIPCION` varchar(150) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BAN_IMAGEN` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `BAN_ESTADO` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_checkin`
--

CREATE TABLE `tbl_checkin` (
  `CHECK_ID` int(11) NOT NULL,
  `CLI_ID` int(11) DEFAULT NULL,
  `RES_ID` int(11) DEFAULT NULL,
  `HAB_ID` int(11) DEFAULT NULL,
  `CHECK_COSTO` double(5,2) DEFAULT NULL,
  `CHECK_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_checkin`
--

INSERT INTO `tbl_checkin` (`CHECK_ID`, `CLI_ID`, `RES_ID`, `HAB_ID`, `CHECK_COSTO`, `CHECK_ESTADO`, `created_at`, `updated_at`) VALUES
(9, 1, 1, 3, 15.00, 1, '2023-06-08 23:04:47', '2023-06-08 23:04:47'),
(10, 1, 1, 4, 15.00, 1, '2023-06-08 23:04:47', '2023-06-08 23:04:47'),
(11, 1, 1, 3, 15.00, 1, '2023-06-08 23:13:25', '2023-06-08 23:13:25'),
(12, 1, 1, 4, 15.00, 1, '2023-06-08 23:13:25', '2023-06-08 23:13:25'),
(13, 1, 1, 3, 15.00, 1, '2023-06-08 23:15:43', '2023-06-08 23:15:43'),
(14, 1, 1, 4, 15.00, 1, '2023-06-08 23:15:43', '2023-06-08 23:15:43'),
(15, 1, 1, 3, 15.00, 1, '2023-06-08 23:19:15', '2023-06-08 23:19:15'),
(16, 1, 1, 4, 15.00, 1, '2023-06-08 23:19:15', '2023-06-08 23:19:15'),
(17, 1, 1, 4, 15.00, 1, '2023-06-18 04:04:52', '2023-06-18 04:04:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_clientes`
--

CREATE TABLE `tbl_clientes` (
  `CLI_ID` int(11) NOT NULL,
  `CLI_NOMBRE` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_APELLIDOS` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_NACIONALIDAD` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_IDENTIFI` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_DIRECCION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_TELEFONO` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_CORREO` varchar(75) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `CLI_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_clientes`
--

INSERT INTO `tbl_clientes` (`CLI_ID`, `CLI_NOMBRE`, `CLI_APELLIDOS`, `CLI_NACIONALIDAD`, `CLI_IDENTIFI`, `CLI_DIRECCION`, `CLI_TELEFONO`, `CLI_CORREO`, `CLI_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'Carlos', 'Andrade Carrera', 'Ecuatoriana', '1003910278', 'Ibarra', '0912345678', 'carlos@gmail.com', 1, '2023-05-11 04:46:51', '2023-05-11 04:46:51'),
(3, 'Madelyne', 'Terán Nazate', 'Ecuatoriana', '0401763891', 'Ibarra', '+593961915252', 'anymani@hotmail.es', 1, '2023-07-05 05:32:02', '2023-07-05 05:32:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_compra_ventas_producto`
--

CREATE TABLE `tbl_compra_ventas_producto` (
  `COMP_VENT_ID` int(11) NOT NULL,
  `PROD_ID` int(11) DEFAULT NULL,
  `ACC_ID` int(11) DEFAULT NULL,
  `COMP_VENT_CANTIDAD` int(11) DEFAULT NULL,
  `COMP_VENT_STOCK` int(11) DEFAULT NULL,
  `COMP_VENT_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_compra_ventas_producto`
--

INSERT INTO `tbl_compra_ventas_producto` (`COMP_VENT_ID`, `PROD_ID`, `ACC_ID`, `COMP_VENT_CANTIDAD`, `COMP_VENT_STOCK`, `COMP_VENT_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 10, 10, 0, '2023-06-22 16:59:09', '2023-06-28 02:48:10'),
(2, 2, 1, 20, 20, 0, '2023-06-22 16:59:09', '2023-06-22 16:59:09'),
(3, 5, 1, 15, 15, 0, '2023-06-22 16:59:55', '2023-06-22 16:59:55'),
(4, 6, 1, 10, 10, 1, '2023-06-22 16:59:55', '2023-06-22 16:59:55'),
(5, 7, 1, 15, 15, 0, '2023-06-22 17:00:40', '2023-06-28 03:45:18'),
(6, 5, 2, 5, 10, 0, '2023-06-22 17:02:08', '2023-06-22 17:02:08'),
(7, 5, 2, 2, 8, 0, '2023-06-22 22:15:09', '2023-06-22 22:15:09'),
(8, 5, 2, 2, 10, 0, '2023-06-22 22:17:57', '2023-06-22 22:17:57'),
(9, 5, 2, 2, 8, 0, '2023-06-22 22:18:05', '2023-06-22 22:18:05'),
(10, 2, 2, 3, 17, 1, '2023-06-22 22:18:41', '2023-06-22 22:18:41'),
(11, 5, 2, 3, 11, 0, '2023-06-23 00:20:35', '2023-06-23 00:21:55'),
(12, 5, 2, 3, 14, 0, '2023-06-23 00:21:55', '2023-06-28 03:36:05'),
(13, 8, 1, 10, 10, 0, '2023-06-23 01:06:09', '2023-06-23 02:47:44'),
(14, 8, 1, 2, 12, 0, '2023-06-23 02:47:44', '2023-06-28 02:48:10'),
(15, 1, 2, 2, 8, 1, '2023-06-28 02:48:10', '2023-06-28 02:48:10'),
(16, 8, 2, 1, 11, 0, '2023-06-28 02:48:10', '2023-06-28 03:45:18'),
(17, 5, 2, 1, 13, 1, '2023-06-28 03:36:05', '2023-06-28 03:36:05'),
(18, 8, 2, 1, 10, 1, '2023-06-28 03:45:18', '2023-06-28 03:45:18'),
(19, 7, 2, 3, 12, 1, '2023-06-28 03:45:18', '2023-06-28 03:45:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_cuenta`
--

CREATE TABLE `tbl_cuenta` (
  `CUENT_ID` int(11) NOT NULL,
  `CLI_ID` int(11) DEFAULT NULL,
  `CUENT_TOTAL` double(5,2) DEFAULT NULL,
  `CUENT_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_cuenta`
--

INSERT INTO `tbl_cuenta` (`CUENT_ID`, `CLI_ID`, `CUENT_TOTAL`, `CUENT_ESTADO`, `created_at`, `updated_at`) VALUES
(4, 1, 30.00, 1, '2023-06-08 23:04:47', '2023-06-08 23:04:47'),
(5, 1, 30.00, 1, '2023-06-08 23:10:57', '2023-06-08 23:10:57'),
(6, 1, 30.00, 1, '2023-06-08 23:12:09', '2023-06-08 23:12:09'),
(7, 1, 30.00, 1, '2023-06-08 23:13:25', '2023-06-08 23:13:25'),
(8, 1, 30.00, 1, '2023-06-08 23:15:43', '2023-06-08 23:15:43'),
(9, 1, 37.50, 1, '2023-06-08 23:19:15', '2023-06-28 03:45:18'),
(10, 1, 15.00, 1, '2023-06-18 04:04:52', '2023-06-18 04:04:52');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_detalle_cuenta`
--

CREATE TABLE `tbl_detalle_cuenta` (
  `DET_ID` int(11) NOT NULL,
  `DET_CANTIDAD` int(11) DEFAULT NULL,
  `PROD_ID` int(11) DEFAULT NULL,
  `CHECK_ID` int(11) DEFAULT NULL,
  `CUENT_ID` int(11) DEFAULT NULL,
  `DET_SUBTOTAL` double(5,2) DEFAULT NULL,
  `DET_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_detalle_cuenta`
--

INSERT INTO `tbl_detalle_cuenta` (`DET_ID`, `DET_CANTIDAD`, `PROD_ID`, `CHECK_ID`, `CUENT_ID`, `DET_SUBTOTAL`, `DET_ESTADO`, `created_at`, `updated_at`) VALUES
(1, NULL, NULL, 9, NULL, 15.00, 0, '2023-06-08 23:04:47', '2023-06-08 23:04:47'),
(2, NULL, NULL, 10, NULL, 15.00, 0, '2023-06-08 23:04:47', '2023-06-08 23:04:47'),
(3, NULL, NULL, 11, 7, 15.00, 0, '2023-06-08 23:13:25', '2023-06-08 23:13:25'),
(4, NULL, NULL, 12, 7, 15.00, 0, '2023-06-08 23:13:25', '2023-06-08 23:13:25'),
(5, NULL, NULL, 13, NULL, 15.00, 0, '2023-06-08 23:15:43', '2023-06-08 23:15:43'),
(6, NULL, NULL, 14, NULL, 15.00, 0, '2023-06-08 23:15:43', '2023-06-08 23:15:43'),
(7, 1, NULL, 15, 9, 15.00, 1, '2023-06-08 23:19:15', '2023-06-08 23:19:15'),
(8, 1, NULL, 16, 9, 15.00, 1, '2023-06-08 23:19:15', '2023-06-08 23:19:15'),
(9, 1, 1, NULL, 9, 1.25, 1, '2023-06-12 21:02:12', '2023-06-12 21:02:12'),
(10, NULL, NULL, 17, 10, 15.00, 1, '2023-06-18 04:04:52', '2023-06-18 04:04:52'),
(11, NULL, 1, NULL, 9, 2.50, 1, '2023-06-28 02:48:10', '2023-06-28 02:48:10'),
(12, NULL, 8, NULL, 9, 0.50, 1, '2023-06-28 02:48:10', '2023-06-28 02:48:10'),
(13, NULL, 5, NULL, 9, 1.00, 1, '2023-06-28 03:36:05', '2023-06-28 03:36:05'),
(14, NULL, 7, NULL, 9, 2.25, 1, '2023-06-28 03:45:18', '2023-06-28 03:45:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_est_habitacion`
--

CREATE TABLE `tbl_est_habitacion` (
  `ESTHAB_ID` int(11) NOT NULL,
  `ESTHAB_NOMBRE` varchar(25) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ESTHAB_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_est_habitacion`
--

INSERT INTO `tbl_est_habitacion` (`ESTHAB_ID`, `ESTHAB_NOMBRE`, `ESTHAB_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'LIBRE', 1, '2023-05-03 23:57:18', '2023-05-03 23:57:18'),
(2, 'OCUPADO', 1, '2023-05-03 23:57:18', '2023-05-03 23:57:18'),
(3, 'LIMPIEZA', 1, '2023-05-03 23:57:18', '2023-05-03 23:57:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_habitacion`
--

CREATE TABLE `tbl_habitacion` (
  `HAB_ID` int(11) NOT NULL,
  `PISO_ID` int(11) DEFAULT NULL,
  `TIPHAB_ID` int(11) DEFAULT NULL,
  `ESTHAB_ID` int(11) DEFAULT NULL,
  `HAB_NOMBRE` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `HAB_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_habitacion`
--

INSERT INTO `tbl_habitacion` (`HAB_ID`, `PISO_ID`, `TIPHAB_ID`, `ESTHAB_ID`, `HAB_NOMBRE`, `HAB_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 1, 'HABITACIÓN 1', 1, '2023-05-04 00:22:54', '2023-05-04 00:22:54'),
(2, 1, 3, 1, 'HABITACIÓN 2', 1, '2023-05-04 00:22:54', '2023-05-04 00:22:54'),
(3, 1, 1, 2, 'HABITACIÓN 3', 1, '2023-05-04 01:12:05', '2023-06-08 23:19:15'),
(4, 1, 1, 2, 'HABITACIÓN 4', 1, '2023-05-04 01:12:05', '2023-06-18 04:04:52'),
(5, 1, 1, 1, 'HABITACIÓN 5', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(6, 1, 1, 1, 'HABITACIÓN 6', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(7, 1, 1, 1, 'HABITACIÓN 7', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(8, 1, 1, 1, 'HABITACIÓN 8', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(9, 1, 1, 1, 'HABITACIÓN 9', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(10, 1, 1, 1, 'HABITACIÓN 10', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(11, 1, 1, 1, 'HABITACIÓN 11', 1, '2023-05-04 01:12:05', '2023-05-04 01:12:05'),
(12, 2, 3, 1, 'HABITACIÓN 12', 1, '2023-05-04 01:21:32', '2023-05-04 01:21:32'),
(13, 2, 2, 1, 'HABITACIÓN 13', 1, '2023-05-04 01:21:32', '2023-05-04 01:21:33'),
(14, 2, 2, 1, 'HABITACIÓN 14', 1, '2023-05-04 01:21:33', '2023-05-04 01:21:33'),
(15, 2, 2, 1, 'HABITACIÓN 15', 1, '2023-05-04 01:21:33', '2023-05-04 01:21:33'),
(16, 2, 2, 1, 'HABITACIÓN 16', 1, '2023-05-04 01:21:33', '2023-05-04 01:21:33'),
(17, 2, 2, 1, 'HABITACIÓN 17', 1, '2023-05-04 01:26:44', '2023-05-04 01:26:44'),
(18, 2, 1, 1, 'HABITACIÓN 18', 1, '2023-05-04 01:21:33', '2023-05-04 01:21:33'),
(19, 2, 1, 1, 'HABITACIÓN 19', 1, '2023-05-04 01:26:44', '2023-05-04 01:26:44'),
(20, 2, 1, 1, 'HABITACIÓN 20', 1, '2023-05-04 01:21:32', '2023-05-04 01:21:33'),
(21, 2, 1, 1, 'HABITACIÓN 21', 1, '2023-05-04 01:29:34', '2023-05-04 01:29:34'),
(22, 2, 1, 1, 'HABITACIÓN 22', 1, '2023-05-04 01:29:34', '2023-05-04 01:29:34'),
(23, 2, 1, 1, 'HABITACIÓN 23', 1, '2023-05-04 01:29:34', '2023-05-04 01:29:34'),
(24, 2, 1, 1, 'HABITACIÓN 24', 1, '2023-05-04 01:29:34', '2023-05-04 01:29:34'),
(25, 3, 4, 1, 'HABITACIÓN 25', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(26, 3, 4, 1, 'HABITACIÓN 26', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(27, 3, 4, 1, 'HABITACIÓN 27', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(28, 3, 4, 1, 'HABITACIÓN 28', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(29, 3, 4, 1, 'HABITACIÓN 29', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(30, 3, 4, 1, 'HABITACIÓN 30', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(31, 3, 4, 1, 'HABITACIÓN 31', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(32, 3, 4, 1, 'HABITACIÓN 32', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(33, 3, 4, 1, 'HABITACIÓN 33', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(34, 3, 4, 1, 'HABITACIÓN 34', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(35, 3, 4, 1, 'HABITACIÓN 35', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(36, 3, 4, 1, 'HABITACIÓN 36', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18'),
(37, 3, 4, 1, 'HABITACIÓN 37', 1, '2023-05-04 01:33:18', '2023-05-04 01:33:18');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_img_instalacion`
--

CREATE TABLE `tbl_img_instalacion` (
  `IMG_ID` int(11) NOT NULL,
  `IMG_NOMBRE` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMG_URL` varchar(500) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `IMG_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_img_instalacion`
--

INSERT INTO `tbl_img_instalacion` (`IMG_ID`, `IMG_NOMBRE`, `IMG_URL`, `IMG_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'ENTRADA PRINCIPAL-VISTA IZQUIERDA', 'https://live.staticflickr.com/65535/52844810767_09ffde05a4.jpg', 1, '2023-05-04 02:39:38', '2023-05-04 02:39:38'),
(2, 'ENTRADA PRINCIPAL-VISTA CENTRO', 'https://live.staticflickr.com/65535/52845843998_147212e0b8.jpg', 1, '2023-05-04 02:39:38', '2023-05-04 02:39:38'),
(3, 'ENTRADA PRINCIPAL-VISTA DERECHA', 'https://live.staticflickr.com/65535/52845787180_77b7f160a2.jpg\r\n', 1, '2023-05-04 02:43:21', '2023-05-04 02:43:21'),
(4, 'ENTRADA PRINCIPAL-VENTANAL', 'https://live.staticflickr.com/65535/52845583114_8dd7935db5.jpg\r\n', 1, '2023-05-04 02:43:21', '2023-05-04 02:43:21'),
(5, 'HABITACIÓN MATRIMONIAL-VISTA IZQUIERDA', 'https://live.staticflickr.com/65535/52861596277_212dc1540d.jpg\n', 1, '2023-05-04 02:45:22', '2023-05-04 02:45:22'),
(6, 'HABITACIÓN MATRIMONIAL-VISTA CENTRO', 'https://live.staticflickr.com/65535/52862564460_7fd39a3ae7.jpg\r\n', 1, '2023-05-04 02:45:22', '2023-05-04 02:45:22'),
(7, 'HABITACIÓN MATRIMONIAL-VISTA DERECHA', 'https://live.staticflickr.com/65535/52862173431_366cba285d.jpg', 1, '2023-05-04 02:45:22', '2023-05-04 02:45:22'),
(8, 'HABITACIÓN DOBLE-VISTA IZQUIERDA ROJA', 'https://live.staticflickr.com/65535/52845573089_491aceb796.jpg\n', 1, '2023-05-04 02:48:00', '2023-05-04 02:48:00'),
(9, 'HABITACIÓN DOBLE-VISTA DERECHA ROJA', 'https://live.staticflickr.com/65535/52845777325_8011c8688c.jpg\r\n', 1, '2023-05-04 02:48:00', '2023-05-04 02:48:00'),
(10, 'HABITACIÓN DOBLE-VISTA CENTRO ROJA', 'https://live.staticflickr.com/65535/52844801127_8b99c47fa9.jpg\r\n', 1, '2023-05-04 02:48:00', '2023-05-04 02:48:00'),
(11, 'HABITACIÓN DOBLE-VISTA IZQUIERDA  AMARILLA', 'https://live.staticflickr.com/65535/52845833903_ecc7be4d83.jpg\r\n', 1, '2023-05-04 02:48:00', '2023-05-04 02:48:00'),
(12, 'HABITACIÓN DOBLE-VISTA DERECHA AMARILLA', 'https://live.staticflickr.com/65535/52845572954_df01194be7.jpg\r\n', 1, '2023-05-04 02:48:00', '2023-05-04 02:48:00'),
(13, 'HABITACIÓN TRIPLE-VISTA IZQUIERDA', 'https://live.staticflickr.com/65535/52845837828_60095c3bdd.jpg', 1, '2023-05-04 02:51:17', '2023-05-04 02:51:17'),
(14, 'HABITACIÓN TRIPLE-VISTA DERECHA', 'https://live.staticflickr.com/65535/52845576834_7da2dd126d.jpg', 1, '2023-05-04 02:51:17', '2023-05-04 02:51:17'),
(15, 'HABITACIÓN TRIPLE-VISTA DERECHA ABAJO', 'https://live.staticflickr.com/65535/52845837898_f930e99f3a.jpg', 1, '2023-05-04 02:51:17', '2023-05-04 02:51:17'),
(16, 'HABITACIÓN TRIPLE-VISTA CENTRO', 'https://live.staticflickr.com/65535/52844804787_8cdcfbf478.jpg', 1, '2023-05-04 02:51:17', '2023-05-04 02:51:17'),
(17, 'HABITACIÓN MATRIMONIAL 3P-VISTA CENTRO', 'https://live.staticflickr.com/65535/52845371706_2b005ea8be.jpg', 1, '2023-05-04 02:54:08', '2023-05-04 02:54:08'),
(18, 'HABITACIÓN MATRIMONIAL 3P-VISTA CENTRO ARRIBA', 'https://live.staticflickr.com/65535/52844791767_19a43e583b.jpg\r\n', 1, '2023-05-04 02:54:08', '2023-05-04 02:54:08'),
(19, 'HABITACIÓN MATRIMONIAL 3P-VISTA IZQUIERDA', 'https://live.staticflickr.com/65535/52845371551_98424e6bf7.jpg\r\n', 1, '2023-05-04 02:54:08', '2023-05-04 02:54:08'),
(20, 'HABITACIÓN MATRIMONIAL 3P-VISTA DERECHA', 'https://live.staticflickr.com/65535/52844791532_ff6a52db74.jpg\n', 1, '2023-05-04 02:54:08', '2023-05-04 02:54:08'),
(21, 'HABITACIÓN MATRIMONIAL 3P-VISTA IZQUIERDA ABAJO', 'https://live.staticflickr.com/65535/52845824663_14214b0d4a.jpg', 1, '2023-05-04 02:54:08', '2023-05-04 02:54:08'),
(22, 'PASILLO PRINCIPAL', 'https://live.staticflickr.com/65535/52845401321_2360f31283.jpg', 1, '2023-05-04 02:59:29', '2023-05-04 02:59:29'),
(23, 'PASILLO SEGUNDO PISO', 'https://live.staticflickr.com/65535/52845792055_431fff592d.jpg', 1, '2023-05-04 02:59:29', '2023-05-04 02:59:29'),
(24, 'LIVING ROOM', 'https://live.staticflickr.com/65535/52845395331_c625279e90.jpg', 1, '2023-05-04 02:59:29', '2023-05-04 02:59:29'),
(25, 'RECEPCIÓN', 'https://live.staticflickr.com/65535/52844815652_3119d31136.jpg\n', 1, '2023-05-04 02:59:29', '2023-05-04 02:59:29'),
(26, 'COCINA COMEDOR', 'https://live.staticflickr.com/65535/52845395341_7e1b02f036.jpg', 1, '2023-05-04 02:59:29', '2023-05-04 02:59:29');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_instalaciones`
--

CREATE TABLE `tbl_instalaciones` (
  `INST_ID` int(11) NOT NULL,
  `INST_NOMBRE` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `INST_DESCIPCION` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `INST_PORTADA` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `INST_NPERSONAS` int(11) DEFAULT NULL,
  `INST_PRECIOPERSONA` double(5,2) DEFAULT NULL,
  `INST_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_instalaciones`
--

INSERT INTO `tbl_instalaciones` (`INST_ID`, `INST_NOMBRE`, `INST_DESCIPCION`, `INST_PORTADA`, `INST_NPERSONAS`, `INST_PRECIOPERSONA`, `INST_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'HABITACIÓN MATRIMONIAL', '✔ Una cama matrimonial, máximo 2 personas.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable.\r\n✔ Red WIFI gratis.\r\n✔ Parqueadero.', 'https://live.staticflickr.com/65535/52861596277_212dc1540d.jpg', 2, 15.00, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58'),
(2, 'HABITACIÓN DOBLE ', '✔ Dos camas, máximo 4 personas.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.\r\n✔ Parqueadero.', 'https://live.staticflickr.com/65535/52845573089_491aceb796.jpg', 4, 15.00, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58'),
(3, 'HABITACIÓN TRIPLE', '✔ Tres camas, máximo 6 personas.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.\r\n✔ Parqueadero.', 'https://live.staticflickr.com/65535/52845837828_60095c3bdd.jpg', 6, 15.00, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58'),
(4, 'HABITACIÓN MATRIMONIAL- 3P', '✔ Una cama matrimonial, máximo 2 personas.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.\r\n✔ Parqueadero.\r\n✔ Nuevas ', 'https://live.staticflickr.com/65535/52844791532_ff6a52db74.jpg', 2, 20.00, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58'),
(5, 'BIENVENIDOS', '✔ Vista de nuestra hermosa fachada', 'https://live.staticflickr.com/65535/52845843998_147212e0b8.jpg', NULL, NULL, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58'),
(6, 'ZONAS COMUNES', '✔ Zona de desayuno.\r\n✔ Pasillos interiores.\r\n✔ Livingroom.', 'https://live.staticflickr.com/65535/52844815652_3119d31136.jpg', NULL, NULL, 1, '2023-05-04 01:41:58', '2023-05-04 01:41:58');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_insta_img`
--

CREATE TABLE `tbl_insta_img` (
  `IMG_ID` int(11) DEFAULT NULL,
  `INST_ID` int(11) DEFAULT NULL,
  `INST_IMG_ID` int(11) NOT NULL,
  `INST_IMG_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_insta_img`
--

INSERT INTO `tbl_insta_img` (`IMG_ID`, `INST_ID`, `INST_IMG_ID`, `INST_IMG_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 5, 1, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(2, 5, 2, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(3, 5, 3, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(4, 5, 4, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(5, 1, 5, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(6, 1, 6, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(7, 1, 7, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(8, 2, 8, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(9, 2, 9, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(10, 2, 10, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(11, 2, 11, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(12, 2, 12, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(13, 3, 13, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(14, 3, 14, 1, '2023-05-04 03:02:36', '2023-05-04 03:02:36'),
(15, 3, 15, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(16, 3, 16, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(17, 4, 17, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(18, 4, 18, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(19, 4, 19, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(20, 4, 20, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(21, 4, 21, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(22, 6, 22, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(23, 6, 23, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(24, 6, 24, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(25, 6, 25, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50'),
(26, 6, 26, 1, '2023-05-04 03:07:50', '2023-05-04 03:07:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_menu`
--

CREATE TABLE `tbl_menu` (
  `MENU_ID` int(11) NOT NULL,
  `MENU_NOMBRE` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MENU_ICONO` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MENU_ENLACE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `MENU_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_menu`
--

INSERT INTO `tbl_menu` (`MENU_ID`, `MENU_NOMBRE`, `MENU_ICONO`, `MENU_ENLACE`, `MENU_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'Inicio', 'home', '/administracion', 1, NULL, NULL),
(2, 'Reservaciones', 'event_note', '/reservaciones', 1, NULL, NULL),
(3, 'Registros', 'bookmark_border', '/checkin', 1, NULL, NULL),
(4, 'Salida', 'credit_card', '/checkoutcobros', 1, NULL, NULL),
(5, 'Habitaciones', 'hotel', '/habitaciones', 1, NULL, NULL),
(6, 'Perfil', 'person_outline', '/perfil', 1, NULL, NULL),
(7, 'Vender/Productos', 'add_shopping_cart', '/ventas', 1, NULL, NULL),
(8, 'Usuarios', 'people_outline', '/usuarios', 1, NULL, NULL),
(9, 'Reportes', 'list', '/reportes', 1, NULL, NULL),
(10, 'Compra/Productos', 'note_add', '/productos', 1, '2023-07-05 00:57:41', '2023-07-05 00:57:41');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_piso`
--

CREATE TABLE `tbl_piso` (
  `PISO_ID` int(11) NOT NULL,
  `PISO_NUMERO` varchar(20) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PISO_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_piso`
--

INSERT INTO `tbl_piso` (`PISO_ID`, `PISO_NUMERO`, `PISO_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'PISO 1', 1, '2023-05-03 23:58:35', '2023-05-03 23:58:35'),
(2, 'PISO 2', 1, '2023-05-03 23:58:54', '2023-05-03 23:58:54'),
(3, 'PISO 3', 1, '2023-05-03 23:58:54', '2023-05-03 23:58:54');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_prudctos`
--

CREATE TABLE `tbl_prudctos` (
  `PROD_ID` int(11) NOT NULL,
  `PROD_NOMBRE` varchar(40) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `PROD_PRECIO` double(5,2) DEFAULT NULL,
  `COMP_VENT_ID` int(11) DEFAULT NULL,
  `PROD_CANTIDAD` int(11) DEFAULT NULL,
  `PROD_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_prudctos`
--

INSERT INTO `tbl_prudctos` (`PROD_ID`, `PROD_NOMBRE`, `PROD_PRECIO`, `COMP_VENT_ID`, `PROD_CANTIDAD`, `PROD_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'GATORADE', 1.25, NULL, 10, 1, '2023-06-12 16:45:48', '2023-06-12 16:45:48'),
(2, 'SHAMPOO SACHET', 0.35, NULL, 20, 1, '2023-06-12 16:45:48', '2023-06-15 23:21:33'),
(5, 'AGUA CIELO 1LT', 1.00, NULL, 15, 1, '2023-06-14 21:59:26', '2023-06-14 21:59:26'),
(6, 'V220', 1.25, NULL, 10, 1, '2023-06-14 22:22:25', '2023-06-16 23:18:05'),
(7, 'GASEOSA 500 ML', 0.75, NULL, 15, 1, '2023-06-15 22:10:46', '2023-06-15 23:26:14'),
(8, 'JABÓN', 0.50, NULL, 10, 1, '2023-06-23 01:06:09', '2023-06-23 01:06:09');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_resenias`
--

CREATE TABLE `tbl_resenias` (
  `RES_ID` int(11) NOT NULL,
  `RES_NOMBRE` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RES_APELLIDOS` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RES_CORREO` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RES_TEXTO` varchar(1024) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RES_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_resenias`
--

INSERT INTO `tbl_resenias` (`RES_ID`, `RES_NOMBRE`, `RES_APELLIDOS`, `RES_CORREO`, `RES_TEXTO`, `RES_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'Santiago', 'Andrade Carrera', 'tiago.andradenacho@hotmail.com', 'Excelentes instalaciones y buen servicio', 1, '2023-06-06 01:34:52', '2023-06-06 01:34:52'),
(2, 'Luis', 'Zambrano Alvarez', 'alvarez@gmail.com', 'Excelentes instalaciones y buen servicio', 0, '2023-06-06 01:40:06', '2023-06-06 01:40:30');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_reservas`
--

CREATE TABLE `tbl_reservas` (
  `RES_ID` int(11) NOT NULL,
  `CLI_ID` int(11) DEFAULT NULL,
  `RES_DIA` int(11) DEFAULT NULL,
  `RES_MES` int(11) DEFAULT NULL,
  `RES_ANO` int(11) DEFAULT NULL,
  `RES_NDIAS` int(11) DEFAULT NULL,
  `RES_NPERSONAS` int(11) DEFAULT NULL,
  `RES_VEHICULO` int(11) DEFAULT NULL,
  `RES_OBSERVACION` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `RES_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_reservas`
--

INSERT INTO `tbl_reservas` (`RES_ID`, `CLI_ID`, `RES_DIA`, `RES_MES`, `RES_ANO`, `RES_NDIAS`, `RES_NPERSONAS`, `RES_VEHICULO`, `RES_OBSERVACION`, `RES_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 1, 20, 5, 2023, 5, 2, 0, 'Ninguna', 0, '2023-05-11 04:46:51', '2023-06-18 04:04:52'),
(3, 3, 4, 8, 2023, 3, 2, 0, 'Ninguna', 1, '2023-07-05 05:32:02', '2023-07-05 05:32:02');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_rol`
--

CREATE TABLE `tbl_rol` (
  `ROL_ID` int(11) NOT NULL,
  `ROL_NOMBRE` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `ROL_ESTADO` varchar(1) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_rol`
--

INSERT INTO `tbl_rol` (`ROL_ID`, `ROL_NOMBRE`, `ROL_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'Administrador', '1', NULL, NULL),
(2, 'Recepcion', '1', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_rol_menu`
--

CREATE TABLE `tbl_rol_menu` (
  `ROL_MEN_ID` int(11) NOT NULL,
  `ROL_ID` int(11) DEFAULT NULL,
  `MENU_ID` int(11) DEFAULT NULL,
  `ROL_MEN_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_rol_menu`
--

INSERT INTO `tbl_rol_menu` (`ROL_MEN_ID`, `ROL_ID`, `MENU_ID`, `ROL_MEN_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 1, 1, 1, NULL, NULL),
(2, 2, 1, 1, NULL, NULL),
(3, 1, 8, 1, NULL, NULL),
(4, 1, 9, 1, NULL, NULL),
(5, 1, 5, 1, NULL, NULL),
(6, 1, 2, 1, NULL, NULL),
(7, 2, 3, 1, NULL, NULL),
(8, 2, 4, 1, NULL, NULL),
(9, 2, 2, 1, NULL, NULL),
(10, 2, 5, 1, NULL, NULL),
(11, 2, 6, 1, NULL, NULL),
(12, 2, 7, 1, NULL, NULL),
(13, 1, 6, 1, NULL, NULL),
(14, 1, 10, 1, '2023-07-05 00:58:46', '2023-07-05 00:58:46');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_tipo_habitacion`
--

CREATE TABLE `tbl_tipo_habitacion` (
  `TIPHAB_ID` int(11) NOT NULL,
  `TIPHAB_NOMBRE` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TIPHAB_DESCRIPCION` varchar(200) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `TIPHAB_COSTO` double(5,2) DEFAULT NULL,
  `TIPHAB_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_tipo_habitacion`
--

INSERT INTO `tbl_tipo_habitacion` (`TIPHAB_ID`, `TIPHAB_NOMBRE`, `TIPHAB_DESCRIPCION`, `TIPHAB_COSTO`, `TIPHAB_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 'HABITACIÓN MATRIMONIAL ', '✔ Una cama matrimonial.\n✔ Baño privado.\n✔ Agua caliente.\n✔ Televisión por cable. \n✔ Red WIFI gratis.', 15.00, 1, '2023-05-04 00:04:04', '2023-05-04 00:04:04'),
(2, 'HABITACIÓN DOBLE', '✔ Dos camas.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.', 15.00, 1, '2023-05-04 00:04:04', '2023-05-04 00:04:04'),
(3, 'HABITACION TRIPLE', '✔ Tres camas para.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.', 15.00, 1, '2023-05-04 00:04:04', '2023-05-04 00:04:04'),
(4, 'HABITACIÓN MATRIMONIAL-3P', '✔ Una cama matrimonial.\r\n✔ Hospedaje en el tercer piso.\r\n✔ Baño privado.\r\n✔ Agua caliente.\r\n✔ Televisión por cable. \r\n✔ Red WIFI gratis.', 20.00, 1, '2023-05-11 17:43:42', '2023-05-11 17:43:42');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `USU_ID` int(11) NOT NULL,
  `ROL_ID` int(11) DEFAULT NULL,
  `USU_NOMBRE` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_APELLIDO` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_CORREO` varchar(50) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_USUARIO` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_CLAVE` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_IMAGEN` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `USU_ESTADO` int(11) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`USU_ID`, `ROL_ID`, `USU_NOMBRE`, `USU_APELLIDO`, `USU_CORREO`, `USU_USUARIO`, `USU_CLAVE`, `USU_IMAGEN`, `USU_ESTADO`, `created_at`, `updated_at`) VALUES
(1, 1, 'Juan', 'Tapia', 'jtapia1@gmail.com', 'jtapia1', '$2y$10$xsbDan19v6dtGcn0ZonBKeaO6rT27bgB9Ez6rzx5QM/cEHllgN1Dm', 'C:\\fakepath\\foto-perfil-5.webp', 1, '2023-05-10 04:35:23', '2023-05-10 04:44:14'),
(2, 2, 'Ana', 'Toledo', 'toledo_ana@hotmail.com', 'atoledo', '$2y$10$p2pelpjLXQMW.JQsy3ub1uT9VIerV1tBGIL1sZ/44Bzi1ShcXv3tK', 'C:\\fakepath\\perfil-resilencia.jpg', 0, '2023-05-10 04:36:49', '2023-05-10 04:46:28'),
(3, 1, 'Santiago', 'Andrade Carrera', 'tiago.andradenacho@hotmail.com', 'siandrade1', '$2y$10$ZkdfU7ucbTj7QyaBmqWFLOGDrTVRQjORmnfo1prumNYmHsO8vDrNy', 'C:\\fakepath\\img003.jpg', 1, '2023-07-01 21:58:59', '2023-07-01 21:58:59'),
(22, 2, 'Iván', 'Andrade Carrera', 'streakgraff96@gmail.com', 'iandrade', '$2y$10$YoWJ0qpqnjnVvSTZBJK9r.8V.zRbPxNo3KJLgTQuriD/H05QoWr1.', 'C:\\fakepath\\example_small.png', 1, '2023-07-05 04:25:39', '2023-07-05 04:25:39');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `tbl_accion`
--
ALTER TABLE `tbl_accion`
  ADD PRIMARY KEY (`ACC_ID`);

--
-- Indices de la tabla `tbl_baner`
--
ALTER TABLE `tbl_baner`
  ADD PRIMARY KEY (`BAN_ID`);

--
-- Indices de la tabla `tbl_checkin`
--
ALTER TABLE `tbl_checkin`
  ADD PRIMARY KEY (`CHECK_ID`),
  ADD KEY `FK_REFERENCE_12` (`HAB_ID`),
  ADD KEY `FK_REFERENCE_13` (`CLI_ID`),
  ADD KEY `FK_REFERENCE_15` (`RES_ID`);

--
-- Indices de la tabla `tbl_clientes`
--
ALTER TABLE `tbl_clientes`
  ADD PRIMARY KEY (`CLI_ID`);

--
-- Indices de la tabla `tbl_compra_ventas_producto`
--
ALTER TABLE `tbl_compra_ventas_producto`
  ADD PRIMARY KEY (`COMP_VENT_ID`),
  ADD KEY `FK_REFERENCE_22` (`PROD_ID`),
  ADD KEY `FK_REFERENCE_23` (`ACC_ID`);

--
-- Indices de la tabla `tbl_cuenta`
--
ALTER TABLE `tbl_cuenta`
  ADD PRIMARY KEY (`CUENT_ID`),
  ADD KEY `FK_REFERENCE_10` (`CLI_ID`);

--
-- Indices de la tabla `tbl_detalle_cuenta`
--
ALTER TABLE `tbl_detalle_cuenta`
  ADD PRIMARY KEY (`DET_ID`),
  ADD KEY `FK_REFERENCE_11` (`PROD_ID`),
  ADD KEY `FK_REFERENCE_14` (`CHECK_ID`),
  ADD KEY `FK_REFERENCE_21` (`CUENT_ID`);

--
-- Indices de la tabla `tbl_est_habitacion`
--
ALTER TABLE `tbl_est_habitacion`
  ADD PRIMARY KEY (`ESTHAB_ID`);

--
-- Indices de la tabla `tbl_habitacion`
--
ALTER TABLE `tbl_habitacion`
  ADD PRIMARY KEY (`HAB_ID`),
  ADD KEY `FK_REFERENCE_6` (`TIPHAB_ID`),
  ADD KEY `FK_REFERENCE_7` (`PISO_ID`),
  ADD KEY `FK_REFERENCE_8` (`ESTHAB_ID`);

--
-- Indices de la tabla `tbl_img_instalacion`
--
ALTER TABLE `tbl_img_instalacion`
  ADD PRIMARY KEY (`IMG_ID`);

--
-- Indices de la tabla `tbl_instalaciones`
--
ALTER TABLE `tbl_instalaciones`
  ADD PRIMARY KEY (`INST_ID`);

--
-- Indices de la tabla `tbl_insta_img`
--
ALTER TABLE `tbl_insta_img`
  ADD PRIMARY KEY (`INST_IMG_ID`),
  ADD KEY `FK_REFERENCE_16` (`IMG_ID`),
  ADD KEY `FK_REFERENCE_17` (`INST_ID`);

--
-- Indices de la tabla `tbl_menu`
--
ALTER TABLE `tbl_menu`
  ADD PRIMARY KEY (`MENU_ID`);

--
-- Indices de la tabla `tbl_piso`
--
ALTER TABLE `tbl_piso`
  ADD PRIMARY KEY (`PISO_ID`);

--
-- Indices de la tabla `tbl_prudctos`
--
ALTER TABLE `tbl_prudctos`
  ADD PRIMARY KEY (`PROD_ID`),
  ADD KEY `FK_REFERENCE_25` (`COMP_VENT_ID`);

--
-- Indices de la tabla `tbl_resenias`
--
ALTER TABLE `tbl_resenias`
  ADD PRIMARY KEY (`RES_ID`);

--
-- Indices de la tabla `tbl_reservas`
--
ALTER TABLE `tbl_reservas`
  ADD PRIMARY KEY (`RES_ID`),
  ADD KEY `FK_REFERENCE_9` (`CLI_ID`);

--
-- Indices de la tabla `tbl_rol`
--
ALTER TABLE `tbl_rol`
  ADD PRIMARY KEY (`ROL_ID`);

--
-- Indices de la tabla `tbl_rol_menu`
--
ALTER TABLE `tbl_rol_menu`
  ADD PRIMARY KEY (`ROL_MEN_ID`),
  ADD KEY `FK_REFERENCE_18` (`ROL_ID`),
  ADD KEY `FK_REFERENCE_19` (`MENU_ID`);

--
-- Indices de la tabla `tbl_tipo_habitacion`
--
ALTER TABLE `tbl_tipo_habitacion`
  ADD PRIMARY KEY (`TIPHAB_ID`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`USU_ID`),
  ADD KEY `FK_REFERENCE_1` (`ROL_ID`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=56;

--
-- AUTO_INCREMENT de la tabla `tbl_accion`
--
ALTER TABLE `tbl_accion`
  MODIFY `ACC_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_baner`
--
ALTER TABLE `tbl_baner`
  MODIFY `BAN_ID` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `tbl_checkin`
--
ALTER TABLE `tbl_checkin`
  MODIFY `CHECK_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tbl_clientes`
--
ALTER TABLE `tbl_clientes`
  MODIFY `CLI_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_compra_ventas_producto`
--
ALTER TABLE `tbl_compra_ventas_producto`
  MODIFY `COMP_VENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `tbl_cuenta`
--
ALTER TABLE `tbl_cuenta`
  MODIFY `CUENT_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tbl_detalle_cuenta`
--
ALTER TABLE `tbl_detalle_cuenta`
  MODIFY `DET_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tbl_est_habitacion`
--
ALTER TABLE `tbl_est_habitacion`
  MODIFY `ESTHAB_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_habitacion`
--
ALTER TABLE `tbl_habitacion`
  MODIFY `HAB_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT de la tabla `tbl_img_instalacion`
--
ALTER TABLE `tbl_img_instalacion`
  MODIFY `IMG_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `tbl_instalaciones`
--
ALTER TABLE `tbl_instalaciones`
  MODIFY `INST_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tbl_insta_img`
--
ALTER TABLE `tbl_insta_img`
  MODIFY `INST_IMG_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `tbl_menu`
--
ALTER TABLE `tbl_menu`
  MODIFY `MENU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tbl_piso`
--
ALTER TABLE `tbl_piso`
  MODIFY `PISO_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_prudctos`
--
ALTER TABLE `tbl_prudctos`
  MODIFY `PROD_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de la tabla `tbl_resenias`
--
ALTER TABLE `tbl_resenias`
  MODIFY `RES_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_reservas`
--
ALTER TABLE `tbl_reservas`
  MODIFY `RES_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_rol`
--
ALTER TABLE `tbl_rol`
  MODIFY `ROL_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_rol_menu`
--
ALTER TABLE `tbl_rol_menu`
  MODIFY `ROL_MEN_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `tbl_tipo_habitacion`
--
ALTER TABLE `tbl_tipo_habitacion`
  MODIFY `TIPHAB_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `USU_ID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_checkin`
--
ALTER TABLE `tbl_checkin`
  ADD CONSTRAINT `FK_REFERENCE_12` FOREIGN KEY (`HAB_ID`) REFERENCES `tbl_habitacion` (`HAB_ID`),
  ADD CONSTRAINT `FK_REFERENCE_13` FOREIGN KEY (`CLI_ID`) REFERENCES `tbl_clientes` (`CLI_ID`),
  ADD CONSTRAINT `FK_REFERENCE_15` FOREIGN KEY (`RES_ID`) REFERENCES `tbl_reservas` (`RES_ID`);

--
-- Filtros para la tabla `tbl_compra_ventas_producto`
--
ALTER TABLE `tbl_compra_ventas_producto`
  ADD CONSTRAINT `FK_REFERENCE_22` FOREIGN KEY (`PROD_ID`) REFERENCES `tbl_prudctos` (`PROD_ID`),
  ADD CONSTRAINT `FK_REFERENCE_23` FOREIGN KEY (`ACC_ID`) REFERENCES `tbl_accion` (`ACC_ID`);

--
-- Filtros para la tabla `tbl_cuenta`
--
ALTER TABLE `tbl_cuenta`
  ADD CONSTRAINT `FK_REFERENCE_10` FOREIGN KEY (`CLI_ID`) REFERENCES `tbl_clientes` (`CLI_ID`);

--
-- Filtros para la tabla `tbl_detalle_cuenta`
--
ALTER TABLE `tbl_detalle_cuenta`
  ADD CONSTRAINT `FK_REFERENCE_11` FOREIGN KEY (`PROD_ID`) REFERENCES `tbl_prudctos` (`PROD_ID`),
  ADD CONSTRAINT `FK_REFERENCE_14` FOREIGN KEY (`CHECK_ID`) REFERENCES `tbl_checkin` (`CHECK_ID`),
  ADD CONSTRAINT `FK_REFERENCE_21` FOREIGN KEY (`CUENT_ID`) REFERENCES `tbl_cuenta` (`CUENT_ID`);

--
-- Filtros para la tabla `tbl_habitacion`
--
ALTER TABLE `tbl_habitacion`
  ADD CONSTRAINT `FK_REFERENCE_6` FOREIGN KEY (`TIPHAB_ID`) REFERENCES `tbl_tipo_habitacion` (`TIPHAB_ID`),
  ADD CONSTRAINT `FK_REFERENCE_7` FOREIGN KEY (`PISO_ID`) REFERENCES `tbl_piso` (`PISO_ID`),
  ADD CONSTRAINT `FK_REFERENCE_8` FOREIGN KEY (`ESTHAB_ID`) REFERENCES `tbl_est_habitacion` (`ESTHAB_ID`);

--
-- Filtros para la tabla `tbl_insta_img`
--
ALTER TABLE `tbl_insta_img`
  ADD CONSTRAINT `FK_REFERENCE_16` FOREIGN KEY (`IMG_ID`) REFERENCES `tbl_img_instalacion` (`IMG_ID`),
  ADD CONSTRAINT `FK_REFERENCE_17` FOREIGN KEY (`INST_ID`) REFERENCES `tbl_instalaciones` (`INST_ID`);

--
-- Filtros para la tabla `tbl_prudctos`
--
ALTER TABLE `tbl_prudctos`
  ADD CONSTRAINT `FK_REFERENCE_25` FOREIGN KEY (`COMP_VENT_ID`) REFERENCES `tbl_compra_ventas_producto` (`COMP_VENT_ID`);

--
-- Filtros para la tabla `tbl_reservas`
--
ALTER TABLE `tbl_reservas`
  ADD CONSTRAINT `FK_REFERENCE_9` FOREIGN KEY (`CLI_ID`) REFERENCES `tbl_clientes` (`CLI_ID`);

--
-- Filtros para la tabla `tbl_rol_menu`
--
ALTER TABLE `tbl_rol_menu`
  ADD CONSTRAINT `FK_REFERENCE_18` FOREIGN KEY (`ROL_ID`) REFERENCES `tbl_rol` (`ROL_ID`),
  ADD CONSTRAINT `FK_REFERENCE_19` FOREIGN KEY (`MENU_ID`) REFERENCES `tbl_menu` (`MENU_ID`);

--
-- Filtros para la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD CONSTRAINT `FK_REFERENCE_1` FOREIGN KEY (`ROL_ID`) REFERENCES `tbl_rol` (`ROL_ID`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

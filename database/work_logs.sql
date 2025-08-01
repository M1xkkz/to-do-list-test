-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Aug 01, 2025 at 06:57 PM
-- Server version: 8.0.39
-- PHP Version: 8.2.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `worklog`
--

-- --------------------------------------------------------

--
-- Table structure for table `work_logs`
--

CREATE TABLE `work_logs` (
  `id` int NOT NULL,
  `task_type` enum('Development','Test','Document') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `task_name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `start_time` datetime DEFAULT NULL,
  `end_time` datetime DEFAULT NULL,
  `status` enum('ดำเนินการ','เสร็จสิ้น','ยกเลิก') COLLATE utf8mb4_general_ci DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `work_logs`
--

INSERT INTO `work_logs` (`id`, `task_type`, `task_name`, `start_time`, `end_time`, `status`, `created_at`, `updated_at`) VALUES
(1, 'Development', 'test', '2025-07-29 23:04:00', '2025-08-01 23:04:00', 'เสร็จสิ้น', '2025-08-01 23:04:40', '2025-08-01 23:04:40'),
(2, 'Development', 'test1', '2025-07-29 16:04:00', '2025-08-01 16:04:00', 'เสร็จสิ้น', '2025-08-01 23:05:06', '2025-08-01 23:26:40'),
(7, 'Test', 'ทดสอบระบบ Login', '2025-07-28 10:45:00', '2025-07-28 11:15:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(8, 'Document', 'เขียน README.md', '2025-07-28 11:30:00', '2025-07-28 12:30:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(9, 'Development', 'ตั้งค่าฐานข้อมูล', '2025-07-28 13:30:00', '2025-07-28 15:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(10, 'Test', 'ตรวจสอบ API Auth', '2025-07-28 15:30:00', '2025-07-28 16:30:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(11, 'Development', 'หน้า Dashboard', '2025-07-29 09:00:00', '2025-07-29 10:45:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(12, 'Document', 'วางแผน UX', '2025-07-29 11:00:00', '2025-07-29 12:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(13, 'Test', 'Debug หน้า Dashboard', '2025-07-29 13:00:00', '2025-07-29 13:45:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(14, 'Development', 'หน้า WorkLog Form', '2025-07-29 14:00:00', '2025-07-29 15:00:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(15, 'Development', 'เชื่อม backend กับ frontend', '2025-07-29 15:15:00', '2025-07-29 16:45:00', 'ยกเลิก', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(16, 'Document', 'เขียนคู่มือใช้งาน', '2025-07-30 09:00:00', '2025-07-30 10:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(17, 'Development', 'เพิ่มระบบแก้ไขรายการ', '2025-07-30 10:15:00', '2025-07-30 12:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(18, 'Test', 'Unit test หน้าแก้ไข', '2025-07-30 13:00:00', '2025-07-30 13:45:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(19, 'Development', 'หน้าแสดงรายการงาน', '2025-07-30 14:00:00', '2025-07-30 15:30:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(20, 'Test', 'ตรวจสอบ console log', '2025-07-30 15:45:00', '2025-07-30 16:15:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(21, 'Development', 'ปรับ UI/UX ด้วย Tailwind', '2025-07-31 09:00:00', '2025-07-31 10:30:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(22, 'Document', 'สรุปงาน Dev Sprint', '2025-07-31 10:45:00', '2025-07-31 11:45:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(23, 'Test', 'Test responsive', '2025-07-31 13:00:00', '2025-07-31 14:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(24, 'Development', 'ปรับ backend PUT ให้รองรับ updated_at', '2025-07-31 14:15:00', '2025-07-31 15:30:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(25, 'Document', 'อัปเดต changelog', '2025-07-31 15:45:00', '2025-07-31 16:30:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(26, 'Development', 'เพิ่ม filter รายวัน', '2025-08-01 09:00:00', '2025-08-01 10:15:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(27, 'Test', 'ทดสอบ filter รายวัน', '2025-08-01 10:30:00', '2025-08-01 11:30:00', 'ดำเนินการ', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(28, 'Document', 'เขียนสรุปโปรเจกต์', '2025-08-01 13:00:00', '2025-08-01 14:00:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(29, 'Development', 'เพิ่ม column created_at/updated_at', '2025-08-01 14:15:00', '2025-08-01 15:15:00', 'เสร็จสิ้น', '2025-08-01 23:54:50', '2025-08-01 23:54:50'),
(33, 'Test', 'testtttttt22', '2025-07-28 01:16:00', '2025-07-30 01:16:00', 'ดำเนินการ', '2025-08-02 01:16:36', '2025-08-02 01:16:36'),
(36, 'Development', 'dsdsdsdsa', '2025-08-02 01:27:00', '2025-08-02 01:27:00', 'ดำเนินการ', '2025-08-02 01:27:31', '2025-08-02 01:27:31');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `work_logs`
--
ALTER TABLE `work_logs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `work_logs`
--
ALTER TABLE `work_logs`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

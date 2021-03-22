-- phpMyAdmin SQL Dump
-- version 4.9.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 25, 2020 at 01:08 AM
-- Server version: 5.7.26
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `JIA`
--

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'splints', '2020-07-04 19:06:33', '2020-07-04 19:06:33'),
(2, 'relax', '2020-07-04 19:07:02', '2020-07-04 19:07:02'),
(3, 'medication', '2020-07-04 19:07:24', '2020-07-04 19:07:24'),
(4, 'physical activity', '2020-07-04 19:07:54', '2020-07-04 19:07:54'),
(5, 'immediate relief', '2020-07-04 19:08:18', '2020-07-04 19:08:18'),
(6, 'educational', '2020-07-04 19:08:37', '2020-07-04 19:08:37'),
(7, 'nutritional', '2020-07-04 19:08:46', '2020-07-04 19:08:46');

--
-- Dumping data for table `classifications`
--

INSERT INTO `classifications` (`id`, `name`, `section`, `created_at`, `updated_at`) VALUES
(1, 'Non-steroidal anti-inflammatory Drugs (NSAIDs) in pills or liquids.', 'prescribed', '2020-06-08 21:56:57', '2020-06-08 21:56:57'),
(2, 'Non-steroidal anti-inflammatory Drugs (NSAIDs) in creams', 'prescribed', '2020-06-08 21:57:08', '2020-06-08 21:57:08'),
(3, 'Corticosteroids', 'prescribed', '2020-06-08 21:57:17', '2020-06-08 21:57:17'),
(6, 'Disease-modifying anti-rheumatic drugs (DMARDs)', 'prescribed', '2020-07-22 13:37:05', '2020-07-22 13:37:05'),
(7, 'Biologic agents and Biosimilars', 'prescribed', '2020-07-22 13:37:14', '2020-07-22 13:37:14'),
(8, 'Acetaminophen', 'other', '2020-07-22 13:37:30', '2020-07-22 13:37:30'),
(9, 'Non-steroidal anti-inflammatory drugs (NSAIDs) in pills or liquids', 'other', '2020-07-22 13:37:41', '2020-07-22 13:37:41'),
(10, 'Non-steroidal anti-inflammatory drugs (NSAIDs) in creams', 'other', '2020-07-22 13:38:00', '2020-07-22 13:38:00'),
(11, 'Other pain medications', 'other', '2020-07-22 13:38:09', '2020-07-22 13:38:09');

--
-- Dumping data for table `confidences`
--

INSERT INTO `confidences` (`id`, `level`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 8.5, NULL, '2020-06-06 22:55:01', '2020-06-06 22:55:01'),
(9, 9.5, 7, '2020-06-08 18:12:21', '2020-08-06 03:32:32'),
(10, 7.5, 69, '2020-08-10 21:26:25', '2020-08-23 03:17:49'),
(11, 7, 81, '2020-08-21 14:54:52', '2020-08-21 14:54:52');

--
-- Dumping data for table `effectivenesses`
--

INSERT INTO `effectivenesses` (`id`, `control_arthritis`, `manage_pain`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 7.5, NULL, NULL, '2020-06-06 23:05:40', '2020-06-06 23:05:40'),
(2, 4.5, NULL, NULL, '2020-06-06 23:05:49', '2020-06-06 23:05:49'),
(4, 2, 4, 7, '2020-06-08 17:33:10', '2020-08-10 05:59:00'),
(5, 0.5, 3.5, 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(6, 8, 4, 69, '2020-08-10 21:22:12', '2020-08-23 02:51:55'),
(7, 7, 7, 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `factors`
--

INSERT INTO `factors` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Lack of information', 'You can find information about treatment options in Step 3 (maybe make this a button). Speak with your parents and health care team.', '2020-05-24 23:19:17', '2020-05-24 23:19:17'),
(2, 'Lack of time', 'Some treatments take as little as 10 or 15 minutes! Try setting aside time in your calendar.', '2020-05-24 23:20:16', '2020-05-24 23:20:16'),
(9, 'Cost too much', 'There are many ways to reduce costs. Some treatments are available online for free. Your health insurance may also pay for some treatments. Talk about it with your parents and health care team. They may have other answers.', '2020-08-06 19:38:57', '2020-08-06 19:38:57'),
(10, 'Feeling overwhelmed', 'It’s okay to feel overwhelmed. Take the time you need to consider your options. Talk about your worries with your parents and health care team.', '2020-08-06 19:39:12', '2020-08-06 19:39:12'),
(11, 'Not sure I want to follow this plan', 'It’s okay to be unsure. If you want to look at your options again, you can use this app any time.', '2020-08-06 19:39:25', '2020-08-06 19:39:25'),
(12, 'Other', '', '2020-08-06 19:39:33', '2020-08-06 19:39:33');

--
-- Dumping data for table `frequentlies`
--

INSERT INTO `frequentlies` (`id`, `prescribed_meds`, `other_treatments`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'Some times', 'Half the time', NULL, '2020-05-24 23:18:12', '2020-05-24 23:18:12'),
(5, 'Not applicable', 'Sometimes', 7, '2020-05-29 19:10:25', '2020-08-03 22:39:52'),
(6, NULL, NULL, 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(7, 'Not applicable', 'Most times', 69, '2020-08-10 21:22:12', '2020-08-10 21:23:01'),
(8, NULL, NULL, 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `learns`
--

INSERT INTO `learns` (`id`, `link`, `name`, `treatment_id`, `created_at`, `updated_at`) VALUES
(1, 'https://teens.aboutkidshealth.ca/Article?contentid=2605&language=English&hub=jiateenhub', 'About kids health: Yoga (English)', 1, '2020-08-24 05:07:37', '2020-08-24 05:07:37'),
(2, 'https://teens.aboutkidshealth.ca/Article?contentid=2606&language=English&hub=jiateenhub', 'About kids health: Basic yoga poses (English)', 1, '2020-08-24 05:07:37', '2020-08-24 05:07:37'),
(190, 'http://education.arthritis.ca/en_us/learntousetoolsanddevices/topic6_9.aspx', 'wrist link 1', 31, '2020-08-06 20:17:26', '2020-08-06 20:17:26'),
(191, 'https://www.aboutkidshealth.ca/Article?contentid=1079&language=English', 'wrist link name (English)', 31, '2020-08-06 20:17:26', '2020-08-06 20:17:26'),
(192, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2376&language=English', 'another web link (English)', 31, '2020-08-06 20:17:26', '2020-08-06 20:17:26'),
(201, 'a', 'a', 49, '2020-08-06 21:26:21', '2020-08-06 21:26:21'),
(202, 'c', 'c', 49, '2020-08-06 21:26:21', '2020-08-06 21:26:21'),
(203, 'https://www.aboutkidshealth.ca/Article?contentid=1083&language=English', 'About kids health (English)', 6, '2020-08-07 00:04:22', '2020-08-07 00:04:22'),
(204, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2379&language=English', 'Teens taking charge (English)', 6, '2020-08-07 00:04:22', '2020-08-07 00:04:22'),
(205, 'https://www.arthritis.org/living_with_arthritis/exercise/arthritis_friendly/pilates.php', 'Living with arthritis ', 34, '2020-08-06 21:31:53', '2020-08-06 21:31:53'),
(206, 'https://teens.aboutkidshealth.ca/Article?contentid=2604&language=English&hub=jiateenhub\",             \"https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2370&language=English', 'About kids health (English)', 35, '2020-08-07 00:12:39', '2020-08-07 00:12:39'),
(207, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2370&language=English', 'Teens taking charge (English)', 35, '2020-08-07 00:12:39', '2020-08-07 00:12:39'),
(208, 'http://www.kidsgetarthritistoo.org/living_with_ja/daily_life/staying_active/ja_exercise.php', 'Kids get arthritis too', 35, '2020-08-07 00:12:39', '2020-08-07 00:12:39'),
(209, 'https://www.cps.ca/en/documents/position/physical_activity_chronic_condition', 'CPS Physical Activity', 35, '2020-08-07 00:12:39', '2020-08-07 00:12:39'),
(210, 'https://www.jia.org.uk/pain_and_resistive_underwater_exercise', 'Pain and resistive underwater excercise', 50, '2020-08-07 00:16:43', '2020-08-07 00:16:43'),
(211, 'https://arthritisaustralia.com.au/managing_arthritis/living_with_arthritis/physical_activity_and_exercise/water_exercise/', 'Water excercise', 50, '2020-08-07 00:16:43', '2020-08-07 00:16:43'),
(212, 'https://www.aboutkidshealth.ca/article?contentid=1077&language=English', 'About kids health (English)', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(213, 'https://www.aboutkidshealth.ca/Article?contentid=1076&language=English', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(214, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2340&language=English', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(215, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2370&language=English', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(216, 'https://www.cdc.gov/arthritis/basics/physical_activity_overview.html', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(217, 'https://www.arthritis.org/about_arthritis/types/juvenile_idiopathic_arthritis_jia/self_care.php', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(218, 'https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=hw100889', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(220, 'https://teens.aboutkidshealth.ca/Article?contentid=2604&language=English&hub=jiateenhub', '', 52, '2020-08-08 01:56:12', '2020-08-08 01:56:12'),
(221, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2370&language=English', '', 52, '2020-08-08 01:56:12', '2020-08-08 01:56:12'),
(222, 'http://www.kidsgetarthritistoo.org/living-with-ja/daily-life/staying-active/ja-exercise.php', '', 52, '2020-08-08 01:56:12', '2020-08-08 01:56:12'),
(223, 'https://www.cps.ca/en/documents/position/physical-activity-chronic-condition', '', 52, '2020-08-08 01:56:12', '2020-08-08 01:56:12'),
(224, 'https://www.jia.org.uk/the-occupational-therapist', '', 36, '2020-08-08 01:59:19', '2020-08-08 01:59:19'),
(225, 'https://www.aboutkidshealth.ca/Article?contentid=1079&language=English', '', 36, '2020-08-08 01:59:19', '2020-08-08 01:59:19'),
(226, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2376&language=English', '', 36, '2020-08-08 01:59:19', '2020-08-08 01:59:19'),
(227, 'https://www.ccaa.org.uk/about-jia/treatment-of-jia/occupational-therapy/', '', 36, '2020-08-08 01:59:19', '2020-08-08 01:59:19'),
(228, 'http://www.kznhealth.gov.za/occtherapy/jointprotectionprinciples.pdf', '', 53, '2020-08-08 03:12:27', '2020-08-08 03:12:27'),
(229, 'https://www.arthritis.org/living-with-arthritis/pain-management/joint-protection/joint-health.php', '', 53, '2020-08-08 03:12:27', '2020-08-08 03:12:27'),
(230, 'https://www.aboutkidshealth.ca/Article?contentid=62&language=English\"', '', 54, '2020-08-08 03:18:27', '2020-08-08 03:18:27'),
(231, 'https://www.health.harvard.edu/pain/where-to-turn-for-pain-relief-acetaminophen-or-nsaids\"', '', 54, '2020-08-08 03:18:27', '2020-08-08 03:18:27'),
(232, 'https://teens.aboutkidshealth.ca/Article?contentid=2585&language=English&hub=jiateenhub', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(233, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2353&language=English', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(234, 'https://teenstakingcharge.carragroup.org/en/jiateen', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(235, 'https://www.parksmed.co.uk/wp-content/uploads/2013/09/Pain-Toolkit-for-teenagers.pdf', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(236, 'https://patienteducation.osumc.edu/Documents/relaxbre.pdf', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(237, 'https://www.aboutkidshealth.ca/Article?contentid=3008&language=English', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(238, 'https://www.painmanagement.org.au/2014-09-11-13-35-53/2014-09-11-13-36-47/176-progressive-muscle-relaxation.html', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(239, 'http://www.kidsgetarthritistoo.org/living-with-ja/medical-care/treatment/mind-over-pain.php', '', 55, '2020-08-08 03:21:57', '2020-08-08 03:21:57'),
(240, 'https://www.aboutkidshealth.ca/Article?contentid=1078&language=English', '', 56, '2020-08-08 03:25:38', '2020-08-08 03:25:38'),
(241, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2368&language=English', '', 56, '2020-08-08 03:25:38', '2020-08-08 03:25:38'),
(242, 'https://www.jia.org.uk/physiotherapist', '', 56, '2020-08-08 03:25:38', '2020-08-08 03:25:38'),
(243, 'https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=hw100889', '', 56, '2020-08-08 03:25:38', '2020-08-08 03:25:38'),
(244, 'https://www.ccaa.org.uk/about-jia/treatment-of-jia/physiotherapy/', '', 56, '2020-08-08 03:25:38', '2020-08-08 03:25:38'),
(245, 'http://www.kidsgetarthritistoo.org/living-with-ja/medical-care/pain-and-symptoms/ja-heat-cold.php', '', 57, '2020-08-08 03:28:15', '2020-08-08 03:28:15'),
(246, 'https://www.aboutkidshealth.ca/Article?contentid=1076&language=English', '', 57, '2020-08-08 03:28:15', '2020-08-08 03:28:15'),
(247, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2340&language=English', '', 57, '2020-08-08 03:28:15', '2020-08-08 03:28:15'),
(248, 'http://www.kidsgetarthritistoo.org/living-with-ja/medical-care/pain-and-symptoms/ja-heat-cold.php', '', 58, '2020-08-08 03:30:57', '2020-08-08 03:30:57'),
(249, 'https://www.aboutkidshealth.ca/Article?contentid=1076&language=English', '', 58, '2020-08-08 03:30:57', '2020-08-08 03:30:57'),
(250, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2340&language=English', '', 58, '2020-08-08 03:30:57', '2020-08-08 03:30:57'),
(251, 'http://www.kidsgetarthritistoo.org/living-with-ja/medical-care/treatment/acupuncture.php', '', 59, '2020-08-08 17:12:03', '2020-08-08 17:12:03'),
(252, 'https://www.arthritis.org/living-with-arthritis/treatments/natural/other-therapies/mind-body-pain-relief/acupuncture-gets-respect.php', '', 59, '2020-08-08 17:12:03', '2020-08-08 17:12:03'),
(253, 'https://www.aboutkidshealth.ca/Article?contentid=1083&language=English', '', 59, '2020-08-08 17:12:03', '2020-08-08 17:12:03'),
(254, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2379&language=English', '', 59, '2020-08-08 17:12:03', '2020-08-08 17:12:03'),
(257, 'https://teens.aboutkidshealth.ca/Article?contentid=2626&language=English&hub=jiateenhub', '', 61, '2020-08-08 20:55:07', '2020-08-08 20:55:07'),
(258, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2394&language=English', '', 61, '2020-08-08 20:55:07', '2020-08-08 20:55:07'),
(259, 'http://www.kidsgetarthritistoo.org/living-with-ja/medical-care/pain-and-symptoms/mood-pain-and-sleep.php', '', 61, '2020-08-08 20:55:07', '2020-08-08 20:55:07'),
(260, 'https://www.nras.org.uk/data/files/Publications/29562%20NRAS%20Sleep%20Matters%206pp%20DL%20leaflet%20%28Prf2%29.pdf', '', 61, '2020-08-08 20:55:07', '2020-08-08 20:55:07'),
(261, 'https://arthritisaustralia.com.au/managing-arthritis/arthritis-and-children/6387-2/', '', 61, '2020-08-08 20:55:07', '2020-08-08 20:55:07'),
(262, 'https://teens.aboutkidshealth.ca/Article?contentid=2590&language=English&hub=jiateenhub', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(263, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2367&language=English', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(264, 'http://www.sickkids.ca/patient-family-resources/Child-Life/coping-with-a-health-care-experience/Comfort-Kit/index.html', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(265, 'https://www.aci.health.nsw.gov.au/chronic-pain/painbytes/pain-and-mind-body-connection/how-can-distraction-be-used-to-manage-pain', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(266, 'http://americanpainsociety.org/uploads/education/PAMI_Distraction_Toolkit.pdf', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(267, 'http://pami.emergency.med.jax.ufl.edu/resources/distraction-toolkit/', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(268, 'http://www.cfp.ca/content/53/5/823', '', 62, '2020-08-08 20:59:34', '2020-08-08 20:59:34'),
(269, 'https://teens.aboutkidshealth.ca/Article?contentid=2591&language=English&hub=jiateenhub', '', 63, '2020-08-08 21:01:30', '2020-08-08 21:01:30'),
(270, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2383&language=English', '', 63, '2020-08-08 21:01:30', '2020-08-08 21:01:30'),
(271, 'https://teens.aboutkidshealth.ca/Article?contentid=2592&language=English&hub=jiateenhub', '', 63, '2020-08-08 21:01:30', '2020-08-08 21:01:30'),
(272, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2384&language=English', '', 63, '2020-08-08 21:01:30', '2020-08-08 21:01:30'),
(273, 'http://parentingchaos.com/anxiety-apps-kids', '', 63, '2020-08-08 21:01:30', '2020-08-08 21:01:30'),
(274, 'https://teens.aboutkidshealth.ca/Article?contentid=2612&language=English&hub=jiateenhub', '', 64, '2020-08-08 21:03:52', '2020-08-08 21:03:52'),
(275, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2378&language=English', '', 64, '2020-08-08 21:03:52', '2020-08-08 21:03:52'),
(276, 'https://www.zoffness.com/what-is-cbt/', '', 64, '2020-08-08 21:03:52', '2020-08-08 21:03:52'),
(277, 'https://notes.childrenshospital.org/psychological-interventions-for-chronic-pediatric-pain/', '', 64, '2020-08-08 21:03:52', '2020-08-08 21:03:52'),
(282, 'https://teens.aboutkidshealth.ca/Article?contentid=2629&language=English&hub=jiateenhub', '', 67, '2020-08-08 22:19:27', '2020-08-08 22:19:27'),
(283, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2937&language=English', '', 67, '2020-08-08 22:19:27', '2020-08-08 22:19:27'),
(284, 'https://teens.aboutkidshealth.ca/Article?contentid=2609&language=English&hub=jiateenhub', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(285, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2375&language=English', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(286, 'https://www.aboutkidshealth.ca/Article?contentid=1081&language=English', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(287, 'https://food-guide.canada.ca/en/', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(288, 'https://health.gov/dietaryguidelines/2015/', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(289, 'https://www.jia.org.uk/diet-and-jia', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(290, 'https://www.arthritis.org/about-arthritis/types/juvenile-idiopathic-arthritis-jia/self-care.php', '', 69, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(291, 'https://www.jia.org.uk/diet-and-jia\"', '', 70, '2020-08-08 22:31:50', '2020-08-08 22:31:50'),
(292, 'https://www.arthritis.org/living-with-arthritis/arthritis-diet/anti-inflammatory/anti-inflammatory-diet.php', '', 70, '2020-08-08 22:31:50', '2020-08-08 22:31:50'),
(293, 'https://www.jia.org.uk/diet-and-jia', '', 71, '2020-08-08 22:33:34', '2020-08-08 22:33:34'),
(294, 'https://arthritisaustralia.com.au/managing-arthritis/living-with-arthritis/complementary-treatments-and-therapies/fish-oils', '', 71, '2020-08-08 22:33:34', '2020-08-08 22:33:34'),
(295, 'https://arthritisaustralia.com.au/managing-arthritis/living-with-arthritis/complementary-treatments-and-therapies/glucosamine-and-chondroitin/', '', 72, '2020-08-08 22:35:01', '2020-08-08 22:35:01'),
(296, 'https://teens.aboutkidshealth.ca/Article?contentid=2609&language=English&hub=jiateenhub', '', 73, '2020-08-08 22:52:56', '2020-08-08 22:52:56'),
(297, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2375&language=English', '', 73, '2020-08-08 22:52:56', '2020-08-08 22:52:56'),
(298, 'https://www.aboutkidshealth.ca/Article?contentid=1081&language=English', '', 73, '2020-08-08 22:52:56', '2020-08-08 22:52:56'),
(299, 'https://www.jia.org.uk/diet-and-jia', '', 73, '2020-08-08 22:52:56', '2020-08-08 22:52:56'),
(300, 'https://teens.aboutkidshealth.ca/Article?contentid=2609&language=English&hub=jiateenhub\"', '', 74, '2020-08-08 22:48:15', '2020-08-08 22:48:15'),
(301, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2375&language=English', '', 74, '2020-08-08 22:48:15', '2020-08-08 22:48:15'),
(302, 'https://www.aboutkidshealth.ca/Article?contentid=1081&language=English', '', 74, '2020-08-08 22:48:15', '2020-08-08 22:48:15'),
(303, 'https://www.jia.org.uk/diet-and-jia', '', 74, '2020-08-08 22:48:15', '2020-08-08 22:48:15'),
(304, 'https://www.arthritis.org/living-with-arthritis/arthritis-diet/anti-inflammatory/vegan-and-vegetarian-diets.php', '', 75, '2020-08-08 22:49:28', '2020-08-08 22:49:28'),
(305, 'https://teens.aboutkidshealth.ca/Article?contentid=2605&language=English&hub=jiateenhub', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(306, 'https://teens.aboutkidshealth.ca/Article?contentid=2606&language=English&hub=jiateenhub', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(307, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2371&language=English', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(308, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2373&language=English', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(309, 'https://www.arthritis.org/living_with_arthritis/exercise/workouts/yoga/yoga_benefits.php', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51');

--
-- Dumping data for table `logs`
--

INSERT INTO `logs` (`id`, `purpose`, `plan`, `step_one`, `step_three`, `preferences`, `user_id`, `created_at`, `updated_at`) VALUES
(38, 'Change my answers', '[{\"name\": \"Custom-Made Foot Orthotics\"}, {\"name\": \"Massage\"}]', NULL, '{\"factors\": [\"Lack of information\"], \"suggestions\": [\"Talk with your parents\", \"Talk with your health care team\", \"Find out where I can get treatments nearby\", \"Find out how to pay for the treatments. (For example, does my health insurance pay for it?)\", \"Dummy suggestion\"], \"confidence_level\": 5.5, \"motivation_level\": 7.5}', '{\"prefs\": [{\"value\": 8.5, \"description\": \"Relieving pain immediately\"}, {\"value\": 7, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 6, \"description\": \"Using treatments that help me relax\"}, {\"value\": 7, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 9, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 7.5, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}, {\"value\": 7, \"description\": \"Test prefernece\"}], \"preference_text\": \"factor tests\"}', 7, '2020-07-24 04:08:31', '2020-07-24 04:13:15'),
(40, 'Change my answers', '[{\"name\": \"Custom-Made Foot Orthotics\"}, {\"name\": \"Massage\"}]', '{\"pain_areas\": [{\"area\": \"elbows\"}, {\"area\": \"ankles\"}, {\"area\": \"knees\"}], \"pain_level\": 5.5, \"manage_pain\": 9, \"selected_meds\": [{\"name\": \"Ibuprofen (Advil®)\"}, {\"name\": \"Pill or Liquid (Prednisone™)\"}], \"treatment_text\": \"Test text\", \"prescribed_text\": \"Test text\", \"other_treatments\": [{\"name\": \"Tylenol®\"}, {\"name\": \"Naproxen (Aleve®)\"}, {\"name\": \"Yoga\"}, {\"name\": \"Educational Website\"}], \"control_arthritis\": 4}', '{\"factors\": [{\"title\": \"Lack of information\"}], \"suggestions\": [{\"title\": \"Talk with your parents\"}, {\"title\": \"Talk with your health care team\"}, {\"title\": \"Find out where I can get treatments nearby\"}, {\"title\": \"Find out how to pay for the treatments. (For example, does my health insurance pay for it?)\"}, {\"title\": \"Dummy suggestion\"}], \"confidence_level\": 5.5, \"motivation_level\": 7.5}', '{\"prefs\": [{\"value\": 8.5, \"description\": \"Relieving pain immediately\"}, {\"value\": 7, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 6, \"description\": \"Using treatments that help me relax\"}, {\"value\": 7, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 9, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 7.5, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}, {\"value\": 7, \"description\": \"Test prefernece\"}, {\"value\": 7, \"description\": \"New slider\"}], \"preference_text\": \"factor tests\"}', 7, '2020-07-24 17:39:22', '2020-07-24 22:33:52'),
(50, 'Change my plan', NULL, '{\"pain_areas\": [{\"area\": \"jaw\"}, {\"area\": \"elbows\"}, {\"area\": \"ankles\"}, {\"area\": \"knees\"}], \"pain_level\": 5.5, \"manage_pain\": 9, \"selected_meds\": [{\"name\": \"Ibuprofen (Advil®)\"}, {\"name\": \"Diclofenac (Voltaren®)\"}], \"treatment_text\": \"Test text\", \"prescribed_text\": \"Test text\", \"other_treatments\": [{\"name\": \"Tylenol®\"}, {\"name\": \"Yoga\"}, {\"name\": \"Educational Website\"}], \"control_arthritis\": 4}', NULL, NULL, 7, '2020-07-29 15:38:33', '2020-07-29 15:40:54'),
(52, 'Change my answers', '[{\"name\": \"Custom-Made Foot Orthotics\"}, {\"name\": \"Massage\"}]', '{\"pain_areas\": [{\"area\": \"ankles\"}, {\"area\": \"hips\"}], \"pain_level\": 8, \"manage_pain\": 3.5, \"selected_meds\": [{\"name\": \"Naproxen (Aleve®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}], \"treatment_text\": \"Test text updated\", \"prescribed_text\": \"Test text updateds\", \"other_treatments\": [{\"name\": \"Acetylsalicylic acid (Aspirin®)\"}, {\"name\": \"Naproxen (Aleve®)\"}, {\"name\": \"Custom-Made Foot Orthotics\"}, {\"name\": \"Yoga\"}, {\"name\": \"Educational Website\"}], \"control_arthritis\": 0.5}', '{\"factors\": [{\"title\": \"Lack of time\"}, {\"title\": \"dummy factor\"}], \"suggestions\": [{\"title\": \"Talk with your health care team\"}, {\"title\": \"Find out where I can get treatments nearby\"}], \"confidence_level\": 1, \"motivation_level\": 4.5}', '{\"prefs\": [{\"value\": 2, \"description\": \"Relieving pain immediately\"}, {\"value\": 6, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 9.5, \"description\": \"Using treatments that help me relax\"}, {\"value\": 9, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 3, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 9, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}], \"preference_text\": \"factor tests updates\"}', 7, '2020-07-30 22:51:02', '2020-08-03 08:10:54'),
(55, 'Change my answers', '[{\"name\": \"Massage\"}]', '{\"pain_areas\": [{\"area\": \"jaw\"}, {\"area\": \"shoulders\"}, {\"area\": \"knees\"}], \"pain_level\": 1.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Ibuprofen (Advil®)\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}], \"treatment_text\": \"req user id test\", \"prescribed_text\": \"req user id\", \"other_treatments\": [{\"name\": \"Acetylsalicylic acid (Aspirin®)\"}, {\"name\": \"Massage\"}, {\"name\": \"Educational Website\"}], \"control_arthritis\": 2}', '{\"factors\": [{\"title\": \"Lack of information\"}], \"suggestions\": [{\"title\": \"Talk with your parents\"}, {\"title\": \"Talk with your health care team\"}, {\"title\": \"Dummy suggestion with description\"}], \"confidence_level\": 9.5, \"motivation_level\": 9}', '{\"prefs\": [{\"value\": 8.5, \"description\": \"Relieving pain immediately\"}, {\"value\": 7.5, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 1.5, \"description\": \"Using treatments that help me relax\"}, {\"value\": 9, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 1.5, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 1, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}], \"preference_text\": \"factor test\"}', 7, '2020-08-03 16:56:33', '2020-08-04 05:26:52'),
(90, 'Change my answers', NULL, '{\"pain_areas\": [{\"area\": \"elbows\"}, {\"area\": \"hips\"}], \"pain_level\": 7.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}, {\"name\": \"Infliximab (Remicade®)\"}, {\"name\": \"Methotrexate(Metoject®, Rheumatrex®)\"}, {\"name\": \"Sulfasalazine(Metoject®, Rheumatrex®)\"}], \"treatment_text\": \"None\", \"prescribed_text\": \"None\", \"other_treatments\": [{\"name\": \"Opioids\"}, {\"name\": \"Tylenol®\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Osteopathy\"}, {\"name\": \"Wrist Splints Worn at Night\"}, {\"name\": \"Cardio\"}, {\"name\": \"Occupational Therapy Interventions\"}, {\"name\": \"Joint Protection Program\"}, {\"name\": \"Acetaminophen (Tylenol®)\"}, {\"name\": \"Relaxation\"}, {\"name\": \"Hypnosis\"}, {\"name\": \"NSAIDs in Creams\"}, {\"name\": \"Vegetarian & Vegan Diets\"}, {\"name\": \"Gluten-Free Diets\"}], \"control_arthritis\": 8}', NULL, '{\"prefs\": [{\"value\": 8, \"description\": \"Relieving pain immediately\"}, {\"value\": 3.5, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 8, \"description\": \"Using treatments that help me relax\"}, {\"value\": 9, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 7, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 7, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}], \"preference_text\": \"none\"}', 69, '2020-08-12 00:26:24', '2020-08-12 00:26:35'),
(91, 'Change my plan', NULL, NULL, NULL, NULL, 72, '2020-08-13 18:05:40', '2020-08-13 18:05:40'),
(92, 'Change my answers', NULL, NULL, NULL, NULL, 69, '2020-08-13 18:05:51', '2020-08-13 18:05:51'),
(93, 'Change my plan', NULL, NULL, NULL, NULL, 72, '2020-08-13 18:06:44', '2020-08-13 18:06:44'),
(94, 'First time user', NULL, NULL, NULL, NULL, 69, '2020-08-13 18:06:55', '2020-08-13 18:06:55'),
(95, 'Change my answers', NULL, NULL, NULL, NULL, 72, '2020-08-13 18:09:49', '2020-08-13 18:09:49'),
(96, 'Change my plan', NULL, NULL, NULL, NULL, 69, '2020-08-13 18:09:59', '2020-08-13 18:09:59'),
(97, 'Review information', NULL, NULL, NULL, NULL, 73, '2020-08-13 18:17:43', '2020-08-13 18:17:43'),
(98, 'Change my plan', NULL, NULL, NULL, NULL, 73, '2020-08-13 18:18:21', '2020-08-13 18:18:21'),
(99, 'Change my plan', NULL, NULL, NULL, NULL, 69, '2020-08-13 18:20:37', '2020-08-13 18:20:37'),
(100, 'Change my answers', NULL, NULL, NULL, NULL, 75, '2020-08-13 18:21:16', '2020-08-13 18:21:16'),
(101, 'Change my answers', NULL, '{\"pain_areas\": [{\"area\": \"wrists\"}], \"pain_level\": 7.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}, {\"name\": \"Infliximab (Remicade®)\"}, {\"name\": \"Methotrexate(Metoject®, Rheumatrex®)\"}, {\"name\": \"Sulfasalazine(Metoject®, Rheumatrex®)\"}], \"treatment_text\": \"None\", \"prescribed_text\": \"None\", \"other_treatments\": [{\"name\": \"Opioids\"}, {\"name\": \"Tylenol®\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Osteopathy\"}, {\"name\": \"Wrist Splints Worn at Night\"}, {\"name\": \"Cardio\"}, {\"name\": \"Occupational Therapy Interventions\"}, {\"name\": \"Joint Protection Program\"}, {\"name\": \"Acetaminophen (Tylenol®)\"}, {\"name\": \"Relaxation\"}, {\"name\": \"Hypnosis\"}, {\"name\": \"NSAIDs in Creams\"}, {\"name\": \"Vegetarian & Vegan Diets\"}, {\"name\": \"Gluten-Free Diets\"}], \"control_arthritis\": 8}', NULL, '{\"prefs\": [{\"value\": 3.5, \"description\": \"Relieving pain immediately\"}, {\"value\": 9.5, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 2, \"description\": \"Using treatments that help me relax\"}, {\"value\": 4, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 3.5, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 0, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}], \"preference_text\": \"none\"}', 69, '2020-08-13 18:59:48', '2020-08-16 16:58:12'),
(102, 'First time user', NULL, NULL, NULL, NULL, 76, '2020-08-16 17:18:41', '2020-08-16 17:18:41'),
(103, 'Change my plan', NULL, NULL, NULL, NULL, 69, '2020-08-16 17:27:22', '2020-08-16 17:27:22'),
(104, 'First time user', NULL, NULL, NULL, NULL, 77, '2020-08-17 20:54:08', '2020-08-17 20:54:08'),
(105, 'Review information', NULL, NULL, NULL, NULL, 69, '2020-08-17 20:54:22', '2020-08-17 20:54:22'),
(106, NULL, NULL, '{\"pain_areas\": [{\"area\": \"wrists\"}], \"pain_level\": 7.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}, {\"name\": \"Infliximab (Remicade®)\"}, {\"name\": \"Methotrexate(Metoject®, Rheumatrex®)\"}, {\"name\": \"Sulfasalazine(Metoject®, Rheumatrex®)\"}], \"treatment_text\": \"None\", \"prescribed_text\": \"None\", \"other_treatments\": [{\"name\": \"Opioids\"}, {\"name\": \"Tylenol®\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Osteopathy\"}, {\"name\": \"Wrist Splints Worn at Night\"}, {\"name\": \"Cardio\"}, {\"name\": \"Occupational Therapy Interventions\"}, {\"name\": \"Joint Protection Program\"}, {\"name\": \"Acetaminophen (Tylenol®)\"}, {\"name\": \"Relaxation\"}, {\"name\": \"Hypnosis\"}, {\"name\": \"NSAIDs in Creams\"}, {\"name\": \"Vegetarian & Vegan Diets\"}, {\"name\": \"Gluten-Free Diets\"}], \"control_arthritis\": 8}', NULL, NULL, 69, '2020-08-19 03:28:55', '2020-08-19 03:28:55'),
(107, NULL, NULL, '{\"pain_areas\": [{\"area\": \"wrists\"}, {\"area\": \"hips\"}, {\"area\": \"lower_back\"}], \"pain_level\": 7.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}, {\"name\": \"Infliximab (Remicade®)\"}, {\"name\": \"Methotrexate(Metoject®, Rheumatrex®)\"}, {\"name\": \"Sulfasalazine(Metoject®, Rheumatrex®)\"}, {\"name\": \"Naproxen (Aleve®)\"}], \"treatment_text\": \"None\", \"prescribed_text\": \"None\", \"other_treatments\": [{\"name\": \"Opioids\"}, {\"name\": \"Tylenol®\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Osteopathy\"}, {\"name\": \"Wrist Splints Worn at Night\"}, {\"name\": \"Cardio\"}, {\"name\": \"Occupational Therapy Interventions\"}, {\"name\": \"Joint Protection Program\"}, {\"name\": \"Acetaminophen (Tylenol®)\"}, {\"name\": \"Relaxation\"}, {\"name\": \"Hypnosis\"}, {\"name\": \"NSAIDs in Creams\"}, {\"name\": \"Vegetarian & Vegan Diets\"}, {\"name\": \"Gluten-Free Diets\"}], \"control_arthritis\": 8}', NULL, '{\"prefs\": [{\"value\": 3.5, \"description\": \"Relieving pain immediately\"}, {\"value\": 9.5, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 2, \"description\": \"Using treatments that help me relax\"}, {\"value\": 4, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 3.5, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 0, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}], \"preference_text\": \"none\"}', 69, '2020-08-21 03:07:49', '2020-08-21 03:08:14'),
(108, 'First time user', '[{\"name\": \"Massage\"}]', '{\"pain_areas\": [], \"pain_level\": 7, \"manage_pain\": 7, \"selected_meds\": [], \"treatment_text\": \"\", \"prescribed_text\": \"\", \"other_treatments\": [], \"control_arthritis\": 7}', '{\"factors\": [], \"suggestions\": [], \"confidence_level\": 7, \"motivation_level\": 7}', '{\"prefs\": [{\"value\": 7, \"description\": \"Relieving pain immediately\"}, {\"value\": 7, \"description\": \"Avoiding pain medications on top of my prescribed arthritis medication\"}, {\"value\": 7, \"description\": \"Using treatments that help me relax\"}, {\"value\": 7, \"description\": \"Using nutritional approaches that help me stay healthy \"}, {\"value\": 7, \"description\": \"Using treatments that help me stay active\"}, {\"value\": 7, \"description\": \"Using treatments that help me learn to deal with JIA and its symptoms\"}]}', 81, '2020-08-21 13:40:11', '2020-08-21 14:54:52'),
(109, NULL, '[{\"name\": \"Educational Website\"}, {\"name\": \"Individualized Exercise Program\"}]', '{\"pain_areas\": [{\"area\": \"jaw\"}, {\"area\": \"shoulders\"}], \"pain_level\": 7.5, \"manage_pain\": 4, \"selected_meds\": [{\"name\": \"Naproxen (Aleve®)\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Etanercept (Enbrel®)\"}, {\"name\": \"Infliximab (Remicade®)\"}, {\"name\": \"Methotrexate(Metoject®, Rheumatrex®)\"}, {\"name\": \"Sulfasalazine(Metoject®, Rheumatrex®)\"}], \"treatment_text\": \"Update\", \"prescribed_text\": \"Update\", \"other_treatments\": [{\"name\": \"Opioids\"}, {\"name\": \"Tylenol®\"}, {\"name\": \"Diclofenac (Voltaren®)\"}, {\"name\": \"Osteopathy\"}, {\"name\": \"Wrist Splints Worn at Night\"}, {\"name\": \"Cardio\"}, {\"name\": \"Occupational Therapy Interventions\"}, {\"name\": \"Joint Protection Program\"}, {\"name\": \"Acetaminophen (Tylenol®)\"}, {\"name\": \"Relaxation\"}, {\"name\": \"Hypnosis\"}, {\"name\": \"NSAIDs in Creams\"}, {\"name\": \"Vegetarian & Vegan Diets\"}, {\"name\": \"Gluten-Free Diets\"}], \"control_arthritis\": 8}', '{\"factors\": [{\"title\": \"Lack of information\"}, {\"title\": \"Cost too much\"}, {\"title\": \"Not sure I want to follow this plan\"}], \"suggestions\": [{\"title\": \"Talk with your health care team\"}, {\"title\": \"Find out how to pay for the treatments. (For example, does my health insurance pay for it?)\"}], \"confidence_level\": 7.5, \"motivation_level\": 7}', NULL, 69, '2020-08-22 23:53:13', '2020-08-23 03:17:49'),
(110, 'First time user', NULL, NULL, NULL, NULL, 88, '2020-08-24 14:37:51', '2020-08-24 14:37:52');

--
-- Dumping data for table `medications`
--

INSERT INTO `medications` (`id`, `name`, `classification_id`, `created_at`, `updated_at`) VALUES
(1, 'Ibuprofen (Advil®)', 1, '2020-06-08 23:09:11', '2020-06-08 23:09:11'),
(5, 'Pill or Liquid (Prednisone™)', 3, '2020-06-11 16:15:32', '2020-07-22 13:36:49'),
(11, 'Naproxen (Aleve®)', 1, '2020-07-22 13:35:27', '2020-07-22 13:35:27'),
(12, 'Diclofenac (Voltaren®)', 2, '2020-07-22 13:36:29', '2020-07-22 13:36:29'),
(13, 'Acetylsalicylic acid (Aspirin®)', 11, '2020-07-22 13:38:25', '2020-07-22 13:38:25'),
(14, 'Opioids', 11, '2020-07-22 13:38:41', '2020-07-22 13:38:41'),
(15, 'Etanercept (Enbrel®)', 7, '2020-07-22 13:39:03', '2020-07-22 13:39:03'),
(16, 'Infliximab (Remicade®)', 7, '2020-07-22 13:39:15', '2020-07-22 13:39:15'),
(17, 'Adalimumab (Humira®)', 7, '2020-07-22 13:39:27', '2020-07-22 13:39:27'),
(18, 'Tylenol®', 8, '2020-07-22 13:40:49', '2020-07-22 13:40:49'),
(19, 'Naproxen (Aleve®)', 9, '2020-07-22 13:41:14', '2020-07-22 13:41:14'),
(22, 'Corticosteroid injections', 3, '2020-08-06 19:26:18', '2020-08-06 19:26:18'),
(23, 'Methotrexate(Metoject®, Rheumatrex®)', 6, '2020-08-06 19:27:02', '2020-08-06 19:27:02'),
(24, 'Sulfasalazine(Metoject®, Rheumatrex®)', 6, '2020-08-06 19:27:13', '2020-08-06 19:27:13'),
(25, 'Leflunomide (Arava®)', 6, '2020-08-06 19:27:29', '2020-08-06 19:27:29'),
(26, 'Anakinra (Kineret®)', 7, '2020-08-06 19:28:16', '2020-08-06 19:28:16'),
(27, 'Etanercept (Erelzi®)', 7, '2020-08-06 19:28:27', '2020-08-06 19:28:27'),
(28, 'Infliximab (Inflectra® and Renflexis®) biosimilar', 7, '2020-08-06 19:28:46', '2020-08-06 19:28:46'),
(29, 'Ibuprofen (Advil®)', 9, '2020-08-06 19:30:29', '2020-08-06 19:30:29'),
(30, 'Diclofenac (Voltaren®)', 10, '2020-08-06 19:30:52', '2020-08-06 19:30:52');

--
-- Dumping data for table `motivations`
--

INSERT INTO `motivations` (`id`, `level`, `user_id`, `created_at`, `updated_at`) VALUES
(2, 7.5, NULL, '2020-06-06 23:02:10', '2020-06-06 23:02:10'),
(3, 9, 7, '2020-06-08 18:13:13', '2020-08-06 03:32:32'),
(4, 7, 69, '2020-08-10 21:26:25', '2020-08-23 03:17:49'),
(5, 7, 81, '2020-08-21 14:54:52', '2020-08-21 14:54:52');

--
-- Dumping data for table `pain_areas`
--

INSERT INTO `pain_areas` (`id`, `ankles`, `elbows`, `hips`, `jaw`, `knees`, `lower_back`, `shoulders`, `wrists`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 0, 0, 0, 0, 0, 0, 0, 0, 7, '2020-06-03 23:49:34', '2020-08-10 05:59:00'),
(2, 1, 1, 0, 0, 0, 1, 0, 1, 15, '2020-06-23 03:49:59', '2020-06-23 03:49:59'),
(3, 0, 0, 1, 0, 1, 1, 0, 0, NULL, '2020-06-23 03:50:16', '2020-06-23 03:50:16'),
(4, 1, 1, 0, 0, 1, 1, 0, 0, NULL, '2020-06-23 03:50:27', '2020-06-23 03:50:27'),
(5, 1, 1, 1, 1, 0, 0, 0, 0, 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(6, 0, 0, 0, 1, 0, 0, 1, 0, 69, '2020-08-10 21:22:12', '2020-08-23 02:51:55'),
(7, 0, 0, 0, 0, 0, 0, 0, 0, 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `pain_levels`
--

INSERT INTO `pain_levels` (`id`, `level`, `user_id`, `created_at`, `updated_at`) VALUES
(7, 3.5, 7, '2020-06-08 16:15:05', '2020-08-10 05:59:00'),
(8, 4.5, 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(9, 7.5, 69, '2020-08-10 21:22:12', '2020-08-23 02:51:55'),
(10, 7, 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `preferences`
--

INSERT INTO `preferences` (`id`, `description`, `recommends`, `left_label`, `right_label`, `reversed`, `threshold`, `created_at`, `updated_at`) VALUES
(1, 'Relieving pain immediately', 1, 'Not Important at All', 'Very Important', 0, 7, '2020-05-24 23:22:25', '2020-07-27 23:42:41'),
(2, 'Avoiding pain medications on top of my prescribed arthritis medication', 0, 'Not Important at All', 'Very Important', 0, 7.5, '2020-05-24 23:22:37', '2020-05-24 23:22:37'),
(3, 'Using treatments that help me relax', 1, 'Not Important at All', 'Very Important', 0, 7, '2020-05-24 23:22:53', '2020-05-24 23:22:53'),
(4, 'Using nutritional approaches that help me stay healthy ', 1, 'Not Important at All', 'Very Important', 0, 7, '2020-05-29 02:36:04', '2020-05-29 02:36:04'),
(5, 'Using treatments that help me stay active', 1, 'Not Important at All', 'Very Important', 0, 7, '2020-05-29 02:36:30', '2020-05-29 02:36:30'),
(6, 'Using treatments that help me learn to deal with JIA and its symptoms', 1, 'Not Important at All', 'Very Important', 0, 7, '2020-05-29 02:36:40', '2020-06-22 21:38:24');

--
-- Dumping data for table `preference_category`
--

INSERT INTO `preference_category` (`created_at`, `updated_at`, `category_id`, `preference_id`) VALUES
('2020-07-04 19:34:28', '2020-07-04 19:34:28', 2, 3),
('2020-07-04 19:33:50', '2020-07-04 19:33:50', 3, 2),
('2020-07-04 19:35:24', '2020-07-04 19:35:24', 4, 5),
('2020-07-27 23:25:52', '2020-07-27 23:25:52', 5, 1),
('2020-07-04 19:35:30', '2020-07-04 19:35:30', 6, 6),
('2020-07-04 19:35:15', '2020-07-04 19:35:15', 7, 4);

--
-- Dumping data for table `preference_texts`
--

INSERT INTO `preference_texts` (`id`, `text`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'factor test', 7, '2020-07-03 06:45:58', '2020-08-10 06:02:26'),
(2, 'none', 69, '2020-08-10 21:23:20', '2020-08-21 03:08:14'),
(3, NULL, 81, '2020-08-21 14:54:37', '2020-08-21 14:54:37');

--
-- Dumping data for table `prescribed_texts`
--

INSERT INTO `prescribed_texts` (`id`, `text`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'req user id', 7, '2020-07-03 04:27:01', '2020-08-10 05:59:00'),
(2, 'Test text updateds', 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(3, 'Update', 69, '2020-08-10 21:22:12', '2020-08-23 02:51:55'),
(4, '', 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `results`
--

INSERT INTO `results` (`id`, `name`, `score`, `statistics`, `study_id`, `created_at`, `updated_at`) VALUES
(15, 'Custom-Made Orthotics', 73, '73 out of 100 youth with JIA have less pain', 2, '2020-08-10 05:42:42', '2020-08-10 05:42:42'),
(16, 'Store-Bought Insoles', 30, '30 out of 100 youth with JIA have less pain', 2, '2020-08-10 05:42:56', '2020-08-10 17:43:09'),
(17, 'Custom made orthotics', 71, '71 out of 100 youth with JIA have less pain', 1, '2020-08-10 05:43:20', '2020-08-10 17:43:05'),
(18, 'Supportive Shoes', 16, '16 out of 100 youth with JIA have less pain', 1, '2020-08-10 05:43:36', '2020-08-10 05:43:36'),
(19, 'Wrist Splints Worn at Night', 66, '66 out of 100 adults with RA have less pain', 8, '2020-08-10 05:44:06', '2020-08-10 05:44:06'),
(20, 'Wrist Splints Worn for a Short Time', 34, '34 out of 100 adults with RA have less pain', 8, '2020-08-10 05:44:27', '2020-08-10 05:44:27'),
(21, 'Night Mouth Guard', 100, '100 out of 100 youth with jaw pain have less pain', 9, '2020-08-10 05:44:56', '2020-08-10 05:44:56'),
(22, 'Relaxation Therapy', 9, '9 out of 100 youth with jaw pain have less pain', 9, '2020-08-10 05:45:13', '2020-08-10 05:45:13'),
(23, 'Night Mouth Guard & Brief Information', 89, '89 out of 100 youth with jaw pain have less pain', 9, '2020-08-10 05:45:45', '2020-08-10 05:45:45'),
(24, 'Brief Information', 9, '9 out of 100 youth with jaw pain have less pain', 9, '2020-08-10 05:46:07', '2020-08-10 05:46:07'),
(25, 'Pilates', 75, '75 out of 100 youth with JIA have less pain', 11, '2020-08-10 05:47:00', '2020-08-10 05:47:00'),
(26, 'General Exercise Program', 20, '20 out of 100 youth with JIA have less pain', 11, '2020-08-10 05:47:15', '2020-08-10 05:47:15'),
(27, 'Yoga', 37, '37 out of 100 adults with RA have less pain', 3, '2020-08-10 05:47:39', '2020-08-10 05:47:39'),
(28, 'Waitlist', 13, '13 out of 100 adults with RA have less pain', 3, '2020-08-10 05:47:52', '2020-08-10 05:47:52'),
(29, 'Cardio Exercises', 49, '49 out of 100 adults with RA have less pain', 12, '2020-08-10 05:48:20', '2020-08-10 05:48:20'),
(30, 'Stretching', 19, '19 out of 100 adults with RA have less pain', 12, '2020-08-10 05:48:37', '2020-08-10 05:48:37'),
(31, 'Water Exercise', 48, '48 out of 100 adults with RA have less pain', 13, '2020-08-10 05:49:08', '2020-08-10 05:49:08'),
(32, 'Normal Daily Activities', 13, '13 out of 100 adults with RA have less pain', 13, '2020-08-10 05:49:24', '2020-08-10 05:49:24'),
(33, 'Cardio Exercises', 49, '49 out of 100 adults with RA have less pain', 15, '2020-08-10 05:49:50', '2020-08-10 05:49:50'),
(34, 'Stretching', 19, '19 out of 100 adults with RA have less pain', 15, '2020-08-10 05:50:06', '2020-08-10 05:50:06'),
(35, 'Massage', 96, '96 out of 100 youth with JIA have less pain', 16, '2020-08-10 05:50:30', '2020-08-10 05:50:30'),
(36, 'Relaxation', 12, '12 out of 100 youth with JIA have less pain', 16, '2020-08-10 05:50:45', '2020-08-10 05:50:45'),
(37, 'Educational Website', 39, '39 out of 100 youth with JIA have less pain', 24, '2020-08-10 05:51:15', '2020-08-10 05:51:15'),
(38, 'Telephone Support', 14, '14 out of 100 youth with JIA have less pain', 24, '2020-08-10 05:51:33', '2020-08-10 05:51:33'),
(39, 'Joint Protection Program', 39, '39 out of 100 adults with RA have less pain', 25, '2020-08-10 05:52:09', '2020-08-10 17:43:22'),
(40, 'Standard Educational Program', 22, '22 out of 100 adults with RA have less pain', 25, '2020-08-10 05:52:34', '2020-08-10 05:52:34'),
(41, 'Massage', 96, '96 out of 100 youth with JIA have less pain', 29, '2020-08-10 05:55:20', '2020-08-10 05:55:20'),
(42, 'Relaxation', 12, '12 out of 100 youth with JIA have less pain', 29, '2020-08-10 05:55:46', '2020-08-10 05:55:46'),
(43, 'Fish Oil', 33, '33 out of 100 adults with RA have less pain', 39, '2020-08-10 05:56:11', '2020-08-10 05:56:11'),
(44, 'Placebo (fake pill)', 15, '15 out of 100 adults with RA have less pain', 39, '2020-08-10 05:56:33', '2020-08-10 05:56:33'),
(45, 'Glucosamine Hydrochloride', 49, '49 out of 100 adults with RA have less pain', 40, '2020-08-10 05:57:02', '2020-08-10 05:57:02'),
(46, 'Placebo', 15, '15 out of 100 adults with RA have less pain', 40, '2020-08-10 05:57:16', '2020-08-10 05:57:16');

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`id`, `selection`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'true', NULL, '2020-05-24 23:18:36', '2020-05-24 23:18:36'),
(4, 'true', 7, '2020-06-10 05:19:16', '2020-08-06 03:32:32'),
(5, 'false', 69, '2020-08-10 21:26:25', '2020-08-23 03:17:49'),
(6, NULL, 81, '2020-08-21 14:54:52', '2020-08-21 14:54:52');

--
-- Dumping data for table `studies`
--

INSERT INTO `studies` (`id`, `name`, `does_work`, `is_safe`, `believe_research`, `rating`, `methods`, `treatments`, `treatment_results`, `reference`, `pub_med`, `treatment_id`, `created_at`, `updated_at`) VALUES
(1, 'Comparing custom-made foot orthotics to supportive shoes', 'A study of 27 youth with JIA showed that custom-made foot orthotics may reduce pain better than supportive shoes (with good arches) after 3 months.', 'Youth with JIA in this study had no side effects.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Forty youth with JIA and foot pain were randomly divided into three groups. One group wore custom-made foot orthotics with supportive pads,anothergroup was given store-bought padded insolesmade of neoprene to help absorb shock. The thirdgroup was given supportive sport shoes to wear. Youth wore their new sport shoes for 3 months.', 'The custom-made foot orthotics with supportive pads with shock absorbing material. Another group was given store-bought padded insoles made of neoprene, and the third group was given supportive athletic shoes to wear. Youth wore their new sport shoes every time the youth would wear shoes for 3 months.', 'The custom-made foot orthotics reduced pain better than the supportive athletic shoes: according to our calculations, 55% morepeople improved in the custom-made foot orthotics group compared to the sport shoes group. The custom-made foot orthotics also reduced pain better than the prefabricated flat neoprene shoe inserts.', 'Powell, M., Seid, M., & Szer, I. S. (2005). Efficacy of custom foot orthotics in improving pain and functional status in children with juvenile idiopathic arthritis: a randomized trial.The Journal of rheumatology,32(5), 943-950.', 'https://www.ncbi.nlm.nih.gov/pubmed/15868634', 1, '2020-06-14 21:45:18', '2020-06-14 21:45:18'),
(2, 'Comparing custom-made foot orthotics to those that are not customized (insoles bought in stores)', 'A study of 60 youth with JIA showed that custom-made foot orthotics may reduce pain better than store-bought insoles after 6 months.', 'Youth with JIA in this study had no side effects.', 'Yes; it is a high-quality study. It means you can trust these results.', 5, 'Sixty youth with JIA were randomly divided into two groups. One group was given fitted foot orthotics with customized chair-side corrections and the other group was given foot orthotics without corrections.', 'The fitted foot orthotics with customized chair-side corrections were Slimflex-Plus and the foot orthotics without corrections were made with leather board (1 mm) without corrections. Youth wore them gradually for the first few days and then used them in all shoes at all times including during exercise for 6 months.', 'The fitted foot orthotics with customized chair-side corrections reduced pain better than the foot orthotics without corrections: according to our calculations, 43% morepeople improved in the fitted foot orthotics with customized chair-side corrections group compared to the foot orthotics without corrections group.', 'Coda, A., Fowlie, P. W., Davidson, J. E., Walsh, J., Carline, T., & Santos, D. (2014). Foot orthoses in children with juvenile idiopathic arthritis: a randomised controlled trial.Archives of disease in childhood,99(7), 649-651.', 'https://www.ncbi.nlm.nih.gov/pubmed/24636956', 1, '2020-06-15 00:58:01', '2020-06-15 00:58:01'),
(3, 'Comparing yoga to being on a waitlist (not doing yoga and not doing a lot of physical activity)', 'A study of 53 adults with RA showed that yoga may reduce pain better than being on a waitlist after 2 and half months. Note that there were no studies in JIA.', 'There were no side effects in this study.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Seventy-five adults with rheumatoid arthritis or knee osteoarthritis were randomly divided into two groups. One group was assigned to an Yoga program and one group was waitlisted.', 'The IyengarYoga program consisted of 60-min classes held twice weekly for 8 weeks at two hospital-affiliated fitness centers. The program was designed by a registered yoga therapist with input from the Johns Hopkins Arthritis Center faculty. Two experienced yoga therapists taught the classes. Classes began with questions/comments, breathing exercises and chanting, warm-up and moving sequence, and isometric poses to increase strength, flexibility, and balance. Classes ended with deep relaxation, a closing chant, and meditation. Poses included gentle forward bends, backbends, twists, balances, standing, sitting, and lying poses, and were modified for individuals as needed. Written instructions with pictures for home practice and information on the possible benefits of yoga were given weekly. The waitlist group received usual care for 8 weeks and was asked to continue with existing levels of physical activity and inform coordinators of changes in health or arthritis medications.', 'Iyengar yoga reduced pain better than being on a waitlist:according to our calculations,24% more people improved in the yoga group compared to the waitlist group.', 'Moonaz, S. H., Bingham, C. O., Wissow, L., & Bartlett, S. J. (2015). Yoga in Sedentary Adults with Arthritis: Effects of a Randomized Controlled Pragmatic Trial.The Journal of rheumatology,42(7), 1194–1202. doi:10.3899/jrheum.141129', 'https://www.ncbi.nlm.nih.gov/pubmed/25834206', 5, '2020-06-15 01:02:36', '2020-06-15 01:02:36'),
(8, 'Comparing wrist splints worn at night to wrist splints only worn for a short time.', 'A study of 50 adults with RA showed that wrist splints worn at night may reduce pain after 3 months more than wrist splints worn only for a short time. Note that there were no studies in JIA.', 'Adults with RA in this study had no side effects.', 'Probably; it is a moderate-quality study. It means that these results are probably true.', 3, 'Fifty adults with rheumatoid arthritis were randomly divided into two groups: wrist splints worn at night or wrist splints worn only during evaluations, for 90 days.', 'A 3.2-mm thick positioning wrist splint was individually manufactured with thermoplast and fixed with Velcro. The treatment group would wear this splint at night, and the control group would only wear it during evaluations.', 'Wrist splints worn at night reduced pain better than wrist splints worn only during evaluation: according to our calculations, 32% more people improved in the wrist splints worn at night group compared to the wrist splint worn only during evaluation group.', 'Silva, A. C., Jones, A., Silva, P. G., & Natour, J. (2008). Effectiveness of a night-time hand positioning splint in rheumatoid arthritis: a randomized controlled trial.Journal of rehabilitation medicine,40(9), 749-754.', 'https://www.ncbi.nlm.nih.gov/pubmed/18843428', 31, '2020-08-09 01:15:23', '2020-08-09 01:15:23'),
(9, 'Comparing mouth guards to relaxation therapy (both with brief information).', 'A study of 83 youth with jaw pain showed that mouth guards may reduce pain better than relaxation therapy after 6 months. Note that there were no studies in JIA.', 'Youth who used a night mouth guard in this study had no more side effects than youth who did not use a night mouth guard.', 'Yes; it is a high-quality study. It means you can trust these results.', 5, 'One-hundred-and-twenty-two youth who reported pain at least once a week for three months and who had a temporomandibular disorder pain diagnosis were randomly divided into three groups. One group was given brief information and a mouth guard, one group was given brief information and relaxation therapy and one group was given brief information.', 'Youth who received either brief information and a mouth guard or brief information and relaxation received the treatment in 4 sessions done at 2-week intervals. Those who received brief information alone received information in one session. Those who received the mouth guard were asked to use it every night until the evaluation at 3 months and then when they felt they needed it until the 6-month follow-up. Relaxation training was given to teach youth a quick method to use in everyday situations when they felt bodily tension and pain. Brief information was a 30 minute session given to each youth that explained knowledge related to the disease and about pain and stress.', 'The brief information and mouth guard reduced pain more than brief information and relaxation therapy:according to our calculations, 91% more people improved in the brief information and mouth guard group compared to the brief information and relaxation therapy group. The brief information and mouth guard reduced pain more than brief information:according to our calculations, 80% more people improved in the brief information and mouth guard group compared to the brief information group.', 'Wahlund, K. (2003). Temporomandibular disorders in adolescents. Epidemiological and methodological studies and a randomized controlled trial.Swedish dental journal. Supplement, (164), inside-front.', 'https://www.ncbi.nlm.nih.gov/pubmed/14717039', 49, '2020-08-09 01:17:58', '2020-08-09 01:17:58'),
(10, 'Comparing mouth guards with brief information to brief information alone.', 'A study of 81 youth with jaw pain showed that mouth guards and brief information may reduce pain better than brief information alone after 6 months. Note that there were no studies in JIA.', 'Youth who used a night mouth guard in this study had no more side effects than youth who did not use a night mouth guard.', 'Yes; it is a high-quality study. It means you can trust these results.', 5, 'One-hundred-and-twenty-two youth who reported pain at least once a week for three months and who had a temporomandibular disorder pain diagnosis were randomly divided into three groups. One group was given brief information and a mouth guard, one group was given brief information and relaxation therapy and one group was given brief information.', 'Youth who received either brief information and a mouth guard or brief information and relaxation received the treatment in 4 sessions done at 2-week intervals. Those who received brief information alone received information in one session. Those who received the mouth guard were asked to use it every night until the evaluation at 3 months and then when they felt they needed it until the 6-month follow-up. Relaxation training was given to teach youth a quick method to use in everyday situations when they felt bodily tension and pain. Brief information was a 30 minute session given to each youth that explained knowledge related to the disease and about pain and stress.', 'The brief information and mouth guard reduced pain more than brief information and relaxation therapy: according to our calculations, 91% more people improved in the brief information and mouth guard group compared to the brief information and relaxation therapy group. The brief information and mouth guard reduced pain more than brief information: according to our calculations, 80% more people improved in the brief information and mouth guard group compared to the brief information group.', 'Wahlund, K. (2003). Temporomandibular disorders in adolescents. Epidemiological and methodological studies and a randomized controlled trial. Swedish dental journal. Supplement, (164), inside-front.', 'https://www.ncbi.nlm.nih.gov/pubmed/14717039', 49, '2020-08-09 16:31:57', '2020-08-09 16:31:57'),
(11, 'Comparing pilates to conventional exercise program', 'A study of 50 youth with JIA showed that pilates may reduce pain better than a general exercise program after 6 months.', 'Youth with JIA in this study had no side effects.', 'Probably; it is a moderate-quality study. It means that these results are probably true.', 3, 'Fifty youth with JIA were randomly divided into two groups. One group was given a conventional exercise program and one group participated in a Pilates exercise program. Each exercise program was done under the supervision of a trained physical therapist. The sessions were 50 minutes and occurred twice per week for 6 months.', 'The Pilates program followed STOTT-PILATES methods and included floor exercises and exercises with the Reformer, Stability Chair, Cadillac and Ladder Barrel. The exercises were adapted to the age and physical and cognitive abilities of youth. Five repetitions of each exercise were done for the first 3 classes, 8 repetitions for the next 3 classes, and 10 repetitions in subsequent classes. The conventional exercise program was also adapted and was available as a handout to patients. It included a warm-up, a workout, and a cooling-down period. The exercises were done with a series of 6 to 10 repetitions in the supine, prone, and seated positions. The stretching exercise positions were maintained for 30 seconds.', 'The Pilates exercise reduced pain better than the conventional exercise program: according to our calculations, 55% more people improved in the Pilates group compared to the conventional exercise group.', 'Mendonça, T. M., Terreri, M. T., Silva, C. H., Neto, M. B., Pinto, R. M., Natour, J., & Len, C. A. (2013). Effects of Pilates exercises on health-related quality of life in individuals with juvenile idiopathic arthritis.Archives of physical medicine and rehabilitation,94(11), 2093-2102.', 'https://www.ncbi.nlm.nih.gov/pubmed/23806610\"', 34, '2020-08-10 01:21:49', '2020-08-10 01:21:49'),
(12, 'Comparing cardio exercises to stretching', 'A study of 40 adults with RA showed that cardio exercises may reduce pain better than stretching after 2 weeks. Note that there were no studies in JIA', 'There were no side effects in this study.', 'Not sure; it is a low quality study. It means that we are not sure about these results.', 2, 'Forty adults with rheumatoid arthritis were randomly divided into two groups. One group was assigned to an aerobics exercise program and the other was assigned to a range of motion (ROM) exercise program.', 'The program consisted of five 20-minute sessions weekly for 2 weeks. In the ROM exercise program, all joint movements of the upper and lower extremities were exercised throughout the entire possible ROM. The movements were active and done at a low pace. The exercises were individually supervised by exercise therapists and performed in prone, sitting and standing positions. The aerobics exercise program was done on a treadmill while the heart rate was maintained at 60% of the age predicted maximum heart rate. Evaluations were done at the end of the first and second week.', 'The aerobics program reduced pain better than the ROM exercise program:according to our calculations,30more people improved in the aerobics group compared to the ROM exercise group.', 'Melikoglu, M. A., Karatay, S., Senel, K., & Akcay, F. (2006). Association between dynamic exercise therapy and IGF-1 and IGFBP-3 concentrations in the patients with rheumatoid arthritis.Rheumatology international,26(4), 309-313.', 'https://www.ncbi.nlm.nih.gov/pubmed/15933856', 35, '2020-08-10 01:23:38', '2020-08-10 01:23:38'),
(13, 'Comparing water activities to normal daily activities', 'A study of 30 adults with RA showed that water exercises may reduce pain better than normal daily activities after 3 months. Note that there were no studies in JIA', 'There were no side effects in this study.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Thirty-four adults with rheumatoid arthritis were randomly divided into two groups. One group was assigned to a water exercise program and the other group was assigned to normal daily activity.', 'The water exercise program emphasized muscle strength activity and consisted of two sessions a week for 12 weeks. Sessions lasted 45 minutes the first two weeks and gradually increased to 60 minutes the last two weeks.', 'The water exercise program reduced pain better than normal daily activity:according to our calculations,35% more people improved in the water exercise group compared to the normal daily activity group.', 'Rintala, P., Kettunen, H., & McCubbin, J. A. (1996). Effects of a water exercise program for individuals with rheumatoid arthritis.Research in Sports Medicine: An International Journal,7(1), 31-38.', 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3415190/', 50, '2020-08-10 01:24:56', '2020-08-10 17:42:15'),
(14, NULL, 'Researchers need to explore whether individualized exercise programs reduce pain. There isn’t enough research yet in JIA. However, individualized exercise programs may help reduce pain among adults.', 'There are rare side effects when supervised by a health professional.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 51, '2020-08-10 01:25:44', '2020-08-10 01:25:44'),
(15, 'Comparing stretching to cardio exercises', 'A study of 40 adults with RA showed that cardio exercises may reduce pain better than stretching after 2 weeks. However, some adults with RA still improved with stretching. Note that there were no studies in JIA.', 'There were no side effects in this study.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Forty adults with rheumatoid arthritis were randomly divided into two groups. One group was assigned to an aerobics exercise program and the other was assigned to a range of motion (ROM) exercise program.', 'The program consisted of five 20-minute sessions weekly for 2 weeks. In the ROM exercise program, all joint movements of the upper and lower extremities were exercised throughout the entire possible ROM. The movements were active and done at a low pace. The exercises were individually supervised by exercise therapists and performed in prone, sitting and standing positions. The aerobics exercise program was done on a treadmill while the heart rate was maintained at 60% of the age predicted maximum heart rate. Evaluations were done at the end of the first and second week.', 'The aerobics program reduced pain better than the ROM exercise program:according to our calculations, 30 more people improved in the aerobics group compared to the ROM exercise group.', 'Melikoglu, M. A., Karatay, S., Senel, K., & Akcay, F. (2006). Association between dynamic exercise therapy and IGF-1 and IGFBP-3 concentrations in the patients with rheumatoid arthritis. Rheumatology international,26(4), 309-313.', 'https://www.ncbi.nlm.nih.gov/pubmed/15933856', 52, '2020-08-10 01:27:10', '2020-08-10 01:27:10'),
(16, 'Comparing massage to relaxation techniques', 'A study of 20 youth with JIA showed that massage may reduce pain better than relaxation after 1 month.', 'There were no side effects for youth with JIA.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Twenty youth with JIA were randomly divided into two groups. One group received massage therapy and the other group received relaxation therapy.', 'The massage therapy group received a daily 15-minute massage by one of their parents for 30 days. During the massage, the child was first placed in a supine position and the parent applied oil and stroked the child’s face, stomach, legs and arms. Then, in a prone position, the child’s back was massaged. The relaxation therapy group experienced a 15-minute relaxation session with one of their parents (who received training and written instructions) for 30 days. During the relaxation session, the child laid on his/her back and was instructed to tighten and relax different muscles in the face, back, arms, hands, thighs, calves and feet.', 'Massage therapy reduced pain better than relaxation therapy:according to our calculations, 84% more people improved in the massage group compared to the relaxation group.', 'Field, T., Hernandez-Reif, M., Seligmen, S., Krasnegor, J., Sunshine, W., Rivas-Chacon, R., ... & Kuhn, C. (1997). Juvenile rheumatoid arthritis: benefits from massage therapy.Journal of pediatric Psychology,22(5), 607-617.', 'https://www.ncbi.nlm.nih.gov/pubmed/9383925', 2, '2020-08-10 01:28:37', '2020-08-10 01:28:37'),
(17, NULL, 'Researchers need to explore whether occupational therapy interventions reduce pain in JIA. There isn’t enough research yet.', 'There are rare side effects.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 36, '2020-08-10 01:29:39', '2020-08-10 01:29:39'),
(18, NULL, 'Researchers need to explore whether physiotherapy interventions reduce pain in JIA. There isn’t enough research yet in JIA. However, physiotherapy interventions may help reduce pain among adults.', 'There are rare side effects.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 56, '2020-08-10 01:30:08', '2020-08-10 01:30:08'),
(19, NULL, 'Researchers need to explore whether heat packs reduce pain in JIA. There isn’t enough research yet.', 'There are rare serious side effects. Heat burns can occur if packs, baths or showers are too hot. It is suggested not to use heat packs if the joints are already red and warm because it may worsen the inflammation in your joints.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 57, '2020-08-10 01:30:28', '2020-08-10 01:30:28'),
(20, NULL, 'Researchers need to explore whether cold packs reduce pain in JIA. There isn’t enough research yet.', 'There are rare serious side effects. Ice burns can occur if ice is used for too long.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 58, '2020-08-10 01:30:49', '2020-08-10 01:30:49'),
(21, NULL, 'Researchers need to explore whether acupuncture reduces pain in JIA. There isn’t enough research yet.', 'Mild side effects such as pain, bruising, bleeding and worsening of symptoms can occur. Serious side effects are rare when health providers are well-trained.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 59, '2020-08-10 01:31:30', '2020-08-10 01:31:30'),
(22, NULL, 'Researchers need to explore whether chiropractic treatments reduce pain for youth who have JIA. There isn’t enough research yet.', 'Side effects include soreness, stiffness and headaches. More serious side effects are dislocations and fractures. Serious adverse events may be associated with pediatric manipulation of the spine.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 37, '2020-08-10 02:23:30', '2020-08-10 02:23:30'),
(23, NULL, 'Researchers need to explore whether osteopathy  reduces pain for youth who have JIA. There isn’t enough research yet.', 'There are rare side effects when health providers are well-trained. Minor side effects are worsening of symptoms, irritability, soreness, headache, behaviour problems and pain. You may feel sore within 24 to 48 hours after the first session.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 6, '2020-08-10 02:23:50', '2020-08-10 02:23:50'),
(24, 'Comparing an educational website to telephone support', 'A study of 46 youth with JIA showed that internet self-management (“Teens Taking Charge”) may reduce pain better than telephone support after about 2 months.', 'There were no side effects for youth with JIA in this study.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Forty-six youth with JIA were randomly divided into two groups. One group was assigned to an internet self-management program and the other received telephone support to discuss self-management strategies.', 'The internet self-management program consisted of 20-30 minute modules completed weekly for 12 weeks and included self-management strategies, disease-specific information and social support that was available in English and French. Youth were contacted by a coach on a weekly basis to review the previous week’s module, homework and goals and to provide guidance and help solve problems. Youth also developed their own personal goals for the program and kept track of their progress in a journal. The telephone support program included weekly phone calls with a trained research assistant to discuss the adolescent’s best efforts at managing their JIA.', 'Internet self-management reduced pain better than telephone support:according to our calculations,25% more people improved in the internet self-management group compared to the telephone support group.', 'Stinson, J. N., McGRATH, P. J., Hodnett, E. D., Feldman, B. M., Duffy, C. M., Huber, A. M., ... & Campillo, S. (2010). An internet-based self-management program with telephone support for adolescents with arthritis: a pilot randomized controlled trial.The Journal of Rheumatology,37(9), 1944-1952.', 'https://www.ncbi.nlm.nih.gov/pubmed/20595280', 7, '2020-08-10 02:25:23', '2020-08-10 02:25:23'),
(25, 'Comparing joint protection program to a standard educational program', 'A study of 127 adults with RA showed that joint protection programs reduce pain more than standard educational programs. Note that there were no studies in JIA.', 'There are rare side effects.', 'Probably; it is a moderate-quality study. It means that these results are probably true.', 3, 'One hundred and twenty-seven adults with RA were randomly divided into two groups. One group attended the joint protection programme and the other was assigned to attend the standard programme. Assessments were made at baseline, then after six and after twelve months.', 'Joint protection programme (information pack, workbook with the principles of joint protection with photographs of these methods) vs. Standard programme (short talks on drug treatments, alternative therapies, diet, exercise, rest and positioning, energy conservation, joint protection, assistive devices, splinting, pain and relaxation and other methods, demonstration and practice of exercise, joint protection and relaxation was included –15 to 45 minutes for each).', 'Joint protection programme reduced pain better than the standard programme:according to our calculations,17% more people improved in the joint protection programme group compared to the standard programme group', 'Hammond, A., & Freeman, K. (2001). One‐year outcomes of a randomized controlled trial of an educational–behavioural joint protection programme for people with rheumatoid arthritis.Rheumatology,40(9), 1044-1051.', 'https://www.ncbi.nlm.nih.gov/pubmed/11561117', 53, '2020-08-10 02:26:42', '2020-08-10 02:26:42'),
(26, NULL, 'Researchers need to explore whether a good sleeping routine reduces pain for youth who have JIA. There isn’t enough research yet. However, we know that better sleep can reduce your pain.', 'There are no side effects.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 61, '2020-08-10 02:27:06', '2020-08-10 02:27:06'),
(27, NULL, 'Researchers need to explore whether distraction reduces pain for youth who have JIA. There isn’t enough research yet.', 'There are rare side effects.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 38, '2020-08-10 02:47:08', '2020-08-10 02:47:08'),
(28, NULL, 'Researchers need to explore whether hypnosis reduces pain for youth who have JIA. There isn’t enough research yet in JIA. However, hypnosis may help reduce pain among adults.', 'Side effects include emotional upset, headache, vomiting, fainting, and crying.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 62, '2020-08-10 02:48:51', '2020-08-10 02:48:51'),
(29, 'Comparing relaxation techniques to massage', 'A study of 20 youth with JIA showed that massage may reduce pain better than relaxation after 1 month. However, some of the youth with JIA still improved with relaxation. Some relaxation techniques, such as guided imagery, may also help reduce pain among youth and adults with chronic pain.', 'There were no side effects for youth with JIA.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Twenty youth with JIA were randomly divided into two groups. One group received massage therapy and the other group received relaxation therapy.', 'The massage therapy group received a daily 15-minute massage by one of their parents for 30 days. During the massage, the child was first placed in a supine position and the parent applied oil and stroked the child’s face, stomach, legs and arms. Then, in a prone position, the child’s back was massaged. The relaxation therapy group experienced a 15-minute relaxation session with one of their parents (who received training and written instructions) for 30 days. During the relaxation session, the child laid on his/her back and was instructed to tighten and relax different muscles in the face, back, arms, hands, thighs, calves and feet.', 'Massage therapy reduced pain better than relaxation therapy: according to our calculations, 84% more people improved in the massage group compared to the relaxation group.', 'Field, T., Hernandez-Reif, M., Seligmen, S., Krasnegor, J., Sunshine, W., Rivas-Chacon, R., ... & Kuhn, C. (1997). Juvenile rheumatoid arthritis: benefits from massage therapy.Journal of pediatric Psychology,22(5), 607-617.', 'https://www.ncbi.nlm.nih.gov/pubmed/9383925', 55, '2020-08-10 02:56:44', '2020-08-10 02:56:44'),
(30, NULL, 'Researchers need to explore whether mindfulness reduces pain for youth who have JIA. There isn’t enough research yet.', 'There are rare side effects.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 63, '2020-08-10 02:57:19', '2020-08-10 02:57:19'),
(31, NULL, 'Researchers need to explore whether cognitive-behavioural therapy reduces pain for youth who have JIA. There isn’t enough research yet in JIA. However, cognitive-behavioural therapy seems to help reduce pain among adults with chronic pain.', 'There are rare no side effects.\"', NULL, 0, NULL, NULL, NULL, NULL, NULL, 64, '2020-08-10 02:58:16', '2020-08-10 02:58:16'),
(32, NULL, 'Researchers need to explore whether a healthy diet reduces pain for youth who have JIA. There isn’t enough research yet. It may reduce inflammation, but each person is different.', 'There are no side effects except potential intolerances and allergies to some foods.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 69, '2020-08-10 02:59:27', '2020-08-10 02:59:27'),
(33, NULL, 'Researchers need to explore whether Acetaminophen reduces pain for youth who have JIA. There isn’t enough research yet. There are a few old studies of low quality that tested Acetaminophen for adults with rheumatoid arthritis (RA) pain. It shows that acetaminophen may help reduce pain.', 'There are few side effects, but at higher doses, it can be toxic to the liver.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 54, '2020-08-10 03:00:14', '2020-08-10 03:00:14'),
(34, NULL, 'Researchers need to explore whether NSAIDs in creams reduce pain for youth who have JIA. There isn’t enough research yet in JIA. A review of the literature showed that they may reduce pain in adults with osteoarthritis (which is another type of arthritis).', 'There are few side effects such as skin irritation. NSAIDs in creams should not be used in combination with other oral NSAIDs as it may increase the dose.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 65, '2020-08-10 03:00:42', '2020-08-10 03:00:42'),
(35, NULL, 'Researchers need to explore whether opioids reduce pain for youth who have JIA. There isn’t enough research yet in JIA.', 'You can become addicted to them  and they can cause slow breathing which could make you faint. Other possible side effects include constipation, drowsiness, itchiness, nausea, vomiting, mood changes and hallucinations.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 66, '2020-08-10 03:01:04', '2020-08-10 03:01:04'),
(36, NULL, 'Researchers need to explore whether marijuana and cannabinoids reduce pain for youth who have JIA. There isn’t enough research yet.', 'Serious side effects include brain changes, mood changes, anxiety, depression, a fast heartbeat, and it can make day-to-day tasks harder to do. It can also be addictive, meaning that having a bit could make you want more and more, even if you don’t need it. When marijuana is smoked, tars end up in your lungs, which could lead to cancer.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 67, '2020-08-10 03:03:31', '2020-08-10 03:03:31'),
(37, NULL, 'There isn’t enough research.', 'Aspirin® can cause Reye syndrome (a disease that can lead to permanent brain injury or death that can appear after a virus like a cold, flu, or chicken pox) in youth which affects the brain and liver and is very dangerous.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 68, '2020-08-10 03:04:03', '2020-08-10 03:04:03'),
(38, NULL, 'The Mediterranean diet may reduce inflammation. Researchers need to explore whether a healthy diet reduces pain for youth who have JIA. There isn’t enough research yet in JIA. However, the Mediterranean diet seems to help reduce pain among adults with rheumatoid arthritis.', 'There are no known side effects except potential intolerances and allergies to some foods.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 70, '2020-08-10 03:07:28', '2020-08-10 03:07:28'),
(39, 'Comparing fish oil to a placebo', 'A study of 97 of adults with RA showed that fish oil (Omega-3) may reduce pain better than placebo, which is a fake pill after 9 months. Note that there were no studies in JIA.', 'In the study there were no more side effects in the treatment than the placebo.', 'Probably;  it is a moderate-quality study. It means that these results are probably true.', 3, 'Fifty-eight adults with rheumatoid arthritis were randomly divided into two groups. One group received cod liver oil and the other group received placebo capsules.', 'The cod liver oil contained n-3 essential fatty acids (EFAs) and the placebo was an identical capsule. Both were taken daily for 9 months.', 'The cod liver oil reduced pain better than the placebo capsules: according to our calculations, 18% more people improved in the cod liver group compared to the placebo group.', 'Galarraga, B., Ho, M., Youssef, H. M., Hill, A., McMahon, H., Hall, C., ... & Belch, J. J. F. (2008). Cod liver oil (n-3 fatty acids) as a non-steroidal anti-inflammatory drugs paring agent in rheumatoid arthritis.Rheumatology,47(5), 665-669.', 'https://www.ncbi.nlm.nih.gov/pubmed/18362100', 71, '2020-08-10 03:10:32', '2020-08-10 03:10:32'),
(40, 'Comparing glucosamine hydrochloride to a placebo', 'A study of 51 adults with RA showed that glucosamine hydrochloride may reduce pain better than placebo after 3 months.', 'There were no reported side effects of glucosamine hydrochloride in this study. Individuals with allergies to shellfish should avoid glucosamine.', 'Not sure; it is a low-quality study. It means that we are not sure about these results.', 2, 'Fifty-one adults with rheumatoid arthritis were randomly divided into two groups. One group was given glucosamine hydrochloride tablets and the other group was given placebo tablets.', 'A daily dose of glucosamine hydrochloride was administered for 12 weeks. Participants were instructed to continue their previous treatment for rheumatoid arthritis in addition to the glucosamine or placebo.', 'Glucosamine hydrochloride reduces pain better than placebo:according to our calculations,34% more people improved in the glucosamine hydrochloride group compared to the placebo group.', 'Nakamura, H., Masuko, K., Yudoh, K., Kato, T., Kamada, T., & Kawahara, T. (2007). Effects of glucosamine administration on patients with rheumatoid arthritis.Rheumatology international,27(3), 213-218.', 'https://www.ncbi.nlm.nih.gov/pubmed/16953394', 72, '2020-08-10 05:33:16', '2020-08-10 05:33:16'),
(41, NULL, 'Researchers need to explore whether Vitamin D reduces pain for youth who have JIA. There isn’t enough research yet in JIA. However, Vitamin D may help reduce pain among adults.', 'It is important not to exceed 4,000 international units per day.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 73, '2020-08-10 05:33:34', '2020-08-10 05:33:34'),
(42, NULL, 'Researchers need to explore whether calcium  reduces pain for youth who have JIA. There isn’t enough research yet.', 'It is important not to exceed 3000 mg per day.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 74, '2020-08-10 05:33:54', '2020-08-10 05:33:54'),
(43, NULL, 'Researchers need to explore whether a vegetarian or vegan diet reduces pain for youth who have JIA. There isn’t enough research yet.', 'Some of these diets can be unhealthy, because of the lack of nutrients. They can lack in calories, which are important for growth, as well as protein, fatty acids, amino acids, iron, zinc, calcium and vitamins. Since vegan diets are deficient in omega-3 fatty acids, flaxseed, canola oils, walnuts and soy are recommended. Since they are often deficient in amino acids, quinoa, soy, and chia seeds can be added.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 75, '2020-08-10 05:34:21', '2020-08-10 05:34:21'),
(44, NULL, 'Researchers need to explore whether a gluten-free diet reduces pain for youth who have JIA. There isn’t enough research yet.', 'Some of the ingredients in processed gluten-free food can be unhealthy and people following this diet may lack in certain nutrients if they are not carefully planning such diets with a registered dietician.', NULL, 0, NULL, NULL, NULL, NULL, NULL, 76, '2020-08-10 05:34:44', '2020-08-10 05:34:44');

--
-- Dumping data for table `suggestions`
--

INSERT INTO `suggestions` (`id`, `title`, `description`, `created_at`, `updated_at`) VALUES
(1, 'Talk with your parents', NULL, '2020-05-24 23:15:06', '2020-05-24 23:15:06'),
(2, 'Talk with your health care team', NULL, '2020-05-24 23:15:18', '2020-05-24 23:15:18'),
(3, 'Find out where I can get treatments nearby', 'Your health care team may be able to connect you with other health care providers. You can also find lists of treatment providers online. Make sure you find a health care provider that is well-trained and experienced with juvenile arthritis.', '2020-05-24 23:15:57', '2020-05-24 23:15:57'),
(4, 'Find out how to pay for the treatments. (For example, does my health insurance pay for it?)', NULL, '2020-05-24 23:16:11', '2020-05-24 23:16:11');

--
-- Dumping data for table `treatments`
--

INSERT INTO `treatments` (`id`, `name`, `supervision`, `evidence_level`, `order_number`, `specification`, `description`, `traffic_level`, `traffic_description`, `experts_suggest`, `how_use`, `how_soon`, `cost`, `where`, `consider`, `image`, `treatment_classification_id`, `created_at`, `updated_at`) VALUES
(1, 'Custom-Made Foot Orthotics', 'HCP', 1, 1, 'legs', 'A custom-made foot orthotics are pads made specially for your foot that you place in your shoe to help support, align and improve the function of your foot.', 1, 'Custom-made foot orthotics seem to be effective and safe for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with health professionals.', 'Experts suggest that foot orthotics can be used when needed with the guidance of your health care team', 'You may have to wear orthotics all day, every day in your shoes. It may take about two weeks to adjust to new custom made foot orthotics. It is suggested to wear orthotics for an hour on the first day, two hours on the second day, and continuously progress each day so that by the end of the two weeks, you can wear orthotics comfortably all day. Fittings or adjustments may be needed.', 'It may help right away or it may take up a few months to feel better. Everybody is different.', 'Custom made foot orthotics usually cost more money than store bought soles and supportive shoes. Your health insurance may cover some of these costs.', 'Physiotherapists, occupational therapists, and podiatrists usually provide custom made foot orthotics. You can talk about it with your health care team to help you access it.', 'Since custom-made foot orthotics seem to be effective and safe but they cost money, you can try first wearing comfortable shoes with good arches and also buying insoles in a store.  These may be helpful. Not everybody likes the same type of footwear and orthotics. You can try them out to see if you like them.', '\"uploads/1597815299127foot_ortho.jpg\"', 1, '2020-06-09 23:11:49', '2020-08-24 05:07:37'),
(2, 'Massage', 'SC', 1, 3, 'general', 'Rubbing or kneading your muscle or joints to help you relax.', 1, 'Massage seems be effective and safe for youth with JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA can use massage.', 'Massages as short as 15 minutes a day can help to reduce pain. You could also have longer massages less often since most massage therapists will give a massage for at least 30 minutes.', 'It may help right away or it may take up to a month to feel better with a massage per day. It may take longer if you have massages less often. Everybody is different.', '	Massage can be free if done by yourself or a family member. Professional massages may be covered by health insurance or may require out-of-pocket cost depending on your insurance.', 'Massage therapists usually provide this treatment. It is better to consult with a registered massage therapist who has experience with treating patients who have JIA. You may also seek training to do massages on your own or purchase massaging devices that can be used at home.', 'If massages are causing more pain, then you should stop this treatment option. You should also consider your comfort level with receiving massage from a trained professional who is a stranger or from your parents. If you choose to try massage, make sure to advocate for yourself about your comfort level.', '\"uploads/1595422649352massage.jpg\"', 3, '2020-06-10 00:33:38', '2020-08-08 04:17:47'),
(5, 'Yoga', 'SC', 3, 8, 'general', 'Exercises including stretching and focused breathing that help relax you.', 1, 'Yoga seems to be effective and safe for adults with rheumatoid arthritis (RA). It may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day but you can do it in sessions of about 15 minutes depending on your schedule. It may be important to gradually increase how often and how long you do physical activity over time.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Yoga can cost money if you attend classes. You can avoid the cost by following an online program.', 'There are yoga classes at community centres and gyms. Also, there are video tutorials online (see the links below).', 'It is important to do movements at your own pace to avoid hurting yourself. It helps to start with a warm up and end with cool down exercises to help prevent injuries.', '\"uploads/1595423805028yoga.jpg\"', 2, '2020-06-12 20:21:18', '2020-08-14 19:32:51'),
(6, 'Osteopathy', 'HCP', 7, 31, 'general', 'Osteopathic manipulation includes hands-on-treatments that work on bones, muscles, and fascia to optimize the body’s alignment.', 2, 'Osteopathy is not mentioned in guidelines for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Osteopathy is not mentioned in guidelines for JIA.', 'The first few sessions may be about an hour each and follow-up visits may take up to 30 minutes. Weekly sessions may be recommended, but everybody is different.', 'It is difficult to say because of the lack of research. Improvements may vary because everybody is different.', 'Osteopathy may take time to do and cost money depending on your health insurance.', 'Osteopaths provide this treatment. You can talk about it with your health care team to help you access it.', 'If you use this treatment, tt is important to see a well-trained osteopath who has experience with treating JIA. You may not feel comfortable with receiving osteopathic treatments from a stranger.', '\"uploads/1596758628004osteoathy.jpg\"', 3, '2020-06-12 20:25:27', '2020-08-07 00:04:22'),
(7, 'Educational Website', 'SC', 1, 4, 'general', 'A website with information about JIA, and strategies on how to manage JIA.', 1, 'Educational websites are recommended by experts for youth with JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest in guidelines that youth with JIA may use self-management tools.', 'An educational website can take as little as 10 minutes and as long as an hour or two to browse. It will depend how long you wish to use it for. It can give you many tricks to help manage your arthritis and your pain.', 'It may take about 3 months to feel better, but everybody is different.', 'This intervention is free since it is accessible online.', 'The “Teens Taking Charge” program is online (see link below). There are also other educational websites for JIA online.', 'You can look at the various educational programs and find the one you like the most to help you manage your arthritis and your pain.', '\"uploads/1596687745933educational_website.jpg\"', 4, '2020-06-13 19:52:43', '2020-08-16 03:10:46'),
(10, 'NSAIDs in Pills', 'HCP', 3, 10, 'general', 'A pill that could block the production of certain chemicals in your body that cause inflammation. It may reduce pain, fever, and inflammation. (e.g., Aleve®, Naprosyn®, Indocid®, Advil®).', 1, 'Nonsteroidal anti-inflammatory drugs (NSAIDs) in pills are recommended by experts for pain in JIA. NSAIDs may be used by youth with JIA to manage pain after a discussion with their health care team. NSAIDs may also be prescribed to reduce inflammation.', 'Experts suggest that NSAIDs in pills can be used for pain management in JIA.', 'It is important to talk with your health care team first before using this treatment. If your health care team has prescribed NSAIDs for you, it is important to keep taking them. You may be able to use NSAIDs when you have pain according to your physician’s advice. Dosing is dependent on age and weight and it should be the lowest dose possible. Only one NSAID (in pills or creams) or COX-2 inhibitor should be used at the same time. It may be given to children who are on methotrexate.', 'NSAIDs in pills may start working within a few hours, but everybody is different.', 'NSAIDs may cost money depending on your health insurance.', 'Your healthcare team can help you access this treatment. NSAIDs are also available over the counter.', 'You may need to try different kinds of NSAIDs to find one that works well for you. You have to take NSAIDs with food. Liquid forms are available for children who can’t swallow tablets.', '\"uploads/1596924066904NSAIDs_pills.jpg\"', 5, '2020-07-05 04:06:48', '2020-08-08 22:01:42'),
(31, 'Wrist Splints Worn at Night', 'HCP', 2, 5, 'wrists', 'A piece of material that you wear on your wrist to support and protect it.', 1, 'Wrist splints worn at night seem to be effective and safe for adults with rheumatoid arthritis (RA). They may be used by youth with JIA to manage pain after discussion with health professionals.', 'Experts suggest that splints can be considered when needed with the guidance of your health care team', 'You may have to wear wrist splints all night.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Wrist splints may cost money. Your health insurance may cover some of these costs.', 'Occupational therapists usually provide this treatment. You can talk about wrist splints with your health care team to help you access them. You can also buy wrist splints that are not customized in stores.', 'Some people may not like to wear splints at night. You can talk about it with your health care team and try it out to see if you like it.', '\"uploads/1596745046393wrist_splints.jpg\"', 1, '2020-07-22 13:03:56', '2020-08-06 20:17:26'),
(34, 'Pilates', 'SC', 1, 2, 'general', 'Exercises that help you improve your strength, flexibility and posture.', 1, 'Pilates seems to be effective and safe for youth with JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day but you can do it in sessions of about 15 minutes depending on your schedule. It may be important to gradually increase how often and how long you do physical activity over time.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Pilates  can cost money if you attend classes. You can avoid the cost by following an online program.', 'There are pilates classes at community centres and gyms. Also, there are video tutorials online (see the links below).', 'It is important to do movements at your own pace to avoid hurting yourself. It helps to start with a warm-up and end with cool-down exercises to help prevent injuries.', '\"uploads/1596749513210pilates.jpg\"', 2, '2020-07-22 13:13:15', '2020-08-06 21:31:53'),
(35, 'Cardio', 'SC', 2, 7, 'general', 'Cardio exercise seems to be effective and safe in adults with rheumatoid arthritis (RA). It may be used by youth with JIA to manage pain.', 1, 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day but you can do it in sessions of about 15 minutes depending on your schedule.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Cardio exercises can cost money if you attend classes. You can avoid the cost by following an online program.', 'There are cardio exercise classes at community centres and gyms. Also, there are video tutorials online (see links below).', 'It is important to do movements at your own pace to avoid hurting yourself. It may be important to gradually increase how often and how long you do physical activity over time. Even though stretching is not as helpful as cardio exercises, it may help you feel better.', '\"uploads/1596759159723cardio.jpg\"', 2, '2020-07-22 13:18:35', '2020-08-07 00:12:39'),
(36, 'Occupational Therapy Interventions', 'HCP', 4, 17, 'general', 'A professional gives you exercises and activities that help you do daily tasks and activities that are important to you.', 1, 'Occupational therapy is recommended by experts for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Experts suggest that occupational therapy may help youth with JIA.', 'Weekly treatment sessions may be recommended and sessions may take about 45 minutes, with the first appointment lasting longer.', 'It depends on which intervention your occupational therapist recommends. It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Occupational therapy interventions may take time to do and cost money depending on your health insurance. The initial visit may be more expensive than follow-up sessions.', 'Occupational therapists provide this treatment. You can talk about it with your health care team to help you access it, in the US a referral is often indicated from a physician.', 'It is better to consult with a registered occupational therapist who has experience with treating JIA.', '\"uploads/1595424024791OTI.jpg\"', 3, '2020-07-22 13:20:24', '2020-08-08 01:59:19'),
(37, 'Chiropractic', 'HCP', 8, 34, 'general', 'A professional uses his or her hands to align your spine.', 3, 'Chiropractic treatments are not mentioned in guidelines for youth with JIA. They may not be recommended for some youth with JIA.', 'Chiropractic is not mentioned in guidelines for JIA.', 'The first few sessions may be about 30 minutes each and follow-up visits may be as short as 5 to 10 minutes.', 'It is difficult to say because of the lack of research. Improvements may vary because everybody is different.', 'Chiropractic may cost money depending on your health insurance.', 'Chiropractors provide this treatment. It is important to discuss this treatment with your health care team to see if it is safe for you.', 'If you use this treatment, it is important to see a well-trained chiropractor who has experience with treating JIA. You may not feel comfortable with receiving chiropractic treatments from a stranger.', '\"uploads/1595424174990chriopractic.jpg\"', NULL, '2020-07-22 13:22:54', '2020-07-22 13:22:54'),
(38, 'Distraction', 'SC', 4, 16, 'general', 'Techniques and strategies you can use to stop focusing on the pain.', 1, 'Distraction is recommended by experts for pain management in JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest that distraction can be used for pain management in JIA. It can be used during painful procedures.', 'You can use distraction each time you have pain. You can think of things you really enjoy, play games like counting and do activities such as listening to music and talking to friends.', 'You may feel better when you use distraction, but everybody is different.', 'Distraction takes time to do and may cost money if provided by a health professional. The costs can be avoided by doing distraction on your own.', 'You can talk about it with your health care team or find information online (see links below)', 'You can use different distraction methods and find the one that works best for you.', '\"uploads/1595424320823distraction.jpg\"', 6, '2020-07-22 13:25:20', '2020-08-08 20:57:21'),
(49, 'Night Mouth Guards', 'HCP', 5, 25, 'jaw', 'A plastic piece that you wear on top of your teeth to protect when you clench your jaw or grind your teeth at night.', 2, 'Night mouth guards seem to be effective and safe for youth with jaw pain. They may be used by youth with JIA to manage pain after a discussion with health professionals.', 'Night mouth guards are not mentioned in guidelines for JIA.', 'Mouth guards are often worn at night.', 'It may take up to a month to adjust to sleeping with a mouth guard. It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Mouth guards usually cost money. Your health insurance may cover some of these costs.', 'Dentists usually provide this treatment. You can talk about it with your health care team to help you access it.', 'Some people may not like to wear mouth guards at night. You can try it out to see if you can tolerate it.', '\"uploads/1596749180919mouth_guard.jpg\"', 1, '2020-08-06 20:53:32', '2020-08-06 21:26:20'),
(50, 'Water Exercises', 'SC', 2, 6, 'general', 'Exercises that you do in water and that help you stay active, like water aerobics.', 1, 'Water exercise seems to be effective and safe in adults with rheumatoid arthritis (RA). It may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day but you can do it in sessions of about 15 minutes depending on your schedule.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Water exercise can cost money if you attend classes and if you have to pay to go to a pool.', 'here are water exercise classes at community centres and pools.', 'It is important to do movements at your own pace to avoid hurting yourself. It may be important to gradually increase how often and how long you do physical activity over time.', '\"uploads/1596759403477water_excercise.jpg\"', 2, '2020-08-07 00:16:43', '2020-08-07 00:16:43'),
(51, 'Individualized Exercise Program', 'HCP', 2, 19, 'general', 'An exercise routine that is created just for you based on what you need, want and can do to stay healthy. These include cardio (that makes your heart go faster), stretching and balance exercises.', 1, 'Individualized exercise programs are recommended by experts for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with health professionals.\"', 'Experts suggest that youth with JIA should participate in regular physical activity. Custom designed programs may have even more benefits.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day, but you can talk to your health care team to figure out what is best for you.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'This treatment can cost money if provided by a health professional such as  a physiotherapist or occupational therapist. Your insurance may also pay some of it. It may be important to gradually increase how often and how long you do physical activity over time.', 'Physical exercise programs can be provided by physiotherapists and occupational therapists. You can talk about it with your health care team to help you access it.', 'It is important to do movements at your own pace to avoid hurting yourself and to follow the advice of a health professional. It may be helpful to start with a warm-up and end with cool-down exercises to help prevent injuries.', '\"uploads/1596845774762individualized_exer.jpg\"', 2, '2020-08-07 00:17:30', '2020-08-08 02:01:59'),
(52, 'Stretching', 'SC', 4, 12, 'general', 'Exercise that allows you to stretch different parts of your body.', 1, 'Stretching is recommended by experts for youth with JIA. They may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA should participate in regular physical activity.', 'Youth should do about an hour of physical activity (moderate to vigorous intensity) per day but you can do it in sessions of about 15 minutes depending on your schedule. It is better to warm up before doing stretches to avoid getting hurt. It is also important to stretch slowly and to hold the pause for about 20 seconds.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Stretching can cost money if you attend exercise classes. You can avoid the cost by following an online program.', 'There are exercise classes at community centres and gyms. Also, there are video tutorials online (see links below).', 'It is important to do movements at your own pace to avoid hurting yourself. It may be important to gradually increase the time and intensity of stretches over time.', '\"uploads/1596851771932stretching.jpg\"', 2, '2020-08-08 01:56:11', '2020-08-08 01:56:11'),
(53, 'Joint Protection Program', 'SC', 2, 9, 'general', 'Information on what you can do to avoid hurting your joints.', 1, 'Joint protection programs seem to be effective and safe for adults with rheumatoid arthritis (RA). They may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA can use joint protection programs.', 'When provided by health professionals, sessions can last about forty-five minutes to an hour. However, you can read online about it and spend less time on it. You can use joint protection techniques  every day to help protect your joints.  These include  resting before you are tired, stop an activity before feeling pain and  using  stronger joints to do activities.', 'You may feel better each time you use joint protection techniques but it may take a few months to feel better. Everybody is different.', 'oint protection programs may take time and may cost money if provided by a health professional. Your health insurance may cover some of these costs.', 'Occupational therapists and other health professionals usually provide this treatment. You can talk about it with your health care team to get information on joint protection. You can also find information online (see links below).', 'You can try different ways to protect your joints and see what helps you the most.', '\"uploads/1596856347415joint_protection_program.jpg\"', 4, '2020-08-08 02:05:05', '2020-08-08 03:12:27'),
(54, 'Acetaminophen (Tylenol®)', 'HCP', 3, 11, 'general', 'Medicine that helps with pain and fever (also called Paracetamol, for example; Tylenol®).', 1, 'Acetaminophen (Tylenol®) is recommended by experts for pain in JIA. Acetaminophen may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Experts suggest that acetaminophen can be used for moderate pain in JIA.', 'It is important to talk with your health care team first before using this treatment since it may interact with other medication. You may be able to use Acetaminophen when you have pain according to your physician’s advice. Dosing is dependent on age and weight and it should be the lowest dose possible.', 'It may take up to 45 minutes for an oral, liquid, or tablet acetaminophen to start working. You may feel better for up to 4 hours, but everybody is different.', 'Acetaminophen costs money.', 'Acetaminophen is available over the counter.', 'Liquid forms are available for children who can’t swallow tablets.', '\"uploads/1596856707170acetaminophen_tylenol .jpg\"', 5, '2020-08-08 03:14:47', '2020-08-08 03:18:27'),
(55, 'Relaxation', 'SC', 4, 13, 'general', 'Techniques and strategies you can use to be calm.', 1, 'Relaxation is recommended by experts for pain management in JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest that relaxation can be used for pain management in JIA. It can be used during painful procedures.', 'You may use different types of relaxation techniques and breathing exercises daily.', 'You may feel better after practicing relaxation, but everybody is different.', 'Relaxation takes time to do and may cost money if provided by a health professional. The costs can be avoided by doing relaxation on your own.', 'You can talk about it with your health care team or find information online (see links below).', 'You can try different types of relaxation and find the one that works best for you.', '\"uploads/1596856916988relaxation.jpg\"', 6, '2020-08-08 03:21:56', '2020-08-08 03:21:56'),
(56, 'Physiotherapy Interventions', 'HCP', 4, 18, 'general', 'A professional gives you physical treatments, stretches and activities that help with your strength, balance, range of motion and functioning.', 1, 'Physiotherapy is recommended by experts for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Experts suggest that youth with JIA can use physiotherapy.', 'Weekly treatment sessions may be recommended and sessions may take from 20 to 45 minutes, with the first appointment lasting longer. Sessions may vary in length because everybody is different.', 'It depends on which intervention your physiotherapist recommends. It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Physiotherapy interventions may take time to do and cost money depending on your health insurance.', 'Physiotherapists provide this treatment. You can talk about it with your health care team to help you access it.', 'It is important to do movements at your own pace to avoid hurting yourself and to follow the advice of a health professional. It is better to consult with a registered physiotherapist who has experience with treating JIA.', '\"uploads/1596857137898phys_inter.jpg\"', 3, '2020-08-08 03:25:37', '2020-08-08 03:25:37'),
(57, 'Heat', 'SC', 4, 14, 'general', 'A hot towel or heating pad that you apply to your joints to help with stiffness and pain.', 1, 'Heat is recommended by experts for youth with JIA. It may be used by youth with JIA to manage pain and stiffness.', 'Experts suggest that youth with JIA can use heat packs, pads, and warm baths or showers to reduce pain.', 'It is suggested to use a heat pack for 20 minutes every 2 to 4 hours. Sometimes, heat and cold can also be used one after the other.', 'It may help right away or it may take up to a few days to feel better. Everybody is different. You may be less stiff in the morning if your affected joints are kept warm during the night.', 'Heat packs usually cost money. You may use what you have at home. Hot water bottle, warm towel, warm bath and warm shower can all provide heat.', 'Heat is easy to use at home.', 'Some people prefer heat to cold. You can try and see what you prefer. Sometimes, heat and cold can also be used one after the other.', '\"uploads/1596857295062heat.jpg\"', 3, '2020-08-08 03:28:15', '2020-08-08 03:28:15'),
(58, 'Cold', 'SC', 4, 15, 'general', 'A cold towel , cold packs, or an ice bag that you apply to your joints to help with inflammation.', 1, 'Cold is recommended by experts for youth with JIA. It may be used by youth with JIA to manage pain.', 'Experts suggest that youth with JIA can use cold packs and ice massage to decrease pain, especially in inflamed joints.', 'It is suggested to use a cold pack for 10 minutes every 1 to 2 hours, with a thin layer of cloth between the pack and the skin to avoid direct contact. A cold, damp cloth may be more effective. Instead, you may use a cold water bottle, plastic bag with ice chips, or bag of frozen vegetables. Ice massage could be done using gentle circular motions for no more than 5 minutes at a time. Sometimes, heat and cold can also be used one after the other.', 'It may help right away or it may take up to a few days to feel better. Everybody is different. Cold therapy may be helpful to reduce swelling and inflammation, especially after physical activity.', 'Cold packs usually cost money. To avoid spending money, you may use a cold, damp cloth, a cold water bottle, a plastic bag with ice chips, or a bag of frozen vegetables.', 'Cold packs can be purchased in health care store, pharmacies, or sometimes home department stores.', 'Some people prefer heat to cold. You can try and see what you prefer. Sometimes, heat and cold can also be used one after the other.', '\"uploads/1596857457693cold.jpg\"', 3, '2020-08-08 03:30:57', '2020-08-08 03:30:57'),
(59, 'Acupuncture', 'HCP', 6, 29, 'general', 'A professional uses thin needles to prick the surface of your skin.', 2, 'Acupuncture is not mentioned in guidelines for JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Acupuncture is not mentioned in guidelines for JIA.', 'Weekly treatment sessions may be recommended and sessions may take from 30 minutes to 2 hours, with the first appointment lasting longer. Sessions may vary in length because everybody is different.', 'It may help right away or it may take up to a few months to feel better. Everybody is different.', 'Acupuncture may cost money depending on your health insurance.', 'Acupuncturists provide this treatment. You can talk about it with your health care team to help you access it.', 'It is important to see a well-trained acupuncturist who has experience with treating JIA. You may not feel comfortable with acupuncture because of the needles.', '\"uploads/1596906722903acupunture.jpg\"', 3, '2020-08-08 17:12:02', '2020-08-08 17:12:02'),
(61, 'Sleep Routine', 'SC', 4, 20, 'general', 'A sleep routine is a variety of different habits that may help to have a good night-time sleep.', 1, 'Sleep routines are recommended by experts for youth. It may be used by youth with JIA to manage pain.', 'Experts recommend for teens to sleep continuously for 8 to 10 hours each night, with consistent bed and wake-up times.', 'You can use a sleep routine each night to help you fall asleep and have a good sleep at night. You can go to bed and wake up at the same time every day, do relaxing activities before going to sleep and avoid using electronic devices before going to bed.', 'You may feel better in the morning if you slept well at night. It may take a few months to have less pain, but everybody is different.', 'Information on sleep routines may cost money if provided by a health professional. Your health insurance may cover some of these costs. You can avoid the cost by reading about it online.', 'You can talk about it with your health care team or find information online (see links below).', 'You can use different ways to help you sleep well and find the best sleep routine for you.', '\"uploads/1596920106834sleep_routine.jpg\"', 4, '2020-08-08 20:55:06', '2020-08-08 20:55:06'),
(62, 'Hypnosis', 'HCP', 7, 32, 'general', 'A professional puts you in a sleepy state to relax your mind.', 2, 'Hypnosis is not mentioned in guidelines made by experts as a treatment for pain in JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Guidelines in JIA do not mention hypnosis.', 'A general hypnotherapy session may take about an hour. Weekly visits may be recommended, but everybody is different.', 'It will depend on each person and on your health professional’s recommendations. It may take up to a few months to feel better.', 'The intervention takes time to do and may cost money if provided by a health professional. Your health insurance may cover some of these costs.', 'Your health care team can help you access this treatment. Psychologists and hypnotherapists usually provide this treatment.', 'It is important to see a well-trained professional. You may not feel comfortable with receiving hypnosis.', '\"uploads/1596920374275hypnosis.jpg\"', 6, '2020-08-08 20:59:34', '2020-08-08 20:59:34'),
(63, 'Mindfulness', 'SC', 6, 30, 'general', 'When you focus and pay attention to how you feel in the moment.', 2, 'Mindfulness is not mentioned in guidelines made by experts as a treatment for pain in JIA. It may be used by youth with JIA to manage pain.', 'Guidelines in JIA do not mention mindfulness.', 'You may use mindfulness daily.', 'You may feel better after practicing mindfulness, but everybody is different. ', 'The intervention takes time to do and may cost money if provided by a health professional. The costs can be avoided by doing mindfulness on your own.', 'You can talk about it with your health care team or find information online (see links below).', 'You can try different types of mindfulness techniques and find the one that works best for you.', '\"uploads/1596920489949mindfulness.jpg\"', 6, '2020-08-08 21:01:29', '2020-08-08 21:01:29'),
(64, 'Cognitive-Behavioural Therapy', 'HCP', 6, 28, 'general', 'A treatment usually directed by a professional and which focuses on the way you think and act to encourage healthy living.', 2, 'Cognitive-behavioural therapy is not mentioned in guidelines made by experts as a treatment for pain in JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Guidelines in JIA do not mention cognitive-behavioural therapy.', 'Weekly treatment sessions of about 30 to 60 minutes may be recommended, with the first appointment lasting longer. Within these sessions, professionals can help you find ways to manage your pain, such as guided imagery or meditative breathing.', 'You may feel better after 12 to 20 sessions, but everybody is different. It can vary depending on your health professional’s recommendations.', 'The intervention takes time to do and may cost money if provided by a health professional such as a psychologist. Your health insurance may cover some of these costs.', 'Your healthcare team can help you access this treatment. Psychologists usually provide this treatment.', 'It is important to see a well-trained professional.', '\"uploads/1596920632501cognitive_therapy.jpg\"', 6, '2020-08-08 21:03:52', '2020-08-08 21:03:52'),
(65, 'NSAIDs in Creams', 'HCP', 7, 33, 'general', 'A cream (i.e., Voltaren®) that is rubbed on the joints and may help with pain, fever and inflammation.', 2, 'NSAIDs in cream (Voltaren®) are not recommended in guidelines made by experts. They may sometimes be used by youth with JIA to manage pain after a discussion with their health care team.', 'Experts in guidelines suggest that NSAIDs in creams (Voltaren®) are not recommended and should be avoided in JIA due to lack of scientific proofs. However, clinicians sometimes recommend them in practice.', 'It is important to talk with your health care team first before using this treatment.', 'NSAIDs in creams may take a few hours before you feel better, but everybody is different.', 'NSAIDs in cream may cost money depending on your health insurance.', 'NSAIDs in cream can be available over the counter or as prescription drugs depending on where you live.', '', '\"uploads/1596924261773NSAIDs_cream.jpg\"', 5, '2020-08-08 22:04:21', '2020-08-08 22:05:25'),
(66, 'Opioids', 'HCP', 9, 37, 'general', 'Opioids are a class of drugs naturally found in the opium poppy plant, that are often used in medicines to relax the body by blocking certain pain receptors to reduce pain. (E.g., morphine, codeine, oxycodone (OxyContin®)).', 3, 'Opioids are usually not recommended by experts to manage pain in JIA because they have serious side effects. Youth should try other treatments before thinking about trying this treatment.', 'Opioids are not recommended in JIA guidelines for most patients. They are a last resort for JIA pain, because of the potential dangerous side effects.', 'If you have severe pain that is not going away with other treatments, opioids may be an option to discuss with your health care team. The use of opioids is often monitored by a chronic pain team.', 'It may take about 20 to 30 minutes for opioids to start working and may last up to 4 hours to feel better, but everybody is different.', 'Opioids may cost money depending on your health insurance.', 'Your healthcare team can give you information about opioids if it is indicated for you. It is very important not to take any opioids that are not prescribed to you because you do not know what the medication contains and it may be very dangerous. Also, it is very dangerous to give opioids to other people that were not prescribed this drug.', '', '\"uploads/1596925032322opioids.jpg\"', 5, '2020-08-08 22:17:12', '2020-08-08 22:17:31'),
(67, 'Marijuana/Cannabinoids', 'HCP', 9, 38, 'general', 'A substance that can be taken in various forms (as a pill, oil or inhaled) that comes from a marijuana plant that may cause heightened perception, affect mood and can cause relaxation.', 3, 'Marijuana is not recommended by experts for JIA pain because it has not shown to be helpful and has serious side effects for the developing brain. Youth should try other treatments before thinking about trying this treatment. It is important to have a discussion about it with your health care team if you wish to use it.', 'Marijuana or cannabinoids are not recommended in JIA guidelines.', 'You can discuss this treatment with your health care team if have questions about Marijuana/cannabinoids.', 'It is difficult to say because of the lack of research. Improvements may vary depending on the type of product used and each person’s characteristics.', 'Marijuana/cannabinoids may cost money. Health insurance may cover some of these costs.', 'Your healthcare team can give you information about Marijuana/cannabinoids/cannabinoid oils if it is indicated for you. It is very important to talk about it with your health care team if you have been using it on your own since these products can interact with your JIA treatments.', 'It may be illegal depending on where you live.', '\"uploads/1596925167324marijuana.jpg\"', 5, '2020-08-08 22:19:27', '2020-08-08 22:19:27'),
(68, 'Acetylsalicylic Acid (Aspirin®)', 'HCP', 9, 39, 'general', 'A pill that is commonly used as a possible pain reliever for minor aches and to reduce fever. It is also called ASA (acetylsalicylic acid) (another brand name is Motrin®).', 3, 'Aspirin® is not recommended for youth with JIA.', 'Aspirin® is not recommended in JIA guidelines, because this treatment can cause the Reye syndrome among youth.', 'You can discuss this treatment with your health care team if you have questions about Aspirin®.', '', 'Aspirin® can cost money. Health insurance may cover some of these costs.', 'Aspirin® should be discussed with your health care team. It can be purchased over the counter in pharmacies.', '', '\"uploads/1596925338220acetylsalicylic .jpg\"', 5, '2020-08-08 22:22:18', '2020-08-08 22:23:38'),
(69, 'Healthy Diet', 'SC', 4, 21, 'general', 'A balanced diet of vegetables, fruits, protein, and whole grains that helps you stay healthy.', 1, 'A healthy diet is recommended by experts for all. It should be used to stay healthy and may be used by youth with JIA to manage pain.', 'A healthy diet is recommended for all.', 'Youth and caregivers can look online or talk to their health care team for ways to have a healthy diet. One of the best ways to eat well is to prepare you own food instead of eating processed food.', 'It may take up to a few months to feel better, but everybody is different.', 'The intervention takes time to do. Food costs can vary.', 'You can read online for information and look at Canada’s Food Guide and the Dietary Guidelines for Americans online.', 'Healthy eating may be slightly more expensive and not as convenient because of meals cooked at home.', '\"uploads/1596925822268healthy_diet.jpg\"', 8, '2020-08-08 22:30:22', '2020-08-08 22:30:22'),
(70, 'Mediterranean Diet', 'SC', 4, 24, 'general', 'A diet that mainly includes on fruits and vegetables, whole grains, beans, fish and olive oil, that helps you stay healthy.', 1, 'Mediterranean diets are often recommended by dieticians. It should be used to stay healthy and may be used by youth with JIA to help manage pain.', 'The Mediterranean diet is often recommended by dieticians.', 'Youth and caregivers can look online or talk to their health care team for specific guidelines for this diet.', 'It may take up to a few months to feel better, but everybody is different.', 'Food costs can vary.', 'You can find Mediterranean diet guidelines online.', 'Following a Mediterranean diet may be slightly more expensive and not as convenient because of meals that have to be cooked at home.', '\"uploads/1596925909914mediterranean_diet.jpg\"', 8, '2020-08-08 22:31:49', '2020-08-08 22:31:49'),
(71, 'Fish Oil (Omega-3)', 'HCP', 5, 26, 'general', 'A pill with an oil that comes from fish that may keep you healthy.', 2, 'Fish oil is not mentioned in clinical practice guidelines for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Fish oil (Omega-3) is not mentioned in JIA guidelines.', 'It is suggested to first discuss with your health care team about taking fish oils. Doses of Cod liver oil supplements contain vitamin A. If you are taking other multivitamins, it is important to ensure the total dose is below 9,000 international units per day. Cod liver oil supplements also contain vitamin D (usually 400 international units) and may contain vitamin E in low doses.', 'It may take up to a few months to feel better, but everybody is different.', 'Fish oil can cost money.', 'Fish oil can be purchased over the counter in stores.', 'It is better to have a healthy diet than to use supplements and have an unhealthy diet. Including fish oil in your diet may be slightly more expensive.', '\"uploads/1596926013915fish_oil.jpg\"', 8, '2020-08-08 22:33:33', '2020-08-08 22:33:33'),
(72, 'Glucosamine Hydrochloride (Continued)', 'HCP', 5, 27, 'general', 'A pill that is used as a supplement with an amino sugar (glucosamine) that our body naturally produces to help make a “cushion” that surrounds our joints (also can be found in shellfish or created in a laboratory).', 2, 'Glucosamine hydrochloride is not mentioned in guidelines for youth with JIA. They may be used by youth with JIA to manage pain after a discussion with their health care team.', 'Glucosamine hydrochloride is not mentioned in JIA guidelines.', 'It is suggested to first discuss with your health care team about taking this glucosamine hydrochloride.', 'Improvements vary, but everybody is different.', 'Glucosamine hydrochloride costs money.', 'Glucosamine hydrochloride can be purchased over the counter in stores.', 'In osteoarthritis, glucosamine sulfate seems to work better. However, it is another type of arthritis. It is be better to have a healthy diet than to use supplements and have an unhealthy diet.', '\"uploads/1596926101092glucosamine.jpg\"', 8, '2020-08-08 22:35:01', '2020-08-08 22:35:01'),
(73, 'Vitamin D', 'SC', 4, 22, 'general', 'A vitamin that you get from the sun and some foods and that is good for your bones.', 1, 'Vitamin D is needed to maintain a healthy diet.', 'Youth and teens should take a minimum of 600 international units of Vitamin D per day to ensure good bone health. Typical diets are deficient in vitamin D. A supplement of 400-1,000 international units per day is recommended.', 'You may wish to take vitamin D according to instructions provided by your health care team or you pharmacist.', 'It may take up to a few months to feel better, but everybody is different.', 'Vitamin D supplements costs money.', 'Vitamin D supplements can be purchased over the counter in stores.', '', '\"uploads/1596926775463vitamin_d.jpg\"', 8, '2020-08-08 22:46:15', '2020-08-08 22:52:56'),
(74, 'Calcium', 'SC', 4, 23, 'general', 'A nutrient that you get from certain foods and that is good for your bones.', 1, 'Calcium is needed to maintain a healthy diet.', 'Youth and teens should take a minimum of 1,300 mg of calcium per day to ensure good bone health. A typical diet will contain 200 mg calcium from all non-dairy foods combined. Youth and teens should get an additional 800-1,000 mg from dairy products, calcium-enriched dairy alternatives or, if needed, from a supplement.', 'You may wish to take Calcium according to instructions provided by your health care team or you pharmacist.', 'It may take up to a few months to feel better, but everybody is different.', 'Calcium supplements cost money.', 'It can be purchased over the counter in stores.', '', '\"uploads/1596926895107calcium.jpg\"', 8, '2020-08-08 22:48:15', '2020-08-08 22:48:15'),
(75, 'Vegetarian & Vegan Diets', 'HCP', 8, 35, 'general', 'A diet without animal meat or animal products like eggs and dairy products.', 3, 'Vegetarian and vegan diets are not mentioned in guidelines for youth with JIA. We are not sure if they work and they may be unhealthy because of a lack of nutrients. It is important to have a discussion about it with your health care team if you wish to use it.', 'Guidelines do not mention vegetarian and vegan diets for arthritis pain.', 'Youth and caregivers can look online or talk to their health care team for ways to have a healthy diet and for specific information on this diet.', 'It is difficult to say because of the lack of research. Improvements may vary because everybody is different.', 'Planning and preparing vegetarian diets may take time. Food costs can vary.', 'You can find vegetarian and vegan diets online. Food can be purchased at local grocery stores.', '', '\"uploads/1596926968631veg_vegan_diet.jpg\"', 8, '2020-08-08 22:49:28', '2020-08-08 22:49:28'),
(76, 'Gluten-Free Diets', 'HCP', 8, 36, 'general', 'A diet without gluten. Gluten is a substance found in cereal grains. It is found in wheat products like bread, pasta and cereal.', 3, 'Gluten-free diets are not mentioned in guidelines for youth with JIA. We are not sure if they work and they may be unhealthy because of added ingredients in foods. It is important to have a discussion about it with your health care team if you wish to use it.', 'Guidelines do not mention gluten-free diets for arthritis pain. This diet is recommended for people with celiac disease.', 'Youth and caregivers can look online or talk to their health care team for ways to have a healthy diet and for specific information on this diet.', 'It is difficult to say because of the lack of research. Improvements may vary because everybody is different.', 'Planning and preparing gluten-free meals may take time. Gluten-free foods are usually more expensive.', 'You can find gluten-free diets online. Food can be purchased at local grocery stores.', '', '\"uploads/1596927039732gluten_free_diet.jpg\"', 8, '2020-08-08 22:50:39', '2020-08-08 22:50:39');

--
-- Dumping data for table `treatment_category`
--

INSERT INTO `treatment_category` (`created_at`, `updated_at`, `category_id`, `treatment_id`) VALUES
('2020-07-04 19:14:35', '2020-07-04 19:14:35', 1, 1),
('2020-08-06 20:17:26', '2020-08-06 20:17:26', 1, 31),
('2020-08-06 20:53:33', '2020-08-06 20:53:33', 1, 49),
('2020-07-04 19:15:46', '2020-07-04 19:15:46', 2, 2),
('2020-07-04 19:15:59', '2020-07-04 19:15:59', 2, 5),
('2020-08-08 20:57:21', '2020-08-08 20:57:21', 2, 38),
('2020-08-08 01:56:12', '2020-08-08 01:56:12', 2, 52),
('2020-08-08 03:21:57', '2020-08-08 03:21:57', 2, 55),
('2020-08-08 03:28:15', '2020-08-08 03:28:15', 2, 57),
('2020-08-08 20:55:07', '2020-08-08 20:55:07', 2, 61),
('2020-08-08 21:01:30', '2020-08-08 21:01:30', 2, 63),
('2020-07-05 04:16:34', '2020-07-05 04:16:34', 3, 10),
('2020-08-08 03:14:47', '2020-08-08 03:14:47', 3, 54),
('2020-08-08 22:04:22', '2020-08-08 22:04:22', 3, 65),
('2020-08-08 22:17:12', '2020-08-08 22:17:12', 3, 66),
('2020-08-08 22:19:27', '2020-08-08 22:19:27', 3, 67),
('2020-08-08 22:22:18', '2020-08-08 22:22:18', 3, 68),
('2020-07-04 19:16:13', '2020-07-04 19:16:13', 4, 5),
('2020-08-06 21:29:13', '2020-08-06 21:29:13', 4, 6),
('2020-08-06 21:31:00', '2020-08-06 21:31:00', 4, 34),
('2020-08-06 21:40:25', '2020-08-06 21:40:25', 4, 35),
('2020-08-07 00:16:43', '2020-08-07 00:16:43', 4, 50),
('2020-08-07 00:17:31', '2020-08-07 00:17:31', 4, 51),
('2020-08-08 01:56:12', '2020-08-08 01:56:12', 4, 52),
('2020-07-04 19:15:36', '2020-07-04 19:15:36', 5, 2),
('2020-07-04 19:16:05', '2020-07-04 19:16:05', 5, 5),
('2020-08-08 22:01:42', '2020-08-08 22:01:42', 5, 10),
('2020-08-06 21:31:41', '2020-08-06 21:31:41', 5, 34),
('2020-08-08 20:57:21', '2020-08-08 20:57:21', 5, 38),
('2020-08-08 01:56:12', '2020-08-08 01:56:12', 5, 52),
('2020-08-08 03:14:47', '2020-08-08 03:14:47', 5, 54),
('2020-08-08 03:21:57', '2020-08-08 03:21:57', 5, 55),
('2020-08-08 03:28:15', '2020-08-08 03:28:15', 5, 57),
('2020-08-08 03:30:58', '2020-08-08 03:30:58', 5, 58),
('2020-08-08 21:01:30', '2020-08-08 21:01:30', 5, 63),
('2020-08-08 22:04:22', '2020-08-08 22:04:22', 5, 65),
('2020-08-06 04:22:26', '2020-08-06 04:22:26', 6, 7),
('2020-08-08 01:59:19', '2020-08-08 01:59:19', 6, 36),
('2020-08-08 02:05:05', '2020-08-08 02:05:05', 6, 53),
('2020-08-08 03:25:38', '2020-08-08 03:25:38', 6, 56),
('2020-08-08 20:55:07', '2020-08-08 20:55:07', 6, 61),
('2020-08-08 21:03:52', '2020-08-08 21:03:52', 6, 64),
('2020-08-08 22:30:22', '2020-08-08 22:30:22', 7, 69),
('2020-08-08 22:31:50', '2020-08-08 22:31:50', 7, 70),
('2020-08-08 22:33:34', '2020-08-08 22:33:34', 7, 71),
('2020-08-08 22:35:01', '2020-08-08 22:35:01', 7, 72),
('2020-08-08 22:46:15', '2020-08-08 22:46:15', 7, 73),
('2020-08-08 22:48:15', '2020-08-08 22:48:15', 7, 74),
('2020-08-08 22:49:28', '2020-08-08 22:49:28', 7, 75),
('2020-08-08 22:50:40', '2020-08-08 22:50:40', 7, 76);

--
-- Dumping data for table `treatment_classifications`
--

INSERT INTO `treatment_classifications` (`id`, `name`, `created_at`, `updated_at`) VALUES
(1, 'Splints, Orthotics and Other Devices', '2020-06-09 23:09:47', '2020-06-09 23:09:47'),
(2, 'Physical Activities', '2020-06-09 23:10:13', '2020-06-09 23:10:13'),
(3, 'Physical Treatments', '2020-06-09 23:10:30', '2020-06-09 23:10:30'),
(4, 'Educational Approaches', '2020-06-13 19:50:33', '2020-06-13 19:50:33'),
(5, 'Pain Medications', '2020-07-05 04:03:04', '2020-07-05 04:03:04'),
(6, 'Psychological & Spiritual Approaches', '2020-07-06 03:49:44', '2020-07-22 13:25:36'),
(8, 'Nutrition', '2020-08-08 22:27:41', '2020-08-08 22:27:41');

--
-- Dumping data for table `treatment_texts`
--

INSERT INTO `treatment_texts` (`id`, `text`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 'req user id test', 7, '2020-07-03 06:23:45', '2020-08-10 05:59:00'),
(2, 'Test text updated', 67, '2020-08-03 16:27:11', '2020-08-03 16:27:11'),
(3, 'Update', 69, '2020-08-10 21:22:12', '2020-08-23 02:51:55'),
(4, '', 81, '2020-08-21 14:54:28', '2020-08-21 14:54:28');

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `type`, `created_at`, `updated_at`) VALUES
(7, 'u4', '$2b$14$JG/YHpMqIO69e/l1WUBX.OZtc3f4DqA54NvISYsMS8xum15NgGyPi', 'admin', '2020-05-26 16:57:49', '2020-07-28 19:42:01'),
(67, 'IW4VDCQBQN', '$2b$14$dIksdWuTGjYweH5gos3jGuUiZEhkst0q7oHuo8wKxP3lAuT9Nmyb.', 'user', '2020-08-01 02:40:35', '2020-08-02 23:36:30'),
(68, 'PCYP2XXYS', '$2b$14$2HUO.mqvgZc79MleDuj32u9CUdheUGAZ7HqNm4fBWczjRb4bcC09i', 'admin', '2020-08-06 04:09:18', '2020-08-06 04:10:18'),
(69, 'R1SEWNNW', '$2b$14$ac8bYls9Sa4/6HV2CPONQufNB6FYzYZDwLNQuFGxgMVOYeDyMuqwO', 'admin', '2020-08-10 21:19:32', '2020-08-10 21:19:32'),
(70, 'UXN7GI1U', '$2b$14$rFEYVvcQWlQUBB7sO3VYpeJRh7E9vchpCiru1Fz.FKRgNi/T0ka4W', 'user', '2020-08-11 20:03:33', '2020-08-11 20:03:33'),
(71, 'EUALDX25', '$2b$14$SoO8Kb4UksHRh05EXSzJJ.jbEKxdBQhBYcCvDEoRXnTb6RwwQjS7m', 'user', '2020-08-12 20:58:11', '2020-08-12 20:58:11'),
(73, 'J3LNI7II', '$2b$14$IVHyFsOzdg98f.5HgOEr0uTw7L/Db5ZoI91VaBrtzU/756ESO4LUG', 'admin', '2020-08-13 18:16:48', '2020-08-13 18:17:19'),
(74, 'M7JDB9YP', '$2b$14$TvQrORqlF0mHYR8XaM/a4.CGCs2Wur1VcK/hoc0ONnfhriMkmatSW', 'user', '2020-08-13 18:19:34', '2020-08-13 18:19:44'),
(75, 'OK7CH67E', '$2b$14$3jErynZ8MoyzlJpPGAhvUOeWwS8kKGiUkXnet.lbdsOGOdj3etiRu', 'user', '2020-08-13 18:20:51', '2020-08-13 18:21:02'),
(76, '1JSX13OZ', '$2b$14$L77jOq7biJD/nMmrYNl/EO/fD..mbMR1lKEE06bR8it8v6NHA2HS2', 'user', '2020-08-16 17:18:32', '2020-08-16 17:18:32'),
(77, 'SOYIO1FG', '$2b$14$Tq2BmpILhnH/CpweZGiacuMxZDi6L7xL2Ui7q10HVAlzevrkjKrEK', 'user', '2020-08-17 19:29:33', '2020-08-17 20:53:58'),
(80, 'UR5ESXJP', '$2b$14$6XKB359jiTOJLHPZhOxZXOjZbOxoUucKToQA1mtgie/q3dmNCfS4q', 'admin', '2020-08-18 17:30:17', '2020-08-18 17:30:17'),
(81, '9V6V7UVA', '$2b$14$x5d.uBXMDK96SHXpf5S3j.nZ.h1XwbkAY1GG5MPSrtBWIJoySbZIK', 'user', '2020-08-21 13:39:57', '2020-08-21 13:39:57'),
(82, '67J9BMGF', '$2b$14$ThQy7SYvk8TIxtFm.wV1WOtGhOXyC.7ooMFf0ztDEpinoMp2l42A6', 'admin', '2020-08-24 03:50:38', '2020-08-24 03:50:38'),
(83, '67J9BMGF2', '$2b$14$5ZeLPfZA9rZEvWqwwKaPTuIReC/6E0MApPqTu2JyHQdhJV7QGzjJC', 'admin', '2020-08-24 03:50:41', '2020-08-24 03:50:41'),
(84, '67J9BMGF3', '$2b$14$k/eLiWvPiuwOS2l9TruCJ.rKnWKIvgYe.qXgZqH8ch4m8armkIOvu', 'admin', '2020-08-24 03:50:47', '2020-08-24 03:50:47'),
(85, '67J9BMGF4', '$2b$14$zJ1xgeuoRBiIAhKBIiC6vufi/bvUBbUMiuwnFrR4mkZ4IDfWwHFPG', 'admin', '2020-08-24 03:50:47', '2020-08-24 03:50:47'),
(86, 'JTBUOE6U', '$2b$14$n5O5G6F4XrtxrWI/Y.j4b.w29mzPaFLptQgRYF2X1KvQlDADONiSm', 'admin', '2020-08-24 03:52:47', '2020-08-24 03:52:47'),
(87, 'YZQGGWZM', '$2b$14$zfsO/dWD0hX5CG.WWV83aeKUn9FpKG5x9oMjF.HGfv1Fs/r1WxH1C', 'user', '2020-08-24 04:08:48', '2020-08-24 04:08:58'),
(88, 'TTNIMUI1', '$2b$14$3/mPnuG..z8xcthls6IQtuQDp6nSMsPMEqMN.7ddvY3ISARRL5Uz2', 'user', '2020-08-24 14:37:40', '2020-08-24 14:37:40'),
(89, 'TTNIMUI12', '$2b$14$sP26f4N/n3FXaODtAJoDOODaLiF1HWRKLUBi8JP0ILTrdIHCGZALe', 'user', '2020-08-24 14:37:40', '2020-08-24 14:37:40'),
(111, 'admin', '$2b$14$P6FNMJbuGmL9DNgMCPgj9.bUl7S23TaJcIm.5T0fETuTmY2aZOgjC', 'admin', '2021-02-03 12:07:34', '2021-02-03 22:34:06');

--
-- Dumping data for table `user_factor`
--

INSERT INTO `user_factor` (`created_at`, `updated_at`, `factor_id`, `user_id`) VALUES
('2020-08-04 05:21:00', '2020-08-04 05:21:00', 1, 7),
('2020-08-23 03:17:21', '2020-08-23 03:17:21', 1, 69),
('2020-08-23 03:17:49', '2020-08-23 03:17:49', 9, 69),
('2020-08-23 03:17:49', '2020-08-23 03:17:49', 11, 69);

--
-- Dumping data for table `user_favourite`
--

INSERT INTO `user_favourite` (`created_at`, `updated_at`, `treatment_id`, `user_id`) VALUES
('2020-08-06 03:27:15', '2020-08-06 03:27:15', 1, 7),
('2020-08-06 03:33:08', '2020-08-06 03:33:08', 2, 7),
('2020-08-21 13:57:02', '2020-08-21 13:57:02', 2, 81),
('2020-08-06 03:27:09', '2020-08-06 03:27:09', 7, 7),
('2020-08-10 21:25:49', '2020-08-10 21:25:49', 7, 69),
('2020-08-19 05:31:37', '2020-08-19 05:31:37', 31, 69),
('2020-08-06 03:15:59', '2020-08-06 03:15:59', 34, 7),
('2020-08-21 15:07:27', '2020-08-21 15:07:27', 34, 81),
('2020-08-06 03:27:16', '2020-08-06 03:27:16', 36, 7),
('2020-08-21 15:07:26', '2020-08-21 15:07:26', 36, 81),
('2020-08-10 21:25:57', '2020-08-10 21:25:57', 51, 69),
('2020-08-10 21:25:48', '2020-08-10 21:25:48', 54, 69);

--
-- Dumping data for table `user_hcp`
--

INSERT INTO `user_hcp` (`created_at`, `updated_at`, `treatment_id`, `user_id`) VALUES
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 1, 7),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 1, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 1, 77),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 10, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 10, 77),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 10, 81),
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 31, 7),
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 36, 7),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 36, 69),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 36, 81),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 49, 69),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 51, 69),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 51, 81),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 54, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 54, 77);

--
-- Dumping data for table `user_medication`
--

INSERT INTO `user_medication` (`created_at`, `updated_at`, `medication_id`, `user_id`) VALUES
('2020-08-03 22:14:39', '2020-08-03 22:14:39', 1, 7),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 11, 67),
('2020-08-21 03:07:49', '2020-08-21 03:07:49', 11, 69),
('2020-08-03 22:14:39', '2020-08-03 22:14:39', 12, 7),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 12, 69),
('2020-07-31 15:42:51', '2020-07-31 15:42:51', 13, 7),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 13, 67),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 14, 69),
('2020-07-31 00:10:57', '2020-07-31 00:10:57', 15, 7),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 15, 67),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 15, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 16, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 18, 69),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 19, 67),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 23, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 24, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 30, 69);

--
-- Dumping data for table `user_plan`
--

INSERT INTO `user_plan` (`created_at`, `updated_at`, `treatment_id`, `user_id`) VALUES
('2020-08-06 03:32:32', '2020-08-06 03:32:32', 1, 7),
('2020-08-21 14:54:52', '2020-08-21 14:54:52', 2, 81),
('2020-08-10 21:26:25', '2020-08-10 21:26:25', 7, 69),
('2020-08-06 03:32:32', '2020-08-06 03:32:32', 34, 7),
('2020-08-10 21:26:25', '2020-08-10 21:26:25', 51, 69);

--
-- Dumping data for table `user_preferences`
--

INSERT INTO `user_preferences` (`value`, `created_at`, `updated_at`, `preference_id`, `user_id`) VALUES
(8.5, '2020-06-24 02:40:11', '2020-08-03 22:49:20', 1, 7),
(3.5, '2020-08-10 21:23:20', '2020-08-16 16:22:47', 1, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 1, 81),
(8.5, '2020-07-22 13:30:34', '2020-08-10 06:02:11', 2, 7),
(9.5, '2020-08-10 21:23:20', '2020-08-16 16:22:52', 2, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 2, 81),
(1.5, '2020-06-24 02:40:11', '2020-08-03 22:47:59', 3, 7),
(2, '2020-08-10 21:23:20', '2020-08-16 02:03:46', 3, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 3, 81),
(1.5, '2020-07-22 13:30:34', '2020-08-10 05:58:50', 4, 7),
(4, '2020-08-10 21:23:20', '2020-08-16 02:13:22', 4, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 4, 81),
(1.5, '2020-06-24 02:40:11', '2020-08-03 22:47:59', 5, 7),
(3.5, '2020-08-10 21:23:20', '2020-08-16 16:22:47', 5, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 5, 81),
(1, '2020-06-24 02:40:11', '2020-08-03 22:47:59', 6, 7),
(0, '2020-08-10 21:23:20', '2020-08-16 03:16:49', 6, 69),
(7, '2020-08-21 14:54:37', '2020-08-21 14:54:37', 6, 81);

--
-- Dumping data for table `user_sc`
--

INSERT INTO `user_sc` (`created_at`, `updated_at`, `treatment_id`, `user_id`) VALUES
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 2, 7),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 2, 69),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 2, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 2, 77),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 2, 81),
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 7, 7),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 7, 69),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 7, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 7, 77),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 7, 81),
('2020-08-10 06:02:26', '2020-08-10 06:02:26', 34, 7),
('2020-08-23 02:51:55', '2020-08-23 02:51:55', 34, 69),
('2020-08-16 17:19:43', '2020-08-16 17:19:43', 34, 76),
('2020-08-17 20:54:12', '2020-08-17 20:54:12', 34, 77),
('2020-08-21 14:54:38', '2020-08-21 14:54:38', 34, 81);

--
-- Dumping data for table `user_suggestion`
--

INSERT INTO `user_suggestion` (`created_at`, `updated_at`, `suggestion_id`, `user_id`) VALUES
('2020-08-04 05:21:00', '2020-08-04 05:21:00', 1, 7),
('2020-08-04 05:26:52', '2020-08-04 05:26:52', 2, 7),
('2020-08-23 03:06:50', '2020-08-23 03:06:50', 2, 69),
('2020-08-23 03:17:29', '2020-08-23 03:17:29', 4, 69);

--
-- Dumping data for table `user_treatment`
--

INSERT INTO `user_treatment` (`created_at`, `updated_at`, `treatment_id`, `user_id`) VALUES
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 1, 67),
('2020-08-04 00:13:52', '2020-08-04 00:13:52', 2, 7),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 5, 67),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 6, 69),
('2020-08-04 00:13:52', '2020-08-04 00:13:52', 7, 7),
('2020-08-03 16:27:11', '2020-08-03 16:27:11', 7, 67),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 31, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 35, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 36, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 53, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 54, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 55, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 62, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 65, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 75, 69),
('2020-08-10 21:23:01', '2020-08-10 21:23:01', 76, 69);

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `link`, `name`, `treatment_id`, `created_at`, `updated_at`) VALUES
(1, 'https://www.youtube.com/user/yogawithadriene/search?query=arthritis', 'Youtube: Yoga with Adriene', 1, '2020-08-24 05:07:37', '2020-08-24 05:07:37'),
(33, 'https://www.nhs.uk/conditions/nhs_fitness_studio/arthritis_pilates_exercise_video/\"', 'Arthritis pilates excercise', 34, '2020-08-06 21:31:53', '2020-08-06 21:31:53'),
(34, 'https://www.youtube.com/watch?v=0Kuv7blrV6U\"', 'Youtube watch 1', 35, '2020-08-07 00:12:40', '2020-08-07 00:12:40'),
(35, 'https://www.youtube.com/watch?v=tED1RYb27ng', 'Youtube watch 2', 35, '2020-08-07 00:12:40', '2020-08-07 00:12:40'),
(36, 'https://www.arthritis.org/living-with-arthritis/exercise/videos/', 'Living with arthritis', 35, '2020-08-07 00:12:40', '2020-08-07 00:12:40'),
(37, 'https://www.arthritis.org/living-with-arthritis/exercise/videos/', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(38, 'https://www.arthritis.org/living-with-arthritis/exercise/videos/stretches/', '', 51, '2020-08-08 02:01:59', '2020-08-08 02:01:59'),
(39, 'https://www.arthritis.org/living-with-arthritis/exercise/videos/stretches/', '', 52, '2020-08-08 01:56:12', '2020-08-08 01:56:12'),
(42, 'https://www.youtube.com/watch?v=uKD4k_DUf_Y', '', 38, '2020-08-08 20:57:21', '2020-08-08 20:57:21'),
(43, 'https://www.youtube.com/user/yogawithadriene/search?query=arthritis', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(44, 'https://teens.aboutkidshealth.ca/Article?contentid=2608&language=English&hub=jiateenhub', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(45, 'https://teenstakingcharge.carragroup.org/en/jiateen/Article?contentid=2374&language=English', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(46, 'https://www.hopkinsarthritis.org/patient-corner/disease-management/yoga-for-arthritis/', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51'),
(47, 'https://www.youtube.com/watch?v=1j4984Mqx7Q', '', 5, '2020-08-14 19:32:51', '2020-08-14 19:32:51');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

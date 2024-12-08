-- Current sql file was generated after introspecting the database
-- If you want to run this migration please uncomment this code before executing migrations
/*
CREATE TABLE `MEDIA` (
	`id` int AUTO_INCREMENT NOT NULL,
	`post_id` int NOT NULL,
	`type` enum('image','video') NOT NULL,
	`url` text NOT NULL,
	`created_at` datetime NOT NULL,
	CONSTRAINT `MEDIA_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `POST` (
	`id` int AUTO_INCREMENT NOT NULL,
	`title` varchar(45) NOT NULL,
	`content` text NOT NULL,
	`category` enum('some','counsel','balanceGame','longTime','fight','story','breakUp','tip','event','anniversary'),
	`author_id` int,
	`like_count` int NOT NULL,
	`view_count` int NOT NULL,
	`created_at` datetime NOT NULL,
	CONSTRAINT `POST_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `POST_COMMENT` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`post_id` int NOT NULL,
	`content` text NOT NULL,
	`created_at` datetime NOT NULL,
	CONSTRAINT `POST_COMMENT_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `POST_LIKE` (
	`id` int AUTO_INCREMENT NOT NULL,
	`user_id` int NOT NULL,
	`post_id` int NOT NULL,
	`created_at` datetime NOT NULL,
	CONSTRAINT `POST_LIKE_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `USER` (
	`id` int AUTO_INCREMENT NOT NULL,
	`kakao_id` int,
	`nickname` varchar(50) NOT NULL,
	`password` varchar(45),
	`email` varchar(45),
	`refresh_token` text NOT NULL,
	`created_at` datetime NOT NULL,
	CONSTRAINT `USER_id` PRIMARY KEY(`id`),
	CONSTRAINT `id_UNIQUE` UNIQUE(`id`),
	CONSTRAINT `kakaoId_UNIQUE` UNIQUE(`kakao_id`)
);
--> statement-breakpoint
ALTER TABLE `MEDIA` ADD CONSTRAINT `MEDIA_post_id` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `POST` ADD CONSTRAINT `POST_user_id` FOREIGN KEY (`author_id`) REFERENCES `USER`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_COMMENT` ADD CONSTRAINT `POST_COMMENT_post_id` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_COMMENT` ADD CONSTRAINT `POST_COMMENT_user_id` FOREIGN KEY (`user_id`) REFERENCES `USER`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_LIKE` ADD CONSTRAINT `LIKE_postId` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `POST_LIKE` ADD CONSTRAINT `LIKE_userId` FOREIGN KEY (`user_id`) REFERENCES `USER`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
CREATE INDEX `postId_idx` ON `MEDIA` (`post_id`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `POST` (`author_id`);--> statement-breakpoint
CREATE INDEX `COMMENT_userId_idx` ON `POST_COMMENT` (`user_id`);--> statement-breakpoint
CREATE INDEX `COMMENT_postId_idx` ON `POST_COMMENT` (`post_id`);--> statement-breakpoint
CREATE INDEX `userId_idx` ON `POST_LIKE` (`user_id`);--> statement-breakpoint
CREATE INDEX `postId_idx` ON `POST_LIKE` (`post_id`);
*/
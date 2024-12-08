ALTER TABLE `MEDIA` DROP FOREIGN KEY `MEDIA_post_id`;
--> statement-breakpoint
ALTER TABLE `POST` DROP FOREIGN KEY `POST_user_id`;
--> statement-breakpoint
ALTER TABLE `POST_COMMENT` DROP FOREIGN KEY `POST_COMMENT_post_id`;
--> statement-breakpoint
ALTER TABLE `POST_COMMENT` DROP FOREIGN KEY `POST_COMMENT_user_id`;
--> statement-breakpoint
ALTER TABLE `POST_LIKE` DROP FOREIGN KEY `LIKE_postId`;
--> statement-breakpoint
ALTER TABLE `POST_LIKE` DROP FOREIGN KEY `LIKE_userId`;
--> statement-breakpoint
ALTER TABLE `MEDIA` ADD CONSTRAINT `MEDIA_post_id_POST_id_fk` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `POST` ADD CONSTRAINT `POST_author_id_USER_id_fk` FOREIGN KEY (`author_id`) REFERENCES `USER`(`id`) ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_COMMENT` ADD CONSTRAINT `POST_COMMENT_user_id_USER_id_fk` FOREIGN KEY (`user_id`) REFERENCES `USER`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_COMMENT` ADD CONSTRAINT `POST_COMMENT_post_id_POST_id_fk` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `POST_LIKE` ADD CONSTRAINT `POST_LIKE_user_id_USER_id_fk` FOREIGN KEY (`user_id`) REFERENCES `USER`(`id`) ON DELETE cascade ON UPDATE cascade;--> statement-breakpoint
ALTER TABLE `POST_LIKE` ADD CONSTRAINT `POST_LIKE_post_id_POST_id_fk` FOREIGN KEY (`post_id`) REFERENCES `POST`(`id`) ON DELETE cascade ON UPDATE cascade;
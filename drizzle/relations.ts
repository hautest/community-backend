import { relations } from "drizzle-orm/relations";
import { post, media, user, postComment, postLike } from "./schema";

export const mediaRelations = relations(media, ({one}) => ({
	post: one(post, {
		fields: [media.postId],
		references: [post.id]
	}),
}));

export const postRelations = relations(post, ({one, many}) => ({
	media: many(media),
	user: one(user, {
		fields: [post.authorId],
		references: [user.id]
	}),
	postComments: many(postComment),
	postLikes: many(postLike),
}));

export const userRelations = relations(user, ({many}) => ({
	posts: many(post),
	postComments: many(postComment),
	postLikes: many(postLike),
}));

export const postCommentRelations = relations(postComment, ({one}) => ({
	post: one(post, {
		fields: [postComment.postId],
		references: [post.id]
	}),
	user: one(user, {
		fields: [postComment.userId],
		references: [user.id]
	}),
}));

export const postLikeRelations = relations(postLike, ({one}) => ({
	post: one(post, {
		fields: [postLike.postId],
		references: [post.id]
	}),
	user: one(user, {
		fields: [postLike.userId],
		references: [user.id]
	}),
}));
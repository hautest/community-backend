import {
  mysqlTable,
  mysqlSchema,
  AnyMySqlColumn,
  index,
  foreignKey,
  primaryKey,
  int,
  mysqlEnum,
  text,
  datetime,
  varchar,
  unique,
} from 'drizzle-orm/mysql-core';
import { sql } from 'drizzle-orm';

export const media = mysqlTable(
  'MEDIA',
  {
    id: int().autoincrement().notNull(),
    postId: int('post_id')
      .notNull()
      .references(() => post.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    type: mysqlEnum(['image', 'video']).notNull(),
    url: text().notNull(),
    createdAt: datetime('created_at', { mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      postIdIdx: index('postId_idx').on(table.postId),
      mediaId: primaryKey({ columns: [table.id], name: 'MEDIA_id' }),
    };
  },
);

export const post = mysqlTable(
  'POST',
  {
    id: int().autoincrement().notNull(),
    title: varchar({ length: 45 }).notNull(),
    content: text().notNull(),
    category: mysqlEnum([
      'some',
      'counsel',
      'balanceGame',
      'longTime',
      'fight',
      'story',
      'breakUp',
      'tip',
      'event',
      'anniversary',
    ]),
    authorId: int('author_id').references(() => user.id, {
      onDelete: 'set null',
    }),
    likeCount: int('like_count').notNull(),
    viewCount: int('view_count').notNull(),
    createdAt: datetime('created_at', { mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      userIdIdx: index('userId_idx').on(table.authorId),
      postId: primaryKey({ columns: [table.id], name: 'POST_id' }),
    };
  },
);

export const postComment = mysqlTable(
  'POST_COMMENT',
  {
    id: int().autoincrement().notNull(),
    userId: int('user_id')
      .notNull()
      .references(() => user.id),
    postId: int('post_id')
      .notNull()
      .references(() => post.id),
    content: text().notNull(),
    createdAt: datetime('created_at', { mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      commentPostIdIdx: index('COMMENT_postId_idx').on(table.postId),
      commentUserIdIdx: index('COMMENT_userId_idx').on(table.userId),
      postCommentId: primaryKey({
        columns: [table.id],
        name: 'POST_COMMENT_id',
      }),
    };
  },
);

export const postLike = mysqlTable(
  'POST_LIKE',
  {
    id: int().autoincrement().notNull(),
    userId: int('user_id')
      .notNull()
      .references(() => user.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    postId: int('post_id')
      .notNull()
      .references(() => post.id, { onDelete: 'cascade', onUpdate: 'cascade' }),
    createdAt: datetime('created_at', { mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      postIdIdx: index('postId_idx').on(table.postId),
      userIdIdx: index('userId_idx').on(table.userId),
      postLikeId: primaryKey({ columns: [table.id], name: 'POST_LIKE_id' }),
    };
  },
);

export const user = mysqlTable(
  'USER',
  {
    id: int().autoincrement().notNull(),
    kakaoId: int('kakao_id'),
    nickname: varchar({ length: 50 }).notNull(),
    password: varchar({ length: 45 }),
    email: varchar({ length: 45 }),
    refreshToken: text('refresh_token').notNull(),
    createdAt: datetime('created_at', { mode: 'string' }).notNull(),
  },
  (table) => {
    return {
      userId: primaryKey({ columns: [table.id], name: 'USER_id' }),
      idUnique: unique('id_UNIQUE').on(table.id),
      kakaoIdUnique: unique('kakaoId_UNIQUE').on(table.kakaoId),
    };
  },
);

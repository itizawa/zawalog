import { z } from 'zod';
import PostSchema from 'dist/generated/zod/modelSchema/PostSchema';

export const getPostSchema = z.object({
  path: z.literal(`/api/posts/${z.string()}`),
  method: z.literal('GET'),
  responseBody: z.object({
    post: PostSchema,
  }),
});
export type GetPostSchema = z.infer<typeof getPostSchema>;

export const getPostsSchema = z.object({
  path: z.literal('/api/posts'),
  method: z.literal('GET'),
  responseBody: z.object({
    posts: z.array(PostSchema.omit({ body: true }).merge(z.object({ bodyTeaser: z.string() }))),
  }),
});
export type GetPostsSchema = z.infer<typeof getPostsSchema>;

export type PostSchema = GetPostSchema | GetPostsSchema;

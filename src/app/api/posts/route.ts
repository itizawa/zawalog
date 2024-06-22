import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { serialize } from 'superjson';

const prisma = new PrismaClient();

export async function GET() {
  const posts = await prisma.post.findMany({
    orderBy: {
      publishedAt: 'desc',
    },
  });

  const truncatedPosts = posts.map((post) => ({
    ...post,
    bodyTeaser: post.body.slice(0, 100),
  }));

  return NextResponse.json(serialize({ posts: truncatedPosts }));
}

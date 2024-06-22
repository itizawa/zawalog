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

  return NextResponse.json(serialize({ posts }));
}

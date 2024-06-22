import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';
import { serialize } from 'superjson';

const prisma = new PrismaClient();

export async function GET(_request: Request, { params }: { params: { id: string } }) {
  const { id } = params;
  const post = await prisma.post.findFirst({
    where: {
      id,
    },
  });

  return NextResponse.json(serialize({ post }));
}

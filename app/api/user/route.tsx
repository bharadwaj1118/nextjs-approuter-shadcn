import prisma from '@/prisma/client';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const body = await request.json();
  const { email, role } = body;

  const user = await prisma.user.create({
    data: {
      email,
      role,
    },
  });

  return NextResponse.json(user, { status: 201 });
}

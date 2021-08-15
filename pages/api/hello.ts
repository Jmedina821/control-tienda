// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

type Data = {
  email: string,
  password: string,
  name: string|null
}

async function createUser() {
  return await prisma.user.create({
    data: {
      email: "medinajesus821@gmail.com",
      password: "1234567",
      name: "jmedina"
    }
  });
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const user = await createUser();
  res.status(200).json(user)
}

import { prisma } from "../../../../prisma/prisma-client";


 async function GET() {
  const users = await prisma.user.findMany();
  return new Response(JSON.stringify(users));
}

export { GET }
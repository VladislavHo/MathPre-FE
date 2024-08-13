import { prisma } from "../../../../prisma/prisma-client";

 async function GET() {

  try {
    const avatars = await prisma.avatars.findMany();

    return new Response(JSON.stringify(avatars))
  } catch (error) {
    console.log(error, "error")
  }

}

export { GET }
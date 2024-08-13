import { prisma } from "../../../../prisma/prisma-client";

 async function GET() {
  try {
    const lessons = await prisma.lessons.findMany();

    return new Response(JSON.stringify(lessons))
  } catch (error) {
    console.log(error)
  }
}

export { GET }
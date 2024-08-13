import { prisma } from "../../../../../../prisma/prisma-client";

 async function PUT(req: Request) {
  try {
    const body = await req.json();
    const user = await prisma.user.update({
      where: {
        email: body.email
      },
      data: {
        avatarId: body.avatarId
      }
    });
    return new Response(JSON.stringify(user));
  } catch (error) {
    console.log(error)
  }

}

export { PUT }
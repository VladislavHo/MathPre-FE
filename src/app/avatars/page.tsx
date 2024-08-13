

import { prisma } from '../../../prisma/prisma-client';
import { getUserSession } from '../lib/get-user-session';
import AvatarsComponent from '../components/Avatars/Avatars';
export default async function Avatars() {

  const avatars = await prisma.avatars.findMany();




  return (
    <>
      <AvatarsComponent/>
    </>
  )
}

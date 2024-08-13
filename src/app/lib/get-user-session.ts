import { getServerSession } from "next-auth/next";
import { authConfig } from "../../../configs/auth";
import { redirect } from "next/navigation";



export const getUserSession = async () => {
  const session = await getServerSession(authConfig);




  return session?.user ?? null;
}
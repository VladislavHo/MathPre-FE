"use server";

import { Prisma } from "@prisma/client"
import { prisma } from "../../prisma/prisma-client"
import { hashSync } from "bcrypt"

export async function registerUser(body: Prisma.UserCreateInput) {


  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email
      }
    })



    if (user !== null) {

      throw new Error("User already exists")
    }


    const createUser = await prisma.user.create({
      data: {
        fullName: body.fullName,
        email: body.email,
        password: hashSync(body.password, 10),
      }
    })
    // return createUser

    if(createUser) {
      return true
    }

  } catch (error) {
    return error
  }
}



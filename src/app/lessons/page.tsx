import React from 'react'
import LessonsField from '../components/Lessons/Lessons'
import { prisma } from '../../../prisma/prisma-client';


export default async function Lessons() {


  return (
    <>
      <LessonsField />

    </>
  )
}

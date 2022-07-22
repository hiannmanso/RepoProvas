import pkg from '@prisma/client'
import chalk from 'chalk'

const { PrismaClient } = pkg
console.log('Postgres database connected.')
export const prisma = new PrismaClient()

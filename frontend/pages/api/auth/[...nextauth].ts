import {PrismaAdapter} from '@next-auth/prisma-adapter'
import {PrismaClient} from '@shared/prisma'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const prisma = new PrismaClient()

export default NextAuth({
	providers: [
		Providers.Email({
			server: process.env.EMAIL_SERVER_HOST,
			from: process.env.EMAIL_SERVER_FROM,
		}),
	],
	adapter: PrismaAdapter(prisma),
})

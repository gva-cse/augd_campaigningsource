import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "@/lib/mongodb"
import CredentialsProvider from 'next-auth/providers/credentials'
import { mongooseConnect } from '@/lib/mongoose'
import { User } from '@/models/User'
import bcrypt from 'bcryptjs'

export default NextAuth({
  providers: [
    // OAuth authentication providers...
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials
        try {
          await mongooseConnect()
          const user = await User.findOne({ email })

          if (!user) {
            return null
          }

          const passowrdMatch = await bcrypt.compare(password, user.password)
          if (!passowrdMatch) {
            return null
          }
          return user
        } catch (error) {

        }
      }
    })
  ],
  adapter: MongoDBAdapter(clientPromise), // Adapter (recommended)
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
})
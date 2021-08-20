import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const CustomProvider = Providers.Credentials({
  // The name to display on the sign in form (e.g. 'Sign in with...')
  name: "Acceder",
  // The credentials is used to generate a suitable form on the sign in page.
  // You can specify whatever fields you are expecting to be submitted.
  // e.g. domain, username, password, 2FA token, etc.
  credentials: {
    username: { label: "Username", type: "text", placeholder: "jsmith" },
    password: { label: "Password", type: "password" }
  },
  async authorize(credentials, req) {
    // Add logic here to look up the user from the credentials supplied
    const user = { id: 1, name: "J Smith", email: "jsmith@example.com" };

    if (user) {
      // Any object returned will be saved in `user` property of the JWT
      return user;
    } else {
      // If you return null or false then the credentials will be rejected
      return null;
      // You can also Reject this callback with an Error or with a URL:
      // throw new Error('error message') // Redirect to error page
      // throw '/path/to/redirect'        // Redirect to a URL
    }
  },
});

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    CustomProvider,
    // ...add more providers here
  ],
  secret: process.env.SECRET,
  session: {
    // Use JSON Web Tokens for session instead of database sessions.
    // This option can be used with or without a database for users/accounts.
    // Note: `jwt` is automatically set to `true` if no database is specified.
    jwt: true,

    // Seconds - How long until an idle session expires and is no longer valid.
    maxAge: 30 * 24 * 60 * 60, // 30 days

    // Seconds - Throttle how frequently to write to database to extend a session.
    // Use it to limit write operations. Set to 0 to always update the database.
    // Note: This option is ignored if using JSON Web Tokens
    updateAge: 24 * 60 * 60, // 24 hours
  },
  jwt: {
    // A secret to use for key generation - you should set this explicitly
    // Defaults to NextAuth.js secret if not explicitly specified.
    // This is used to generate the actual signingKey and produces a warning
    // message if not defined explicitly.
    secret: process.env.SECRET,
    // If you chose something other than the default algorithm for the signingKey (HS512)
    // you also need to configure the algorithm
    verificationOptions: {
      algorithms: ["HS256"],
    },
    // Set to true to use encryption. Defaults to false (signing only).
    encryption: true,
    encryptionKey: "",
  },
  adapter: PrismaAdapter(prisma),
  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
});

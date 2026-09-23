import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  pages: {
    // pakai halaman sign-in bawaan NextAuth, bisa diganti custom nanti
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

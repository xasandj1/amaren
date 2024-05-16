import GoogleProvider from "next-auth/providers/google";
import type { NextAuthOptions } from "next-auth";

export const authOption: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!
        })
    ],
    callbacks: {
        async jwt({ token, user }) {
            if (!user) {
                token = { ...token, user: { ...token } };
            }
            return token;
        },

    },
    session: {
        strategy: "jwt"
    },
    pages: {
        signIn: "/profile"
    }
}


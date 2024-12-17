import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  // This will redirect a user to our custom login
  // page instead of the NextAuth.js default page
  pages: {
    signIn: "/login",
  },
  // Logic to protect our routes
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }
      return true;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

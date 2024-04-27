import { clerkMiddleware } from "@clerk/nextjs/server";

const clerkOptions = {
  clerkSettings: {
    publicRoutes: ['/', '/api/webhook/clerk'],
    ignoredRoutes: ['/api/webhook/clerk']
  }
};

export default clerkMiddleware((auth, request, event) => {});

export const config = {
  matcher: ["/((?!.+.[w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
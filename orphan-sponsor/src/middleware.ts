import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// List of public routes (accessible without authentication)
const publicRoutes = [
   "/sign-in",
   "/login",
   "/forgot-password",
   "/reset-password",
   "/register",
   "/signup",
   "/signupcenter",


];

// List of guest-viewable routes (can be viewed but with limited interaction)
const guestViewableRoutes = [
  "/profile",
  "/orphanage",
  "/home",
  "/donations",
  "/info",
  "/invoice",
  "/editInformation",
  // Add other routes that guests can view but with limited interaction
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Check if the route is protected (not public and not guest-viewable)
  const isFullyProtectedRoute = !publicRoutes.includes(path) && !guestViewableRoutes.includes(path);
  
  // Get the 'user_auth' cookie (which holds the token or user info)
  const authCookie = request.cookies.get("user_auth")?.value;
  
  // Get user type from cookies if available
  const userType = request.cookies.get("user_type")?.value;

  let isAuthenticated = false;

  // If the auth cookie is present, consider the user authenticated
  if (authCookie) {
    isAuthenticated = true;
  }

  // Case 1: If trying to access a fully protected route without authentication
  if (isFullyProtectedRoute && !isAuthenticated) {
    // Redirect to the login page
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }

  // Case 2: For guest-viewable routes, we'll allow access but add a header
  // that the frontend can use to determine if it should show limited functionality
  if (guestViewableRoutes.includes(path)) {
    const response = NextResponse.next();
    
    // Add a custom header to indicate authentication status
    // The frontend can check this header to determine what interactions to allow
    response.headers.set("x-user-authenticated", isAuthenticated ? "true" : "false");
    
    return response;
  }

  // For all other cases, proceed with the request
  return NextResponse.next();
}

// Match all routes except those that should be excluded (e.g., API or static files)
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};
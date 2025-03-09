import { NextRequest, NextResponse } from "next/server";
import { authenticationsMiddleware } from "./middlewares/authentications";

export default async function middleware(req: NextRequest) {
  const response = NextResponse.next();

  const authResponse = await authenticationsMiddleware(req, response);
  if (authResponse) return authResponse;

  return response;
}
export const config = {
  matcher: ["/dashboard/:path*"],
};

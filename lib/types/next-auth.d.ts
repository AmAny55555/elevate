import "next-auth";
import "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user?: any;
    token?: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user?: any;
    token?: string;
  }
}

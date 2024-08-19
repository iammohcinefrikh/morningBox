import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Component() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <Card className="w-full max-w-md space-y-4 p-6">
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Sing In</CardTitle>
          <CardDescription>
            Enter your email and password to sign in to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="name@example.com" />
          </div>
          <div className="grid gap-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="#"
                className="text-sm font-medium underline underline-offset-4 hover:text-primary"
                prefetch={false}
              >
                Forgot password?
              </Link>
            </div>
            <Input id="password" type="password" />
          </div>
          <Button type="submit" className="w-full">
            Sign in
          </Button>
        </CardContent>
        <CardFooter className="text-center text-sm text-muted-foreground">
          Don&apos;t have an account?&#32;{" "}
          <Link
            href="/sing-up"
            className="font-medium underline underline-offset-4 hover:text-primary"
            prefetch={false}
          >
            Register
          </Link>{" "}
          {/* Add a space here */}
        </CardFooter>
      </Card>
    </div>
  );
}

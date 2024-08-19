import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function ProfileSummary() {
  return (
    <Card className="max-w-md mx-auto shadow-lg">
      <CardHeader className="text-center">
        <div className="mb-4">
          <Image
            src="/placeholder.svg"
            alt="Profile Picture"
            width={100}
            height={100}
            className="rounded-full mx-auto"
          />
        </div>
        <CardTitle className="text-xl font-semibold">Jared Palmer</CardTitle>
        <CardDescription className="text-sm text-muted-foreground">
          @jaredpalmer
        </CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-gray-700">Full Stack Developer</p>
        <p className="text-gray-500">New York, USA</p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Link href="/profile/edit">
          <Button variant="link">View Detailed Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

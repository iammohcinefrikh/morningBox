/**
 * v0 by Vercel.
 * @see https://v0.dev/t/GVBOUAaHhcv
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
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
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

export default function Component() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Profile Information</CardTitle>
                  <CardDescription>
                    Update your personal details here.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" defaultValue="Jared Palmer" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      defaultValue="jared@example.com"
                    />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="address">Address</Label>
                    <Textarea
                      id="address"
                      rows={3}
                      defaultValue="123 Main St, Anytown USA"
                    />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button>Save Changes</Button>
                </CardFooter>
              </Card>
            </div>
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order History</CardTitle>
                  <CardDescription>
                    View your past orders and their details.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Order #</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Items</TableHead>
                        <TableHead>Status</TableHead>
                        <TableHead className="text-right">Total</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="#"
                            className="font-medium"
                            prefetch={false}
                          >
                            #12345
                          </Link>
                        </TableCell>
                        <TableCell>2023-04-15</TableCell>
                        <TableCell>2 items</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Delivered</Badge>
                        </TableCell>
                        <TableCell className="text-right">$99.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="#"
                            className="font-medium"
                            prefetch={false}
                          >
                            #12346
                          </Link>
                        </TableCell>
                        <TableCell>2023-03-22</TableCell>
                        <TableCell>1 item</TableCell>
                        <TableCell>
                          <Badge variant="outline">Cancelled</Badge>
                        </TableCell>
                        <TableCell className="text-right">$49.99</TableCell>
                      </TableRow>
                      <TableRow>
                        <TableCell>
                          <Link
                            href="#"
                            className="font-medium"
                            prefetch={false}
                          >
                            #12347
                          </Link>
                        </TableCell>
                        <TableCell>2023-02-10</TableCell>
                        <TableCell>3 items</TableCell>
                        <TableCell>
                          <Badge variant="secondary">Delivered</Badge>
                        </TableCell>
                        <TableCell className="text-right">$149.99</TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="mt-8 flex justify-end">
            <Button variant="outline">
              <LogOutIcon className="mr-2 h-4 w-4" />
              Logout
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}

function LogOutIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  );
}

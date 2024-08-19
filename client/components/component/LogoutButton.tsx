import { Button } from "@/components/ui/button";
import LogOutIcon from "@/lib/icons/logOutIcon";

export default function LogoutButton() {
  return (
    <Button variant="outline">
      <LogOutIcon className="mr-2 h-4 w-4" />
      Logout
    </Button>
  );
}

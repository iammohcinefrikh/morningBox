import ProfileCard from "@/components/component/ProfileCard";
import OrderHistory from "@/components/component/ProfileOrderHistory";
import LogoutButton from "@/components/component/LogoutButton";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-muted/40">
      <main className="flex-1 px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_2fr]">
            <ProfileCard />
            <OrderHistory />
          </div>
          <div className="mt-8 flex justify-end">
            <LogoutButton />
          </div>
        </div>
      </main>
    </div>
  );
}

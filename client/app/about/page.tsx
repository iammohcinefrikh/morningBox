import OurStory from "@/components/component/OurStory";
import MeetTheTeam from "@/components/component/MeetTheTeam";
import ContactUs from "@/components/component/ContactUs";

export default function Component() {
  return (
    <div className="flex flex-col min-h-dvh">
      <main className="flex-1">
        <OurStory />
        <MeetTheTeam />
        <ContactUs />
      </main>
    </div>
  );
}

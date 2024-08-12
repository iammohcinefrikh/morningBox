import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Meet the Team
        </h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32">
              <Image
                src="/placeholder.svg"
                width="500"
                height="500"
                alt="John Doe"
                className="rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                CEO
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">John Doe</h3>
              <p className="text-muted-foreground">Chief Executive Officer</p>
              <p className="mt-2 text-muted-foreground">
                John is the visionary behind MorningBox, with over 15 years of
                experience in the food and beverage industry.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32">
              <Image
                src="/placeholder.svg"
                width="500"
                height="500"
                alt="Jane Smith"
                className="rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                CTO
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Jane Smith</h3>
              <p className="text-muted-foreground">Chief Technology Officer</p>
              <p className="mt-2 text-muted-foreground">
                Jane is the tech mastermind behind MorningBox, ensuring our
                platform and logistics run seamlessly.
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="relative h-32 w-32">
              <Image
                src="/placeholder.svg"
                width="500"
                height="500"
                alt="Michael Johnson"
                className="rounded-full object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-primary px-2 py-1 text-primary-foreground rounded-full">
                COO
              </div>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold">Michael Johnson</h3>
              <p className="text-muted-foreground">Chief Operating Officer</p>
              <p className="mt-2 text-muted-foreground">
                Michael oversees the day-to-day operations of MorningBox,
                ensuring our customers receive the best possible experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default MeetTheTeam;

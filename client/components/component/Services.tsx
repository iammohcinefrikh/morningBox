import React from "react";
import Link from "next/link";

function Services() {
  return (
    <section className="py-12 md:py-20 lg:py-28">
      <div className="container px-4 md:px-6 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        <div className="space-y-4">
          <MouseIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Premium Beverages</h3>
          <p className="text-muted-foreground">
            Indulge in our selection of high-quality coffee, tea, and other
            beverages to kickstart your day with a burst of energy and flavor.
          </p>
        </div>
        <div className="space-y-4">
          <AlarmClockIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Healthy Breakfast</h3>
          <p className="text-muted-foreground">
            Fuel your body with our nutritious and delicious breakfast options,
            including oatmeal, granola, and more, to power you through your day.
          </p>
        </div>
        <div className="space-y-4">
          <AccessibilityIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Breakfast Accessories</h3>
          <p className="text-muted-foreground">
            Enhance your morning routine with our curated selection of breakfast
            accessories, from stylish mugs to practical storage solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;

function AccessibilityIcon(props) {
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
      <circle cx="16" cy="4" r="1" />
      <path d="m18 19 1-7-6 1" />
      <path d="m5 8 3-3 5.5 3-2.36 3.5" />
      <path d="M4.24 14.5a5 5 0 0 0 6.88 6" />
      <path d="M13.76 17.5a5 5 0 0 0-6.88-6" />
    </svg>
  );
}

function AlarmClockIcon(props) {
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
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l2 2" />
      <path d="M5 3 2 6" />
      <path d="m22 6-3-3" />
      <path d="M6.38 18.7 4 21" />
      <path d="M17.64 18.67 20 21" />
    </svg>
  );
}

function MouseIcon(props) {
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
      <rect x="5" y="2" width="14" height="20" rx="7" />
      <path d="M12 6v4" />
    </svg>
  );
}

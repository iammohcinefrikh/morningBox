import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export const products = [
  {
    id: 1,
    name: "Premium Coffee",
    imageSrc: "/placeholder.svg",
    altText: "A cup of premium coffee",
    title: "Premium Coffee",
    description:
      "Start your day with a delicious cup of our specialty coffee. Sourced from the finest beans and roasted to perfection, our premium coffee is the perfect way to kickstart your morning.",
    price: 19.99,
    rating: 4.7,
    category: "beverages",
    image: "/images/premium-coffee.jpg",
  },
  {
    id: 2,
    name: "Organic Granola",
    imageSrc: "/placeholder.svg",
    altText: "A bowl of organic granola",
    title: "Organic Granola",
    description:
      "Fuel your day with our nutritious and delicious granola made from organic oats, nuts, and dried fruits.",
    price: 12.99,
    rating: 4.8,
    category: "breakfast",
    image: "/images/organic-granola.jpg",
  },
  {
    id: 3,
    name: "Breakfast Mug Set",
    imageSrc: "/placeholder.svg",
    altText: "A set of stylish breakfast mugs",
    title: "Breakfast Mug Set",
    description:
      "Enjoy your morning beverages in style with our high-quality, beautifully designed mugs.",
    price: 24.99,
    rating: 4.6,
    category: "kitchenware",
    image: "/images/breakfast-mug-set.jpg",
  },
  {
    id: 4,
    name: "Oatmeal Variety Pack",
    imageSrc: "/placeholder.svg",
    altText: "A variety pack of oatmeal flavors",
    title: "Oatmeal Variety Pack",
    description:
      "Explore our selection of delicious and nutritious oatmeal flavors, perfect for a healthy breakfast.",
    price: 14.99,
    rating: 4.5,
    category: "breakfast",
    image: "/images/oatmeal-variety-pack.jpg",
  },
  {
    id: 5,
    name: "Green Tea",
    imageSrc: "/placeholder.svg",
    altText: "A cup of green tea",
    title: "Organic Green Tea",
    description:
      "Relax and rejuvenate with our organic green tea, sourced from the finest leaves for a refreshing taste.",
    price: 9.99,
    rating: 4.9,
    category: "beverages",
    image: "/images/green-tea.jpg",
  },
  {
    id: 6,
    name: "Honey Almond Cereal",
    imageSrc: "/placeholder.svg",
    altText: "A bowl of honey almond cereal",
    title: "Honey Almond Cereal",
    description:
      "Enjoy a crunchy and sweet breakfast with our honey almond cereal, made with whole grains and nuts.",
    price: 10.99,
    rating: 4.4,
    category: "breakfast",
    image: "/images/honey-almond-cereal.jpg",
  },
  {
    id: 7,
    name: "Dark Chocolate",
    imageSrc: "/placeholder.svg",
    altText: "A bar of dark chocolate",
    title: "Dark Chocolate Bar",
    description:
      "Indulge in our rich and smooth dark chocolate, made with 70% cocoa for a truly decadent treat.",
    price: 5.99,
    rating: 4.9,
    category: "snacks",
    image: "/images/dark-chocolate.jpg",
  },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

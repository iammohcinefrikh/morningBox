import Image from "next/image";
import Link from "next/link";

interface Props {
  id: number;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: number;
  rating: number;
}

const ProductCard = ({
  id,
  imageSrc,
  altText,
  title,
  description,
  price,
  rating,
}: Props) => {
  return (
    <Link href={`/catalog/${id}`} className="group" prefetch={false}>
      <div
        key={id}
        className="group relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out cursor-pointer flex flex-col group-hover:-translate-y-2 group-hover:shadow-xl h-full"
      >
        <Image
          src={imageSrc}
          alt={altText}
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background flex-1 flex flex-col justify-between">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold md:text-xl">${price}</h4>
            <div className="flex items-center gap-1">
              <StarIcon className="w-4 h-4 fill-primary" />
              <span className="text-sm font-medium">{rating.toFixed(1)}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

function StarIcon(props) {
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
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

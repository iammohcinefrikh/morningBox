import Link from "next/link";

interface Props {
  href: string;
  imageSrc: string;
  altText: string;
  title: string;
  description: string;
  price: string;
}

const ProductCard = ({
  href,
  imageSrc,
  altText,
  title,
  description,
  price,
}: Props) => {
  return (
    <Link href={href} className="group" prefetch={false}>
      <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 ease-in-out group-hover:-translate-y-2 group-hover:shadow-xl">
        <img
          src={imageSrc}
          alt={altText}
          width={500}
          height={400}
          className="object-cover w-full h-64"
          style={{ aspectRatio: "500/400", objectFit: "cover" }}
        />
        <div className="p-4 bg-background">
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
          <h4 className="text-lg font-semibold md:text-xl">{price}</h4>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

import Link from "next/link";
import Image from "next/image";
import { PhoneCall, Eye, CheckCircle2 } from "lucide-react";

export interface Product {
  id: string;
  category: string;
  name: string;
  tag: string | null;
  shortDescription: string;
  features: string[];
  mainImage: string;
  imagesGallery: string[];
  price: string;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { id, name, tag, shortDescription, features, mainImage, price } = product;

  return (
    <div className="relative group bg-white rounded-xl overflow-hidden border border-accent/10 shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full transform hover:-translate-y-1">
      {/* Absolute overlay link to make the whole card clickable */}
      <Link
        href={`/product/${id}`}
        className="absolute inset-0 z-10 cursor-pointer"
        aria-label={`Xem chi tiết ${name}`}
      />

      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden bg-slate-100">
        <Image
          src={mainImage}
          alt={name}
          fill
          className="object-cover object-center group-hover:scale-110 transition-transform duration-750 ease-out"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Subtle dark overlay on hover */}
        <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Product Tag Badge */}
        {tag && (
          <span
            className={`absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full shadow-md ${
              tag === "HOT"
                ? "bg-rose-500 text-white shadow-rose-500/20"
                : tag === "NEW"
                ? "bg-emerald-500 text-white shadow-emerald-500/20"
                : "bg-accent text-primary shadow-accent/20"
            }`}
          >
            {tag}
          </span>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6 flex flex-col flex-grow relative z-0">
        {/* Name */}
        <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors line-clamp-1">
          {name}
        </h3>

        {/* Short description */}
        <p className="text-sm text-muted mt-2 line-clamp-2 leading-relaxed">
          {shortDescription}
        </p>

        {/* Features bullet list */}
        <ul className="mt-4 space-y-2 flex-grow">
          {features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start text-xs text-slate-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-accent mr-2 mt-0.5 flex-shrink-0" />
              <span className="line-clamp-1">{feat}</span>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <div className="h-[1px] bg-accent/10 my-5" />

        {/* Price & Actions Row */}
        <div className="flex items-center justify-between mt-auto gap-2">
          <div className="flex flex-col min-w-0">
            <span className="text-[9px] uppercase tracking-wider text-muted font-medium">Giá sản phẩm</span>
            <span className="text-sm sm:text-base font-bold text-accent whitespace-nowrap truncate">{price}</span>
          </div>

          <div className="relative z-20 shrink-0">
            <a
              href="tel:0978358654"
              title="Yêu cầu gọi tư vấn nhanh"
              className="p-2.5 rounded-lg border border-accent/20 text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm block"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

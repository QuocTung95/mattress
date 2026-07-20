import { Metadata } from "next";
import productsData from "@/data/products.json";
import ProductDetailClient from "./ProductDetailClient";
import { Product } from "@/components/ProductCard";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ id: string }>;
}

// Generate static params for 100% static export
export async function generateStaticParams() {
  const products = productsData as Product[];
  return products.map((product) => ({
    id: product.id,
  }));
}

// Dynamic SEO metadata generation
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === id);
  
  if (!product) {
    return {
      title: "Không tìm thấy sản phẩm - Giấc Ngủ Êm",
      description: "Sản phẩm bạn đang tìm kiếm không tồn tại hoặc đã ngừng cung cấp.",
    };
  }

  const categoryName = getCategoryLabel(product.category);

  return {
    title: `${product.name} - ${categoryName} Cao Cấp | Giấc Ngủ Êm`,
    description: product.shortDescription,
    openGraph: {
      title: `${product.name} - ${categoryName} Cao Cấp | Giấc Ngủ Êm`,
      description: product.shortDescription,
      images: [
        {
          url: product.mainImage.startsWith("/")
            ? `https://giacnguem.vn${product.mainImage}`
            : product.mainImage,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      type: "website",
      locale: "vi_VN",
    },
  };
}

function getCategoryLabel(catId: string) {
  switch (catId) {
    case "dem-cao-cap": return "Đệm Cao Cấp";
    case "dem-gia-dinh": return "Đệm Gia Đình";
    case "ga-giuong": return "Chăn Ga Giường";
    case "goi": return "Gối Cao Su";
    case "phu-kien": return "Phụ Kiện Ngủ";
    default: return "Sản Phẩm";
  }
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { id } = await params;
  const products = productsData as Product[];
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  // Get up to 3 related products from the same category (excluding current)
  // If not enough, fill with other products
  let related = products.filter((p) => p.category === product.category && p.id !== product.id);
  if (related.length < 3) {
    const fallback = products.filter((p) => p.id !== product.id && !related.includes(p));
    related = [...related, ...fallback].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  return <ProductDetailClient product={product} relatedProducts={related} />;
}

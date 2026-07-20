import { Metadata } from "next";
import CollectionClient from "./CollectionClient";

export const metadata: Metadata = {
  title: "Bộ Sưu Tập Giấc Ngủ Hoàn Mỹ - Giấc Ngủ Êm",
  description: "Khám phá bộ sưu tập đệm cao cấp, đệm gia đình, ga giường, gối và phụ kiện chất lượng cao từ thiên nhiên chuẩn chất lượng resort 5 sao tại Giấc Ngủ Êm.",
  openGraph: {
    title: "Bộ Sưu Tập Giấc Ngủ Hoàn Mỹ - Giấc Ngủ Êm",
    description: "Khám phá bộ sưu tập đệm cao cấp, đệm gia đình, ga giường, gối và phụ kiện chất lượng cao từ thiên nhiên chuẩn chất lượng resort 5 sao tại Giấc Ngủ Êm.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Giấc Ngủ Êm Premium Collection",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function CollectionPage() {
  return <CollectionClient />;
}

import { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "Giấc Ngủ Êm - Nâng Niu Giấc Ngủ Việt | Đệm & Chăn Ga Gối Cao Cấp",
  description: "Giải pháp cải thiện sức khỏe toàn diện với các dòng chăn ga gối đệm cao cấp 100% thiên nhiên chuẩn resort 5 sao. Bảo hành chính hãng 10 năm.",
  openGraph: {
    title: "Giấc Ngủ Êm - Nâng Niu Giấc Ngủ Việt | Đệm & Chăn Ga Gối Cao Cấp",
    description: "Giải pháp cải thiện sức khỏe toàn diện với các dòng chăn ga gối đệm cao cấp 100% thiên nhiên chuẩn resort 5 sao. Bảo hành chính hãng 10 năm.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Giấc Ngủ Êm - Premium Bedding & Mattresses",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function Home() {
  return <HomeClient />;
}

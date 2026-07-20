import { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Liên Hệ Với Chúng Tôi - Giấc Ngủ Êm | Đặt Lịch Tư Vấn Đệm",
  description: "Liên hệ showroom Giấc Ngủ Êm để nằm thử đệm và nhận tư vấn chuyên sâu về cột sống miễn phí. Địa chỉ: 208b Yết Kiêu, Tân Hưng, Hải Phòng. Hotline: 0978.358.654.",
  openGraph: {
    title: "Liên Hệ Với Chúng Tôi - Giấc Ngủ Êm | Đặt Lịch Tư Vấn Đệm",
    description: "Liên hệ showroom Giấc Ngủ Êm để nằm thử đệm và nhận tư vấn chuyên sâu về cột sống miễn phí. Địa chỉ: 208b Yết Kiêu, Tân Hưng, Hải Phòng. Hotline: 0978.358.654.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Giấc Ngủ Êm Showroom",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function ContactPage() {
  return <ContactClient />;
}

import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";

const beVietnamPro = Be_Vietnam_Pro({
  variable: "--font-sans",
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Giấc Ngủ Êm - Nâng Niu Giấc Ngủ Việt",
  description: "Chuyên cung cấp các sản phẩm chăn ga gối đệm cao cấp, sử dụng nguồn vật liệu thiên nhiên chất lượng cao mang lại giấc ngủ sâu lành cho gia đình bạn.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background-warm text-dark">
        {children}
      </body>
    </html>
  );
}

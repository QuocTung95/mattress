import Link from "next/link";
import { Heart, Mail, Phone, MapPin, ShieldCheck, Truck, RefreshCw } from "lucide-react";

export default function Footer() {
  const categories = [
    { name: "Đệm cao cấp", path: "/collection?category=dem-cao-cap" },
    { name: "Đệm gia đình", path: "/collection?category=dem-gia-dinh" },
    { name: "Ga giường", path: "/collection?category=ga-giuong" },
    { name: "Gối", path: "/collection?category=goi" },
    { name: "Phụ kiện", path: "/collection?category=phu-kien" },
  ];

  const quickLinks = [
    { name: "Trang chủ", path: "/" },
    { name: "Bộ sưu tập", path: "/collection" },
    { name: "Liên hệ", path: "/contact" },
  ];

  const supportLinks = [
    { name: "Chính sách bảo hành", path: "/policies/warranty" },
    { name: "Chính sách vận chuyển", path: "/policies/shipping" },
    { name: "Hướng dẫn chọn đệm", path: "/blog/how-to-choose" },
  ];

  return (
    <footer className="bg-primary text-white pt-16 border-t border-accent/20">
      {/* Trust Badges Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 border-b border-white/10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white/5 text-accent">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase">Bảo Hành 10 Năm</h4>
              <p className="text-xs text-muted-foreground text-slate-300 mt-1">Cam kết chất lượng bền bỉ chuẩn resort 5 sao.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white/5 text-accent">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase">Vận Chuyển Miễn Phí</h4>
              <p className="text-xs text-muted-foreground text-slate-300 mt-1">Giao hàng và lắp đặt tận giường nhanh chóng.</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="p-3 rounded-full bg-white/5 text-accent">
              <RefreshCw className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm font-semibold tracking-wide uppercase">Đổi Trả Dễ Dàng</h4>
              <p className="text-xs text-muted-foreground text-slate-300 mt-1">Hỗ trợ đổi trả trong vòng 7 ngày trải nghiệm.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center group">
              <img
                src="/logo.svg"
                alt="Giấc Ngủ Êm"
                className="h-12 w-auto object-contain rounded shadow-sm bg-white/10"
              />
            </Link>
            <p className="text-sm text-slate-300 leading-relaxed">
              Kiến tạo giải pháp nâng niu giấc ngủ Việt với các dòng sản phẩm chăn ga gối đệm cao cấp, sử dụng nguồn vật liệu thiên nhiên chuẩn chất lượng resort 5 sao.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" clipRule="evenodd" />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-accent hover:text-primary transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
            </div>
          </div>

          {/* Categories Column */}
          <div>
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-6">Sản Phẩm</h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation Column */}
          <div>
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-6">Liên Kết</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
              {supportLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-sm text-slate-300 hover:text-accent transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm font-bold text-accent tracking-widest uppercase mb-6">Liên Hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-slate-300">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span>208b Yết Kiêu, Tân Hưng, Hải Phòng</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-300">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="tel:0978358654" className="hover:text-accent transition-colors">
                  0978.358.654
                </a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-slate-300">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a href="mailto:contact@giacnguem.vn" className="hover:text-accent transition-colors">
                  contact@giacnguem.vn
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-dark/80 py-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-xs text-slate-400 text-center md:text-left">
            &copy; 2026 GIẤC NGỦ ÊM - AMANI Home & Living. All Rights Reserved.
          </p>
          <p className="text-xs text-slate-500 tracking-wider uppercase font-semibold mt-4 md:mt-0">
            Curated for Excellence in Sleep Apparel
          </p>
        </div>
      </div>
    </footer>
  );
}

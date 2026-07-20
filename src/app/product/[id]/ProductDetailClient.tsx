"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import { ChevronRight, Phone, Calendar, Heart, ShieldCheck, Truck, RefreshCw, Star, Info, MessageSquare, CheckCircle } from "lucide-react";

interface ProductDetailClientProps {
  product: Product;
  relatedProducts: Product[];
}

export default function ProductDetailClient({ product, relatedProducts }: ProductDetailClientProps) {
  const { id, name, category, tag, shortDescription, features, mainImage, imagesGallery, price } = product;

  // Image Gallery State
  const allImages = [mainImage, ...imagesGallery];
  const [activeImage, setActiveImage] = useState(mainImage);

  // Form State
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [phoneInput, setPhoneInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sticky Bar Visibility State
  const [showStickyBar, setShowStickyBar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowStickyBar(true);
      } else {
        setShowStickyBar(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneInput) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setPhoneInput("");
      setIsSubmitted(false);
      setIsModalOpen(false);
      alert("Cảm ơn bạn! Yêu cầu tư vấn của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ trong 5 phút.");
    }, 1000);
  };

  const getCategoryName = (catId: string) => {
    switch (catId) {
      case "dem-cao-cap": return "Đệm cao cấp";
      case "dem-gia-dinh": return "Đệm gia đình";
      case "ga-giuong": return "Ga giường";
      case "goi": return "Gối";
      case "phu-kien": return "Phụ kiện";
      default: return "Sản phẩm";
    }
  };

  return (
    <>
      <Header transparentLight={true} />

      <main className="flex-grow pt-24 bg-background-warm pb-16">
        {/* Breadcrumb Navigation */}
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <ol className="flex items-center space-x-2 text-xs font-semibold uppercase tracking-wider text-muted">
            <li>
              <Link href="/" className="hover:text-accent transition-colors">Trang chủ</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href="/collection" className="hover:text-accent transition-colors">Bộ sưu tập</Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li>
              <Link href={`/collection?category=${category}`} className="hover:text-accent transition-colors">
                {getCategoryName(category)}
              </Link>
            </li>
            <li><ChevronRight className="w-3.5 h-3.5" /></li>
            <li className="text-primary font-bold truncate max-w-[150px] sm:max-w-none">{name}</li>
          </ol>
        </nav>

        {/* Product Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl border border-accent/10 shadow-sm p-6 sm:p-8 lg:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              
              {/* Left Column: Gallery-Left */}
              <div className="lg:col-span-6 space-y-4">
                {/* Main Large Image Display */}
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden border border-accent/10 bg-slate-50 shadow-sm">
                  <Image
                    src={activeImage}
                    alt={name}
                    fill
                    className="object-cover"
                    priority
                  />
                  {tag && (
                    <span className="absolute top-4 left-4 z-10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-accent text-primary shadow-md">
                      {tag}
                    </span>
                  )}
                </div>

                {/* Thumbnails Row */}
                <div className="grid grid-cols-4 gap-3">
                  {allImages.map((img, idx) => {
                    const isSelected = activeImage === img;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveImage(img)}
                        className={`relative aspect-square w-full rounded-xl overflow-hidden border transition-all duration-300 ${
                          isSelected ? "border-accent ring-2 ring-accent/20" : "border-accent/10 opacity-70 hover:opacity-100"
                        }`}
                      >
                        <Image
                          src={img}
                          alt={`${name} gallery view ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Purchasing-Right */}
              <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Category & Stars */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <span className="text-xs font-bold uppercase tracking-widest text-accent">
                      {getCategoryName(category)}
                    </span>
                    <div className="flex items-center space-x-1.5">
                      <div className="flex text-accent">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3.5 h-3.5 fill-current" />
                        ))}
                      </div>
                      <span className="text-xs text-muted font-bold">(5.0 / 48 đánh giá)</span>
                    </div>
                  </div>

                  {/* Title */}
                  <h1 className="text-2xl sm:text-3xl font-extrabold text-primary tracking-tight">
                    {name}
                  </h1>

                  {/* Price */}
                  <div className="bg-background-warm p-4 rounded-xl border border-accent/10 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase font-bold tracking-wider text-muted">Giá ưu đãi</span>
                      <p className="text-xl sm:text-2xl font-bold text-accent">{price}</p>
                    </div>
                    <span className="text-[10px] font-semibold text-accent border border-accent/20 bg-accent/5 px-2.5 py-1 rounded-full uppercase tracking-wider">
                      Đã bao gồm VAT
                    </span>
                  </div>

                  {/* Short Description */}
                  <p className="text-sm text-slate-700 leading-relaxed font-light">
                    {shortDescription}
                  </p>

                  {/* Highlight Features list */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Tính năng nổi bật</h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {features.map((feat, idx) => (
                        <li key={idx} className="flex items-start text-xs text-slate-600">
                          <CheckCircle className="w-4 h-4 text-accent mr-2.5 flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Call to Actions */}
                <div className="pt-6 border-t border-accent/10 space-y-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex-1 inline-flex items-center justify-center px-8 py-4 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-xl shadow-lg shadow-accent/25 transition-all duration-300"
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      <span>Đăng ký nhận tư vấn</span>
                    </button>
                    <a
                      href="tel:0978358654"
                      className="inline-flex items-center justify-center px-8 py-4 border border-primary text-primary text-xs font-bold uppercase tracking-wider rounded-xl hover:bg-primary hover:text-white transition-all duration-300"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      <span>0978.358.654</span>
                    </a>
                  </div>
                  <p className="text-[10px] text-center text-muted">
                    * Tư vấn hoàn toàn miễn phí bởi chuyên gia y tế xương khớp của chúng tôi.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Detailed Features Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white rounded-3xl border border-accent/10 shadow-sm p-8 sm:p-12">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent">Công nghệ giấc ngủ</span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">Chi Tiết Đặc Tính Ưu Việt</h2>
              <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Nâng đỡ thông minh 7 vùng",
                  desc: "Mật độ cao su được phân chia chuyên sâu ôm sát cơ thể, giảm tối đa lực tỳ đè lên cột sống và khớp vai hông."
                },
                {
                  title: "Thông khí đa luồng hạt Gel",
                  desc: "Hàng nghìn bong bóng hở kết hợp hạt gel làm mát thông minh giải nhiệt ngay khi cơ thể chạm vào bề mặt đệm."
                },
                {
                  title: "Vải bọc sinh học kháng khuẩn",
                  desc: "Chất liệu Tencel organic dệt kim sợi tre tự nhiên có độ mềm mượt cao, kháng khuẩn tự nhiên và hạn chế bụi mịn."
                }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-background-warm border border-accent/5 space-y-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <h4 className="text-sm font-bold text-primary">{item.title}</h4>
                  <p className="text-xs text-slate-600 leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Highlights Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary text-white p-8 sm:p-12 rounded-3xl border border-white/10 flex flex-col justify-between aspect-[16/10] md:aspect-auto">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Trải nghiệm ngủ</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Postural Orthopedic Support</h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light">
                  Phát triển dựa trên các nghiên cứu khoa học cột sống nhằm tối ưu hóa sự nâng đỡ tự nhiên nhất của đốt sống cổ và lưng khi ngủ sâu.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-accent text-xs font-bold uppercase tracking-wider pt-6 md:pt-0">
                <ShieldCheck className="w-5 h-5" />
                <span>Kiểm định y tế xương khớp</span>
              </div>
            </div>

            <div className="bg-white text-primary p-8 sm:p-12 rounded-3xl border border-accent/10 flex flex-col justify-between aspect-[16/10] md:aspect-auto shadow-sm">
              <div className="space-y-4">
                <span className="text-xs font-semibold text-accent uppercase tracking-widest">Chất liệu xanh</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">100% Bio-Organic Materials</h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-light">
                  Cam kết bảo vệ sức khỏe người dùng bằng việc loại bỏ hoàn toàn các tạp chất hóa học, tăng cường chất liệu sợi tre và cao su thu hoạch hữu cơ.
                </p>
              </div>
              <div className="flex items-center space-x-2 text-accent text-xs font-bold uppercase tracking-wider pt-6 md:pt-0">
                <RefreshCw className="w-5 h-5" />
                <span>Thân thiện môi trường sinh học</span>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
          <div className="bg-white rounded-3xl border border-accent/10 shadow-sm p-8 sm:p-12 overflow-x-auto">
            <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
              <h2 className="text-xl sm:text-2xl font-extrabold text-primary">Bảng So Sánh Với Đệm Thông Thường</h2>
              <div className="w-12 h-0.5 bg-accent mx-auto rounded-full" />
            </div>

            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[600px]">
              <thead>
                <tr className="border-b border-accent/10 text-primary uppercase tracking-wider font-bold">
                  <th className="py-4 px-6 w-1/3">Tiêu chí so sánh</th>
                  <th className="py-4 px-6 text-accent bg-accent/5 rounded-t-xl w-1/3">Giấc Ngủ Êm Premium</th>
                  <th className="py-4 px-6 text-muted w-1/3">Đệm thông thường</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-accent/5">
                {[
                  { crit: "Nguyên liệu đệm", ours: "100% cao su tự nhiên & bông sạch ép nhiệt", other: "Mút công nghiệp tổng hợp hoặc bông lẫn tạp chất" },
                  { crit: "Công nghệ nâng đỡ", ours: "Độc lập đa vùng, ôm khít theo tư thế nằm", other: "Nâng đỡ phẳng cứng hoặc lún xẹp cục bộ" },
                  { crit: "Độ thông thoáng", ours: "Cấu trúc lỗ khí kép và tản nhiệt Gel mát", other: "Hầm bí, giữ ẩm mồ hôi gây nấm mốc" },
                  { crit: "Độ bền & bảo hành", ours: "10 năm bảo hành xẹp lún chính hãng", other: "1-3 năm nhanh xuống cấp và lún võng lưng" }
                ].map((row, idx) => (
                  <tr key={idx} className="hover:bg-background-warm/30 transition-colors">
                    <td className="py-4 px-6 font-bold text-primary">{row.crit}</td>
                    <td className="py-4 px-6 bg-accent/[0.02] text-primary-light font-medium">{row.ours}</td>
                    <td className="py-4 px-6 text-slate-500 font-light">{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Related Products Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-accent">Gợi ý cho bạn</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-primary">Sản Phẩm Thường Được Mua Cùng</h2>
            <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>

        {/* Sticky Consultation Bar */}
        <div
          className={`fixed bottom-0 left-0 right-0 z-40 bg-white border-t border-accent/15 py-3.5 px-4 shadow-lg transition-transform duration-500 ${
            showStickyBar ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12 rounded-lg overflow-hidden border border-accent/10 bg-slate-50 hidden sm:block">
                <Image src={mainImage} alt={name} fill className="object-cover" />
              </div>
              <div className="flex flex-col">
                <h4 className="text-xs sm:text-sm font-bold text-primary line-clamp-1">{name}</h4>
                <p className="text-xs font-bold text-accent">{price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <a
                href="tel:0978358654"
                className="p-2.5 border border-accent/20 rounded-lg text-accent hover:bg-accent hover:text-white transition-colors"
                title="Gọi tư vấn trực tiếp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-5 py-2.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-wider rounded-lg shadow-sm transition-colors"
              >
                Tư vấn ngay
              </button>
            </div>
          </div>
        </div>

        {/* Consultation Popup Modal */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-md w-full border border-accent/10 shadow-2xl p-6 sm:p-8 relative">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-slate-400 hover:text-primary transition-colors text-xl"
              >
                &times;
              </button>
              
              <h3 className="text-xl font-bold text-primary mb-2">Đăng Ký Tư Vấn</h3>
              <p className="text-xs text-muted mb-6">
                Nhập số điện thoại để nhận cuộc gọi tư vấn miễn phí từ chuyên gia về dòng sản phẩm <strong className="text-accent">{name}</strong>.
              </p>

              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Số điện thoại *</label>
                  <input
                    type="tel"
                    id="modal-phone"
                    required
                    value={phoneInput}
                    onChange={(e) => setPhoneInput(e.target.value)}
                    placeholder="VD: 0978.358.654"
                    className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50"
                  />
                </div>

                {isSubmitted ? (
                  <p className="text-xs text-emerald-600 font-semibold animate-pulse">Đang gửi yêu cầu của bạn...</p>
                ) : (
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300"
                  >
                    Gửi yêu cầu tư vấn
                  </button>
                )}
              </form>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}

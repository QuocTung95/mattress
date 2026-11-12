"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard, { Product } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import { Sparkles, ArrowRight, Bed, Star, ShieldCheck, Heart, User, Check, AlertCircle } from "lucide-react";

export default function HomeClient() {
  const products = productsData as Product[];
  const featuredProducts = products.filter((p) => p.tag === "HOT" || p.tag === "NEW").slice(0, 3);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "dem-cao-cap",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        phone: "",
        category: "dem-cao-cap",
        message: "",
      });
    }, 1200);
  };

  const reviews = [
    {
      id: 1,
      author: "Anh Tuấn Minh",
      role: "Giám đốc điều hành, Hà Nội",
      rating: 5,
      comment:
        "Chiếc đệm cao su Amani thực sự làm thay đổi cuộc sống của tôi. Lưng không còn mỏi, ngủ sâu giấc hơn rất nhiều.",
    },
    {
      id: 2,
      author: "Chị Mai Phương",
      role: "Kiến trúc sư, TP.HCM",
      rating: 5,
      comment:
        "Thiết kế đệm cực kỳ tinh tế, vải bọc Tencel mát lịm rất hợp với khí hậu nóng ẩm ở Việt Nam. Khuyên mọi người nên dùng.",
    },
    {
      id: 3,
      author: "Cô Lan Anh",
      role: "Giáo viên về hưu, Đà Nẵng",
      rating: 5,
      comment:
        "Tôi bị mất ngủ thâm niên, mua đệm Hybrid của hãng nằm êm hẳn, lò xo túi độc lập không hề gây tiếng động hay rung lắc khi chồng tôi xoay người.",
    },
  ];

  return (
    <>
      <Header />

      <main className="flex-grow">
        {/* 1. Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white py-28 sm:py-36">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.15),transparent_45%)]" />
          <div className="absolute -bottom-48 -left-48 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              {/* Left Content */}
              <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-accent text-xs font-bold uppercase tracking-widest animate-pulse">
                  <Sparkles className="w-4 h-4" />
                  <span>Chăm sóc sức khỏe giấc ngủ Việt</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
                  Giấc Ngủ Hoàn Mỹ <br />
                  <span className="text-accent font-serif font-normal italic">Chuẩn Resort 5 Sao</span>
                </h1>

                <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-light">
                  Kiến tạo không gian nghỉ ngơi thư thái đỉnh cao với các dòng chăn ga gối đệm cao cấp sử dụng nguồn vật
                  liệu thiên nhiên chất lượng thượng hạng.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <Link
                    href="/collection"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-transparent text-xs font-bold uppercase tracking-wider rounded-lg text-primary bg-accent hover:bg-accent-hover transition-all duration-300 shadow-lg shadow-accent/20"
                  >
                    <span>Khám phá bộ sưu tập</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <a
                    href="#tu-van"
                    className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 border border-white/20 text-xs font-bold uppercase tracking-wider rounded-lg text-white hover:bg-white/5 transition-all duration-300"
                  >
                    Đăng ký tư vấn đệm
                  </a>
                </div>
              </div>

              {/* Right Side Image Representation */}
              <div className="lg:col-span-5 relative">
                <div className="relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <Image
                    src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?auto=format&fit=crop&w=800&q=80"
                    alt="Giấc Ngủ Êm Bedding Mockup"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-xs italic font-light text-slate-200">
                      "Giường ngủ êm ái như ở resort, đệm cao su tự nhiên nâng đỡ rất thoải mái."
                    </p>
                    <span className="block text-[10px] uppercase tracking-wider text-accent font-bold">
                      Amani Luxury Collection
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 2. Feature Icons Row */}
        <section className="bg-white py-14 border-b border-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { title: "100% Thiên Nhiên", desc: "Cao su & bông hữu cơ lành tính" },
                { title: "Nâng Đỡ Đa Vùng", desc: "Giảm áp lực cột sống lưng cổ" },
                { title: "Kháng Khuẩn Tự Nhiên", desc: "Ngăn nấm mốc và mùi ẩm mốc" },
                { title: "Điều Hòa Nhiệt Độ", desc: "Thoáng khí mát lạnh suốt cả đêm" },
              ].map((item, idx) => (
                <div key={idx} className="text-center space-y-2 group">
                  <div className="w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center mx-auto group-hover:bg-accent group-hover:text-white transition-all duration-300">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-primary">{item.title}</h3>
                  <p className="text-[11px] text-muted leading-relaxed px-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Featured Products */}
        <section className="py-24 bg-background-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Sản Phẩm Nổi Bật</h2>
              <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
              <p className="text-sm text-muted">
                Trải nghiệm những mẫu chăn ga gối đệm đắt giá và được khách hàng đánh giá cao nhất trong bộ sưu tập.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                href="/collection"
                className="inline-flex items-center space-x-2 px-8 py-3.5 border border-accent text-xs font-bold uppercase tracking-wider rounded-lg text-accent hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
              >
                <span>Xem toàn bộ sưu tập</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* 4. Why Choose Us */}
        <section className="py-24 bg-white border-b border-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left text reasons */}
              <div className="lg:col-span-7 space-y-10">
                <div className="space-y-4 text-center lg:text-left">
                  <span className="text-xs font-bold uppercase tracking-widest text-accent">Giá trị cốt lõi</span>
                  <h2 className="text-3xl font-extrabold text-primary tracking-tight">Tại Sao Nên Chọn Giấc Ngủ Êm?</h2>
                  <div className="w-12 h-1 bg-accent mr-auto ml-auto lg:ml-0 rounded-full" />
                </div>

                <div className="space-y-8">
                  {[
                    {
                      title: "Nguyên liệu sạch hữu cơ 100%",
                      desc: "Toàn bộ đệm cao su và ga gối của chúng tôi sử dụng 100% mủ cao su thiên nhiên và sợi bông dệt hữu cơ an toàn cho da em bé.",
                    },
                    {
                      title: "Thiết kế nâng đỡ xương khớp chuyên sâu",
                      desc: "Từng vùng trên bề mặt đệm được phân bổ mật độ lò xo túi và cao su tối ưu giúp duy trì đường cong cột sống tự nhiên ở mọi tư thế.",
                    },
                    {
                      title: "Lớp mát làm tản nhiệt Gel thông minh",
                      desc: "Giải quyết triệt để vấn đề hầm nóng đặc trưng của đệm foam thông thường nhờ gel mát tản nhiệt và áo bọc tencel hút ẩm.",
                    },
                  ].map((reason, idx) => (
                    <div key={idx} className="flex space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/10 text-accent flex items-center justify-center text-xs font-bold">
                        {idx + 1}
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-base font-bold text-primary">{reason.title}</h4>
                        <p className="text-sm text-muted leading-relaxed font-light">{reason.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side Image */}
              <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=800&q=80"
                  alt="Quality bedding details"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* 5. Brand Story */}
        <section className="py-24 bg-background-warm overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              {/* Left Image */}
              <div className="lg:col-span-5 relative aspect-square sm:aspect-[4/3] lg:aspect-square w-full rounded-2xl overflow-hidden shadow-xl order-last lg:order-first">
                <Image
                  src="https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&w=800&q=80"
                  alt="AMANI Brand Story Bedroom"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Right Text Content */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Câu chuyện thương hiệu</span>
                <h2 className="text-3xl font-extrabold text-primary tracking-tight">Thương Hiệu AMANI Home & Living</h2>
                <div className="w-12 h-1 bg-accent mr-auto ml-auto lg:ml-0 rounded-full" />
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  Khởi nguồn từ mong muốn mang những giấc ngủ êm sâu như ở khu nghỉ dưỡng 5 sao về ngôi nhà của bạn,
                  AMANI Home & Living đã ra đời. Chúng tôi tin rằng, một chiếc đệm tốt không chỉ là nơi ngả lưng, mà là
                  cội nguồn của năng lượng sống và sức khỏe trường thọ.
                </p>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-light">
                  Mỗi dòng sản phẩm đệm lò xo, cao su hay chăn ga gối của AMANI đều được sản xuất tỉ mỉ từ vật liệu sinh
                  học tự nhiên thân thiện với môi trường, mang lại sự êm mát, sang trọng và thư giãn trọn vẹn từng
                  khoảnh khắc.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 6. Reviews Section */}
        <section className="py-24 bg-white border-b border-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-accent font-sans">
                Đánh giá thực tế
              </span>
              <h2 className="text-3xl font-extrabold text-primary tracking-tight">Ý Kiến Từ Khách Hàng</h2>
              <div className="w-12 h-1 bg-accent mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {reviews.map((rev) => (
                <div
                  key={rev.id}
                  className="bg-background-warm p-8 rounded-2xl border border-accent/10 flex flex-col justify-between shadow-sm"
                >
                  <div className="space-y-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="text-sm text-primary leading-relaxed font-light italic">"{rev.comment}"</p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-accent/10 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                      <User className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-primary">{rev.author}</h4>
                      <p className="text-[10px] text-muted">{rev.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Contact Section (Form and Map Mockup) */}
        <section id="tu-van" className="py-24 bg-background-warm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
              {/* Contact Form Card */}
              <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-2xl border border-accent/10 shadow-lg flex flex-col justify-between">
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-primary">Tư Vấn Giấc Ngủ Miễn Phí</h3>
                  <p className="text-xs sm:text-sm text-muted">
                    Để lại thông tin dưới đây, tư vấn viên am hiểu sâu sắc về xương khớp của chúng tôi sẽ gọi lại ngay
                    lập tức để giúp bạn tìm ra chiếc đệm lý tưởng.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-bold uppercase tracking-wider text-primary mb-2"
                      >
                        Họ và tên *
                      </label>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-background-warm/50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-xs font-bold uppercase tracking-wider text-primary mb-2"
                      >
                        Số điện thoại *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="09xx xxx xxx"
                        className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-background-warm/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="category"
                      className="block text-xs font-bold uppercase tracking-wider text-primary mb-2"
                    >
                      Sản phẩm bạn quan tâm
                    </label>
                    <select
                      name="category"
                      id="category"
                      value={formData.category}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-background-warm/50 text-slate-800"
                    >
                      <option value="dem-cao-cap">Đệm cao cấp</option>
                      <option value="dem-gia-dinh">Đệm gia đình</option>
                      <option value="ga-giuong">Chăn Ga gối</option>
                      <option value="goi">Gối nằm đầu</option>
                      <option value="phu-kien">Phụ kiện ngủ</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-bold uppercase tracking-wider text-primary mb-2"
                    >
                      Ghi chú hoặc yêu cầu riêng
                    </label>
                    <textarea
                      name="message"
                      id="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="VD: Tôi bị đau lưng, cần tìm đệm lò xo cứng vừa phải..."
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-background-warm/50"
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-sm">
                      <Check className="w-5 h-5 flex-shrink-0" />
                      <span>Đăng ký thành công! Chúng tôi sẽ liên hệ với bạn trong ít phút.</span>
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="flex items-center space-x-2 text-rose-600 bg-rose-50 border border-rose-200 p-4 rounded-lg text-sm">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <span>Vui lòng điền đầy đủ họ tên và số điện thoại.</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? "Đang gửi yêu cầu..." : "Gửi yêu cầu tư vấn"}
                  </button>
                </form>
              </div>

              {/* Showroom Map Mockup Card */}
              <div className="lg:col-span-5 bg-primary text-white p-8 sm:p-10 rounded-2xl border border-white/10 shadow-lg flex flex-col justify-between">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-accent tracking-wide uppercase">Hệ Thống Showroom</h3>
                  <p className="text-xs text-slate-300 font-light leading-relaxed">
                    Đến trực tiếp các showroom của chúng tôi để nằm thử đệm và nhận sự tư vấn chuyên sâu về tư thế ngủ
                    hoàn toàn miễn phí.
                  </p>
                </div>

                {/* Map Graphic Mockup */}
                <div className="my-8 aspect-video w-full bg-slate-800 rounded-xl relative overflow-hidden border border-white/5">
                  <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-accent text-primary flex items-center justify-center animate-bounce shadow-lg shadow-accent/50">
                      <MapPinIcon />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-2 bg-primary/90 px-2 py-0.5 rounded border border-accent/20">
                      Giấc Ngủ Êm
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6">
                  <p>
                    <strong className="text-white">Địa chỉ:</strong> 208b Yết Kiêu, Tân Hưng, Hải Phòng
                  </p>
                  <p>
                    <strong className="text-white">Hotline đặt hàng:</strong> 0978.358.654
                  </p>
                  <p>
                    <strong className="text-white">Giờ mở cửa:</strong> 08:30 – 21:30 (Mở cả tuần)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

function MapPinIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
      />
    </svg>
  );
}

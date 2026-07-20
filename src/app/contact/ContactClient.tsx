"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, ShieldCheck, Clock, Check, AlertCircle, Sparkles, Send, Users, Star, Award, Leaf, ChevronRight } from "lucide-react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "tu-van-mua-hang",
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
    if (!formData.name || !formData.phone || !formData.email) {
      setSubmitStatus("error");
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "tu-van-mua-hang",
        message: "",
      });
    }, 1200);
  };

  const contactCards = [
    {
      icon: <Phone className="w-6 h-6 text-accent" />,
      title: "Hotline Tư Vấn",
      detail: "0978.358.654",
      sub: "Hỗ trợ cuộc gọi miễn phí 24/7",
      actionText: "Gọi ngay",
      link: "tel:0978358654",
    },
    {
      icon: <Mail className="w-6 h-6 text-accent" />,
      title: "Email Liên Hệ",
      detail: "contact@giacnguem.vn",
      sub: "Phản hồi thư điện tử trong 2 giờ",
      actionText: "Gửi thư",
      link: "mailto:contact@giacnguem.vn",
    },
    {
      icon: <MapPin className="w-6 h-6 text-accent" />,
      title: "Showroom Chính",
      detail: "208b Yết Kiêu, Tân Hưng, Hải Phòng",
      sub: "Mở cửa từ 08:30 – 21:30 cả tuần",
      actionText: "Chỉ đường",
      link: "https://maps.google.com",
    },
    {
      icon: <Clock className="w-6 h-6 text-accent" />,
      title: "Hỗ Trợ Bảo Hành",
      detail: "1900.xxxx",
      sub: "Tiếp nhận đổi trả & bảo hành đệm",
      actionText: "Liên hệ hỗ trợ",
      link: "tel:1900xxxx",
    },
  ];

  const stats = [
    { icon: <Users className="w-6 h-6 text-accent" />, count: "10,000+", label: "Khách hàng tin chọn" },
    { icon: <Star className="w-6 h-6 text-accent" />, count: "4.9/5 ★", label: "Đánh giá hài lòng" },
    { icon: <Award className="w-6 h-6 text-accent" />, count: "10 Năm", label: "Bảo hành xẹp lún" },
    { icon: <Leaf className="w-6 h-6 text-accent" />, count: "100%", label: "Nguyên liệu tự nhiên" },
  ];

  return (
    <>
      <Header transparentLight={true} />

      <main className="flex-grow pt-24 bg-background-warm">
        {/* Contact Hero Section */}
        <section className="relative overflow-hidden bg-primary text-white py-20 border-b border-accent/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.1),transparent_40%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Hỗ trợ trực tiếp</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Liên Hệ Với Chúng Tôi
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
              Đội ngũ tư vấn viên am hiểu sâu sắc về phong thuỷ và tư thế ngủ luôn sẵn sàng lắng nghe mọi băn khoăn của bạn để chọn ra chiếc nệm hoàn hảo nhất.
            </p>
          </div>
        </section>

        {/* Contact Cards Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactCards.map((card, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-accent/10 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/5 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-primary">{card.title}</h3>
                    <p className="text-sm font-bold text-accent mt-1">{card.detail}</p>
                    <p className="text-xs text-muted mt-1 leading-relaxed font-light">{card.sub}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-accent/5 mt-6">
                  <a
                    href={card.link}
                    target={card.link.startsWith("http") ? "_blank" : "_self"}
                    rel="noreferrer"
                    className="text-xs font-bold uppercase tracking-widest text-accent hover:text-accent-hover transition-colors inline-flex items-center space-x-1"
                  >
                    <span>{card.actionText}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Split Form & Map Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
            
            {/* Form Container */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-accent/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4 mb-8">
                <h2 className="text-2xl font-bold text-primary">Gửi Thông Tin Cho Chúng Tôi</h2>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-light">
                  Nếu bạn có bất cứ thắc mắc nào về giá cả, thời gian giao hàng hay chính sách đại lý, hãy điền vào form bên dưới. Bộ phận chăm sóc khách hàng sẽ phản hồi trong thời gian sớm nhất.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Họ và tên *</label>
                    <input
                      type="text"
                      name="name"
                      id="contact-name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Nguyễn Văn A"
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50 text-slate-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-phone" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Số điện thoại *</label>
                    <input
                      type="tel"
                      name="phone"
                      id="contact-phone"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="09xx xxx xxx"
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50 text-slate-800"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-email" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Địa chỉ Email *</label>
                    <input
                      type="email"
                      name="email"
                      id="contact-email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50 text-slate-800"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Chủ đề cần hỗ trợ</label>
                    <select
                      name="subject"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50 text-slate-800"
                    >
                      <option value="tu-van-mua-hang">Tư vấn mua đệm & chăn ga</option>
                      <option value="yeu-cau-bao-hanh">Yêu cầu bảo hành / Đổi trả</option>
                      <option value="hop-tac-dai-ly">Hợp tác đại lý / Showroom</option>
                      <option value="khac">Ý kiến phản hồi khác</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-primary mb-2">Nội dung tin nhắn *</label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Mô tả chi tiết câu hỏi hoặc yêu cầu của bạn..."
                    className="w-full px-4 py-3 rounded-lg border border-accent/20 text-sm focus:outline-none focus:border-accent bg-background-warm/50 text-slate-800"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-emerald-600 bg-emerald-50 border border-emerald-200 p-4 rounded-lg text-sm">
                    <Check className="w-5 h-5 flex-shrink-0" />
                    <span>Yêu cầu liên hệ của bạn đã được gửi thành công. Chúng tôi sẽ phản hồi sớm nhất!</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-rose-600 bg-rose-50 border border-rose-200 p-4 rounded-lg text-sm">
                    <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    <span>Vui lòng điền đầy đủ các thông tin bắt buộc (*).</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-accent hover:bg-accent-hover text-white text-xs font-bold uppercase tracking-widest rounded-lg shadow-md transition-all duration-300 disabled:opacity-50 flex items-center justify-center space-x-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? "Đang gửi đi..." : "Gửi thông tin liên hệ"}</span>
                </button>
              </form>
            </div>

            {/* Map Container */}
            <div className="lg:col-span-5 bg-primary text-white p-8 sm:p-10 rounded-3xl border border-white/10 shadow-sm flex flex-col justify-between">
              <div className="space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">Bản đồ vị trí</span>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Showroom Trực Tiếp</h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  Tọa lạc tại trung tâm thành phố Hà Nội, showroom chính thức của chúng tôi là nơi trưng bày trọn vẹn bộ sưu tập đệm lò xo, đệm cao su và các phụ kiện chăn ga organic cao cấp.
                </p>
              </div>

              {/* Mockup Map Graphic */}
              <div className="my-8 aspect-square lg:aspect-video w-full bg-slate-800 rounded-2xl relative overflow-hidden border border-white/5 shadow-inner">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#C5A880_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                  <div className="w-9 h-9 rounded-full bg-accent text-primary flex items-center justify-center animate-bounce shadow-lg shadow-accent/50">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-accent mt-2 bg-primary/95 px-3 py-1 rounded-full border border-accent/20 shadow-md">
                    GIẤC NGỦ ÊM
                  </span>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300 border-t border-white/10 pt-6">
                <p><strong className="text-white">Địa chỉ:</strong> 208b Yết Kiêu, Tân Hưng, Hải Phòng</p>
                <p><strong className="text-white">Điện thoại:</strong> 0978.358.654</p>
                <p><strong className="text-white">Thời gian đón khách:</strong> 08:30 – 21:30 tất cả các ngày trong tuần</p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Trust Section */}
        <section className="bg-white py-16 border-t border-b border-accent/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col items-center text-center space-y-2">
                  <div className="p-3 rounded-full bg-accent/5">
                    {stat.icon}
                  </div>
                  <span className="text-2xl font-black text-primary tracking-tight">{stat.count}</span>
                  <span className="text-xs uppercase tracking-wider text-muted font-semibold">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

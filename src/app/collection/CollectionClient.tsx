"use client";

import { useSearchParams, useRouter } from "next/navigation";
import { useState, useEffect, Suspense } from "react";
import ProductCard, { Product } from "@/components/ProductCard";
import productsData from "@/data/products.json";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SlidersHorizontal, ChevronDown, Sparkles } from "lucide-react";

const categories = [
  { id: "all", name: "Tất cả sản phẩm" },
  { id: "dem-cao-cap", name: "Đệm cao cấp" },
  { id: "dem-gia-dinh", name: "Đệm gia đình" },
  { id: "ga-giuong", name: "Ga giường" },
  { id: "goi", name: "Gối" },
  { id: "phu-kien", name: "Phụ kiện" },
];

function CollectionContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  
  const categoryParam = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState(categoryParam);
  const [visibleCount, setVisibleCount] = useState(8);

  useEffect(() => {
    setSelectedCategory(categoryParam);
    setVisibleCount(8); 
  }, [categoryParam]);

  const handleCategoryChange = (catId: string) => {
    setSelectedCategory(catId);
    setVisibleCount(8);
    if (catId === "all") {
      router.push("/collection", { scroll: false });
    } else {
      router.push(`/collection?category=${catId}`, { scroll: false });
    }
  };

  const filteredProducts = (productsData as Product[]).filter(
    (product) => selectedCategory === "all" || product.category === selectedCategory
  );

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const hasMore = filteredProducts.length > visibleCount;

  return (
    <>
      <Header transparentLight={true} />

      <main className="flex-grow pt-24 bg-background-warm">
        {/* Banner Section */}
        <section className="relative overflow-hidden bg-primary text-white py-20 border-b border-accent/20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(197,168,128,0.1),transparent_40%)]" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center space-x-1.5 text-xs font-bold uppercase tracking-widest text-accent mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Giấc ngủ êm premium</span>
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Bộ Sưu Tập Giấc Ngủ Hoàn Mỹ
            </h1>
            <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Tìm kiếm giải pháp nâng niu giấc ngủ của bạn với các dòng sản phẩm chăn ga gối đệm cao cấp, sử dụng nguồn vật liệu thiên nhiên chuẩn resort 5 sao.
            </p>
          </div>
        </section>

        {/* Filters and Grid Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Category Tabs */}
          <div className="flex flex-col items-center space-y-6 mb-12">
            <div className="flex items-center space-x-2 text-xs uppercase tracking-wider text-muted font-bold">
              <SlidersHorizontal className="w-4 h-4 text-accent" />
              <span>Phân loại sản phẩm</span>
            </div>
            
            {/* Scrollable Tabs row */}
            <div className="w-full overflow-x-auto pb-3 flex justify-start md:justify-center scrollbar-thin scrollbar-thumb-accent">
              <div className="flex space-x-2 px-1">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategoryChange(cat.id)}
                      className={`whitespace-nowrap px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                        isActive
                          ? "bg-accent border-transparent text-white shadow-md shadow-accent/20"
                          : "bg-white border-accent/15 text-primary hover:border-accent hover:text-accent"
                      }`}
                    >
                      {cat.name}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Results Summary */}
          <div className="flex items-center justify-between mb-8 border-b border-accent/10 pb-4">
            <p className="text-xs text-muted font-medium uppercase tracking-wider">
              Hiển thị <span className="text-accent font-bold">{visibleProducts.length}</span> trên <span className="text-primary font-bold">{filteredProducts.length}</span> sản phẩm
            </p>
          </div>

          {/* Product Grid (Responsive: 1 col on mobile, 2 col on sm/md, 3 col on lg, 4 col on xl) */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
              {visibleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-xl border border-accent/10">
              <p className="text-slate-500">Không tìm thấy sản phẩm nào trong danh mục này.</p>
            </div>
          )}

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center mt-16">
              <button
                onClick={() => setVisibleCount((prev) => prev + 4)}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-white border border-accent/30 text-xs font-bold uppercase tracking-wider rounded-lg text-primary hover:bg-accent hover:text-white transition-all duration-300 shadow-sm"
              >
                <span>Xem thêm sản phẩm</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          )}
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function CollectionClient() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-background-warm flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-12 h-12 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-semibold text-muted uppercase tracking-widest animate-pulse">Đang tải bộ sưu tập...</p>
        </div>
      </div>
    }>
      <CollectionContent />
    </Suspense>
  );
}

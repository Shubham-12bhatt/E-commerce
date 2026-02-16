import { ArrowRight, Sparkles, ShoppingBag, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import exclusive_image from '../assets/exclusive_image.png';
import product_14 from '../assets/product_14.png';
import product_3 from '../assets/product_3.png';
import product_16 from '../assets/product_16.png';
import product_5 from '../assets/product_5.png';


const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-50 via-orange-50/30 to-blue-50/40 overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLW9wYWNpdHk9IjAuMDMiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-60"></div>

      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16 min-h-screen py-20">

          <div className="flex-1 max-w-2xl space-y-8 lg:pr-12">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-5 py-2 rounded-full shadow-lg border border-orange-100">
              <Sparkles className="w-4 h-4 text-orange-500" />
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                New Arrivals Only
              </span>
              <div className="flex gap-0.5">
                {[1, 2, 3].map((i) => (
                  <Star key={i} className="w-3 h-3 fill-orange-400 text-orange-400" />
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                <span className="block text-gray-900 mb-2">Discover</span>
                <span className="block text-gray-900 mb-2">Your Perfect</span>
                <span className="block bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                  Style
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-gray-600 max-w-lg leading-relaxed">
                Explore our curated collection of premium fashion pieces designed for the modern trendsetter. From casual to formal, find everything you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => document.getElementById('new-collections')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative overflow-hidden bg-gradient-to-r from-orange-500 to-red-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center justify-center gap-3 cursor-pointer  ">
                  Shop New Collection
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>


            </div>

            <div className="flex items-center gap-12 pt-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">500+</div>
                <div className="text-sm text-gray-600 mt-1">Premium Products</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">50K+</div>
                <div className="text-sm text-gray-600 mt-1">Happy Customers</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900">4.9★</div>
                <div className="text-sm text-gray-600 mt-1">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="flex-1 relative">
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/20 to-pink-400/20 rounded-[3rem] transform rotate-6 scale-105"></div>

              <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-[3rem] p-8 shadow-2xl border border-gray-200">
                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="aspect-[3/4] bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl shadow-lg overflow-hidden group relative cursor-pointer">
                      <img
                        src={product_3}
                        alt="Women's Collection"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="block text-white font-bold text-xl mb-1">Women's</span>
                        <Link to="/womens" className="text-orange-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-1 cursor-pointer" >
                          Shop Now <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                    <div className="aspect-[3/4] bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl shadow-lg overflow-hidden group mt-8 relative cursor-pointer">
                      <img
                        src={product_14}
                        alt="Men's Collection"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="block text-white font-bold text-xl mb-1">Men's</span>
                        <Link to="/mens" className="text-blue-200 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0 inline-flex items-center gap-1 cursor-pointer">
                          Shop Now <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-pink-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-orange-100">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900">Trending Now</h3>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 fill-orange-400 text-orange-400" />
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-300 to-red-300 rounded-lg">
                          {/* <img src={product_5} alt=""
                           className="w-full h-full object-cover"
                          /> */}
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-300 rounded-full w-3/4 mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-300 to-teal-300 rounded-lg">
                          {/* <img src={product_16} alt=""
                           className="w-full h-full object-cover"
                          /> */}
                        </div>
                        <div className="flex-1">
                          <div className="h-2 bg-gray-300 rounded-full w-2/3 mb-1"></div>
                          <div className="h-2 bg-gray-200 rounded-full w-1/3"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 shadow-md border border-green-100">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-2xl">✓</span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">Free Shipping</div>
                      <div className="text-xs text-gray-600">On orders over $50</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default Hero;

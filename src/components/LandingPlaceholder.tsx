import isotipoImage from "figma:asset/ffe4ad4f2f49438d5dc5a05c6d97274b62cd0edf.png";
import {
  Code,
  Layers,
  Sparkles,
  ArrowRight,
  Globe,
  Zap,
  Construction,
} from "lucide-react";

export function LandingPlaceholder() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background gradient effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFFF00]/5 via-transparent to-[#FFFF00]/5" />

        {/* Geometric patterns */}
        <div className="absolute top-20 right-4 md:right-10 w-32 h-32 md:w-64 md:h-64 bg-[#FFFF00]/5 transform rotate-45 blur-3xl" />
        <div className="absolute bottom-20 left-4 md:left-10 w-48 h-48 md:w-96 md:h-96 bg-[#FFFF00]/5 transform -rotate-12 blur-3xl" />

        {/* Header */}
        <header className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-black/20">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6 flex items-center justify-between">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={isotipoImage}
                alt="Logo"
                className="w-8 h-8 md:w-12 md:h-12 rounded-lg"
              />
              <span className="text-base md:text-xl tracking-tight">
                educortez
              </span>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <div className="h-4 w-16 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
              <div className="h-4 w-20 bg-white/10 rounded animate-pulse" />
            </nav>
            <button className="hidden md:block p-3 bg-[#FFFF00] text-black rounded-lg hover:bg-[#FFFF00]/90 transition-all hover:scale-105 flex items-center gap-2">
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </header>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24 lg:py-32">
          <div className="grid md:grid-cols-2 gap-12 md:gap-12 items-center">
            <div className="space-y-8 md:space-y-8">
              <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 rounded-full text-xs md:text-sm text-[#FFFF00]">
                <div className="h-3 w-24 md:w-32 bg-[#FFFF00]/30 rounded" />
              </div>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl leading-tight">
                Contenido
                <br />
                <span className="text-[#FFFF00]">
                  Próximamente
                </span>
              </h1>

              <p className="text-base md:text-xl text-white/60 max-w-lg">
                Estamos preparando algo increíble. Este espacio
                estará disponible pronto con contenido innovador
                y funcionalidades excepcionales.
              </p>

              <div className="flex flex-wrap gap-3 md:gap-4">
                <button className="px-4 md:px-8 h-[30px] md:h-auto md:py-4 bg-[#FFFF00] text-black rounded-lg hover:bg-[#FFFF00]/90 transition-all hover:scale-105 flex items-center gap-2 text-sm md:text-base">
                  <div className="h-4 md:h-5 w-16 md:w-20 bg-black/20 rounded" />
                  <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                </button>
                <button className="px-4 md:px-8 h-[30px] md:h-auto md:py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all text-sm md:text-base">
                  <div className="h-4 md:h-5 w-16 md:w-20 bg-white/20 rounded" />
                </button>
              </div>
            </div>

            {/* Isotipo Feature */}
            <div className="relative mt-8 md:mt-0">
              <div className="absolute inset-0 bg-[#FFFF00]/20 blur-3xl transform scale-75" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl md:rounded-3xl p-6 md:p-12 backdrop-blur-sm">
                <div className="relative">
                  <img
                    src={isotipoImage}
                    alt="Isotipo"
                    className="w-full max-w-[300px] md:max-w-none h-auto mx-auto md:mx-0 transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Construction barriers overlay */}
                  <div className="absolute -top-3 -right-3 md:-top-6 md:-right-6 bg-[#FFFF00] text-black p-2 md:p-3 rounded-full shadow-lg animate-pulse">
                    <Construction className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <div
                    className="absolute -bottom-3 -left-3 md:-bottom-6 md:-left-6 bg-[#FFFF00] text-black p-2 md:p-3 rounded-full shadow-lg animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Construction className="w-5 h-5 md:w-8 md:h-8" />
                  </div>
                  <div
                    className="absolute top-1/2 -right-2 md:-right-4 bg-[#FFFF00] text-black p-1.5 md:p-2 rounded-full shadow-lg animate-pulse hidden sm:block"
                    style={{ animationDelay: "0.25s" }}
                  >
                    <Construction className="w-4 h-4 md:w-6 md:h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center mb-12 md:mb-16">
          <div className="h-8 md:h-10 w-full max-w-[200px] md:max-w-none md:w-80 bg-white/10 rounded mx-auto mb-3 md:mb-4" />
          <div className="h-4 md:h-5 w-full max-w-[280px] md:max-w-none md:w-96 bg-white/10 rounded mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              icon: <Zap className="w-8 h-8" />,
            },
            {
              icon: <Layers className="w-8 h-8" />,
            },
            {
              icon: <Globe className="w-8 h-8" />,
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-8 md:p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-xl md:rounded-2xl hover:border-[#FFFF00]/30 transition-all hover:transform hover:scale-105"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 bg-[#FFFF00]/10 rounded-lg md:rounded-xl flex items-center justify-center text-[#FFFF00] mb-4 md:mb-6 group-hover:bg-[#FFFF00]/20 transition-colors">
                <div className="w-6 h-6 md:w-8 md:h-8">{feature.icon}</div>
              </div>
              <div className="h-5 md:h-6 w-full max-w-[140px] md:max-w-none md:w-48 bg-white/10 rounded mb-2 md:mb-3" />
              <div className="h-3 md:h-4 w-full bg-white/10 rounded mb-2" />
              <div className="h-3 md:h-4 w-3/4 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="bg-gradient-to-r from-[#FFFF00]/10 via-[#FFFF00]/5 to-transparent border border-[#FFFF00]/20 rounded-2xl md:rounded-3xl p-6 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index}>
                <div className="h-8 md:h-12 w-16 md:w-24 bg-[#FFFF00]/20 rounded mx-auto mb-2" />
                <div className="h-3 md:h-4 w-20 md:w-28 bg-white/10 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="text-center space-y-6 md:space-y-6">
          <div className="inline-flex items-center gap-2 px-3 md:px-4 py-1.5 md:py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 rounded-full text-[#FFFF00] text-xs md:text-sm">
            <Sparkles className="w-3 h-3 md:w-4 md:h-4" />
            <div className="h-3 w-24 md:w-32 bg-[#FFFF00]/30 rounded" />
          </div>

          <div className="h-8 md:h-12 w-full max-w-[280px] md:max-w-none md:w-96 bg-white/10 rounded mx-auto" />

          <div className="h-5 md:h-6 w-full max-w-[280px] md:max-w-[500px] bg-white/10 rounded mx-auto px-4" />

          <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-3 pt-4 px-4 md:px-0">
            <div className="flex-1 px-4 md:px-6 py-3 md:py-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="h-4 md:h-5 w-24 md:w-32 bg-white/10 rounded mx-auto" />
            </div>
            <button className="px-6 md:px-8 py-3 md:py-4 bg-[#FFFF00] text-black rounded-lg hover:bg-[#FFFF00]/90 transition-all hover:scale-105 text-sm md:text-base">
              <div className="h-4 md:h-5 w-12 md:w-16 bg-black/20 rounded mx-auto" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="flex items-center gap-2 md:gap-3">
              <img
                src={isotipoImage}
                alt="Logo"
                className="w-8 h-8 md:w-10 md:h-10 rounded-lg"
              />
              <div className="h-3 md:h-4 w-full max-w-[200px] md:max-w-none md:w-64 bg-white/10 rounded" />
            </div>

            <div className="flex gap-4 md:gap-6 text-white/60">
              <div className="h-3 md:h-4 w-12 md:w-16 bg-white/10 rounded" />
              <div className="h-3 md:h-4 w-12 md:w-16 bg-white/10 rounded" />
              <div className="h-3 md:h-4 w-16 md:w-20 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
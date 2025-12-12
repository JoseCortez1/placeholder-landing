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
        <div className="absolute top-20 right-10 w-64 h-64 bg-[#FFFF00]/5 transform rotate-45 blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#FFFF00]/5 transform -rotate-12 blur-3xl" />

        {/* Header */}
        <header className="relative z-10 border-b border-white/10 backdrop-blur-sm bg-black/20">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src={isotipoImage}
                alt="Logo"
                className="w-12 h-12 rounded-lg"
              />
              <span className="text-xl tracking-tight">
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
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-block px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 rounded-full text-sm text-[#FFFF00]">
                <div className="h-3 w-32 bg-[#FFFF00]/30 rounded" />
              </div>

              <h1 className="text-5xl md:text-7xl leading-tight">
                Contenido
                <br />
                <span className="text-[#FFFF00]">
                  Próximamente
                </span>
              </h1>

              <p className="text-xl text-white/60 max-w-lg">
                Estamos preparando algo increíble. Este espacio
                estará disponible pronto con contenido innovador
                y funcionalidades excepcionales.
              </p>

              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-[#FFFF00] w- text-black rounded-lg hover:bg-[#FFFF00]/90 transition-all hover:scale-105 flex items-center gap-2">
                  <div className="h-5 w-20 bg-black/20 rounded" />

                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="px-8 py-4 bg-white/5 border border-white/10 rounded-lg hover:bg-white/10 transition-all">
                  <div className="h-5 w-20 bg-white/20 rounded" />
                </button>
              </div>
            </div>

            {/* Isotipo Feature */}
            <div className="relative">
              <div className="absolute inset-0 bg-[#FFFF00]/20 blur-3xl transform scale-75" />
              <div className="relative bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 backdrop-blur-sm">
                <div className="relative">
                  <img
                    src={isotipoImage}
                    alt="Isotipo"
                    className="w-full h-auto transform hover:scale-105 transition-transform duration-500"
                  />
                  {/* Construction barriers overlay */}
                  <div className="absolute -top-6 -right-6 bg-[#FFFF00] text-black p-3 rounded-full shadow-lg animate-pulse">
                    <Construction className="w-8 h-8" />
                  </div>
                  <div
                    className="absolute -bottom-6 -left-6 bg-[#FFFF00] text-black p-3 rounded-full shadow-lg animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  >
                    <Construction className="w-8 h-8" />
                  </div>
                  <div
                    className="absolute top-1/2 -right-4 bg-[#FFFF00] text-black p-2 rounded-full shadow-lg animate-pulse"
                    style={{ animationDelay: "0.25s" }}
                  >
                    <Construction className="w-6 h-6" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <div className="h-10 w-80 bg-white/10 rounded mx-auto mb-4" />
          <div className="h-5 w-96 bg-white/10 rounded mx-auto" />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
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
              className="group p-8 bg-gradient-to-br from-white/5 to-white/0 border border-white/10 rounded-2xl hover:border-[#FFFF00]/30 transition-all hover:transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#FFFF00]/10 rounded-xl flex items-center justify-center text-[#FFFF00] mb-6 group-hover:bg-[#FFFF00]/20 transition-colors">
                {feature.icon}
              </div>
              <div className="h-6 w-48 bg-white/10 rounded mb-3" />
              <div className="h-4 w-full bg-white/10 rounded mb-2" />
              <div className="h-4 w-3/4 bg-white/10 rounded" />
            </div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="bg-gradient-to-r from-[#FFFF00]/10 via-[#FFFF00]/5 to-transparent border border-[#FFFF00]/20 rounded-3xl p-12">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {[1, 2, 3, 4].map((index) => (
              <div key={index}>
                <div className="h-12 w-24 bg-[#FFFF00]/20 rounded mx-auto mb-2" />
                <div className="h-4 w-28 bg-white/10 rounded mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24">
        <div className="text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFFF00]/10 border border-[#FFFF00]/20 rounded-full text-[#FFFF00]">
            <Sparkles className="w-4 h-4" />
            <div className="h-3 w-32 bg-[#FFFF00]/30 rounded" />
          </div>

          <div className="h-12 w-96 bg-white/10 rounded mx-auto" />

          <div className="h-6 w-[500px] bg-white/10 rounded mx-auto" />

          <div className="max-w-md mx-auto flex gap-3 pt-4">
            <div className="flex-1 px-6 py-4 bg-white/5 border border-white/10 rounded-lg">
              <div className="h-5 w-32 bg-white/10 rounded" />
            </div>
            <button className="px-8 py-4 bg-[#FFFF00] text-black rounded-lg hover:bg-[#FFFF00]/90 transition-all hover:scale-105">
              <div className="h-5 w-16 bg-black/20 rounded" />
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 backdrop-blur-sm bg-black/20">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={isotipoImage}
                alt="Logo"
                className="w-10 h-10 rounded-lg"
              />
              <div className="h-4 w-64 bg-white/10 rounded" />
            </div>

            <div className="flex gap-6 text-white/60">
              <div className="h-4 w-16 bg-white/10 rounded" />
              <div className="h-4 w-16 bg-white/10 rounded" />
              <div className="h-4 w-20 bg-white/10 rounded" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
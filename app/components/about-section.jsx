import { Card, CardContent } from "@/components/ui/card";
import { Heart, Zap, Shield, Star } from "lucide-react";
import Image from "next/image";

export default function AboutSection() {
  const benefits = [
    {
      icon: Heart,
      title: "Stressz csökkentés",
      description:
        "A masszázs természetes módon csökkenti a kortizol szintet és növeli a boldogsághormonok termelését.",
      color: "rose",
    },
    {
      icon: Zap,
      title: "Energia növelés",
      description:
        "Javítja a vérkeringést és az oxigén ellátást, így növeli az energia szintet és a vitalitást.",
      color: "amber",
    },
    {
      icon: Shield,
      title: "Immunrendszer erősítés",
      description:
        "Rendszeres masszázs erősíti az immunrendszert és csökkenti a betegségek kockázatát.",
      color: "emerald",
    },
    {
      icon: Star,
      title: "Jobb alvás",
      description:
        "Elősegíti a mélyebb, pihentető alvást a relaxáció és a feszültség oldás révén.",
      color: "purple",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Rólam
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Üdvözlöm az oldalamon! Ismerje meg, ki vagyok, és fedezze fel a
            masszázs csodálatos előnyeit a test és lélek harmóniájáért.
          </p>
        </div>

        {/* Personal touch section with background image - FIRST */}
        <div className="mb-20 rounded-3xl overflow-hidden animate-fade-in-up">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/placeholder.svg?height=800&width=1600')",
            }}
          ></div>

          <div className="relative bg-white/70 backdrop-blur-sm p-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Személyes megközelítés
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  Minden ügyfelem egyedi, ezért minden kezelést személyre
                  szabok. Figyelembe veszem az egyéni igényeket, problémákat és
                  célokat, hogy a lehető legjobb eredményt érjük el együtt.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-rose-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-700">
                      Részletes konzultáció minden kezelés előtt
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-300"></div>
                    <span className="text-gray-700">
                      Egyéni kezelési terv készítése
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                    <span className="text-gray-700">
                      Folyamatos visszajelzés és alkalmazkodás
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl transform hover:rotate-2 transition-transform duration-300 group">
                  <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-amber-500/20 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <Image
                    src="/profile.png"
                    alt="Inci - Diplomás masszőr"
                    width={500}
                    height={600}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                    <div className="text-center">
                      <h4 className="text-2xl font-bold text-white mb-1">
                        Inci
                      </h4>
                      <p className="text-white/90 text-lg">Diplomás masszőr</p>
                      <div className="flex justify-center space-x-1 mt-2">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 text-amber-400 fill-current"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Certificates */}
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg p-3 shadow-lg rotate-6 transform hover:rotate-0 transition-transform duration-300">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                      <Star className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500">Minősített</p>
                      <p className="text-sm font-bold text-gray-800">
                        Szakember
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits section - SECOND */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h3 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Miért válaszd a masszázst?
          </h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A masszázs nem csak luxus, hanem befektetés az egészségbe és
            jólétbe. Tudományosan bizonyított előnyei segítenek a mindennapi
            kihívások leküzdésében.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            const colorClasses = {
              rose: "from-rose-500 to-pink-500 group-hover:from-rose-600 group-hover:to-pink-600",
              amber:
                "from-amber-500 to-orange-500 group-hover:from-amber-600 group-hover:to-orange-600",
              emerald:
                "from-emerald-500 to-teal-500 group-hover:from-emerald-600 group-hover:to-teal-600",
              purple:
                "from-purple-500 to-indigo-500 group-hover:from-purple-600 group-hover:to-indigo-600",
            };

            return (
              <Card
                key={index}
                className={`group transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-slide-in-up`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${
                      colorClasses[benefit.color]
                    } flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-rose-600 transition-colors duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Star, Sparkles } from "lucide-react";

export default function ServicesSection({ onOpenBooking }) {
  const services = [
    {
      name: "Svéd masszázs",
      duration: "60 perc",
      price: "12 000 Ft",
      description:
        "Klasszikus teljes test masszázs a feszültség oldására és a vérkeringés javítására.",
      features: ["Teljes test kezelés", "Stressz oldás", "Vérkeringés javítás"],
      popular: false,
      gradient: "from-rose-500 to-pink-500",
    },
    {
      name: "Aromaterápiás masszázs",
      duration: "75 perc",
      price: "15 000 Ft",
      description:
        "Illóolajokkal kiegészített relaxációs masszázs a test és lélek harmóniájáért.",
      features: [
        "Természetes illóolajok",
        "Mély relaxáció",
        "Hangulat javítás",
      ],
      popular: true,
      gradient: "from-amber-500 to-orange-500",
    },
    {
      name: "Mélyszöveti masszázs",
      duration: "60 perc",
      price: "14 000 Ft",
      description:
        "Intenzív kezelés krónikus feszültségek és izomcsomók oldására.",
      features: [
        "Mély izomrétegek",
        "Fájdalom csökkentés",
        "Mobilitás javítás",
      ],
      popular: false,
      gradient: "from-emerald-500 to-teal-500",
    },
    {
      name: "Relaxációs masszázs",
      duration: "45 perc",
      price: "10 000 Ft",
      description: "Lágy, nyugtató kezelés a mindennapi stressz enyhítésére.",
      features: ["Lágy technikák", "Teljes relaxáció", "Alvás javítás"],
      popular: false,
      gradient: "from-purple-500 to-indigo-500",
    },
    {
      name: "Nyak-váll masszázs",
      duration: "30 perc",
      price: "8 000 Ft",
      description:
        "Célzott kezelés az irodai munka okozta feszültségek oldására.",
      features: [
        "Nyak és váll fókusz",
        "Gyors eredmény",
        "Fejfájás csökkentés",
      ],
      popular: false,
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      name: "Teljes wellness csomag",
      duration: "120 perc",
      price: "25 000 Ft",
      description:
        "Komplex kezelés masszázzsal, aromaterápiával és relaxációs technikákkal.",
      features: [
        "2 órás kezelés",
        "Komplex megközelítés",
        "Maximális eredmény",
      ],
      popular: true,
      gradient: "from-rose-500 to-purple-500",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-rose-50 to-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Szolgáltatásaim
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Széles választék professzionális masszázs kezelésekből, minden
            igényre és problémára személyre szabott megoldással.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/90 backdrop-blur-sm animate-slide-in-up ${
                service.popular ? "ring-2 ring-amber-400" : ""
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 animate-pulse">
                    <Star className="w-4 h-4" />
                    <span>Népszerű</span>
                  </div>
                </div>
              )}

              <CardHeader className="relative">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${service.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}
                ></div>
                <CardTitle className="text-2xl font-bold text-gray-800 relative z-10 group-hover:text-rose-600 transition-colors duration-300">
                  {service.name}
                </CardTitle>
                <div className="flex items-center space-x-4 relative z-10">
                  <div className="flex items-center space-x-1 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span>{service.duration}</span>
                  </div>
                  <div
                    className={`text-2xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent`}
                  >
                    {service.price}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2"
                    >
                      <Sparkles
                        className={`w-4 h-4 bg-gradient-to-r ${service.gradient} text-transparent`}
                        style={{
                          background: `linear-gradient(to right, var(--tw-gradient-stops))`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                        }}
                      />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white transform transition-all duration-300 hover:scale-105 group-hover:shadow-lg`}
                  onClick={() => onOpenBooking(service.name)}
                >
                  <span className="group-hover:animate-pulse">Foglalás</span>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Special offer section */}
        <div className="mt-20 bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl p-12 text-white animate-fade-in-up delay-1000">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">Különleges ajánlat</h3>
            <p className="text-xl mb-8 opacity-90">
              Első alkalommal 20% kedvezmény minden kezelésre!
            </p>
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
              onClick={() => onOpenBooking()}
            >
              Kedvezmény igénylése
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

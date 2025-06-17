"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Phone,
  Mail,
  MapPin,
  Calendar,
  Sparkles,
  Heart,
  Leaf,
} from "lucide-react";
import Image from "next/image";

export default function ContactSection({ onOpenBooking }) {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      info: "+36 30 123 4567",

      gradient: "from-rose-500 to-pink-500",
    },
    {
      icon: Mail,
      title: "Email",
      info: "anna@masszazs.hu",

      gradient: "from-amber-500 to-orange-500",
    },
    {
      icon: MapPin,
      title: "Cím",
      info: "1051 Budapest, Példa utca 12.",

      gradient: "from-emerald-500 to-teal-500",
    },
  ];

  const workingHours = [
    { day: "Hétfő", hours: "9:00 - 19:00" },
    { day: "Kedd", hours: "9:00 - 19:00" },
    { day: "Szerda", hours: "9:00 - 19:00" },
    { day: "Csütörtök", hours: "9:00 - 19:00" },
    { day: "Péntek", hours: "9:00 - 19:00" },
    { day: "Szombat", hours: "9:00 - 15:00" },
    { day: "Vasárnap", hours: "Zárva" },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-rose-50">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-6">
            Kapcsolat és időpontfoglalás
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Várom jelentkezését! Foglaljon időpontot kényelmesen telefonon,
            emailben vagy töltse ki az alábbi űrlapot.
          </p>
        </div>

        {/* Contact cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          {contactInfo.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <Card
                key={index}
                className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl border-0 bg-white/80 backdrop-blur-sm animate-slide-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${contact.gradient} flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">
                    {contact.title}
                  </h3>
                  <p className="text-gray-600 mb-4 text-sm">{contact.info}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Animated Image Section */}
          <div className="animate-slide-in-left relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 via-white to-amber-100 p-8">
              {/* Floating animated elements */}
              <div className="absolute top-6 right-6 animate-bounce delay-1000">
                <Sparkles className="w-8 h-8 text-rose-400 opacity-60" />
              </div>
              <div className="absolute bottom-8 left-6 animate-pulse delay-2000">
                <Heart className="w-6 h-6 text-amber-400 opacity-50" />
              </div>
              <div className="absolute top-1/2 right-8 animate-bounce delay-3000">
                <Leaf className="w-10 h-10 text-emerald-400 opacity-40" />
              </div>

              {/* Main image with animations */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-amber-500/20 rounded-2xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                <div className="relative rounded-2xl overflow-hidden transform group-hover:scale-105 transition-transform duration-500">
                  <Image
                    src="/place.jpg"
                    alt="Relaxáló masszázs környezet"
                    width={600}
                    height={500}
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              {/* Overlay content */}
              <div className="absolute bottom-8 left-8 right-8 text-center">
                <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 transform hover:scale-105 transition-transform duration-300">
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-rose-600 to-amber-600 bg-clip-text text-transparent mb-2">
                    Békés környezet
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Professzionális masszázs stúdió nyugodt, relaxáló légkörrel
                  </p>
                  <div className="flex justify-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Tiszta</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse delay-300"></div>
                      <span className="text-sm text-gray-600">Biztonságos</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                      <span className="text-sm text-gray-600">Nyugodt</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional floating elements */}
              <div className="absolute top-1/4 left-4 w-16 h-16 bg-gradient-to-r from-rose-400 to-pink-400 rounded-full opacity-20 animate-float"></div>
              <div className="absolute bottom-1/4 right-4 w-12 h-12 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full opacity-30 animate-float delay-1000"></div>
              <div className="absolute top-3/4 left-1/4 w-8 h-8 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full opacity-25 animate-float delay-2000"></div>
            </div>

            {/* Bottom decorative cards */}
            <div className="grid grid-cols-2 gap-4 mt-6">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slide-in-up delay-500">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Heart className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Személyre szabott
                    </p>
                    <p className="text-xs text-gray-600">Egyedi kezelések</p>
                  </div>
                </div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-lg transform hover:scale-105 transition-transform duration-300 animate-slide-in-up delay-700">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white animate-pulse" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-800">
                      Professzionális
                    </p>
                    <p className="text-xs text-gray-600">Tapasztalt kezek</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Working hours and additional info */}
          <div className="space-y-8 animate-slide-in-right">
            <Card className="bg-white/90 backdrop-blur-sm border-0 shadow-xl">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Calendar className="w-8 h-8 text-amber-500" />
                  <h3 className="text-2xl font-bold text-gray-800">
                    Nyitvatartás
                  </h3>
                </div>

                <div className="space-y-3">
                  {workingHours.map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0 hover:bg-rose-50 transition-colors duration-300 rounded px-2"
                    >
                      <span className="font-medium text-gray-700">
                        {schedule.day}
                      </span>
                      <span
                        className={`${
                          schedule.hours === "Zárva"
                            ? "text-gray-400"
                            : "text-rose-600 font-medium"
                        }`}
                      >
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-r from-rose-500 to-amber-500 text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">
                  Gyors időpontfoglalás
                </h3>
                <p className="mb-6 opacity-90">
                  Hívjon most és foglaljon időpontot még ma!
                </p>
                <Button
                  size="lg"
                  className="bg-white text-rose-600 hover:bg-gray-100 px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
                  onClick={() => window.open("tel:+36301234567", "_self")}
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                  <span>+36 30 123 4567</span>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Leaf } from "lucide-react";
import Image from "next/image";

export default function HeroSection({ onOpenBooking }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 animate-bounce delay-1000">
          <Sparkles className="w-8 h-8 text-rose-300 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-pulse delay-2000">
          <Heart className="w-6 h-6 text-amber-300 opacity-50" />
        </div>
        <div className="absolute bottom-32 left-20 animate-bounce delay-3000">
          <Leaf className="w-10 h-10 text-emerald-300 opacity-40" />
        </div>
      </div>

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-rose-600 via-amber-500 to-rose-500 bg-clip-text text-transparent leading-tight animate-slide-in-left">
              Relaxáció és
              <span className="block">Megújulás</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed animate-slide-in-left delay-300">
              Professzionális masszázsterápia a test és lélek harmóniájáért.
              Tapasztalt kezekkel, személyre szabott kezelésekkel.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in-left delay-500">
            <Button
              size="lg"
              className="bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              onClick={() => onOpenBooking()}
            >
              <span className="group-hover:animate-pulse">
                Időpont foglalás
              </span>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-rose-300 text-rose-600 hover:bg-rose-50 px-8 py-4 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() =>
                document
                  .getElementById("services")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Szolgáltatások
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-in delay-700">
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-rose-600 group-hover:scale-110 transition-transform duration-300">
                5+
              </div>
              <div className="text-sm text-gray-500">Év tapasztalat</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-amber-600 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <div className="text-sm text-gray-500">Elégedett ügyfél</div>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="text-3xl font-bold text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                10+
              </div>
              <div className="text-sm text-gray-500">Kezelési típus</div>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="relative animate-slide-in-right">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-500">
            <Image
              src="/hero.png"
              alt="Masszázs kezelés"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-900/20 to-transparent"></div>
          </div>

          {/* Floating elements */}
          <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg animate-float">
            <Sparkles className="w-8 h-8 text-rose-500" />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full p-4 shadow-lg animate-float delay-1000">
            <Heart className="w-8 h-8 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}

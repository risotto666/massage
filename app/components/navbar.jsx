"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  Sparkles,
  Heart,
  Calendar,
  Phone,
  User,
  Home,
} from "lucide-react";

export default function Navbar({ onOpenBooking }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsOpen(false);
  };

  const navItems = [
    {
      name: "Kezdőlap",
      icon: Home,
      action: scrollToTop,
      gradient: "from-rose-500 to-pink-500",
      hoverBg: "hover:bg-rose-50",
      textColor: "text-rose-600",
    },
    {
      name: "Rólam",
      icon: User,
      action: () => scrollToSection("about"),
      gradient: "from-amber-500 to-orange-500",
      hoverBg: "hover:bg-amber-50",
      textColor: "text-amber-600",
    },
    {
      name: "Szolgáltatások",
      icon: Sparkles,
      action: () => scrollToSection("services"),
      gradient: "from-emerald-500 to-teal-500",
      hoverBg: "hover:bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      name: "Kapcsolat",
      icon: Phone,
      action: () => scrollToSection("contact"),
      gradient: "from-purple-500 to-indigo-500",
      hoverBg: "hover:bg-purple-50",
      textColor: "text-purple-600",
    },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-lg shadow-xl border-b border-rose-100"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={scrollToTop}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
                  <Heart className="w-6 h-6 text-white animate-pulse" />
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-amber-400 to-orange-400 rounded-full animate-bounce">
                  <Sparkles className="w-3 h-3 text-white p-0.5" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-amber-600 to-emerald-600 bg-clip-text text-transparent">
                  Inci Masszázs
                </h1>
                <p className="text-xs text-gray-500 -mt-1">
                  Relaxáció & Megújulás
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-2">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={item.action}
                    className={`group flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300 ${item.hoverBg} transform hover:scale-105 hover:shadow-lg`}
                  >
                    <div
                      className={`w-8 h-8 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12`}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <span
                      className={`font-medium ${item.textColor} group-hover:font-semibold transition-all duration-300`}
                    >
                      {item.name}
                    </span>
                  </button>
                );
              })}

              {/* CTA Button */}
              <Button
                onClick={() => onOpenBooking()}
                className="ml-4 bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 hover:from-rose-600 hover:via-amber-600 hover:to-emerald-600 text-white px-6 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Calendar className="w-5 h-5 mr-2 group-hover:animate-pulse" />
                <span className="relative z-10">Időpont foglalás</span>
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-full bg-gradient-to-r from-rose-500 to-amber-500 text-white transform transition-all duration-300 hover:scale-110 hover:shadow-lg"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-in-out ${
            isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white/95 backdrop-blur-lg border-t border-rose-100`}
        >
          <div className="container mx-auto px-4 py-6">
            <div className="space-y-4">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <button
                    key={index}
                    onClick={item.action}
                    className={`w-full group flex items-center space-x-4 p-4 rounded-2xl transition-all duration-300 ${item.hoverBg} transform hover:scale-105 hover:shadow-lg animate-slide-in-left`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center transform transition-all duration-300 group-hover:rotate-12 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-left">
                      <span
                        className={`text-lg font-semibold ${item.textColor} block`}
                      >
                        {item.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {item.name === "Kezdőlap" && "Vissza a tetejére"}
                        {item.name === "Rólam" && "Miért válaszd a masszázst"}
                        {item.name === "Szolgáltatások" && "Kezelések és árak"}
                        {item.name === "Kapcsolat" && "Elérhetőségek"}
                      </span>
                    </div>
                  </button>
                );
              })}

              {/* Mobile CTA */}
              <Button
                onClick={() => {
                  onOpenBooking();
                  setIsOpen(false);
                }}
                className="w-full bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-500 hover:from-rose-600 hover:via-amber-600 hover:to-emerald-600 text-white p-4 rounded-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-xl group relative overflow-hidden animate-slide-in-left"
                style={{ animationDelay: "400ms" }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="flex items-center justify-center space-x-3 relative z-10">
                  <Calendar className="w-6 h-6 group-hover:animate-pulse" />
                  <div className="text-left">
                    <span className="text-lg font-bold block">
                      Időpont foglalás
                    </span>
                    <span className="text-sm opacity-90">Foglaljon most!</span>
                  </div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content from hiding behind fixed navbar */}
      <div className="h-20"></div>
    </>
  );
}

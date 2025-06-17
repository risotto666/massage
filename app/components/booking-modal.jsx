"use client";
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  X,
  Calendar,
  Clock,
  User,
  MessageCircle,
  CheckCircle,
  Heart,
  Sparkles,
} from "lucide-react";

export default function BookingModal({ isOpen, onClose, preSelectedService }) {
  const [selectedService, setSelectedService] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (preSelectedService) {
      setSelectedService(preSelectedService);
    }
  }, [preSelectedService]);

  const services = [
    { name: "Svéd masszázs", duration: "60 perc", price: "12,000 Ft" },
    { name: "Aromaterápiás masszázs", duration: "75 perc", price: "15,000 Ft" },
    { name: "Mélyszöveti masszázs", duration: "60 perc", price: "14,000 Ft" },
    { name: "Relaxációs masszázs", duration: "45 perc", price: "10,000 Ft" },
    { name: "Nyak-váll masszázs", duration: "30 perc", price: "8,000 Ft" },
    {
      name: "Teljes wellness csomag",
      duration: "120 perc",
      price: "25,000 Ft",
    },
  ];

  const timeSlots = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleClose = () => {
    setSelectedService("");
    setSelectedDate("");
    setSelectedTime("");
    setIsSuccess(false);
    setFormData({
      name: "",
      phone: "",
      email: "",
      message: "",
    });
    onClose();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt történne az időpont foglalás logika
    console.log("Foglalás adatok:", {
      service: selectedService,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    });

    // Sikeres foglalás állapot beállítása
    setIsSuccess(true);

    // 5 másodperc után automatikus bezárás
    setTimeout(() => {
      handleClose();
    }, 15000);
  };

  if (!isOpen) return null;

  // Sikeres foglalás képernyő
  if (isSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
        <div className="relative w-full max-w-2xl">
          {/* Háttérkép */}
          <div
            className="absolute inset-0 rounded-3xl bg-cover bg-center opacity-30"
            style={{
              backgroundImage: "url('/placeholder.svg?height=600&width=800')",
            }}
          ></div>

          <Card className="relative bg-white/95 backdrop-blur-lg shadow-2xl border-0 rounded-3xl overflow-hidden animate-slide-in-up">
            {/* Animált háttér elemek */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute top-10 left-10 animate-bounce delay-1000">
                <Sparkles className="w-8 h-8 text-rose-300 opacity-60" />
              </div>
              <div className="absolute top-20 right-20 animate-pulse delay-2000">
                <Heart className="w-6 h-6 text-amber-300 opacity-50" />
              </div>
              <div className="absolute bottom-20 left-20 animate-bounce delay-3000">
                <Sparkles className="w-10 h-10 text-emerald-300 opacity-40" />
              </div>
              <div className="absolute bottom-10 right-10 animate-pulse delay-1500">
                <Heart className="w-8 h-8 text-rose-300 opacity-50" />
              </div>
            </div>

            <CardContent className="relative z-10 p-12 text-center">
              {/* Sikeres ikon */}
              <div className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center animate-bounce">
                <CheckCircle className="w-12 h-12 text-white" />
              </div>

              {/* Főcím */}
              <h2 className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-4">
                Sikeres foglalás!
              </h2>

              {/* Személyes megszólítás */}
              <div className="mb-8">
                <p className="text-2xl text-gray-800 mb-2">
                  Kedves {formData.name || "Vendégünk"}!
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Köszönjük a bizalmát! Foglalása sikeresen rögzítésre került.
                </p>
              </div>

              {/* Foglalás részletei */}
              <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-6 mb-8 border border-emerald-200">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                  Foglalás részletei:
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Szolgáltatás:</strong> {selectedService}
                  </p>
                  <p>
                    <strong>Dátum:</strong> {selectedDate}
                  </p>
                  <p>
                    <strong>Időpont:</strong> {selectedTime}
                  </p>
                  <p>
                    <strong>Ár:</strong>{" "}
                    {services.find((s) => s.name === selectedService)?.price}
                  </p>
                </div>
              </div>

              {/* Következő lépések */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hamarosan találkozunk!
                </h3>
                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                    <span>
                      Megerősítő SMS-t fog kapni a megadott telefonszámra
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse delay-300"></div>
                    <span>24 órán belül felvesszük Önnel a kapcsolatot</span>
                  </div>
                  <div className="flex items-center justify-center space-x-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse delay-500"></div>
                    <span>Kérjük, érkezzen 10 perccel korábban</span>
                  </div>
                </div>
              </div>

              {/* Zárás gomb */}
              <Button
                onClick={handleClose}
                className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl group"
              >
                <span className="group-hover:animate-pulse">Rendben</span>
              </Button>

              {/* Automatikus bezárás jelzés */}
              <p className="text-sm text-gray-500 mt-4">
                Ez az ablak 15 másodperc múlva automatikusan bezáródik
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Eredeti foglalási űrlap
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white shadow-2xl animate-slide-in-up">
        <CardHeader className="relative bg-gradient-to-r from-rose-500 to-amber-500 text-white">
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-white/20 rounded-full transition-colors duration-300"
          >
            <X className="w-6 h-6" />
          </button>
          <CardTitle className="text-3xl font-bold flex items-center space-x-3">
            <Calendar className="w-8 h-8" />
            <span>Időpont foglalás</span>
          </CardTitle>
          <p className="text-white/90 text-lg">
            Válassza ki a kívánt szolgáltatást és időpontot
          </p>
        </CardHeader>

        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Szolgáltatás választás */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-rose-500" />
                <span>Válasszon szolgáltatást</span>
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 hover:shadow-lg ${
                      selectedService === service.name
                        ? "border-rose-500 bg-rose-50"
                        : "border-gray-200 hover:border-rose-300"
                    }`}
                    onClick={() => setSelectedService(service.name)}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-semibold text-gray-800">
                          {service.name}
                        </h4>
                        <p className="text-sm text-gray-600">
                          {service.duration}
                        </p>
                      </div>
                      <span className="text-lg font-bold text-rose-600">
                        {service.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dátum és idő választás */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <Calendar className="w-5 h-5 text-rose-500" />
                  <span>Válasszon dátumot</span>
                </label>
                <Input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  min={new Date().toISOString().split("T")[0]}
                  className="border-rose-200 focus:border-rose-500 focus:ring-rose-500 text-lg p-4"
                  required
                />
              </div>

              <div>
                <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-rose-500" />
                  <span>Válasszon időpontot</span>
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                        selectedTime === time
                          ? "border-rose-500 bg-rose-500 text-white"
                          : "border-gray-200 hover:border-rose-300 hover:bg-rose-50"
                      }`}
                      onClick={() => setSelectedTime(time)}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Személyes adatok */}
            <div>
              <label className="block text-lg font-semibold text-gray-800 mb-4 flex items-center space-x-2">
                <User className="w-5 h-5 text-rose-500" />
                <span>Személyes adatok</span>
              </label>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Név *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Az Ön neve"
                    className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefon *
                  </label>
                  <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+36 30 123 4567"
                    className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="email@example.com"
                  className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
                />
              </div>
            </div>

            {/* Üzenet */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Üzenet (opcionális)
              </label>
              <Textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Különleges kérések, egészségügyi információk..."
                rows={4}
                className="border-rose-200 focus:border-rose-500 focus:ring-rose-500"
              />
            </div>

            {/* Összefoglaló */}
            {selectedService && selectedDate && selectedTime && (
              <div className="bg-gradient-to-r from-rose-50 to-amber-50 p-6 rounded-xl border border-rose-200">
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  Foglalás összefoglalója
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Szolgáltatás:</strong> {selectedService}
                  </p>
                  <p>
                    <strong>Dátum:</strong> {selectedDate}
                  </p>
                  <p>
                    <strong>Időpont:</strong> {selectedTime}
                  </p>
                  <p>
                    <strong>Ár:</strong>{" "}
                    {services.find((s) => s.name === selectedService)?.price}
                  </p>
                </div>
              </div>
            )}

            {/* Gombok */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={handleClose}
                className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-50 py-3"
              >
                Mégse
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-rose-500 to-amber-500 hover:from-rose-600 hover:to-amber-600 text-white py-3 transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
                disabled={
                  !selectedService ||
                  !selectedDate ||
                  !selectedTime ||
                  !formData.name ||
                  !formData.phone
                }
              >
                Időpont foglalása
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

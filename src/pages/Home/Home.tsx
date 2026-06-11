import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Car,
  Droplets,
  Sparkles,
  Wrench,
  Package,
  Heart,
  Search,
  SlidersHorizontal,
  CalendarDays,
  Gift,
  Flame,
} from 'lucide-react';
import BottomNavigation from '../../components/BottomNavigation';
import heroCar from '/images/home/car.png';

function Home() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('home');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    if (tab === 'home') {
      navigate('/home');
    } else if (tab === 'explore') {
      navigate('/mapa');
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
        {/* Main scrollable content */}
        <div className="flex-1 overflow-y-auto flex flex-col">
          {/* Hero Section */}
          <div className="relative bg-[#5C2FF5] text-white pt-6 pb-12 min-h-72 overflow-hidden rounded-[0_0_20px_20px]">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-purple-400 rounded-full opacity-20 -mr-10 -mt-10"></div>
            <div className="absolute top-0 -left-12 w-40 h-40 bg-purple-400 rounded-full opacity-20 -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-purple-400 rounded-full opacity-10 -ml-8"></div>

            {/* Hero content */}
            <div className="relative z-10 flex justify-between items-start gap-4">
              <div className="flex-1 pl-8.25 pt-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-10 h-10 rounded-full bg-white border-2 border-yellow-400 flex items-center justify-center">
                    <img src="/images/home/avatar.png" alt="Avatar" className="w-8 h-8 rounded-full" />
                  </div>
                  <p className="text-[20px] font-semibold">Hola, Anyi</p>
                </div>
                <h1 className="text-[18px] leading-8 font-bold mb-3 pt-6">¡Tu carro siempre brillante! ✨</h1>
                <div className="flex items-center gap-1 text-[14px] pt-5">
                  <span>📍 calle 41 a sur # 50 42</span>
                </div>
              </div>

              {/* Hero car image */}
              <div className="w-[44%] h-65 overflow-hidden">
                <img
                  src={heroCar}
                  alt="Car"
                  className="w-full h-auto pt-26 object-cover"
                />
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="px-4 -mt-6 relative z-20 mb-4">
            <div className="bg-white rounded-full shadow-lg px-4 py-3 flex items-center gap-3 border border-gray-100">
              <Search size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="¿Que servicio necesitas?"
                className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
              />
              <SlidersHorizontal size={20} className="text-[#5C2FF5]" />
            </div>
          </div>

          {/* Schedule banner */}
          <div className="mx-4 mb-6 bg-purple-50 rounded-2xl p-4 flex items-center gap-4">
            <div className="w-12 h-12 bg-[#5C2FF5] rounded-full flex items-center justify-center shrink-0">
              <CalendarDays size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="font-bold text-gray-800 text-sm">Agenda tu lavado</p>
              <p className="text-gray-500 text-xs">Elige la fecha y hora que mejor te convenga.</p>
            </div>
            <button className="bg-[#5C2FF5] text-white rounded-full px-4 py-2 text-xs font-semibold whitespace-nowrap hover:shadow-lg transition-all">
              Reserva ahora ›
            </button>
          </div>

          {/* Exclusive Promotions */}
          <div className="px-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Promociones Exclusivas</h2>
              <button className="text-[#5C2FF5] font-semibold text-sm hover:underline">Ver todas</button>
            </div>

            {/* Carousel */}
            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { title: 'Lavado Premium', discount: '40%', image: '/images/home/car1.png' },
                { title: 'Lavado Interior Completo', discount: '30%', image: '/images/home/car2.png' },
                { title: 'Pulido y Encerado', discount: '35%', image: '/images/home/car1.png' },
              ].map((promo, idx) => (
                <div
                  key={idx}
                  className="w-44 h-52 rounded-2xl overflow-hidden relative shrink-0 flex flex-col justify-between p-4 shadow-lg hover:shadow-xl transition-shadow"
                  style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('${promo.image}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  {/* Limited offer badge */}
                  <div className="flex items-center gap-1 w-fit bg-[#030305] border border-white text-white text-xs font-bold px-3 py-1 rounded-[5px]">
                    <Flame size={14} className="text-red-500" />
                    Oferta limitada
                  </div>

                  <div>
                    <p className="text-white text-sm font-semibold mb-1">{promo.title}</p>
                    <p className="text-white text-3xl font-bold mb-4">{promo.discount}</p>
                    <button className="w-full bg-[#6433F5] bg-opacity-30 text-white text-xs font-semibold py-2 rounded-full hover:bg-opacity-40 transition-all">
                      Reserva ahora ›
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination dots */}
            <div className="flex gap-2 justify-center mt-4">
              <div className="w-2 h-2 rounded-full bg-[#5C2FF5]"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Quick Services */}
          <div className="px-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Servicios rapidos</h2>
              <button className="text-[#5C2FF5] font-semibold text-sm hover:underline">Ver todos</button>
            </div>

            <div className="flex justify-around gap-2">
              {[
                { icon: Car, label: 'Exterior', bgColor: 'bg-[#6433f51f]', iconColor: 'text-[#5C2FF5]' },
                { icon: Droplets, label: 'Interior', bgColor: 'bg-blue-100', iconColor: 'text-blue-500' },
                { icon: Sparkles, label: 'Premium', bgColor: 'bg-yellow-50', iconColor: 'text-yellow-600' },
                { icon: Wrench, label: 'Motor', bgColor: 'bg-green-100', iconColor: 'text-green-600' },
                { icon: Package, label: 'Productos', bgColor: 'bg-gray-100', iconColor: 'text-gray-700' },
              ].map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2">
                    <div className={`w-14 h-14 ${service.bgColor} rounded-2xl flex items-center justify-center shadow-md hover:shadow-lg transition-shadow`}>
                      <Icon size={24} className={service.iconColor} />
                    </div>
                    <p className="text-xs text-gray-700 text-center">{service.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Popular Providers */}
          <div className="px-4 mb-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-bold text-gray-800">Proveedores Populares</h2>
              <button className="text-[#5C2FF5] font-semibold text-sm hover:underline">Ver todos</button>
            </div>

            <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
              {[
                { name: 'Pro Glow Auto Spa', distance: '0.5km', rating: '4.8', reviews: '385', image: '/images/home/car3.png' },
                { name: 'Pro Glow Auto Spa', distance: '0.5km', rating: '4.8', reviews: '385', image: '/images/home/car4.png' },
                { name: 'Hoppa Auto Spa', distance: '0.5km', rating: '4.8', reviews: '385', image: '/images/home/car5.png' },
              ].map((provider, idx) => (
                <div key={idx} className="w-36 shrink-0 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-xl transition-shadow">
                  {/* Image placeholder */}
                  <div
                    className="relative h-24 rounded-t-xl flex items-center justify-center bg-cover bg-center"
                    style={{ backgroundImage: `url('${provider.image}')` }}
                  >
                    {/* Rating badge */}
                    <div className="absolute top-2 left-2 bg-[#030305] border border-white text-white text-xs font-bold px-2 py-1 rounded-lg flex items-center gap-1">
                      ⭐ {provider.rating}
                    </div>
                    {/* Heart badge */}
                    <button className="absolute top-2 right-2">
                      <Heart size={18} className="text-red-500 fill-red-500" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-3">
                    <p className="font-bold text-gray-800 text-xs mb-2">{provider.name}</p>
                    <p className="text-gray-600 text-xs mb-2">📍 {provider.distance}</p>
                    <p className="text-gray-600 text-xs mb-3">⭐ {provider.rating} ({provider.reviews})</p>
                    <div className="bg-[#6433f536] text-gray-700 text-xs py-1 px-2 rounded-full text-center mb-3 font-semibold">
                      15-25 min
                    </div>
                    <button className="w-full bg-[#5C2FF5] text-white rounded-[10px] text-xs py-1.5 font-semibold hover:shadow-lg transition-all">
                      Ver Mas
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Loyalty banner */}
          <div className="mx-4 mb-6 bg-purple-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-12 h-12 bg-[#5C2FF5] rounded-full flex items-center justify-center shrink-0">
              <Gift size={24} className="text-white" />
            </div>
            <div className="flex-1">
              <p className="text-[#5C2FF5] font-bold text-sm">Gana puntos con cada lavado</p>
              <p className="text-gray-500 text-xs">y beneficios exclusivos.</p>
            </div>
            <button className="bg-white border border-gray-200 rounded-full px-4 py-2 text-xs font-semibold text-gray-700 whitespace-nowrap hover:shadow-lg transition-all">
              Conocer mas ›
            </button>
          </div>

          {/* Spacer for bottom nav */}
          <div className="h-4"></div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
      </div>
    </div>
  );
}

export default Home;

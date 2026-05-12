import { useState } from 'react';
import { Search, MapPin, ChevronRight } from 'lucide-react';
import BottomNavigation from '../../components/BottomNavigation';

interface Promo {
  id: number;
  title: string;
  description: string;
  discount: string;
  image: string;
}

interface Service {
  id: number;
  name: string;
  icon: string;
}

interface Provider {
  id: number;
  name: string;
  rating: number;
  reviews: number;
  image: string;
  discount?: string;
}

function Home() {
  const [activeTab, setActiveTab] = useState('home');
  const [userName] = useState('Amy');
  const [userLocation] = useState('calle 41 o sur # 50 42');

  const promos: Promo[] = [
    {
      id: 1,
      title: 'Lavado Premium',
      description: 'Protección total para tu auto',
      discount: '40%',
      image: 'bg-gradient-to-br from-orange-400 to-red-500',
    },
    {
      id: 2,
      title: 'Detallado Completo',
      description: 'Interior y exterior',
      discount: '30%',
      image: 'bg-gradient-to-br from-gray-700 to-gray-900',
    },
  ];

  const services: Service[] = [
    { id: 1, name: 'Exterior', icon: '🚗' },
    { id: 2, name: 'Interior', icon: '🪑' },
    { id: 3, name: 'Premium', icon: '⭐' },
    { id: 4, name: 'Motor', icon: '⚙️' },
    { id: 5, name: 'Productos', icon: '🧴' },
  ];

  const providers: Provider[] = [
    {
      id: 1,
      name: 'Pro Detail Auto Spa',
      rating: 5,
      reviews: 2147,
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      discount: '5% OFF',
    },
    {
      id: 2,
      name: 'Pro Detail Auto Spa',
      rating: 5,
      reviews: 2147,
      image: 'bg-gradient-to-br from-gray-600 to-gray-800',
      discount: '5% OFF',
    },
    {
      id: 3,
      name: 'Pro Detail Auto Spa',
      rating: 5,
      reviews: 2147,
      image: 'bg-gradient-to-br from-orange-500 to-red-600',
      discount: '5% OFF',
    },
    {
      id: 4,
      name: 'Happy Auto Spa',
      rating: 5,
      reviews: 2147,
      image: 'bg-gradient-to-br from-purple-400 to-pink-500',
      discount: '5% OFF',
    },
  ];

  return (
    <div className="w-full h-screen bg-white flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
        {/* Contenido scrolleable */}
        <div className="flex-1 overflow-y-auto">
          {/* Header */}
          <div className="bg-gradient-to-b from-purple-600 to-purple-500 text-white px-6 pt-6 pb-8">
            {/* Encabezado superior */}
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-sm font-medium opacity-90">Hola, {userName}! 👋</p>
                <p className="text-xs opacity-75 mt-1">¡Tu carro siempre brillante! ✨</p>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-lg">🔔</span>
              </div>
            </div>

            {/* Ubicación */}
            <div className="flex items-center gap-2 text-xs mb-6 opacity-90">
              <MapPin size={14} />
              <span>{userLocation}</span>
            </div>

            {/* Barra de búsqueda */}
            <div className="flex items-center gap-3 bg-white/95 rounded-full px-4 py-2.5">
              <Search size={18} className="text-gray-400" />
              <input
                type="text"
                placeholder="¿Qué servicio necesitas?"
                className="bg-transparent text-sm text-gray-800 placeholder-gray-400 flex-1 focus:outline-none"
              />
              <button className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-1.5 rounded-full">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </div>
          </div>

          {/* Contenido principal */}
          <div className="px-6 py-6 space-y-8">
            {/* Agenda tu lavado */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-5 text-white flex justify-between items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-2xl">📅</span>
                  <span className="font-semibold">Agenda tu lavado</span>
                </div>
                <p className="text-xs opacity-90">Elige la fecha y hora que más te convenga</p>
              </div>
              <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 transition">
                Reserva ahora
                <ChevronRight size={14} />
              </button>
            </div>

            {/* Promociones Exclusivas */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Promociones Exclusivas</h2>
                <button className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                  Ver todas <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-3">
                {promos.map((promo) => (
                  <div
                    key={promo.id}
                    className={`${promo.image} rounded-2xl p-5 text-white cursor-pointer hover:opacity-90 transition`}
                  >
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <h3 className="font-bold text-base mb-1">{promo.title}</h3>
                        <p className="text-xs opacity-90">{promo.description}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold">{promo.discount}</p>
                        <button className="bg-white/25 hover:bg-white/35 text-white px-3 py-1.5 rounded-full text-xs font-bold mt-2 transition">
                          Ver
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Servicios rápidos */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Servicios rápidos</h2>
                <button className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                  Ver todas <ChevronRight size={16} />
                </button>
              </div>
              <div className="flex justify-between gap-3">
                {services.map((service) => (
                  <button
                    key={service.id}
                    className="flex-1 flex flex-col items-center gap-2 p-4 rounded-xl bg-gray-50 hover:bg-purple-50 transition"
                  >
                    <span className="text-3xl">{service.icon}</span>
                    <p className="text-xs text-gray-600 font-medium text-center">{service.name}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Proveedores Populares */}
            <div>
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-bold text-gray-800">Proveedores Populares</h2>
                <button className="text-purple-600 font-semibold text-sm flex items-center gap-1">
                  Ver todas <ChevronRight size={16} />
                </button>
              </div>
              <div className="space-y-4">
                {providers.map((provider) => (
                  <div
                    key={provider.id}
                    className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-lg transition cursor-pointer"
                  >
                    <div className={`${provider.image} h-32 w-full`} />
                    <div className="p-4">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="font-bold text-sm text-gray-800">{provider.name}</h3>
                        {provider.discount && (
                          <span className="bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-full">
                            {provider.discount}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-xs">
                        <span className="text-yellow-400">⭐</span>
                        <span className="font-semibold text-gray-800">{provider.rating}</span>
                        <span className="text-gray-500">({provider.reviews.toLocaleString()})</span>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white py-2.5 font-bold text-sm hover:shadow-lg transition">
                      Ver Más
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Gana puntos */}
            <div className="bg-gradient-to-r from-purple-100 to-blue-50 rounded-2xl p-5 flex items-center gap-4 border border-purple-200">
              <div className="text-4xl">🎁</div>
              <div className="flex-1">
                <h3 className="font-bold text-gray-800 text-sm mb-1">Gana puntos con cada lavado</h3>
                <p className="text-xs text-gray-600">Acumula puntos, obtén descuentos</p>
              </div>
              <button className="text-purple-600 font-bold text-xs">
                Conocer más →
              </button>
            </div>

            {/* Espaciado para scroll */}
            <div className="h-8" />
          </div>
        </div>

        {/* Bottom Navigation */}
        <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
      </div>
    </div>
  );
}

export default Home;

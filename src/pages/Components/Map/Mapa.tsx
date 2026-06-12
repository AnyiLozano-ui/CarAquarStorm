import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import BottomNavigation from '../../../components/BottomNavigation';

delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
});

function Mapa() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('explore');
  const [searchQuery, setSearchQuery] = useState('');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);

    if (tab === 'home') {
      navigate('/home');
    } else if (tab === 'explore') {
      navigate('/mapa');
    } else if (tab === 'services') {
      navigate('/services');
    }
  };

  const center: [number, number] = [4.60971, -74.08175];

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

        {/* MAPA */}
        <div className="absolute inset-x-0 top-0 h-200">
          <MapContainer
            center={center}
            zoom={14}
            zoomControl={false}
            attributionControl={false}
            style={{ height: '100%', width: '100%' }}
          >
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

            <Marker position={center}>
              <Popup>ProGlow Auto Spa</Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* BUSCADOR */}
        <div className="absolute left-8 right-8 top-23.75 z-900 flex h-11.5 items-center rounded-md bg-white px-4 shadow-md">
          <span className="text-xl text-gray-400">⌕</span>

          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="ml-3 flex-1 bg-transparent text-sm outline-none placeholder:text-gray-400"
          />

          <button className="flex h-7 w-7 items-center justify-center rounded-md bg-violet-600 text-white">
            ☷
          </button>
        </div>

        {/* ICONOS SOBRE EL MAPA */}
        <div className="absolute left-59.5 top-73 z-800 flex h-8 w-8 items-center justify-center rounded-full border-[3px] border-white bg-violet-600 shadow-md">
          🚗
        </div>

        {/* PANEL */}
        <div className="absolute bottom-22.5 left-0 right-0 z-1000 h-full max-h-62.5 rounded-t-[38px] bg-white px-8 pt-4 shadow-[0_-4px_12px_rgba(0,0,0,0.35)]">
          <div className="mx-auto mb-4 h-0.75 w-18 rounded-full bg-gray-400" />

          {/* CARD 1 */}
          <div className="flex h-full max-h-50 rounded-4 bg-white p-3 shadow-[0_4px_10px_rgba(0,0,0,0.35)]">
            <div className="relative h-max">
              <img
                src="/images/home/car6.png"
                alt="Lavado auto"
                className="h-43 w-32.5 rounded-[14px] object-cover"
              />

              <span className="absolute left-0 w-full h-10 top-0 rounded-[14px] pt-2 px-2 text-xl text-white font-bold bg-[#00000070]">
                ♡
              </span>

              <span className="absolute bottom-2 left-2 bg-[#030305] border border-white rounded-[5px] px-2 py-0.75 text-[10px] text-white">
                🔥 Más Popular
              </span>
            </div>

            <div className="relative ml-3 flex-1">
              <h3 className="text-[14px] font-extrabold text-violet-600">
                ProGlow Auto Spa
              </h3>

              <div className="mt-1 flex items-center gap-1 text-[10px] text-gray-700">
                <span className="text-yellow-400">★</span>
                <span>4.8 (365 Opiniones)</span>
              </div>

              <div className="mt-1 flex items-center gap-1 text-[8px] text-gray-500">
                <span className="text-violet-600">📍</span>
                <span>Calle Falsa 34 # 40, Bogotá D.C</span>
              </div>

              <p className="mt-2 text-[9px] leading-tight text-gray-400">
                Lavado exterior e interior, aspirado encerado y más servicios
                para tu vehículo.
              </p>

              <div className="mt-3 flex flex-wrap gap-1">
                <span className="rounded bg-violet-100 px-2 py-1 text-[12px] font-bold text-violet-600">
                  🚗 Lavado auto
                </span>
              </div>

              <button
                onClick={() => navigate('/detail')}
                className="absolute bottom-0 rounded bg-violet-600 px-5 py-2 text-[10px] font-bold text-white shadow-md"
              >
                Ver Detalles
              </button>
            </div>
          </div>
        </div>

        {/* NAV */}
        <div className="absolute bottom-0 z-1100 h-23 w-full rounded-t-[22px] bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.35)]">
          <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
        </div>
      </div>
    </div>
  );
}

export default Mapa;
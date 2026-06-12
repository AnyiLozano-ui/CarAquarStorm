import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../../components/BottomNavigation';
import {
    ChevronLeft,
    Search,
    SlidersHorizontal,
    Star,
    ChevronRight,
    Car,
    Heart,
    Crown,
    ShieldCheck,
    Sparkles,
    Flame,
    Calendar,
} from 'lucide-react';

function Services() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('services');
    const [favorites, setFavorites] = useState<Record<number, boolean>>({});

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === 'home') {
            navigate('/home');
        } else if (tab === 'explore') {
            navigate('/mapa');
        } else if (tab === 'services') {
            navigate('/services');
        } else if (tab === 'chat') {
            navigate('/chat');
        } else if (tab === 'profile') {
            navigate('/profile');
        }
    };

    const popularServices = [
        {
            id: 1,
            title: 'Lavado Premium',
            rating: '4.8',
            reviews: '120',
            price: '$25.000',
            badge: 'Más reservado',
            image: '/images/home/car1.png',
        },
        {
            id: 2,
            title: 'Lavado Interior comp...',
            rating: '4.8',
            reviews: '89',
            price: '$25.000',
            badge: 'Reservar',
            image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 3,
            title: 'Lavado de Motor',
            rating: '4.8',
            reviews: '90',
            price: '$25.000',
            image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=600&auto=format&fit=crop',
        },
        {
            id: 4,
            title: 'Detailing',
            rating: '4.8',
            reviews: '98',
            price: '$60.000',
            image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=600&auto=format&fit=crop',
        },
    ];

    const services = [
        {
            id: 1,
            title: 'Lavado Exterior Basico',
            description: 'Lavado exterior con shampoo especializado y secado.',
            time: '30-30 min',
            tag: 'Exterior',
            price: '$25.000',
            image: '/images/home/car1.png',
            tagClass: 'bg-[#EDE8FF] text-[#6738F5]',
            icon: Car,
        },
        {
            id: 2,
            title: 'Aspirado Interior',
            description: 'Aspirado profundo de alfombras asientos y maletero.',
            time: '20-30 min',
            tag: 'Interior',
            price: '$12.000',
            image: 'https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=600&auto=format&fit=crop',
            tagClass: 'bg-[#EAF5FF] text-[#2491E9]',
            icon: Car,
        },
        {
            id: 3,
            title: 'Encerado Premium',
            description: 'Brillo profundo con encerado de larga duracion.',
            time: '60 min',
            tag: 'Premium',
            price: '$40.000',
            image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop',
            tagClass: 'bg-[#FFF0D8] text-[#FF9500]',
            icon: Sparkles,
        },
        {
            id: 4,
            title: 'Sellado ceramico',
            description: 'Proteccion de pintura con tecnologia ceramica de alta duracion.',
            time: '120 min',
            tag: 'Proteccion',
            price: '$120.000',
            image: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?q=80&w=600&auto=format&fit=crop',
            tagClass: 'bg-[#FFE9E6] text-[#FF543E]',
            icon: ShieldCheck,
        },
    ];

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                {/* Header */}
                <div className="bg-white px-8 pt-14.5 pb-0">
                    <div className="relative h-9 flex items-center justify-center">
                        <button
                            type="button"
                            onClick={() => navigate(-1)}
                            className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                            <ChevronLeft
                                size={33}
                                strokeWidth={4}
                                className="text-[#9B9B9B]"
                            />
                        </button>

                        <h1 className="text-[20px] leading-none font-extrabold text-black">
                            Servicios
                        </h1>
                    </div>

                    {/* Search */}
                    <div className="mt-4.5 h-11 rounded-[9px] border-[1.5px] border-[#C8B4FF] bg-white flex items-center px-3.75">
                        <Search
                            size={19}
                            strokeWidth={2.5}
                            className="text-[#BDBDBD] shrink-0"
                        />

                        <input
                            placeholder="¿Qué servicio necesitas?"
                            className="flex-1 min-w-0 h-full px-2.75 bg-transparent outline-none text-[12px] font-semibold text-black placeholder:text-[#CECECE]"
                        />

                        <SlidersHorizontal
                            size={23}
                            strokeWidth={3}
                            className="text-[#6738F5] shrink-0"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto px-8 pt-5 pb-12.5 bg-[#FBFBFD] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                    {/* Servicios populares */}
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-[13px] font-extrabold text-black">
                            Servicios populares
                        </h2>

                        <button
                            type="button"
                            className="text-[13px] font-bold text-[#6738F5]"
                        >
                            Ver todos
                        </button>
                    </div>

                    <div className="flex gap-4 overflow-x-auto pb-7.5 -mx-1 px-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                        {popularServices.map((service) => (
                            <button
                                key={service.id}
                                type="button"
                                onClick={() => navigate('/booking')}
                                className="shrink-0 snap-start w-[clamp(130px,34vw,150px)] h-44.5 rounded-[13px] bg-white overflow-hidden text-left shadow-[0_6px_14px_rgba(0,0,0,0.20)]"
                            >
                                <div className="relative h-23 bg-black overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {service.badge && (
                                        <div className="absolute top-2 left-2 flex items-center gap-0.5 w-fit bg-[#030305] border border-white text-white text-[9px] font-bold px-2 py-1 rounded-[5px]">
                                            {service.badge.includes('Reservar') ? (
                                                <Calendar size={10} className="text-white" />
                                            ) : service.badge.includes('reservado') ? (
                                                <Star size={10} fill="#FFC107" className="text-[#FFC107]" />
                                            ) : (
                                                <Flame size={10} className="text-red-500" />
                                            )}
                                            {service.badge}
                                        </div>
                                    )}

                                    <button
                                        type="button"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setFavorites(prev => ({
                                                ...prev,
                                                [service.id]: !prev[service.id]
                                            }));
                                        }}
                                        className={`absolute bottom-2 right-2 w-7 h-7 rounded-full border flex items-center justify-center hover:opacity-80 transition-colors ${favorites[service.id]
                                                ? 'bg-white border-white'
                                                : 'bg-black/40 border-white/80'
                                            }`}
                                    >
                                        <Heart
                                            size={16}
                                            fill={favorites[service.id] ? "#FF4B5F" : "none"}
                                            stroke={favorites[service.id] ? "#FF4B5F" : "white"}
                                        />
                                    </button>
                                </div>

                                <div className="h-21.5 px-3 py-2 flex flex-col justify-between">
                                    <div>
                                        <p className="text-[12px] leading-[1.15] font-extrabold text-black line-clamp-2">
                                            {service.title}
                                        </p>

                                        <div className="mt-2 flex items-center gap-1 text-[10px] leading-none font-semibold text-[#4E4E4E]">
                                            <Star
                                                size={11}
                                                fill="#FFC107"
                                                className="text-[#FFC107] shrink-0"
                                            />

                                            <span className="truncate">
                                                {service.rating} ({service.reviews})
                                            </span>
                                        </div>
                                    </div>

                                    <p className="text-[10px] leading-none font-semibold text-black">
                                        Desde{' '}
                                        <span className="text-[11px] font-black text-[#6738F5]">
                                            {service.price}
                                        </span>
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Todos los servicios */}
                    <div className="flex items-center justify-between mb-3">
                        <h2 className="text-[13px] font-extrabold text-black">
                            Todos los servicios
                        </h2>

                        <button
                            type="button"
                            className="text-[13px] font-bold text-[#6738F5]"
                        >
                            Ordenar
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        {services.map((service) => {
                            const TagIcon = service.icon;

                            return (
                                <button
                                    key={service.id}
                                    type="button"
                                    onClick={() => navigate('/detail')}
                                    className="w-full min-h-25 rounded-[13px] border border-[#E6E6E6] bg-white shadow-[0_5px_12px_rgba(0,0,0,0.16)] p-3 flex items-center gap-3.5 text-left"
                                >
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-[clamp(96px,30vw,128px)] h-[clamp(78px,23vw,92px)] rounded-[10px] object-cover shrink-0"
                                    />

                                    <div className="flex-1 min-w-0 flex flex-col justify-center">
                                        <h3 className="text-[clamp(13px,3.7vw,15px)] leading-[1.15] font-extrabold text-black line-clamp-2">
                                            {service.title}
                                        </h3>

                                        <p className="mt-1.5 text-[clamp(10px,2.8vw,11.5px)] leading-tight text-[#777] line-clamp-2">
                                            {service.description}
                                        </p>

                                        <div className="mt-2.5 flex items-center gap-2.5 flex-wrap">
                                            <span className="inline-flex items-center gap-1.5 text-[clamp(10px,2.8vw,12px)] leading-none font-bold text-[#8D8D8D]">
                                                <img
                                                    src="/images/iconos/duracion .png"
                                                    alt="duration"
                                                    className="w-3 h-3 shrink-0"
                                                />
                                                {service.time}
                                            </span>

                                            <span
                                                className={`min-h-6 rounded-[7px] px-2.5 py-1.5 text-[clamp(10px,2.8vw,12px)] leading-none font-extrabold inline-flex items-center gap-1.5 ${service.tagClass}`}
                                            >
                                                <TagIcon size={13} className="shrink-0" />
                                                {service.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="w-[clamp(60px,17vw,74px)] shrink-0 flex flex-col items-end justify-center">
                                        <span className="text-[clamp(8.5px,2.4vw,10px)] leading-none font-semibold text-[#8E8E8E]">
                                            Desde
                                        </span>

                                        <span className="mt-1.5 text-[clamp(12px,3.3vw,14px)] leading-none font-black text-[#6738F5] whitespace-nowrap">
                                            {service.price}
                                        </span>

                                        <span className="mt-2 w-7 h-7 rounded-full bg-[#6738F5] flex items-center justify-center shadow-[0_3px_7px_rgba(103,56,245,0.35)]">
                                            <ChevronRight
                                                size={18}
                                                strokeWidth={4}
                                                className="text-white"
                                            />
                                        </span>
                                    </div>
                                </button>
                            );
                        })}
                    </div>

                    {/* Promo */}
                    <div className="mt-4 min-h-14 rounded-[9px] bg-[#F3EDFF] flex items-center gap-3 px-3.5 py-2.5">
                        <div className="w-10 h-10 rounded-full bg-[#6738F5] flex items-center justify-center shrink-0 shadow-[0_3px_8px_rgba(103,56,245,0.35)]">
                            <Crown
                                size={25}
                                fill="#F7C600"
                                className="text-[#F7C600]"
                            />
                        </div>

                        <div className="flex-1 min-w-0">
                            <p className="text-[13px] leading-[1.1] font-black text-[#6738F5]">
                                ¡Ahorra con paquetes!
                            </p>

                            <p className="mt-0.75 text-[8.5px] leading-[1.2] font-medium text-[#777]">
                                Combina servicios y obtén descuentos exclusivos.
                            </p>
                        </div>

                        <button
                            type="button"
                            className="h-6.5 rounded-[7px] bg-white px-2.5 flex items-center gap-1 text-[8px] font-black text-[#6738F5] shadow-[0_3px_7px_rgba(0,0,0,0.13)] whitespace-nowrap"
                        >
                            Ver Combos
                            <ChevronRight size={12} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                {/* Bottom Navigation */}
                <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
        </div>
    );
}

export default Services;
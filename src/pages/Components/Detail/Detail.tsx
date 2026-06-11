import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../../components/BottomNavigation';

import {
    ChevronLeft,
    Share2,
    Bookmark,
    Star,
    MapPin,
    Clock,
    Tag,
    Shield,
    Trophy,
    CalendarDays,
    Play,
    Check,
} from 'lucide-react';

function Detail() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [showVideo, setShowVideo] = useState(false);
    const [galleryIndex, setGalleryIndex] = useState(0);
    const [dragStart, setDragStart] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const mediaUrl = '/images/home/lavando-el-auto-enchufe-tv.gif';

    const galleryImages = [
        '/images/home/car4.png',
        '/images/home/car3.png',
        '/images/home/car1.png',
        '/images/home/car.png',
        '/images/home/car2.png',
        '/images/home/car5.png',
        '/images/home/car6.png',
    ];

    const isVideo = (url: string) => /\.(mp4|webm|ogg|mov)$/i.test(url);

    const hasMoreImages = galleryIndex + 4 < galleryImages.length;
    const visibleImages = galleryImages.slice(galleryIndex, galleryIndex + (hasMoreImages ? 3 : 4));
    const remainingImages = hasMoreImages ? galleryImages.length - galleryIndex - 3 : 0;
    const canGoNext = galleryIndex + 1 < galleryImages.length;
    const canGoPrev = galleryIndex > 0;

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === 'home') {
            navigate('/home');
        } else if (tab === 'explore') {
            navigate('/mapa');
        }
    };

    const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
        const clientX = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
        setDragStart(clientX);
        setIsDragging(true);
    };

    const handleDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
        if (!isDragging) return;

        const clientX = 'changedTouches' in e ? e.changedTouches[0].clientX : (e as React.MouseEvent).clientX;
        const diff = dragStart - clientX;
        const threshold = 50;

        if (Math.abs(diff) > threshold) {
            if (diff > 0 && canGoNext) {
                setGalleryIndex(galleryIndex + 1);
            } else if (diff < 0 && canGoPrev) {
                setGalleryIndex(galleryIndex - 1);
            }
        }

        setIsDragging(false);
    };

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                {/* IMAGEN SUPERIOR */}
                <div className="relative h-81.25 w-full overflow-hidden">
                    {showVideo ? (
                        isVideo(mediaUrl) ? (
                            <video
                                autoPlay
                                controls
                                className="h-full w-full object-cover"
                                src={mediaUrl}
                            />
                        ) : (
                            <img
                                src={mediaUrl}
                                className="h-full w-full object-cover"
                                alt="Demo"
                            />
                        )
                    ) : (
                        <>
                            <img
                                src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=900"
                                className="h-full w-full object-cover"
                                alt="Lavado de auto"
                            />
                            <div className="absolute inset-0 bg-black/35" />
                        </>
                    )}


                    {/* BOTONES */}
                    <button onClick={() => navigate('/home')} className="absolute left-10 top-15.5 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white">
                        <ChevronLeft size={24} />
                    </button>

                    <div className="absolute right-10 top-15.5 z-20 flex gap-3">
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                            <Share2 size={16} />
                        </button>
                        <button className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                            <Bookmark size={16} />
                        </button>
                    </div>

                    {/* DEMO VIDEO */}
                    {!showVideo && (
                        <button onClick={() => setShowVideo(true)} className="absolute left-1/2 top-37.5 z-20 flex -translate-x-1/2 items-center gap-2 rounded-xl bg-white/70 px-4 py-2 text-[11px] font-bold text-gray-600 shadow hover:bg-white transition">
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white">
                                <Play size={15} fill="#777" className="text-gray-500" />
                            </span>
                            Demo Video
                        </button>
                    )}

                    {/* GALERIA */}
                    <div
                        className="absolute bottom-4 left-0 right-0 mx-auto w-fit z-20 flex gap-2 cursor-grab active:cursor-grabbing"
                        onMouseDown={handleDragStart}
                        onMouseUp={handleDragEnd}
                        onMouseLeave={handleDragEnd}
                        onTouchStart={handleDragStart}
                        onTouchEnd={handleDragEnd}
                    >
                        {visibleImages.map((img) => (
                            <img
                                key={img}
                                src={img}
                                className="h-17.5 w-20.5 rounded-xl border-2 border-white object-cover shrink-0 transition-all select-none pointer-events-none"
                                draggable={false}
                            />
                        ))}

                        {remainingImages > 0 && (
                            <div className="relative h-17.5 w-20.5 overflow-hidden rounded-xl border-2 border-white shrink-0 select-none pointer-events-none">
                                <img
                                    src={visibleImages[visibleImages.length - 1] || '/images/home/car.png'}
                                    className="h-full w-full object-cover"
                                    draggable={false}
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-black/45 text-2xl font-bold text-white">
                                    +{remainingImages}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* PANEL BLANCO */}
                <div className="absolute bottom-0 left-0 right-0 top-80.5 z-30 rounded-t-[22px] h-[calc(100%-322px)] overflow-y-auto overflow-x-hidden overscroll-x-none bg-white px-7 pt-7 pb-4 shadow-[0_-4px_12px_rgba(0,0,0,0.25)]">
                    <div className="absolute right-6 top-6 flex h-8 w-8 items-center justify-center rounded-full bg-green-300">
                        <Check size={24} className="text-white" strokeWidth={4} />
                    </div>

                    <p className="mb-2 text-[14px] font-extrabold text-violet-600">
                        Lavado de autos
                    </p>

                    <h1 className="mb-2 text-[20px] font-extrabold text-black">
                        ProGlow Auto Spa
                    </h1>

                    <div className="mb-2 flex items-center gap-2 text-[13px] text-gray-500">
                        <Star size={15} fill="#facc15" className="text-yellow-400" />
                        <span className="font-bold text-gray-500">4.8</span>
                        <span>(365 opiniones)</span>
                        <MapPin size={15} fill="#5b35f5" className="text-violet-600" />
                        <span>0.5 km</span>
                    </div>

                    <p className="mb-5 text-[13px] text-gray-400">
                        1012 Crean Awesome, Bogotá D.C.
                    </p>

                    <h2 className="mb-3 w-fit border-b-2 border-violet-600 pb-1 text-[13px] font-extrabold text-violet-600">
                        Acerca de
                    </h2>

                    <p className="mb-6 text-[11px] leading-4.5 text-gray-400">
                        Lorem ipsum es el texto que se usa habitualmente en diseño gráfico
                        en demostraciones de tipografías o de borradores de diseño para
                        probar el diseño visual antes de insertar el texto final visual
                        antes de insertar visual antes de insertar visual antes de insertar .
                        <span className="font-bold text-violet-600"> Leer más</span>
                    </p>

                    {/* ICONOS INFO */}
                    <div className="mb-8 grid grid-cols-4 text-center">
                        <InfoItem icon={<Clock size={19} />} title="Tiempo Estimado" text="20-45 min" color="bg-violet-600" />
                        <InfoItem icon={<Tag size={19} />} title="Precios Desde" text="$15.000" color="bg-violet-600" />
                        <InfoItem icon={<Shield size={19} />} title="Garantía" text="100%" color="bg-green-600" />
                        <InfoItem icon={<Trophy size={19} />} title="Experiencia" text="+5 años" color="bg-yellow-500" />
                    </div>

                    {/* RESEÑA */}
                    <div className="mb-3 flex items-center justify-between">
                        <h3 className="text-[13px] font-extrabold text-black">
                            Reseñas de Clientes
                        </h3>
                        <button className="text-[11px] font-bold text-violet-600">
                            Ver todos
                        </button>
                    </div>

                    <div className="mx-auto mb-7 flex h-30 w-83.75 items-center rounded-xl bg-white px-4 shadow-[0_3px_8px_rgba(0,0,0,0.25)]">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5KZTONqypcuV2TK_9AfCYHxoP0aqBRraACClshTzTW81dcjW0osfy_VDP&s=10"
                            className="h-14 w-14 rounded-full object-cover"
                        />

                        <div className="ml-4 flex-1">
                            <div className="flex justify-between">
                                <h4 className="text-[13px] font-bold">Juan Camilo R.</h4>
                                <span className="text-[8px] text-gray-400">Hace 2 días</span>
                            </div>

                            <div className="flex items-center gap-0.5">
                                {[1, 2, 3, 4, 5].map((x) => (
                                    <Star key={x} size={10} fill="#facc15" className="text-yellow-400" />
                                ))}
                                <span className="ml-2 text-[10px] text-gray-400">5.0</span>
                                <span className="ml-2 rounded-full bg-violet-100 px-2 py-0.5 text-[10px] text-violet-500">
                                    Cliente Frecuente
                                </span>
                            </div>

                            <p className="mt-1 text-[12px] text-gray-500">
                                Excelente servicio, mi carro quedó como nuevo. Muy recomendado
                            </p>
                        </div>
                    </div>

                    <div className="mb-7 flex justify-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-violet-600" />
                        <span className="h-2 w-2 rounded-full bg-gray-300" />
                    </div>

                    <button onClick={() => navigate('/booking')} className="mx-auto mt-4 mb-4 flex h-10 w-47.5 items-center justify-center gap-3 rounded-md bg-violet-600 text-[13px] font-extrabold text-white shadow-lg">
                        <CalendarDays size={24} className="text-white" />
                        Reservar Ahora
                    </button>
                </div>
                {/* Bottom Navigation */}
                <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
        </div>
    );
}

function InfoItem({
    icon,
    title,
    text,
    color,
}: {
    icon: React.ReactNode;
    title: string;
    text: string;
    color: string;
}) {
    return (
        <div className="flex flex-col items-center">
            <div className={`mb-2 flex h-7 w-7 items-center justify-center rounded-full text-white ${color}`}>
                {icon}
            </div>
            <p className="text-[9px] text-gray-400">{title}</p>
            <p className="text-[8px] text-gray-400">{text}</p>
        </div>
    );
}

export default Detail;
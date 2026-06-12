import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BottomNavigation from '../../../components/BottomNavigation';

function DetailsHistory() {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('home');
    const [rating, setRating] = useState<number>(0);

    const purple = '#6738F5';

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === 'home') navigate('/home');
        if (tab === 'explore') navigate('/mapa');
    };

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                <div className="flex-1 overflow-y-auto px-7 pt-13 pb-12.5 bg-white">

                    <button
                        onClick={() => navigate('/home')}
                        className="w-8 h-8 rounded-full flex items-center justify-center mb-8"
                    >
                        <img
                            src="/images/iconos/Vector.png"
                            alt="Volver"
                            className="w-6.6 h-6.5 object-contain"
                        />
                    </button>

                    <div className="text-center mb-8">
                        <h1 className="text-[21px] font-extrabold text-black leading-tight">
                            Detalle de reserva
                        </h1>

                        <div className="mt-3 inline-flex items-center justify-center px-4 h-5.5 rounded-full bg-[#BFF3D5]">
                            <span className="text-[10px] font-bold text-[#079E5D]">
                                Completada
                            </span>
                        </div>

                        <p className="mt-4 text-[10px] text-black">
                            Reserva completada el 18 May 2024 a las 10:45 p. m.
                        </p>
                    </div>

                    <div className="rounded-2xl border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-4 py-4 mb-5">
                        <div className="flex gap-3 min-[390px]:gap-4 items-center">
                            <img
                                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=400"
                                alt="Lavado Premium"
                                className="w-24 min-[390px]:w-28 h-26.25 min-[390px]:h-28 rounded-[11px] object-cover shrink-0 shadow-[0_3px_6px_rgba(0,0,0,0.20)]"
                            />

                            <div className="flex-1 min-w-0">
                                <h2 className="text-[15px] min-[390px]:text-[16px] font-extrabold text-black mb-3 leading-tight">
                                    Lavado Premium
                                </h2>

                                <div className="space-y-3">
                                    <div className="flex items-start gap-2.5">
                                        <img
                                            src="/images/iconos/icon1.png"
                                            alt=""
                                            className="w-7 min-[390px]:w-7.5 h-7 min-[390px]:h-7.5 object-contain mt-px shrink-0"
                                        />

                                        <div className="min-w-0">
                                            <p className="text-[12px] min-[390px]:text-[12.5px] font-bold text-black leading-tight">
                                                AutoClean Center
                                            </p>
                                            <p className="text-[10px] min-[390px]:text-[10.5px] text-[#555] leading-3.5">
                                                Av. siempre viva 1234, monterrey, NL 64000
                                            </p>
                                        </div>
                                    </div>

                                    <div className="flex items-start gap-2.5 text-[11px] min-[390px]:text-[11.5px] text-black">
                                        <img
                                            src="/images/iconos/calendar-purple.webp"
                                            alt=""
                                            className="w-7 min-[390px]:w-7.5 h-7 min-[390px]:h-7.5 object-contain shrink-0"
                                        />

                                        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 leading-3.5 pt-0.75">
                                            <span className="whitespace-nowrap">18 May 2024</span>
                                            <span className="text-[7px] leading-none">●</span>
                                            <span className="whitespace-nowrap">2:15 p. m.</span>
                                        </div>
                                    </div>

                                    <div className="h-px bg-[#D9D9D9]" />

                                    <div className="flex items-center gap-2.5 text-[11px] min-[390px]:text-[11.5px] text-black">
                                        <div className="w-8.5 h-8.5 flex items-center justify-center shrink-0 overflow-visible">
                                            <img
                                                src="/images/iconos/Toyota.webp"
                                                alt=""
                                                className="w-8.5 h-8.5 object-contain scale-125"
                                            />
                                        </div>

                                        <span className="leading-3.5 wrap-break-words">
                                            Toyota Corolla • ABC-123
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[15px] border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-5 py-4 mb-5">
                        <h3 className="text-[14px] font-extrabold text-black mb-4">
                            Detalles del servicio
                        </h3>

                        <div className="space-y-3.5">
                            {[
                                ['car-purple.png', 'Tipo de servicio', 'Lavado Exterior + Interior'],
                                ['avatar.png', 'Especialista', 'Carlos García'],
                                ['duracion .png', 'Duración', '45 min'],
                                ['dinero.webp', 'Precio', '$250.00'],
                                ['descuentos.png', 'Descuento/Puntos', '-$25.00'],
                            ].map(([icon, label, value]) => (
                                <div key={label} className="flex items-center justify-between gap-4">
                                    <div className="flex items-center gap-3 min-w-0">
                                        <div className="w-6.5 h-6.5 flex items-center justify-center shrink-0">
                                            <img
                                                src={`/images/iconos/${icon}`}
                                                alt=""
                                                className="w-6 h-6 object-contain"
                                            />
                                        </div>

                                        <span className="text-[11.5px] text-black leading-tight truncate">
                                            {label}
                                        </span>
                                    </div>

                                    <span
                                        className={`text-[11.5px] font-medium text-right leading-tight shrink-0 ${value.includes('-') ? 'text-[#09A85E]' : 'text-black'
                                            }`}
                                    >
                                        {value}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="h-px bg-[#D9D9D9] my-4" />

                        <div className="flex items-center justify-between">
                            <p className="text-[14px] font-extrabold text-black">
                                Total pagado
                            </p>

                            <p className="text-[14px] font-extrabold" style={{ color: purple }}>
                                $225.000
                            </p>
                        </div>
                    </div>

                    <div className="rounded-[15px] border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-5 py-4 mb-5">
                        <h3 className="text-[14px] font-extrabold text-black mb-4">
                            Pago
                        </h3>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-7.5 h-7.5 flex items-center justify-center shrink-0">
                                        <img
                                            src="/images/iconos/visa.png"
                                            alt=""
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>

                                    <span className="text-[11.5px] text-black leading-tight">
                                        Método de pago
                                    </span>
                                </div>

                                <div className="flex items-center gap-2 shrink-0">
                                    <div className="w-10.5 h-7 flex items-center justify-center">
                                        <img
                                            src="/images/iconos/mastercard.png"
                                            alt="Mastercard"
                                            className="w-10 h-6.5 object-contain"
                                        />
                                    </div>

                                    <span className="text-[11.5px] text-black">
                                        •••• 4242
                                    </span>
                                </div>
                            </div>

                            <div className="flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3 min-w-0">
                                    <div className="w-7.5 h-7.5 flex items-center justify-center shrink-0">
                                        <img
                                            src="/images/iconos/factura.png"
                                            alt=""
                                            className="w-7 h-7 object-contain"
                                        />
                                    </div>

                                    <span className="text-[11.5px] text-black leading-tight">
                                        Folio de pago
                                    </span>
                                </div>

                                <span className="text-[11.5px] text-black text-right shrink-0">
                                    PYA-4576-2024
                                </span>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-[15px] border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-3 py-4 mb-7">
                        <h3 className="text-[13px] font-extrabold text-black mb-4">
                            Acciones
                        </h3>

                        <div className="grid grid-cols-4 gap-2.5">
                            {[
                                {
                                    icon: 'duracion .png',
                                    label: 'Repetir servicio',
                                    route: '/booking',
                                },
                                {
                                    icon: 'calendar-purple.webp',
                                    label: 'Reservar de nuevo',
                                    route: '/mapa',
                                },
                                {
                                    icon: 'Download.png',
                                    label: 'Descargar factura',
                                    route: '/bill',
                                },
                                {
                                    icon: 'chat-purple.webp',
                                    label: 'Contactar soporte',
                                    route: '/',
                                },
                            ].map((item) => (
                                <button
                                    key={item.label}
                                    onClick={() => navigate(item.route)}
                                    className="min-h-16.5 rounded-[9px] border border-[#D7C8FF] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.22)] flex flex-col items-center justify-center gap-2 px-1.5 active:scale-[0.97] transition"
                                >
                                    <img
                                        src={`/images/iconos/${item.icon}`}
                                        alt={item.label}
                                        className="w-6 h-6 object-contain"
                                    />

                                    <span className="text-[8.5px] font-semibold text-black leading-tight text-center">
                                        {item.label}
                                    </span>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="rounded-[15px] border border-[#D7C8FF] bg-[#F5F0FF] shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-5 py-4">
                        <div className="flex items-center justify-between gap-4">
                            <div>
                                <h3 className="text-[14px] font-extrabold" style={{ color: purple }}>
                                    ¿Como fue tu experiencia?
                                </h3>

                                <p className="text-[11px] text-black mt-1">
                                    Tu opinion nos ayuda a mejorar
                                </p>

                                {rating > 0 && (
                                    <p className="text-[10px] font-semibold mt-2" style={{ color: purple }}>
                                        Calificación: {rating} de 5
                                    </p>
                                )}
                            </div>

                            <div className="text-right shrink-0">
                                <div className="flex justify-end gap-1.5 mb-2">
                                    {[1, 2, 3, 4, 5].map((i) => (
                                        <button
                                            key={i}
                                            type="button"
                                            onClick={() => setRating(i)}
                                            className="active:scale-90 transition"
                                        >
                                            <img
                                                src={
                                                    i <= rating
                                                        ? '/images/iconos/start.webp'
                                                        : '/images/iconos/grey.webp'
                                                }
                                                alt={`Calificar ${i}`}
                                                className="w-4.5 h-4.5 object-contain"
                                            />
                                        </button>
                                    ))}
                                </div>

                                <button
                                    type="button"
                                    onClick={() => {
                                        if (rating === 0) {
                                            alert('Selecciona una calificación');
                                            return;
                                        }

                                        alert(`Gracias por calificar con ${rating} estrellas`);
                                    }}
                                    className="flex items-center gap-1 text-[10px] font-semibold text-black"
                                >
                                    Calificar servicio
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
            </div>
        </div>
    );
}

export default DetailsHistory;
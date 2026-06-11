import { useState } from 'react';
import {
    ChevronLeft,
    Calendar,
    Star,
    MapPin,
    Bell,
    Lock,
    Plus,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Booking() {
    const navigate = useNavigate();

    const [selectedService, setSelectedService] = useState<number>(1);
    const [selectedDate, setSelectedDate] = useState<number>(0);
    const [selectedTime, setSelectedTime] = useState('10:00 AM');
    const [rememberMe, setRememberMe] = useState(true);

    const purple = '#6738F5';

    const services = [
        {
            id: 1,
            name: 'Lavado Premium',
            description: 'Lavado exterior e interior completo + aspirado.',
            price: '$25.000',
            icon: '/images/iconos/icon1.png',
            extra: true,
        },
        {
            id: 2,
            name: 'Lavado Interior Completo',
            description: 'Limpieza profunda de interiores + aspirado.',
            price: '$30.000',
            icon: '/images/iconos/icon2.png',
        },
        {
            id: 3,
            name: 'Encerado Premium',
            description: 'Brillo profundo con encerado de larga duración.',
            price: '$40.000',
            icon: '/images/iconos/icon3.png',
        },
        {
            id: 4,
            name: 'Detallado Premium',
            description: 'Limpieza con tratamiento especializado.',
            price: '$40.000',
            icon: '/images/iconos/icon1.png',
        },
    ];

    const days = [
        { label: 'Hoy', day: '24', month: 'May' },
        { label: 'Sab', day: '25', month: 'May' },
        { label: 'Dom', day: '26', month: 'May' },
        { label: 'Lun', day: '27', month: 'May' },
        { label: 'Mar', day: '28', month: 'May' },
    ];

    const times = [
        '08:00 AM',
        '09:00 AM',
        '10:00 AM',
        '11:00 AM',
        '12:00 PM',
        '01:00 PM',
        '02:00 PM',
        '03:00 PM',
    ];

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">
                <div className="px-8 pt-12 pb-3 bg-white">
                    <div className="relative flex items-center justify-center mb-7">
                        <button
                            onClick={() => navigate('/detail')}
                            className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                            <ChevronLeft size={34} strokeWidth={4} className="text-[#9B9B9B]" />
                        </button>

                        <h1 className="text-[21px] font-extrabold text-black tracking-tight">
                            Reservar cita
                        </h1>
                    </div>

                    <div className="relative flex justify-between px-8">
                        <div className="absolute top-2.5 left-15.5 right-15.5 h-0.5 bg-[#DDE0E2]" />
                        <div
                            className="absolute top-2.5 left-15.5 w-18.5 h-0.5"
                            style={{ backgroundColor: purple }}
                        />

                        {[
                            ['1', 'Servicio'],
                            ['2', 'Fecha y hora'],
                            ['3', 'Información'],
                            ['4', 'Confirmación'],
                        ].map(([num, text], index) => (
                            <div key={num} className="relative z-10 flex flex-col items-center">
                                <div
                                    className={`w-5.5 h-5.5 rounded-full flex items-center justify-center text-[11px] font-bold ${index === 0 ? 'text-white' : 'text-[#8F969C]'
                                        }`}
                                    style={{ backgroundColor: index === 0 ? purple : '#D5DADD' }}
                                >
                                    {num}
                                </div>

                                <span
                                    className={`mt-2 text-[8px] font-semibold ${index === 0 ? 'text-[#6738F5]' : 'text-black'
                                        }`}
                                >
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-23">
                    <div className="mt-3 bg-white rounded-2xl p-3 flex gap-4 shadow-[0_4px_8px_rgba(0,0,0,0.22)] border border-[#ECECEC]">
                        <img
                            src="https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?q=80&w=300"
                            alt="ProGlow Auto Spa"
                            className="w-21 h-16.5 rounded-[13px] object-cover"
                        />

                        <div className="flex-1 pt-1">
                            <p className="text-[9px] font-bold" style={{ color: purple }}>
                                Lavado de autos
                            </p>

                            <h2 className="text-[15px] font-extrabold text-black leading-tight">
                                ProGlow Auto Spa
                            </h2>

                            <div className="flex items-center gap-3 mt-2 text-[9px] text-black">
                                <span className="flex items-center gap-1">
                                    <Star size={11} fill="#FBC02D" className="text-[#FBC02D]" />
                                    4.8 <span className="text-[#6B7280]">(365 opiniones)</span>
                                </span>

                                <span className="flex items-center gap-1">
                                    <MapPin size={11} fill="#6738F5" className="text-[#6738F5]" />
                                    0.5 km
                                </span>
                            </div>

                            <p className="mt-2 text-[8px] text-black">
                                1012 Crean Awesome, Bogotá D.C
                            </p>
                        </div>
                    </div>

                    <h3 className="mt-5 mb-3 text-[14px] font-bold text-black">
                        1. Selecciona el servicio
                    </h3>

                    <div className="flex gap-3 overflow-x-auto pb-3 -mx-1 px-1">
                        {services.map((service) => (
                            <button
                                key={service.id}
                                onClick={() => setSelectedService(service.id)}
                                className={`relative shrink-0 w-28 h-46.25 rounded-[14px] px-3 pt-4 pb-3 bg-white border transition flex flex-col items-center ${selectedService === service.id
                                    ? 'border-[#BFAEFF] bg-[#F5F0FF]'
                                    : 'border-[#E8E8E8]'
                                    } shadow-[0_4px_7px_rgba(0,0,0,0.22)]`}
                            >
                                {service.extra && (
                                    <span
                                        className="absolute right-3 top-3 w-3 h-3 rounded-full flex items-center justify-center text-white"
                                        style={{ backgroundColor: purple }}
                                    >
                                        <Plus size={8} strokeWidth={4} />
                                    </span>
                                )}

                                <div className="flex justify-center items-center mb-4">
                                    <img
                                        src={service.icon}
                                        alt={service.name}
                                        className="w-15 h-10.5 object-contain"
                                    />
                                </div>

                                <p className="text-[10.5px] font-bold text-black leading-3.25 min-h-7 text-center">
                                    {service.name}
                                </p>

                                <p className="mt-2 text-[8px] leading-2.75 text-[#555] min-h-9.5 text-center">
                                    {service.description}
                                </p>

                                <p
                                    className="mt-auto pt-3 text-[14px] font-bold text-center leading-none"
                                    style={{ color: purple }}
                                >
                                    {service.price}
                                </p>
                            </button>
                        ))}
                    </div>

                    <h3 className="mt-3 mb-3 text-[14px] font-bold text-black">
                        1. Elige fecha y hora
                    </h3>

                    <div className="flex gap-3 overflow-x-auto pb-3">
                        {days.map((day, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedDate(index)}
                                className={`shrink-0 w-12.5 h-12 rounded-[9px] text-center font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.20)] ${selectedDate === index
                                    ? 'text-white'
                                    : 'bg-white text-black border border-[#E2E2E2]'
                                    }`}
                                style={{
                                    backgroundColor: selectedDate === index ? purple : undefined,
                                }}
                            >
                                <p className="text-[9px] leading-2.75">{day.label}</p>
                                <p className="text-[10px] leading-2.75">{day.day}</p>
                                <p className="text-[9px] leading-2.75">{day.month}</p>
                            </button>
                        ))}

                        <button className="shrink-0 w-12.5 h-12 rounded-[9px] bg-white border border-[#E2E2E2] flex items-center justify-center shadow-[0_4px_6px_rgba(0,0,0,0.20)]">
                            <Calendar size={27} strokeWidth={4} />
                        </button>
                    </div>

                    <div className="grid grid-cols-4 gap-x-4 gap-y-3 mt-2">
                        {times.map((time) => (
                            <button
                                key={time}
                                onClick={() => setSelectedTime(time)}
                                className={`h-8 rounded-[10px] text-[9px] font-semibold shadow-[0_4px_6px_rgba(0,0,0,0.20)] ${selectedTime === time
                                    ? 'text-white'
                                    : 'bg-white text-black border border-[#E1E1E1]'
                                    }`}
                                style={{
                                    backgroundColor: selectedTime === time ? purple : undefined,
                                }}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    <h3 className="mt-5 text-[14px] font-bold text-black">
                        3. Información adicional
                    </h3>

                    <p className="text-[10px] text-black mb-2">
                        Notas especiales (opcional)
                    </p>

                    <div className="relative">
                        <textarea
                            maxLength={120}
                            placeholder="Ej: Tengo una mascota en el auto, mancha en los asientos, etc."
                            className="w-full h-11.5 resize-none rounded-[10px] border border-[#D8D8D8] px-3 pt-2 pb-5 text-[8px] outline-none shadow-[0_4px_6px_rgba(0,0,0,0.20)] placeholder:text-[#7A7A7A]"
                        />

                        <span className="absolute right-3 bottom-2 text-[7px] text-black">
                            0/120
                        </span>
                    </div>

                    <div className="mt-3 h-10.75 rounded-[10px] border border-[#E2E2E2] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.20)] flex items-center px-3 gap-3">
                        <Bell size={18} fill="#D7D7D7" className="text-[#D7D7D7]" />

                        <div className="flex-1">
                            <p className="text-[9px] font-bold text-black">
                                Recordarme esta cita
                            </p>
                            <p className="text-[7px] text-black">
                                Te enviaremos un recordatorio antes de tu cita
                            </p>
                        </div>

                        <button
                            onClick={() => setRememberMe(!rememberMe)}
                            className="w-7.5 h-3.75 rounded-full relative"
                            style={{ backgroundColor: rememberMe ? purple : '#D1D5DB' }}
                        >
                            <span
                                className={`absolute top-0.5 w-2.75 h-2.75 rounded-full bg-white transition ${rememberMe ? 'right-0.5' : 'left-0.5'
                                    }`}
                            />
                        </button>
                    </div>

                    <h3 className="mt-5 mb-3 text-[14px] font-bold text-black">
                        4. Resumen de tu reserva
                    </h3>

                    <div className="rounded-[13px] border border-[#E1E1E1] bg-white shadow-[0_4px_6px_rgba(0,0,0,0.18)] px-4 py-4">
                        <div className="flex justify-between items-start gap-4">
                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-7 h-7 rounded-full bg-[#EDE8FF] flex items-center justify-center mb-2">
                                    <img
                                        src="/images/iconos/icon1.png"
                                        alt="Lavado Premium"
                                        className="w-4 h-4 object-contain"
                                    />
                                </div>
                                <p className="text-[8px] text-[#9CA3AF]">Servicio</p>
                                <p className="text-[9px] font-semibold text-black leading-2.75">
                                    Lavado Premium
                                </p>
                                <p className="text-[9px] font-semibold text-black">$25.000</p>
                            </div>

                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-7 h-7 rounded-full bg-[#EDE8FF] flex items-center justify-center mb-2">
                                    <Calendar size={14} color={purple} />
                                </div>
                                <p className="text-[8px] text-[#9CA3AF]">Fecha y hora</p>
                                <p className="text-[9px] font-semibold text-black leading-2.75">
                                    Hoy, 24 de mayo
                                </p>
                                <p className="text-[9px] font-semibold text-black">10:00 AM</p>
                            </div>

                            <div className="flex flex-col items-center text-center flex-1">
                                <div className="w-7 h-7 rounded-full bg-[#EDE8FF] flex items-center justify-center mb-2">
                                    <MapPin size={14} color={purple} />
                                </div>
                                <p className="text-[8px] text-[#9CA3AF]">Dirección</p>
                                <p className="text-[9px] font-semibold text-black leading-2.75">
                                    102 crean Awesome,
                                </p>
                                <p className="text-[9px] font-semibold text-black">Bogotá D.C</p>
                            </div>
                        </div>

                        <div className="h-px bg-[#D9D9D9] mt-4 mb-3" />

                        <div className="flex justify-between text-center pt-1">
                            <div className="flex-1">
                                <p className="text-[8px] text-[#9CA3AF]">Subtotal</p>
                                <p className="text-[9px] font-semibold text-black">$25.000</p>
                            </div>

                            <div className="flex-1">
                                <p className="text-[8px] text-[#9CA3AF]">Descuento</p>
                                <p className="text-[9px] font-semibold text-green-600">Gratis</p>
                            </div>

                            <div className="flex-1">
                                <p className="text-[8px] text-[#9CA3AF]">Total a pagar</p>
                                <p className="text-[10px] font-bold" style={{ color: purple }}>
                                    $25.000
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-16.5 bg-white px-8 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-[#C9C9C9] shrink-0">
                        <Lock size={18} fill="#C9C9C9" />
                        <span className="text-[11px] font-semibold">Pago 100% seguro</span>
                    </div>

                    <button
                        onClick={() => navigate('/payment')}
                        className="w-45 h-9.5 rounded-[7px] text-white text-[9px] font-bold leading-tight"
                        style={{ backgroundColor: purple }}
                    >
                        Continuar
                        <br />
                        Revisa y confirma tu reserva
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Booking;
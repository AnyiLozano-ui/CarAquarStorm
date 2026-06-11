import { useState } from 'react';
import {
    ChevronLeft,
    Calendar,
    MapPin,
    Lock,
    Check,
    CreditCard,
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function Payment() {
    const navigate = useNavigate();
    const [selectedPayment, setSelectedPayment] = useState<number>(1);

    const purple = '#6738F5';

    const steps = [
        ['1', 'Servicio'],
        ['2', 'Fecha y hora'],
        ['3', 'Pago'],
        ['4', 'Confirmación'],
    ];

    const paymentMethods = [
        {
            id: 1,
            title: 'Tarjeta de credito o debito',
            description: 'Visa, Mastercard, American Express',
            image: '/images/iconos/visa.png',
        },
        {
            id: 2,
            title: 'Nequi',
            description: 'Paga desde tu cuenta Nequi',
            image: '/images/iconos/NEQUI.jpg',
        },
        {
            id: 3,
            title: 'Transferencia Bancolombia',
            description: 'Paga desde tu cuenta Bancolombia',
            image: '/images/iconos/pse.png',
        },
        {
            id: 4,
            title: 'Efectivo en el establecimiento',
            description: 'Paga cuando llegues al establecimiento',
            image: '/images/iconos/dinero.webp',
        },
    ];

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                <div className="px-8 pt-12 pb-3 bg-white">
                    <div className="relative flex items-center justify-center mb-7">
                        <button
                            onClick={() => navigate(-1)}
                            className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center"
                        >
                            <ChevronLeft size={36} strokeWidth={4} className="text-[#9B9B9B]" />
                        </button>

                        <h1 className="text-[22px] font-extrabold text-black">
                            Pago y confirmacion
                        </h1>
                    </div>

                    <div className="relative flex justify-between px-8">
                        <div className="absolute top-2.75 left-15.5 right-15.5 h-0.5 bg-[#DDE0E2]" />
                        <div
                            className="absolute top-2.75 left-15.5 w-39 h-0.5"
                            style={{ backgroundColor: purple }}
                        />

                        {steps.map(([num, text], index) => (
                            <div key={num} className="relative z-10 flex flex-col items-center">
                                <div
                                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[12px] font-bold ${index <= 2 ? 'text-white' : 'text-[#8F969C]'
                                        }`}
                                    style={{
                                        backgroundColor: index <= 2 ? purple : '#D5DADD',
                                    }}
                                >
                                    {num}
                                </div>

                                <span
                                    className={`mt-2 text-[9px] font-semibold ${index <= 2 ? 'text-[#6738F5]' : 'text-black'
                                        }`}
                                >
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto px-8 pb-26.25">

                    <div className="mt-4 rounded-[18px] bg-white border border-[#E1E1E1] shadow-[0_5px_10px_rgba(0,0,0,0.22)] px-5 py-4">
                        <h2 className="text-[18px] font-extrabold text-black mb-5">
                            Resumen de tu reserva
                        </h2>

                        <div className="space-y-5">
                            <div className="flex items-center gap-3">
                                <div className="w-9.5 h-9.5 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <img
                                        src="/images/iconos/icon1.png"
                                        alt="Lavado"
                                        className="w-5.5 h-5.5 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[11px] text-[#9CA3AF] leading-none">Servicio</p>
                                    <p className="text-[14px] font-semibold text-black mt-1">Lavado Premium</p>
                                </div>

                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <Calendar size={20} color={purple} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[9px] text-[#9CA3AF] leading-none">Fecha y hora</p>
                                    <p className="text-[10px] font-bold text-black mt-1">
                                        Hoy, 24 de mayo de 2024 - 10:00 AM
                                    </p>
                                </div>


                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-7 h-7 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <MapPin size={20} color={purple} />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[9px] text-[#9CA3AF] leading-none">Ubicacion</p>
                                    <p className="text-[10px] font-bold text-black mt-1">ProGlow Auto Spa</p>
                                    <p className="text-[12px] text-[#777] leading-5 mt-1">
                                        1012 Crean Awesome, Bogotá D.C
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="h-px bg-[#D9D9D9] mt-4 mb-3" />

                        <div className="flex items-center justify-between">
                            <p className="text-[13px] text-[#777]">Total a pagar</p>
                            <p className="text-[22px] font-extrabold" style={{ color: purple }}>
                                $25.000
                            </p>
                        </div>
                    </div>

                    <h3 className="mt-6 mb-3 text-[15px] font-bold text-black">
                        1. Elige metodo de pago
                    </h3>

                    <div className="space-y-3">
                        {paymentMethods.map((method) => (
                            <button
                                key={method.id}
                                onClick={() => setSelectedPayment(method.id)}
                                className={`w-full h-13.5 rounded-[15px] border flex items-center px-4 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.08)] ${selectedPayment === method.id
                                    ? 'border-[#6738F5]'
                                    : 'border-[#E1E1E1]'
                                    }`}
                            >
                                <div className="w-12.5 h-8.5 flex items-center justify-center shrink-0">
                                    <img
                                        src={method.image}
                                        alt={method.title}
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                <div className="flex-1 text-left ml-3">
                                    <p className="text-[11px] font-bold" style={{ color: purple }}>
                                        {method.title}
                                    </p>
                                    <p className="text-[8px] text-[#555] mt-1">
                                        {method.description}
                                    </p>
                                </div>

                                <div
                                    className="w-7 h-7 rounded-full flex items-center justify-center shrink-0"
                                    style={{
                                        backgroundColor:
                                            selectedPayment === method.id ? purple : '#A8ADA9',
                                    }}
                                >
                                    <Check size={18} strokeWidth={4} className="text-white" />
                                </div>
                            </button>
                        ))}
                    </div>

                    <h3 className="mt-6 mb-3 text-[15px] font-bold text-black">
                        2. Datos de la tarjeta
                    </h3>

                    <div className={`rounded-[18px] bg-white border shadow-[0_5px_10px_rgba(0,0,0,0.18)] px-5 py-5 ${selectedPayment === 1 ? 'border-[#E1E1E1]' : 'border-[#E1E1E1] opacity-50'}`}>
                        <div className="space-y-4">
                            <div>
                                <label className={`text-[12px] font-medium ${selectedPayment === 1 ? '' : 'text-[#BFBFBF]'}`} style={{ color: selectedPayment === 1 ? purple : '#BFBFBF' }}>
                                    Número de tarjeta
                                </label>

                                <div className="mt-2 relative">
                                    <input
                                        disabled={selectedPayment !== 1}
                                        inputMode="numeric"
                                        placeholder="1234 5678 9012 3456"
                                        className={`w-full h-11.5 rounded-[10px] border px-3 pr-10 text-[16px] outline-none placeholder:text-[#B5B5B5] ${selectedPayment === 1 ? 'border-[#D7D7D7] bg-white cursor-text' : 'border-[#DDDDDD] bg-[#F5F5F5] cursor-not-allowed'}`}
                                    />

                                    <CreditCard
                                        size={22}
                                        className={`absolute right-3 top-1/2 -translate-y-1/2 ${selectedPayment === 1 ? 'text-[#9CA3AF]' : 'text-[#BFBFBF]'}`}
                                    />
                                </div>
                            </div>

                            <div>
                                <label className={`text-[12px] font-medium`} style={{ color: selectedPayment === 1 ? purple : '#BFBFBF' }}>
                                    Fecha de expiración
                                </label>

                                <input
                                    disabled={selectedPayment !== 1}
                                    inputMode="numeric"
                                    placeholder="MM/AA"
                                    className={`mt-2 w-full h-11.5 rounded-[10px] border px-3 text-[16px] outline-none placeholder:text-[#B5B5B5] ${selectedPayment === 1 ? 'border-[#D7D7D7] bg-white cursor-text' : 'border-[#DDDDDD] bg-[#F5F5F5] cursor-not-allowed'}`}
                                />
                            </div>

                            <div>
                                <label className={`text-[12px] font-medium`} style={{ color: selectedPayment === 1 ? purple : '#BFBFBF' }}>
                                    Código de seguridad
                                </label>

                                <input
                                    disabled={selectedPayment !== 1}
                                    inputMode="numeric"
                                    placeholder="123"
                                    className={`mt-2 w-full h-11.5 rounded-[10px] border px-3 text-[16px] outline-none placeholder:text-[#B5B5B5] ${selectedPayment === 1 ? 'border-[#D7D7D7] bg-white cursor-text' : 'border-[#DDDDDD] bg-[#F5F5F5] cursor-not-allowed'}`}
                                />
                            </div>

                            <div>
                                <label className={`text-[12px] font-medium`} style={{ color: selectedPayment === 1 ? purple : '#BFBFBF' }}>
                                    Titular de la tarjeta
                                </label>

                                <input
                                    disabled={selectedPayment !== 1}
                                    placeholder="Nombre completo"
                                    className={`mt-2 w-full h-11.5 rounded-[10px] border px-3 text-[16px] outline-none placeholder:text-[#B5B5B5] ${selectedPayment === 1 ? 'border-[#D7D7D7] bg-white cursor-text' : 'border-[#DDDDDD] bg-[#F5F5F5] cursor-not-allowed'}`}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mt-5 min-h-13 rounded-[15px] border border-[#E3D8FF] bg-[#F7F1FF] px-4 py-2 flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Lock size={18} fill={purple} className="text-[#6738F5] shrink-0" />
                            <div>
                                <p className="text-[11px] font-extrabold" style={{ color: purple }}>
                                    Tu pago esta 100% protegido
                                </p>
                                <p className="text-[7.5px] text-[#777] mt-1">
                                    Utilizamos encriptaciones SSL y pasarelas de pago seguras.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0">
                            <img
                                src="/images/iconos/pci.webp"
                                alt="PSE"
                                className="w-8 h-5 object-contain"
                            />
                            <img
                                src="/images/iconos/stripe.webp"
                                alt="Stripe"
                                className="w-12.5 h-5 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-21 bg-white border-t border-[#E5E5E5] px-8 flex items-center justify-between">
                    <div>
                        <p className="text-[12px] text-[#777]">Total a pagar</p>
                        <p className="text-[17px] font-extrabold" style={{ color: purple }}>
                            $25.000
                        </p>
                    </div>

                    <button
                        onClick={() => navigate('/reservation')}
                        className="w-47.5 h-12.5 rounded-lg text-white text-[13px] font-extrabold leading-tight flex flex-col items-center justify-center"
                        style={{ backgroundColor: purple }}
                    >
                        <span className="flex items-center gap-1">
                            <Lock size={13} fill="white" />
                            Pagar ahora
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Payment;
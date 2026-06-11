import { useNavigate } from 'react-router-dom';
import './ConfirmedTReservation.css';

function ConfirmedTReservation() {
    const navigate = useNavigate();

    const purple = '#6738F5';
    const green = '#09C878';

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                <div className="flex-1 overflow-y-auto px-8 pt-12 pb-6">

                    <div className="relative flex items-start justify-center mb-5 px-10">
                        <button
                            onClick={() => navigate('/home')}
                            className="absolute left-0 top-0 w-10 h-10 rounded-full flex items-center justify-center"
                        >
                            <img
                                src="/images/iconos/Vector.png"
                                alt="Volver"
                                className="w-7 h-7 object-contain"
                            />
                        </button>

                        <div className="text-center max-w-55">
                            <h1 className="text-[20px] min-[390px]:text-[22px] font-extrabold text-black leading-tight">
                                ¡Reserva confirmada!
                            </h1>

                            <p className="text-[11px] min-[390px]:text-[12px] text-[#777] mt-1 leading-tight">
                                Tu cita ha sido agendada con exito.
                            </p>
                        </div>
                    </div>

                    <div className="relative h-29 flex items-center justify-center mb-3 animate-container">
                        <span className="absolute left-14.5 top-7.5 w-2 h-2 bg-[#6738F5] rotate-45 rounded-xs animate-float-1" />
                        <span className="absolute left-10.5 bottom-8 w-2.25 h-2.25 bg-[#09C878] rotate-45 rounded-xs animate-float-2" />
                        <span className="absolute right-14.5 top-6.5 w-2 h-2 bg-[#FFB52E] rotate-45 rounded-xs animate-float-3" />
                        <span className="absolute right-10.5 bottom-9 w-2.25 h-2.25 bg-[#6738F5] rotate-45 rounded-xs animate-float-4" />
                        <span className="absolute left-19 bottom-14.5 w-0.75 h-0.75 bg-[#FFB52E] rounded-full animate-float-5" />
                        <span className="absolute right-20.5 top-7.5 w-0.75 h-0.75 bg-[#09C878] rounded-full animate-float-6" />
                        <span className="absolute right-13.5 top-17 w-1 h-1 bg-[#09C878] rounded-full animate-float-7" />

                        <div className="w-24 h-24 rounded-full bg-[#E9FFF4] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] animate-pulse-glow">
                            <div
                                className="w-17.5 h-17.5 rounded-full flex items-center justify-center animate-pulse-scale"
                                style={{ backgroundColor: green }}
                            >
                                <img
                                    src="/images/iconos/chulo.png"
                                    alt="Confirmado"
                                    className="w-8.5 h-8.5 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto w-65 h-13.5 rounded-[13px] bg-white border border-[#E2E2E2] shadow-[0_4px_8px_rgba(0,0,0,0.20)] flex items-center px-2 mb-5">
                        <img
                            src="/images/iconos/icon6.png"
                            alt="Código"
                            className="w-9.5 h-7.5 object-contain"
                        />

                        <div className="flex-1 ml-2">
                            <p className="text-[8px] text-[#777] leading-none">
                                Codigo de reserva
                            </p>
                            <p className="text-[12px] font-extrabold leading-tight" style={{ color: purple }}>
                                PGAS-240524-1000
                            </p>
                        </div>

                        <div className="h-6 w-px bg-[#DADADA] mx-2" />

                        <button className="flex items-center gap-1">
                            <span className="text-[9px] font-bold" style={{ color: purple }}>
                                Copiar
                            </span>
                            <img
                                src="/images/iconos/libre.png"
                                alt="Copiar"
                                className="w-4.5 h-4.5 object-contain"
                            />
                        </button>
                    </div>

                    <div className="rounded-[18px] bg-white border border-[#E1E1E1] shadow-[0_5px_10px_rgba(0,0,0,0.20)] px-5 py-4 mb-5">
                        <h2 className="text-[15px] font-extrabold text-black mb-4">
                            Resumen de tu reserva
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <img
                                        src="/images/iconos/icon1.png"
                                        alt="Servicio"
                                        className="w-7.5 h-4.75 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] text-[#9CA3AF] leading-none">
                                        Servicio
                                    </p>
                                    <p className="text-[12px] font-bold text-black mt-1">
                                        Lavado Premium
                                    </p>
                                </div>

                                <p className="text-[11px] font-bold text-black">$25.000</p>
                            </div>

                            <div className="h-px bg-[#D9D9D9]" />

                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <img
                                        src="/images/iconos/calendar-purple.webp"
                                        alt="Fecha"
                                        className="w-7.5 h-4.75 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] text-[#9CA3AF] leading-none">
                                        Fecha y hora
                                    </p>
                                    <p className="text-[12px] font-bold text-black mt-1">
                                        Hoy, 24 de mayo de 2024
                                    </p>
                                </div>

                                <p className="text-[11px] text-black">10:00 AM</p>
                            </div>

                            <div className="h-px bg-[#D9D9D9]" />

                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#EDE8FF] flex items-center justify-center shrink-0">
                                    <img
                                        src="/images/iconos/ubicacion.png"
                                        alt="Ubicación"
                                        className="w-7.5 h-4.75 object-contain"
                                    />
                                </div>

                                <div className="flex-1">
                                    <p className="text-[10px] text-[#9CA3AF] leading-none">
                                        Ubicacion
                                    </p>
                                    <p className="text-[12px] font-bold text-black mt-1">
                                        ProGlow Auto Spa
                                    </p>
                                    <p className="text-[10px] text-[#777] leading-3.5">
                                        1012 Crean Awesome, Bogotá D.C
                                    </p>
                                </div>

                                <span className="px-2 py-1 rounded-md bg-[#EDE8FF] text-[9px] font-bold" style={{ color: purple }}>
                                    Como llegar
                                </span>
                            </div>

                            <div className="h-px bg-[#D9D9D9]" />

                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-[10px] text-[#777]">Total a pagar</p>
                                    <p className="text-[12px] font-bold text-black">$25.000</p>
                                </div>

                                <span className="px-4 py-1.5 rounded-[7px] bg-[#BFF3D5] text-[10px] font-bold text-[#09A85E]">
                                    Pagado
                                </span>
                            </div>

                            <div className="rounded-[15px] border border-dashed border-[#6738F5] bg-[#F5F0FF] px-4 py-3 flex items-center gap-3">
                                <img
                                    src="/images/iconos/capana.webp"
                                    alt="Recordatorio"
                                    className="w-7 h-7 object-contain"
                                />

                                <div>
                                    <p className="text-[12px] font-extrabold text-black">
                                        Te enviaremos un recordatorio
                                    </p>
                                    <p className="text-[10px] text-[#777] leading-3.5">
                                        Recibirás una notificación antes de tu cita.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <button
                        className="w-full h-13 rounded-lg text-white text-[15px] font-extrabold flex items-center justify-center gap-3 mb-4"
                        style={{ backgroundColor: purple }}
                    >
                        <img
                            src="/images/iconos/calendar-purple.webp"
                            alt="Detalle"
                            className="w-6 h-6 object-contain"
                        />
                        Ver detalle de la reserva
                    </button>

                    <div className="grid grid-cols-2 gap-3 mb-4">
                        <button
                            className="h-16 rounded-[10px] border border-[#6738F5] px-2 py-2 flex flex-col items-center justify-center text-center overflow-hidden"
                            style={{ color: purple }}
                        >
                            <img
                                src="/images/iconos/calendar-purple.webp"
                                alt="Calendario"
                                className="w-5.5 h-5.5 object-contain shrink-0 mb-1"
                            />

                            <span className="block w-full text-center text-[10px] min-[390px]:text-[12px] font-bold leading-[12px] min-[390px]:leading-[14px] break-words">
                                Agregar al calendario
                            </span>
                        </button>

                        <button
                            className="h-16 rounded-[10px] border border-[#6738F5] px-2 py-2 flex flex-col items-center justify-center text-center overflow-hidden"
                            style={{ color: purple }}
                        >
                            <img
                                src="/images/iconos/chat-purple.webp"
                                alt="Contactar"
                                className="w-5.5 h-5.5 object-contain shrink-0 mb-1"
                            />

                            <span className="block w-full text-center text-[10px] min-[390px]:text-[12px] font-bold leading-3 min-[390px]:leading-3.5 wrap-break-words">
                                Contactar proveedor
                            </span>
                        </button>
                    </div>

                    <div className="rounded-[14px] bg-[#F5F0FF] border border-[#E6DFFF] px-4 py-4 mb-4">
                        <h3 className="text-[13px] font-extrabold text-black mb-4">
                            ¿Que sigue?
                        </h3>

                        <div className="grid grid-cols-3 divide-x divide-[#D6C9FF]">
                            <div className="px-2 text-center">
                                <img
                                    src="/images/iconos/car-purple.png"
                                    alt="Llega puntual"
                                    className="w-7.5 h-7.5 object-contain mx-auto mb-2"
                                />
                                <p className="text-[11px] font-extrabold text-black leading-3">
                                    Llega puntual
                                </p>
                                <p className="text-[8.5px] text-[#777] leading-2.75 mt-1">
                                    Te recomendamos llegar 5-10 min antes.
                                </p>
                            </div>

                            <div className="px-2 text-center">
                                <img
                                    src="/images/iconos/shield-green.webp"
                                    alt="Disfruta"
                                    className="w-7.5 h-7.5 object-contain mx-auto mb-2"
                                />
                                <p className="text-[11px] font-extrabold text-black leading-3">
                                    Disfruta del servicio
                                </p>
                                <p className="text-[8.5px] text-[#777] leading-2.75 mt-1">
                                    Nuestro equipo cuidará cada detalle de tu auto.
                                </p>
                            </div>

                            <div className="px-2 text-center">
                                <img
                                    src="/images/iconos/star-purple.webp"
                                    alt="Cuéntanos"
                                    className="w-7.5 h-7.5 object-contain mx-auto mb-2"
                                />
                                <p className="text-[11px] font-extrabold text-black leading-3">
                                    Cuentanos tu experiencia
                                </p>
                                <p className="text-[8.5px] text-[#777] leading-2.75 mt-1">
                                    Tu opinión nos ayuda a mejorar cada día.
                                </p>
                            </div>
                        </div>
                    </div>

                    <button
                        onClick={() => navigate('/home')}
                        className="w-full h-11.5 rounded-[10px] bg-white border border-[#E1E1E1] shadow-[0_4px_8px_rgba(0,0,0,0.20)] flex items-center justify-center gap-2 text-[13px] font-extrabold"
                        style={{ color: purple }}
                    >
                        <img
                            src="/images/iconos/hoem.webp"
                            alt="Inicio"
                            className="w-6 h-6 object-contain"
                        />
                        Volver al inicio
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmedTReservation;
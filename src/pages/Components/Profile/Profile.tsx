import { useRef, useState, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Car,
    ChevronRight,
    Bell,
    CreditCard,
    History,
    FileText,
    Headphones,
    HelpCircle,
    Truck,
    Package,
    Check,
    Power,
    Trophy,
    Moon,
} from 'lucide-react';
import BottomNavigation from '../../../components/BottomNavigation';

function Profile() {
    const navigate = useNavigate();
    const fileInputRef = useRef<HTMLInputElement>(null);

    const [activeTab, setActiveTab] = useState('profile');
    const [notifications, setNotifications] = useState(true);

    const avatarFrameImage = '/images/Profile/perfil-avatar.png';
    const defaultProfilePhoto = '/images/Profile/niña.png';

    const carBgImage = '/images/home/car.png';
    const levelImage = '/images/Profile/insignia1.webp';
    const orderImage = '/images/Profile/products.webp';
    const rewardImage = '/images/Profile/insignia5.webp';
    const coinsImage = '/images/Profile/moneda1.webp';

    const badgeImages = [
        '/images/Profile/insignia2.webp',
        '/images/Profile/insignia3.webp',
        '/images/Profile/insignia4.webp',
    ];

    const [profilePhoto, setProfilePhoto] = useState(defaultProfilePhoto);

    const handleProfilePhotoChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];

        if (!file) return;

        const previewUrl = URL.createObjectURL(file);
        setProfilePhoto(previewUrl);

        event.target.value = '';
    };

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);

        if (tab === 'home') navigate('/home');
        if (tab === 'explore') navigate('/explore');
        if (tab === 'services') navigate('/services');
        if (tab === 'chat') navigate('/chat');
        if (tab === 'profile') navigate('/profile');
    };

    const quickAccess = [
        {
            title: 'Métodos de pago',
            icon: CreditCard,
            path: '/payment-methods',
        },
        {
            title: 'Historial de reservas',
            icon: History,
            path: '/reservation-history',
        },
        {
            title: 'Mis vehículos',
            icon: Car,
            path: '/vehicles',
        },
        {
            title: 'Puntos y recompensas',
            icon: Trophy,
            path: '/rewards',
        },
        {
            title: 'Historial Facturas',
            icon: FileText,
            path: '/invoices',
        },
    ];

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                <div className="flex-1 overflow-y-auto px-5 pt-11.25 pb-30.5 bg-[#FBFBFD] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

                    <h1 className="text-center text-[18px] leading-none font-extrabold text-black mb-3.5">
                        Mi Perfil
                    </h1>

                    {/* Tarjeta superior perfil */}
                    <section className="relative min-h-[128px] overflow-hidden rounded-[14px] bg-gradient-to-br from-[#6844F6] via-[#5F3FEA] to-[#4F27C6] shadow-[0_5px_14px_rgba(0,0,0,0.28)] text-white">

                        <img
                            src={carBgImage}
                            alt=""
                            className="absolute right-[-35px] bottom-[-32px] w-[68%] h-[155px] object-cover opacity-[0.16] pointer-events-none"
                        />

                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleProfilePhotoChange}
                            className="hidden"
                        />

                        <div className="relative z-10 flex min-h-[128px] items-center gap-[15px] px-[18px] py-[18px] pr-[54px] max-[380px]:gap-[12px] max-[380px]:px-[14px] max-[380px]:pr-[48px]">

                            {/* Avatar */}
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="relative h-27.5 w-27.5 shrink-0 max-[380px]:h-23.75 max-[380px]:w-23.75"
                            >
                                {profilePhoto && (
                                    <span className="absolute left-1/2 top-1/2 z-0 flex h-17.5 w-17.5 -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full max-[380px]:h-15 max-[380px]:w-15">
                                        <img
                                            src={profilePhoto}
                                            alt="Foto de perfil"
                                            onError={() => setProfilePhoto('')}
                                            className="h-full w-full object-cover"
                                        />
                                    </span>
                                )}

                                <img
                                    src={avatarFrameImage}
                                    alt="Avatar"
                                    className="absolute inset-0 z-10 h-full w-full object-contain pointer-events-none"
                                />
                            </button>

                            {/* Información del usuario */}
                            <div className="min-w-0 flex-1">
                                <h2 className="truncate text-[18px] leading-none font-extrabold text-white max-[380px]:text-[16px]">
                                    Hola, Anyi 👋
                                </h2>

                                <p className="mt-[11px] truncate text-[12px] leading-none font-medium text-white/90 max-[380px]:text-[9px]">
                                    anyiLozano0912@gmail.com
                                </p>

                                <div className="mt-2.25 flex items-center gap-1.5">
                                    <span className="text-[16px] leading-none">🇨🇴</span>
                                    <p className="truncate text-[10px] leading-none font-medium text-white/90 max-[380px]:text-[9px]">
                                        +57 300 123 4567
                                    </p>
                                </div>

                                <div className="mt-[12px] inline-flex items-center rounded-full bg-white/18 px-[10px] py-[5px] backdrop-blur-sm">
                                    <span className="text-[8.5px] font-semibold text-white max-[380px]:text-[8px]">
                                        Bogotá, Colombia
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Botón cerrar sesión */}
                        <button
                            type="button"
                            className="absolute right-[12px] top-[12px] z-20 flex h-[27px] w-[27px] items-center justify-center rounded-[8px] bg-[#FF4B2B] shadow-[0_2px_6px_rgba(0,0,0,0.35)]"
                        >
                            <Power size={17} strokeWidth={3} className="text-white" />
                        </button>

                        {/* Botón editar */}
                        <button
                            type="button"
                            className="absolute right-[14px] bottom-[13px] z-20 flex h-[24px] w-[24px] items-center justify-center rounded-full bg-white shadow-[0_2px_6px_rgba(0,0,0,0.25)]"
                        >
                            <span className="text-[13px] leading-none font-black text-[#6738F5]">
                                ✎
                            </span>
                        </button>
                    </section>

                    {/* Tarjeta puntos */}
                    <section className="relative mt-[16px] min-h-[150px] overflow-hidden rounded-[14px] bg-[#8269E7] px-[18px] py-[16px] shadow-[0_5px_14px_rgba(0,0,0,0.25)] text-white max-[370px]:px-[14px] max-[370px]:py-[14px]">

                        {/* Decoración suave */}
                        <div className="absolute right-[-35px] top-[-35px] h-[120px] w-[120px] rounded-full bg-white/10" />
                        <div className="absolute left-[-30px] bottom-[-45px] h-[110px] w-[110px] rounded-full bg-white/10" />

                        <div className="relative z-10 grid min-h-[118px] grid-cols-[minmax(0,1fr)_42px_112px] items-center gap-[12px] max-[390px]:grid-cols-[minmax(0,1fr)_36px_96px] max-[350px]:grid-cols-[minmax(0,1fr)_86px] max-[350px]:gap-x-[8px]">

                            {/* Lado izquierdo: puntos */}
                            <div className="min-w-0">
                                <div className="flex items-center gap-[10px]">
                                    <img
                                        src={coinsImage}
                                        alt="Moneda"
                                        className="h-[32px] w-[32px] shrink-0 object-contain max-[390px]:h-[28px] max-[390px]:w-[28px]"
                                    />

                                    <p className="text-[19px] leading-none font-extrabold text-white max-[390px]:text-[19px] max-[350px]:text-[16px]">
                                        2.450 pts
                                    </p>
                                </div>

                                {/* Barra de progreso */}
                                <div className="mt-[16px] h-[7px] w-full max-w-[180px] overflow-hidden rounded-full bg-white/70 max-[390px]:max-w-[150px]">
                                    <div className="h-full w-[36%] rounded-full bg-[#FFD31F]" />
                                </div>

                                <p className="mt-[16px] text-[12px] leading-snug font-medium text-white max-[390px]:text-[10.5px] max-[350px]:text-[10px]">
                                    Faltan <span className="font-extrabold">550 pts</span> para llegar a Pro
                                </p>
                            </div>

                            {/* Insignias pequeñas */}
                            <div className="flex flex-col items-center justify-center gap-[7px] max-[350px]:hidden">
                                {badgeImages.map((badge, index) => (
                                    <img
                                        key={index}
                                        src={badge}
                                        alt={`Insignia ${index + 1}`}
                                        className={`object-contain drop-shadow-[0_2px_4px_rgba(0,0,0,0.25)] ${index === 0
                                                ? 'h-[34px] w-[34px] max-[390px]:h-[29px] max-[390px]:w-[29px]'
                                                : index === 1
                                                    ? 'h-[32px] w-[32px] max-[390px]:h-[27px] max-[390px]:w-[27px]'
                                                    : 'h-[28px] w-[28px] max-[390px]:h-[24px] max-[390px]:w-[24px]'
                                            }`}
                                    />
                                ))}
                            </div>

                            {/* Lado derecho: nivel */}
                            <div className="flex min-w-0 flex-col items-center justify-center gap-[10px]">
                                <img
                                    src={levelImage}
                                    alt="Nivel Oro"
                                    className="h-[78px] w-[112px] object-contain drop-shadow-[0_4px_6px_rgba(0,0,0,0.25)] max-[390px]:h-[68px] max-[390px]:w-[96px] max-[350px]:h-[62px] max-[350px]:w-[86px]"
                                />

                                <div className="flex h-[32px] w-[96px] items-center justify-center gap-[6px] rounded-[8px] bg-[#F2B33D] shadow-[0_4px_8px_rgba(0,0,0,0.25)] max-[390px]:h-[29px] max-[390px]:w-[86px]">
                                    <img
                                        src={coinsImage}
                                        alt="Moneda"
                                        className="h-[20px] w-[20px] object-contain max-[390px]:h-[17px] max-[390px]:w-[17px]"
                                    />

                                    <span className="text-[10px] leading-none font-extrabold text-white max-[390px]:text-[9px]">
                                        Nivel Oro
                                    </span>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Mis pedidos */}
                    <div className="mt-2.5 rounded-[10px] bg-white border border-[#E4D9FF] shadow-[0_3px_8px_rgba(0,0,0,0.16)] px-4 py-3">
                        <div className="flex items-center justify-between">
                            <h2 className="text-[13px] font-extrabold text-black">
                                Mis Pedidos
                            </h2>

                            <button
                                type="button"
                                className="flex items-center gap-1 text-[12px] font-extrabold text-[#6738F5]"
                            >
                                Ver todos
                                <ChevronRight size={14} strokeWidth={3} />
                            </button>
                        </div>

                        <div className="relative mt-3 grid grid-cols-4">
                            <div className="absolute left-[12%] right-[12%] top-[16px] h-px bg-[#DADADA]" />

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="w-8 h-8 rounded-full bg-[#6738F5] flex items-center justify-center">
                                    <Check size={18} strokeWidth={4} className="text-white" />
                                </span>

                                <p className="mt-1 text-[8px] font-semibold text-black">
                                    Confirmado
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="w-8 h-8 rounded-full bg-[#CFCFCF] flex items-center justify-center">
                                    <Truck size={17} className="text-[#555]" />
                                </span>

                                <p className="mt-1 text-[8px] font-semibold text-black">
                                    En camino
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="w-8 h-8 rounded-full bg-[#CFCFCF] flex items-center justify-center">
                                    <Package size={16} className="text-[#555]" />
                                </span>

                                <p className="mt-1 text-[8px] font-semibold text-black">
                                    En entrega
                                </p>
                            </div>

                            <div className="relative z-10 flex flex-col items-center">
                                <span className="w-8 h-8 rounded-full bg-[#73DC4A] flex items-center justify-center">
                                    <Check size={18} strokeWidth={4} className="text-white" />
                                </span>

                                <p className="mt-1 text-[8px] font-semibold text-[#52B735]">
                                    Entregado
                                </p>
                            </div>
                        </div>

                        <div className="mt-4 min-h-[55px] rounded-[8px] border border-[#E5D9FF] bg-white px-3 py-2 flex items-center gap-3">
                            <img
                                src={orderImage}
                                alt="Pedido"
                                className="w-[38px] h-[48px] object-cover rounded-[6px] shrink-0"
                            />

                            <div className="flex-1 min-w-0">
                                <p className="text-[9.5px] font-extrabold text-black leading-tight truncate">
                                    Pedido #MEC2345
                                </p>

                                <p className="text-[8.5px] font-semibold text-black leading-tight truncate">
                                    Combo Brillo Total
                                </p>

                                <p className="text-[7.5px] text-[#777] leading-tight truncate">
                                    12 mayo 2024 · 9:10am
                                </p>
                            </div>

                            <span className="min-w-[86px] h-[30px] rounded-[6px] bg-[#72D48B] text-white text-[10px] font-extrabold flex items-center justify-center gap-1.5 shrink-0">
                                <Truck size={14} />
                                Entregado
                            </span>
                        </div>
                    </div>

                    {/* Accesos rápidos */}
                    <div className="mt-[10px] rounded-[10px] bg-white border border-[#E4D9FF] shadow-[0_3px_8px_rgba(0,0,0,0.16)] px-4 py-3">
                        <h2 className="text-[13px] font-extrabold text-black mb-3">
                            Accesos rápidos
                        </h2>

                        <div className="grid grid-cols-2 gap-2.5">
                            {quickAccess.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <button
                                        key={item.title}
                                        type="button"
                                        onClick={() => navigate(item.path)}
                                        className="h-[34px] rounded-[5px] border border-[#DCCFFF] bg-white px-2.5 flex items-center justify-between text-left"
                                    >
                                        <span className="flex items-center gap-2 min-w-0">
                                            <Icon
                                                size={14}
                                                strokeWidth={2.5}
                                                className="text-[#6738F5] shrink-0"
                                            />

                                            <span className="text-[9.5px] font-semibold text-black truncate">
                                                {item.title}
                                            </span>
                                        </span>

                                        <ChevronRight size={16} strokeWidth={3} className="text-[#6738F5] shrink-0" />
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Preferencias */}
                    <div className="mt-[10px] rounded-[10px] bg-white border border-[#E4D9FF] shadow-[0_3px_8px_rgba(0,0,0,0.16)] px-4 py-3">
                        <h2 className="text-[13px] font-extrabold text-black mb-2">
                            Preferencias
                        </h2>

                        <div className="h-9 flex items-center justify-between border-b border-[#E5E5E5]">
                            <div className="flex items-center gap-2">
                                <Bell size={15} fill="#6738F5" className="text-[#6738F5]" />

                                <span className="text-[10px] font-semibold text-black">
                                    Notificaciones
                                </span>
                            </div>

                            <button
                                type="button"
                                onClick={() => setNotifications(!notifications)}
                                className={`w-[38px] h-[20px] rounded-full relative transition ${notifications ? 'bg-[#6738F5]' : 'bg-[#D1D1D1]'
                                    }`}
                            >
                                <span
                                    className={`absolute top-[3px] w-[14px] h-[14px] rounded-full bg-white transition ${notifications ? 'right-[3px]' : 'left-[3px]'
                                        }`}
                                />
                            </button>
                        </div>

                        <button
                            type="button"
                            className="w-full h-9 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <Moon size={15} fill="#6738F5" className="text-[#6738F5]" />

                                <span className="text-[10px] font-semibold text-black">
                                    Tema del app
                                </span>
                            </div>

                            <div className="flex items-center gap-1">
                                <span className="text-[9.5px] font-semibold text-black">
                                    Claro
                                </span>

                                <ChevronRight size={15} strokeWidth={3} className="text-[#6738F5]" />
                            </div>
                        </button>
                    </div>

                    {/* Ayuda */}
                    <div className="mt-[10px] rounded-[10px] bg-white border border-[#E4D9FF] shadow-[0_3px_8px_rgba(0,0,0,0.16)] px-4 py-3">
                        <h2 className="text-[13px] font-extrabold text-black mb-2">
                            Ayuda y soporte
                        </h2>

                        <button
                            type="button"
                            className="w-full h-9 flex items-center justify-between border-b border-[#E5E5E5]"
                        >
                            <div className="flex items-center gap-2">
                                <HelpCircle size={15} className="text-[#6738F5]" />

                                <span className="text-[10px] font-semibold text-black">
                                    Centro de ayuda
                                </span>
                            </div>

                            <ChevronRight size={16} strokeWidth={3} className="text-[#6738F5]" />
                        </button>

                        <button
                            type="button"
                            className="w-full h-9 flex items-center justify-between"
                        >
                            <div className="flex items-center gap-2">
                                <Headphones size={15} className="text-[#6738F5]" />

                                <span className="text-[10px] font-semibold text-black">
                                    Contactanos
                                </span>
                            </div>

                            <ChevronRight size={16} strokeWidth={3} className="text-[#6738F5]" />
                        </button>
                    </div>

                    {/* Promo */}
                    <div className="mt-4 min-h-[70px] rounded-[10px] bg-[#F1E9FF] border border-[#E2D3FF] shadow-[0_3px_8px_rgba(0,0,0,0.14)] px-4 py-3 flex items-center gap-3">
                        <img
                            src={rewardImage}
                            alt="Recompensas"
                            className="w-[52px] h-[52px] object-contain shrink-0"
                        />

                        <div className="flex-1 min-w-0">
                            <p className="text-[12px] leading-tight font-extrabold text-[#6738F5]">
                                ¡Sigue acumulando puntos!
                            </p>

                            <p className="mt-1 text-[9px] leading-[1.25] text-black">
                                Canjea productos y obtén beneficios exclusivos por cuidar tu carro
                            </p>
                        </div>

                        <button
                            type="button"
                            className="w-[104px] h-[36px] rounded-[8px] bg-[#6738F5] text-white text-[8.5px] font-extrabold flex items-center justify-center gap-1 shrink-0"
                        >
                            Ver recompensas
                            <ChevronRight size={13} strokeWidth={3} />
                        </button>
                    </div>
                </div>

                <div className="absolute bottom-0 z-50 h-[92px] w-full rounded-t-[22px] bg-white shadow-[0_-4px_12px_rgba(0,0,0,0.35)]">
                    <BottomNavigation activeTab={activeTab} onTabChange={handleTabChange} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import './ConfirmedTReservation.css';

function Bill() {
    const navigate = useNavigate();

    const purple = '#6738F5';
    const green = '#09C878';

    const invoiceRef = useRef<HTMLDivElement>(null);
    const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);

    const invoiceItems = [
        {
            label: 'Lavado Exterior + Interior',
            price: '$200.00',
        },
        {
            label: 'Aspirado y detallado de interiores',
            price: '$50.00',
        },
        {
            label: 'Aplicación de cera Premium',
            price: '$30.00',
        },
    ];

    const generateInvoicePdf = async () => {
        if (!invoiceRef.current) return null;

        setIsGeneratingPdf(true);

        try {
            const html2canvas = (await import('html2canvas')).default;
            const { jsPDF } = await import('jspdf');

            const canvas = await html2canvas(invoiceRef.current, {
                scale: 3,
                backgroundColor: '#ffffff',
                useCORS: true,
                logging: false,
            });

            const imgData = canvas.toDataURL('image/png');

            const pdf = new jsPDF({
                orientation: 'p',
                unit: 'mm',
                format: 'a4',
                compress: true,
            });

            const pageWidth = pdf.internal.pageSize.getWidth();
            const pageHeight = pdf.internal.pageSize.getHeight();

            const margin = 10;
            const maxWidth = pageWidth - margin * 2;
            const maxHeight = pageHeight - margin * 2;

            const canvasWidth = canvas.width;
            const canvasHeight = canvas.height;

            const ratio = Math.min(
                maxWidth / canvasWidth,
                maxHeight / canvasHeight
            );

            const imgWidth = canvasWidth * ratio;
            const imgHeight = canvasHeight * ratio;

            const x = (pageWidth - imgWidth) / 2;
            const y = (pageHeight - imgHeight) / 2;

            pdf.setFillColor(255, 255, 255);
            pdf.rect(0, 0, pageWidth, pageHeight, 'F');

            pdf.addImage(imgData, 'PNG', x, y, imgWidth, imgHeight);

            return pdf;
        } finally {
            setIsGeneratingPdf(false);
        }
    };

    const handleViewInvoicePdf = async () => {
        const newWindow = window.open('', '_blank');

        const pdf = await generateInvoicePdf();

        if (!pdf) {
            newWindow?.close();
            return;
        }

        const blob = pdf.output('blob');
        const url = URL.createObjectURL(blob);

        if (newWindow) {
            newWindow.location.href = url;
        }

        setTimeout(() => {
            URL.revokeObjectURL(url);
        }, 60000);
    };

    const handleDownloadInvoicePdf = async () => {
        const pdf = await generateInvoicePdf();

        if (!pdf) return;

        pdf.save('Factura-FAC-4576-2024.pdf');
    };

    return (
        <div className="w-full h-screen bg-black flex items-center justify-center">
            <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white flex flex-col">

                <div className="flex-1 overflow-y-auto px-5 min-[390px]:px-8 pt-10 pb-8 bg-white">

                    {/* Animación de confirmado */}
                    <div className="relative h-35 flex items-center justify-center mb-3 animate-container">
                        <span className="absolute left-18 top-8.75 w-2 h-2 bg-[#6738F5] rotate-45 rounded-xs animate-float-1" />
                        <span className="absolute left-12 bottom-11 w-2.25 h-2.25 bg-[#09C878] rotate-45 rounded-xs animate-float-2" />
                        <span className="absolute right-17.5 top-8 w-2 h-2 bg-[#FFB52E] rotate-45 rounded-xs animate-float-3" />
                        <span className="absolute right-13 bottom-10.5 w-2.25 h-2.25 bg-[#6738F5] rotate-45 rounded-xs animate-float-4" />
                        <span className="absolute left-23 bottom-17.5 w-0.75 h-0.75 bg-[#FFB52E] rounded-full animate-float-5" />
                        <span className="absolute right-24 top-11.25 w-1 h-1 bg-[#09C878] rounded-full animate-float-6" />
                        <span className="absolute right-14.5 top-19 w-1 h-1 bg-[#09C878] rounded-full animate-float-7" />

                        <div className="w-26 h-26 rounded-full bg-[#E9FFF4] flex items-center justify-center shadow-[0_8px_20px_rgba(0,0,0,0.08)] animate-pulse-glow">
                            <div
                                className="w-18 h-18 rounded-full flex items-center justify-center animate-pulse-scale"
                                style={{ backgroundColor: green }}
                            >
                                <img
                                    src="/images/iconos/chulo.png"
                                    alt="Confirmado"
                                    className="w-9.5 h-9.5 object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Título */}
                    <div className="text-center mb-5">
                        <h1 className="text-[17px] min-[390px]:text-[18px] font-extrabold text-black leading-tight">
                            Factura descargada
                        </h1>

                        <p className="text-[11px] min-[390px]:text-[12px] text-black mt-2 leading-4 px-2">
                            Tu factura ha sido descargada correctamente en formato pdf
                        </p>
                    </div>

                    {/* Estado factura */}
                    <div className="rounded-[13px] bg-white border border-[#D7C8FF] shadow-[0_4px_8px_rgba(0,0,0,0.22)] px-4 py-4 mb-5">
                        <div className="flex items-center gap-3">
                            <div className="w-16 h-full min-h-22 flex items-center justify-center shrink-0">
                                <img
                                    src="/images/iconos/pdf.webp"
                                    alt="PDF"
                                    className="w-14.5 h-14.5 object-contain"
                                />
                            </div>

                            <div className="flex-1 min-w-0">
                                <p className="text-[13px] font-extrabold text-black leading-4.25 wrap-break-words">
                                    Factura #FAC-4576-2024
                                </p>

                                <p className="text-[11px] text-black leading-tight mt-2">
                                    18 May 2024 • 2:15 p. m.
                                </p>

                                <p className="text-[11px] text-black leading-tight mt-1">
                                    Tamaño 245 KB
                                </p>

                                <div className="flex justify-end mt-3">
                                    <span className="px-3 py-2 rounded-[9px] bg-[#C8F5D8] text-[11px] font-bold text-[#09A85E] flex items-center gap-1">
                                        <span className="w-1.75 h-1.75 rounded-full bg-[#09A85E] shrink-0" />
                                        Generada
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Factura */}
                    <div
                        ref={invoiceRef}
                        className="rounded-[13px] bg-white border border-[#E1E1E1] shadow-[0_4px_8px_rgba(0,0,0,0.22)] overflow-hidden mb-5"
                    >

                        {/* Encabezado factura */}
                        <div className="px-4 py-4 border-b border-[#D9D9D9]">
                            <div className="flex items-center justify-between gap-4">
                                <div className="w-30 h-17.5 flex items-center justify-center shrink-0 overflow-hidden">
                                    <img
                                        src="/images/Logo/Logo.png"
                                        alt="AquaStorm"
                                        className="max-w-full max-h-full object-contain"
                                    />
                                </div>

                                <div className="text-right">
                                    <p className="text-[12px] min-[390px]:text-[13px] font-extrabold text-black">
                                        Factura
                                    </p>
                                    <p className="text-[10px] min-[390px]:text-[11px] font-bold" style={{ color: purple }}>
                                        #FAC-4567-2024
                                    </p>
                                    <p className="text-[9.5px] min-[390px]:text-[10.5px] text-black mt-2">
                                        Fecha: 18 May 2024
                                    </p>
                                    <p className="text-[9.5px] min-[390px]:text-[10.5px] text-black mt-1">
                                        Hora: 2:15 p. m.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Datos */}
                        <div className="px-4 py-4 grid grid-cols-1 min-[390px]:grid-cols-2 gap-5 border-b border-[#D9D9D9]">
                            <div>
                                <h3 className="text-[12px] font-extrabold text-black mb-2">
                                    Datos del cliente
                                </h3>

                                <p className="text-[10.5px] text-black leading-4.25">
                                    Nombre: Juan Pérez
                                </p>
                                <p className="text-[10.5px] text-black leading-4.25 wrap-break-words">
                                    Email: juandperez@gmail.com
                                </p>
                                <p className="text-[10.5px] text-black leading-4.25">
                                    Teléfono: 312 345 6789
                                </p>
                            </div>

                            <div>
                                <h3 className="text-[12px] font-extrabold text-black mb-2">
                                    Información del servicio
                                </h3>

                                <div className="space-y-2">
                                    <div className="flex items-start gap-2">
                                        <div className="w-7 h-7 flex items-center justify-center shrink-0 overflow-hidden">
                                            <img
                                                src="/images/iconos/icon1.png"
                                                alt=""
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-[10.5px] text-black leading-3.75">
                                            Servicio: Lavado Premium
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-8.5 h-7.5 flex items-center justify-center shrink-0 overflow-hidden">
                                            <img
                                                src="/images/iconos/Toyota.webp"
                                                alt=""
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-[10.5px] text-black leading-3.75">
                                            Vehículo: Toyota Corolla • ABC-123
                                        </p>
                                    </div>

                                    <div className="flex items-start gap-2">
                                        <div className="w-7 h-7 flex items-center justify-center shrink-0 overflow-hidden">
                                            <img
                                                src="/images/iconos/ubicacion.png"
                                                alt=""
                                                className="max-w-full max-h-full object-contain"
                                            />
                                        </div>
                                        <p className="text-[10.5px] text-black leading-3.75">
                                            Ubicación: AutoLavado Center
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tabla de descripción */}
                        <div className="px-4 py-4">
                            <div className="rounded-[9px] overflow-hidden border border-[#D7C8FF]">
                                <div className="h-7.5 px-4 flex items-center justify-between text-white" style={{ backgroundColor: purple }}>
                                    <p className="text-[11px] font-bold">Descripción</p>
                                    <p className="text-[11px] font-bold">Precio</p>
                                </div>

                                <div className="bg-white">
                                    {invoiceItems.map((item) => (
                                        <div
                                            key={item.label}
                                            className="min-h-8.5 px-4 py-2 flex items-center justify-between gap-3"
                                        >
                                            <div className="flex items-center gap-2 min-w-0">
                                                <span className="w-4 h-4 rounded-full bg-[#4ED76E] flex items-center justify-center shrink-0">
                                                    <img
                                                        src="/images/iconos/chulo.png"
                                                        alt=""
                                                        className="w-2.25 h-2.25 object-contain scale-[1.25]"
                                                    />
                                                </span>

                                                <p className="text-[10.5px] min-[390px]:text-[11px] text-black leading-3.75">
                                                    {item.label}
                                                </p>
                                            </div>

                                            <p className="text-[10.5px] min-[390px]:text-[11px] text-black shrink-0">
                                                {item.price}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Totales */}
                            <div className="mt-4 flex justify-end">
                                <div className="w-full max-w-40 space-y-1.5">
                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-black">Subtotal</p>
                                        <p className="text-[10px] text-black">$280.00</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-black">Descuento (Puntos)</p>
                                        <p className="text-[10px] text-[#09A85E]">-$25.00</p>
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <p className="text-[10px] text-black">IVA (16%)</p>
                                        <p className="text-[10px] text-black">$30.00</p>
                                    </div>

                                    <div className="h-px bg-[#D9D9D9] my-2" />

                                    <div className="flex items-center justify-between">
                                        <p className="text-[11px] font-extrabold text-black">Total pagado</p>
                                        <p className="text-[11px] font-extrabold" style={{ color: purple }}>
                                            $295.00
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="h-px bg-[#E0E0E0] my-4" />

                            <div className="text-center">
                                <p className="text-[10px] font-bold" style={{ color: purple }}>
                                    Gracias por confiar en AquaStorm Car Care
                                </p>
                                <p className="text-[8.5px] text-black mt-1 leading-3">
                                    Este documento es una representación impresa de un CFDI
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Botón principal */}
                    <button
                        type="button"
                        onClick={handleViewInvoicePdf}
                        disabled={isGeneratingPdf}
                        className="w-full h-13.5 rounded-lg text-white text-[15px] font-extrabold flex items-center justify-center gap-3 mb-4 shadow-[0_4px_8px_rgba(0,0,0,0.22)] disabled:opacity-70 disabled:cursor-not-allowed"
                        style={{ backgroundColor: purple }}
                    >
                        <img
                            src="/images/iconos/ver.webp"
                            alt="Ver factura"
                            className="w-6.5 h-6.5 object-contain"
                        />
                        {isGeneratingPdf ? 'Generando PDF...' : 'Ver factura (PDF)'}
                    </button>

                    {/* Acciones */}
                    <div className="grid grid-cols-2 gap-4 mb-7">
                        <button
                            type="button"
                            className="h-12 min-[390px]:h-13 rounded-[10px] border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] flex items-center justify-center gap-2 px-3"
                            style={{ color: purple }}
                        >
                            <img
                                src="/images/iconos/share.webp"
                                alt="Compartir"
                                className="w-6 h-6 object-contain shrink-0"
                            />
                            <span className="text-[12px] min-[390px]:text-[13px] font-semibold leading-tight text-center">
                                Compartir
                            </span>
                        </button>

                        <button
                            type="button"
                            onClick={handleDownloadInvoicePdf}
                            disabled={isGeneratingPdf}
                            className="h-12 min-[390px]:h-13 rounded-[10px] border border-[#D7C8FF] bg-white shadow-[0_4px_8px_rgba(0,0,0,0.22)] flex items-center justify-center gap-2 px-3 disabled:opacity-70 disabled:cursor-not-allowed"
                            style={{ color: purple }}
                        >
                            <img
                                src="/images/iconos/Download.png"
                                alt="Descargar nuevamente"
                                className="w-6 h-6 object-contain shrink-0"
                            />
                            <span className="text-[11px] min-[390px]:text-[12px] font-semibold leading-tight text-center">
                                {isGeneratingPdf ? 'Generando...' : 'Descargar nuevamente'}
                            </span>
                        </button>
                    </div>

                    {/* Volver */}
                    <div className="px-8 min-[390px]:px-10">
                        <button
                            type="button"
                            onClick={() => navigate('/home')}
                            className="w-full h-12.5 rounded-[9px] bg-white border border-[#D7C8FF] shadow-[0_4px_8px_rgba(0,0,0,0.22)] flex items-center justify-center gap-2 text-[13px] min-[390px]:text-[14px] font-extrabold"
                            style={{ color: purple }}
                        >
                            <img
                                src="/images/iconos/hoem.webp"
                                alt="Historial"
                                className="w-6.5 h-6.5 object-contain"
                            />
                            Volver al Inicio
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
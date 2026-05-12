import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LocationState {
  email?: string;
}

function ForgotPasswordCode() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const email = state?.email || '';

  const [verificationCode, setVerificationCode] = useState('');
  const [timeLeft, setTimeLeft] = useState(183);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleVerify = () => {
    if (verificationCode.trim().length === 5) {
      navigate('/reset-password', {
        state: {
          email,
          code: verificationCode,
        },
      });
    }
  };

  const handleResend = () => {
    setTimeLeft(183);
    setCanResend(false);
    setVerificationCode('');
  };

  const isCodeValid = verificationCode.trim().length === 5;

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col px-6 py-8 overflow-y-auto">
          {/* Sección superior con título e imagen */}
          <div className="text-center mb-8">
            {/* Ilustración */}
            <img
              src="/images/Intruciones/password.png"
              alt="Verificación de código"
              className="w-75 h-auto mx-auto mb-6"
            />

            <h1 className="text-gray-800 text-3xl font-bold mb-2">
              Verifica tu Código
            </h1>

            <p className="text-gray-600 text-base leading-relaxed">
              Te hemos enviado un código de 5 dígitos a{' '}
              <span className="font-semibold">{email}</span>. Introdúcelo para continuar.
            </p>
          </div>

          {/* Formulario */}
          <div className="flex-1 flex flex-col gap-6">
            {/* Input de código */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-2">
                Introduce tu código de verificación
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-3 py-3 border-2 border-purple-500 gap-1">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type="text"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value.replace(/[^0-9]/g, '').slice(0, 5))}
                  placeholder="59382"
                  maxLength={5}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base font-semibold"
                />
                <button
                  type="button"
                  onClick={handleResend}
                  disabled={!canResend}
                  className="text-purple-500 text-[9px] font-semibold whitespace-nowrap flex-shrink-0 disabled:text-gray-400 leading-tight"
                >
                  {canResend ? 'Reenviar' : `Reenviar en ${formatTime(timeLeft)}`}
                </button>
              </div>
            </div>

            {/* Espaciador */}
            <div className="flex-1"></div>
          </div>

          {/* Botón Verificar */}
          <button
            onClick={handleVerify}
            disabled={!isCodeValid}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base mb-6"
          >
            Verificar Código
          </button>

          {/* Links al pie */}
          <div className="text-center text-xs text-gray-600 flex justify-center gap-2 flex-wrap">
            <button className="text-purple-500 hover:underline">Necesita ayuda</button>
            <span>|</span>
            <button className="text-purple-500 hover:underline">Preguntas frecuentes</button>
            <span>|</span>
            <button className="text-purple-500 hover:underline">Condiciones de uso</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPasswordCode;

import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LocationState {
  email?: string;
}

function LoginSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const email = state?.email || '';

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home', { state: { email } });
    }, 3000); // Redirige después de 3 segundos

    return () => clearTimeout(timer);
  }, [navigate, email]);

  const handleContinue = () => {
    navigate('/home', { state: { email } });
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col items-center justify-between px-6 py-8">
          {/* Sección superior con animación */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            {/* Ilustración de éxito */}
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto relative flex items-center justify-center">
                {/* Círculo de fondo */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-100 to-purple-50"></div>

                {/* Decoraciones */}
                <div className="absolute top-0 left-0 w-4 h-4 bg-gradient-to-br from-purple-300 to-purple-400 rounded-full opacity-60 animate-pulse" style={{ top: '10px', left: '15px' }}></div>
                <div className="absolute top-3 right-6 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-6 left-2 w-3 h-3 bg-orange-400 rounded-full opacity-60 animate-pulse"></div>
                <div className="absolute bottom-8 right-4 w-2.5 h-2.5 bg-pink-400 rounded-full opacity-60 animate-pulse"></div>

                {/* Checkmark */}
                <div className="relative z-10">
                  <svg className="w-20 h-20 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="11" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.2" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={3}
                      d="M9 12l2 2 4-4"
                      className="animate-[bounce_1s_ease-in-out_forwards]"
                      style={{ animationDelay: '0.2s' }}
                    />
                  </svg>
                </div>
              </div>
            </div>

            {/* Título */}
            <h1 className="text-gray-800 text-3xl font-bold mb-3">
              ¡Inicio de sesión exitoso!
            </h1>

            {/* Descripción */}
            <p className="text-gray-600 text-base leading-relaxed max-w-xs">
              Te dirigiremos a la pantalla principal en breve. ¡Explora todos los servicios que tenemos para tu vehículo!
            </p>
          </div>

          {/* Botón Continuar */}
          <button
            onClick={handleContinue}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default LoginSuccess;

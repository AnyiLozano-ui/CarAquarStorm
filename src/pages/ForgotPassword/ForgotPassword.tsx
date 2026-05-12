import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (email.trim()) {
      navigate('/forgot-password-code', { state: { email } });
    }
  };

  const isFormValid = email.trim();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col px-6 py-8 overflow-y-auto">
          {/* Sección superior con título e imagen */}
          <div className="text-center mb-8">
            <h1 className="text-gray-800 text-3xl font-bold mb-2">
              ¿Olvidaste tu Contraseña?
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Ingresa tu correo electrónico y te enviaremos un código de recuperación para que puedas establecer una nueva contraseña.
            </p>

            {/* Ilustración */}
            <img
              src="/images/Intruciones/password1.png"
              alt="Recuperar contraseña"
              className="w-48 h-auto mx-auto mb-6"
            />
          </div>

          {/* Formulario */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Email */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-2">
                Introduce tu correo electrónico
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="email"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
              </div>
            </div>

            {/* Espaciador */}
            <div className="flex-1"></div>
          </div>

          {/* Botón Continuar */}
          <button
            onClick={handleContinue}
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base mb-4"
          >
            Continuar
          </button>

          {/* Link para volver al login */}
          <div className="text-center text-sm text-gray-600">
            ¿Recordaste tu contraseña?{' '}
            <button
              onClick={() => navigate('/')}
              className="text-purple-500 font-semibold hover:underline"
            >
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;

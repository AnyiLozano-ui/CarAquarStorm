import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleContinue = () => {
    if (email.trim()) {
      navigate('/register-form-details', { state: { email } });
    }
  };

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">

        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col items-center justify-between px-6 py-8">

          {/* Sección superior con ilustración */}
          <div className="flex-1 flex flex-col items-center justify-center text-center pt-8">
            <h1 className="text-gray-800 text-3xl font-bold mb-4">
              Crea Tu Cuenta
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-12 max-w-xs">
              Accede a servicios de lavado de autos, mantenimiento y más con solo unos clics. ¡Regístrate ahora y cuida tu vehículo como nunca!
            </p>

            {/* Ilustración */}
            <img
              src="/images/Intruciones/cuentausers.png"
              alt="Crear cuenta"
              className="w-80 h-auto object-contain mb-8"
            />
          </div>

          {/* Sección inferior con formulario */}
          <div className="w-full md:max-w-sm flex flex-col gap-6 pb-8 mx-auto md:mx-auto">
            {/* Campo de email */}
            <div className="relative">
              <label className="text-gray-800 text-sm font-semibold block mb-3">
                Introduce tu correo electrónico
              </label>
              <div className="flex items-center bg-gray-100 rounded-full px-4 py-3 border border-gray-300 focus-within:border-purple-500 focus-within:bg-white transition-all">
                <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="hello@tyler.com"
                  className="flex-1 bg-transparent outline-none text-gray-800 placeholder-gray-400 text-sm"
                />
                {email && (
                  <button
                    onClick={() => setEmail('')}
                    className="text-teal-500 hover:text-teal-600"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                    </svg>
                  </button>
                )}
              </div>
            </div>

            {/* Botón Continuar */}
            <button
              onClick={handleContinue}
              disabled={!email.trim()}
              className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base"
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;

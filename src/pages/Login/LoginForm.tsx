import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = () => {
    if (email.trim() && password.trim()) {
      navigate('/login-success', { state: { email } });
    }
  };

  const isFormValid = email.trim() && password.trim();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col px-6 py-8 overflow-y-auto">
          {/* Sección superior con título e imagen */}
          <div className="text-center mb-8">
            <h1 className="text-gray-800 text-3xl font-bold mb-2">
              ¡Bienvenido de nuevo!
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Inicia sesión para seguir explorando y acceder a los mejores servicios de lavado.
            </p>

            {/* Ilustración */}
            <img
              src="/images/Intruciones/icon-car.png"
              alt="Bienvenido"
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

            {/* Contraseña */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-2">
                Introduce tu contraseña
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="password"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Checkbox y Contraseña olvidada */}
            <div className="flex items-center justify-between mt-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-gray-300 text-purple-500 focus:ring-2 focus:ring-purple-500"
                />
                <span className="text-gray-600 text-sm">Mantenme registrado</span>
              </label>
              <button
                type="button"
                onClick={() => navigate('/forgot-password')}
                className="text-purple-500 text-sm font-semibold hover:underline"
              >
                Has olvidado tu contraseña
              </button>
            </div>

            {/* Espaciador */}
            <div className="flex-1"></div>
          </div>

          {/* Botón Iniciar sesión */}
          <button
            onClick={handleLogin}
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base mb-4"
          >
            Iniciar sesión
          </button>

          {/* Divisor */}
          <div className="flex items-center gap-3 my-4">
            <div className="flex-1 h-px bg-gray-300"></div>
            <span className="text-gray-500 text-sm">Puedes iniciar sesión con</span>
            <div className="flex-1 h-px bg-gray-300"></div>
          </div>

          {/* Botones de redes sociales */}
          <div className="flex gap-3 justify-center mb-6">
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white border-2 border-gray-300 text-gray-700 hover:border-gray-400 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
            </button>
            <button className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:bg-gray-800 transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.12-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.05 2.29.89 3.04.89.9 0 2.29-1.16 3.86-1.04.65.03 2.47.26 3.62 1.95-.13.09-1.94 1.14-1.94 3.4 0 2.62 2.26 3.5 2.26 3.5s-.56 1.65-1.84 2.89l-.5.61-.49.61z"/>
                <path d="M12 2.36c.79 0 1.54-.35 1.9-1.01.16-.3.27-.62.34-.95 0-.05.02-.1.02-.15-.53.03-1.02.26-1.35.67-.27.33-.44.76-.44 1.22 0 .05.01.1.02.15-.04.03-.08.07-.12.11.19.05.39.08.63.08z"/>
              </svg>
            </button>
          </div>

          {/* Enlace de registro */}
          <div className="text-center text-sm text-gray-600">
            ¿No tienes una cuenta?{' '}
            <button
              onClick={() => navigate('/register-form-details')}
              className="text-purple-500 font-semibold hover:underline"
            >
              Regístrate aquí
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

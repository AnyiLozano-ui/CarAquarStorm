import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface LocationState {
  email?: string;
}

function RegisterFormStep2() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as LocationState;
  const email = state?.email || '';

  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    placa: '',
    password: '',
    confirmPassword: '',
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleContinue = () => {
    if (
      formData.nombre.trim() &&
      formData.apellido.trim() &&
      formData.placa.trim() &&
      formData.password.trim() &&
      formData.confirmPassword.trim() &&
      formData.password === formData.confirmPassword
    ) {
      navigate('/verify-email', {
        state: {
          email,
          ...formData,
        },
      });
    }
  };

  const isFormValid =
    formData.nombre.trim() &&
    formData.apellido.trim() &&
    formData.placa.trim() &&
    formData.password.trim() &&
    formData.confirmPassword.trim() &&
    formData.password === formData.confirmPassword;

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenido principal */}
        <div className="h-full bg-white flex flex-col px-6 py-8 overflow-y-auto">
          {/* Sección superior con título e imagen */}
          <div className="text-center mb-6">
            <h1 className="text-gray-800 text-3xl font-bold mb-2">
              Crea Tu Cuenta
            </h1>

            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Completa tus datos para disfrutar de nuestros servicios premium de lavado y mantenimiento de vehículos.
            </p>

            {/* Ilustración */}
            <img
              src="/images/Intruciones/icon-car.png"
              alt="Carro"
              className="w-48 h-auto mx-auto mb-6"
            />
          </div>

          {/* Formulario */}
          <div className="flex-1 flex flex-col gap-4">
            {/* Nombre */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Introduce tu nombre
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Nombre"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
              </div>
            </div>

            {/* Apellido */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Introduce tu apellido
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <input
                  type="text"
                  name="apellido"
                  value={formData.apellido}
                  onChange={handleChange}
                  placeholder="Apellido"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
              </div>
            </div>

            {/* Placa del vehículo */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Placa del vehículo
              </label>
              <div className="flex items-center bg-teal-100 rounded-lg px-4 py-2.5 border border-teal-300">
                <svg className="w-5 h-5 text-teal-500 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <input
                  type="text"
                  name="placa"
                  value={formData.placa}
                  onChange={handleChange}
                  placeholder="Placa"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
              </div>
            </div>

            {/* Crear contraseña */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Crea una contraseña segura
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Confirmar contraseña"
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

            {/* Confirmar contraseña */}
            <div>
              <label className="text-gray-700 text-sm font-semibold block mb-1">
                Confirma la contraseña
              </label>
              <div className="flex items-center bg-gray-100 rounded-lg px-4 py-2.5 border border-gray-200">
                <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirmar contraseña"
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-base"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  {showConfirmPassword ? (
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

            {/* Validación de contraseñas */}
            {formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword && (
              <p className="text-red-500 text-sm text-center mt-1">Las contraseñas no coinciden</p>
            )}
          </div>

          {/* Botón Continuar */}
          <button
            onClick={handleContinue}
            disabled={!isFormValid}
            className="w-full bg-gradient-to-r from-purple-500 to-purple-600 text-white font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-base mt-6"
          >
            Continuar
          </button>
        </div>
      </div>
    </div>
  );
}

export default RegisterFormStep2;

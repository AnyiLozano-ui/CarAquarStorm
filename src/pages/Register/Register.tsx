import { useNavigate } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">

        {/* Sección superior con ilustración */}
        <div className="bg-white h-2/5 flex items-center justify-center px-4 pt-45 sm:pt-45 md:pt-45 pb-4 sm:pb-6">
          <img
            src="/images/Intruciones/manten.png"
            alt="Mantenimiento del auto"
            className="w-77.5 sm:w-77.5 md:w-[320px] lg:w-85 xl:w-90 h-auto object-contain"
          />
        </div>

        {/* Sección inferior con contenido principal */}
        <div className="h-3/5 bg-linear-to-b from-purple-600 to-purple-700 flex flex-col items-center justify-between px-6 py-8">

          {/* Contenido principal */}
          <div className="flex-1 flex flex-col items-center justify-center text-center">
            <h1 className="text-white text-2xl font-bold mb-4">
              Mantente informado y<br />cuida de tu auto
            </h1>

            <p className="text-purple-100 text-sm leading-relaxed mb-8">
              Además de nuestros servicios de lavado, mantente al día con noticias, tips y promociones exclusivas para el mantenimiento de tu vehículo.
            </p>
          </div>

          {/* Botón de registro */}
          <button
            onClick={() => navigate('/register-form')}
            className="w-full bg-white text-purple-700 font-bold py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 text-base mb-6"
          >
            Regístrate
          </button>

          {/* Link de inicio de sesión */}
          <div className="flex gap-2 justify-center items-center">
            <p className="text-white text-sm">¿Ya tienes una cuenta?</p>
            <button
              onClick={() => navigate('/login-form')}
              className="text-white text-sm font-semibold hover:underline cursor-pointer"
            >
              Inicia sesión
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

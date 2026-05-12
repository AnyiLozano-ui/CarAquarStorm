import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl">
        {/* Video de fondo */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover"
        >
          <source src="/images/videos/videoplayback.mp4" type="video/mp4" />
          Tu navegador no soporta videos HTML5
        </video>

        {/* Overlay azulado */}
        <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(85, 131, 177, 0.68)' }}></div>

        {/* Contenedor - Logo en mitad y botón abajo */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-6">
          {/* Logo centrado en la mitad - más grande */}
          <div className="w-80 h-80 md:w-105 md:h-105 filter drop-shadow-2xl flex-1 flex items-center justify-center">
            <img
              src="/images/Logo/Logo.png"
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Botón Iniciar - Abajo */}
          <button onClick={() => navigate('/intrucciones')} className="cursor-pointer mb-12 w-4/5 bg-[#6433F5] hover:bg-blue-600 text-white font-bold py-3 rounded-[10px] transition-all duration-300 shadow-lg hover:shadow-xl text-lg">
            Iniciar
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
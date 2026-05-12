import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Intrucciones() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const slides = [
    {
      title: "¡Tu auto en las mejores manos!",
      description: "Disfruta de un servicio de lavado de alta calidad y deja que tu auto brille como nunca. Estamos aquí para cuidar cada detalle y ofrecerte la mejor experiencia.",
      image: "/images/Intruciones/Intrucione1.png",
    },
    {
      title: "¡Cuidado manual para tu auto!",
      description: "Nuestros expertos se encargan de cada rincón de tu vehículo, asegurándose de que quede impecable. ¡El mejor cuidado personalizado para tu auto!",
      image: "/images/Intruciones/Intrucione2.png",
    },
    {
      title: "Encuentra el lavado de autos más cercano",
      description: "Utiliza nuestro mapa interactivo para localizar el centro de lavado más conveniente para ti. ¡Lava tu auto donde más lo necesites!",
      image: "/images/Intruciones/Intrucione3.png",
    },
  ];

  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      {/* Contenedor móvil - Proporción 9:16 */}
      <div className="relative h-screen w-auto aspect-9/16 max-w-2xl overflow-hidden shadow-2xl bg-white">
        {/* Contenedor principal */}
        <div className="h-full flex flex-col items-center py-6 sm:py-8 md:py-12 px-4 sm:px-6 gap-4 sm:gap-6">
          {/* Espacio superior flexible */}
          <div className="flex-1 flex items-end justify-center w-full">
            <img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="w-64 sm:w-80 md:w-80 lg:w-96 h-auto object-contain max-h-56 sm:max-h-64"
            />
          </div>

          {/* Contenido */}
          <div className="flex flex-col items-center justify-center text-center gap-3 sm:gap-4 md:gap-6 flex-1">
            {/* Título */}
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 leading-tight">
              {slides[currentSlide].title}
            </h1>

            {/* Descripción */}
            <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed px-2">
              {slides[currentSlide].description}
            </p>

            {/* Botón */}
            <button onClick={() => {
              if (currentSlide === slides.length - 1) {
                navigate('/register');
              } else {
                setCurrentSlide(currentSlide + 1);
              }
            }} className="w-4/5 bg-[#6433F5] hover:bg-[#5527d9] text-white font-bold py-2 sm:py-3 md:py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-lg mt-2 md:mt-4">
              Explorar Servicios
            </button>
          </div>

          {/* Indicadores */}
          <div className="flex justify-center gap-3 mt-4 md:mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-[#6433F5] w-8'
                    : 'bg-gray-300'
                }`}
                aria-label={`Slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intrucciones;

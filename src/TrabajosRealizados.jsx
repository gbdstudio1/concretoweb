import { Carousel } from "flowbite-react";

// Carrusel principal
import realizado1 from "./imagenes/realizado1.png";
import realizado2 from "./imagenes/realizado2.png";
import realizado3 from "./imagenes/realizado3.png";

// Carrusel actual
import actualidad1 from "./imagenes/actualidad1.png";
import actualidad2 from "./imagenes/actualidad2.png";
import actualidad3 from "./imagenes/actualidad3.png";

export default function TrabajosRealizados() {
  return (
    <section>
      {/* Título de la sección */}
      <h2 className="text-3xl font-semibold mb-6 text-center">
        Trabajos realizados
      </h2>

      {/* Carrusel principal */}
      <div className="mx-auto max-w-3xl h-64 sm:h-72 md:h-80 mb-12">
        <Carousel pauseOnHover>
          <img
            src={realizado1}
            alt="Trabajo realizado 1"
            className="h-full w-full object-cover"
          />
          <img
            src={realizado2}
            alt="Trabajo realizado 2"
            className="h-full w-full object-cover"
          />
          <img
            src={realizado3}
            alt="Trabajo realizado 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Subtítulo */}
      <h3 className="text-2xl font-semibold mb-6 text-center">
        En la actualidad
      </h3>

      {/* Carrusel actual */}
      <div className="mx-auto max-w-3xl h-64 sm:h-72 md:h-80">
        <Carousel pauseOnHover>
          <img
            src={actualidad1}
            alt="Trabajo actual 1"
            className="h-full w-full object-cover"
          />
          <img
            src={actualidad2}
            alt="Trabajo actual 2"
            className="h-full w-full object-cover"
          />
          <img
            src={actualidad3}
            alt="Trabajo actual 3"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>
    </section>
  );
}

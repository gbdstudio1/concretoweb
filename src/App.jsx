import Header from "./Header.jsx";
import HeroImage from "./HeroImage.jsx";
import AcordeonInfo from "./AcordeonInfo.jsx";
import TarjetasServicios from "./TarjetasServicios.jsx";
import TrabajosRealizados from "./TrabajosRealizados.jsx";
import Contactos from "./Contactos.jsx";
import Separator from "./Separator.jsx";
import Footer from "./Footer.jsx";
import ContactBar from "./ContactBar.jsx";

function App() {
  return (
    <div className="pb-20">
      <Header />

      {/* Inicio */}
      <div id="inicio">
        <HeroImage />
      </div>

      <Separator />

      {/* Nosotros */}
      <div id="nosotros">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Nosotros
        </h2>
        <AcordeonInfo />
      </div>

      <Separator />

      {/* Servicios */}
      <div id="servicios">
        <h2 className="text-3xl font-semibold mb-6 text-center">
          Servicios especializados
        </h2>
        <TarjetasServicios />
      </div>

      <Separator />

      {/* Trabajos */}
      <div id="trabajos">
        <TrabajosRealizados />
      </div>

      <Separator />

      {/* Contacto */}
      <div id="contacto">
        <Contactos />
      </div>

      <Footer />
      <ContactBar />
    </div>
  );
}

export default App;

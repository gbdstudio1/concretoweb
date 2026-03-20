import logo from "./imagenes/logo.png";

export default function HeroImage() {
  return (
    <div className="w-full bg-black flex justify-center">
      <img
        src={logo}
        alt="GBD Limpieza Total"
        className="w-full max-w-5xl h-auto block px-6 py-6"
      />
    </div>
  );
}
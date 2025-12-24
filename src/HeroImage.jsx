import concreto1 from "./imagenes/concreto1.jpg";

export default function HeroImage() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-80 2xl:h-96 w-full overflow-hidden">
      
      {/* Imagen base */}
      <img
        src={concreto1}
        alt="Concreto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Franjas que revelan */}
<div className="absolute inset-0 flex flex-col">
  <span className="flex-1 bg-gray-900 animate-reveal" />
  <span className="flex-1 bg-gray-800 animate-reveal delay-[1200ms]" />
  <span className="flex-1 bg-gray-800 animate-reveal delay-[2400ms]" />
</div>

</div>
  );
}

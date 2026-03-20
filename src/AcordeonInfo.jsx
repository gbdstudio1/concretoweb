import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function AcordeonInfo() {
  return (
    <section className="bg-gray-800 text-white rounded p-4">
      <Accordion collapseAll>
        <AccordionPanel>
          <AccordionTitle>Acerca del servicio</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Brindamos limpieza profunda de tapizados e interiores de autos:
              asientos, alfombras, techo, paneles y baúl. Trabajamos con aspirado
              y limpieza especializada para remover manchas, olores y suciedad
              acumulada, cuidando las telas y los materiales.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Cómo pedir el servicio</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Escribinos por WhatsApp y mandanos 2 o 3 fotos del interior y de la
              mancha/suciedad. Te pasamos un presupuesto y coordinamos un turno.
              El día del servicio vamos con el equipo y te indicamos el tiempo
              estimado de trabajo y de secado.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Vamos a domicilio</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Sí, trabajamos a domicilio. Nos acercamos a tu casa o cochera con
              el equipo completo para realizar la limpieza en el lugar. Solo
              necesitamos acceso al vehículo y una toma de corriente cercana.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Contamos con taller</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Sí. Contamos con taller propio en CABA, barrio de Floresta. En el
              taller podemos hacer trabajos más profundos ya que contamos con
              herramientas y, cuando corresponde, podemos desarmar asientos para
              acceder a zonas difíciles del vehículo.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </section>
  );
}
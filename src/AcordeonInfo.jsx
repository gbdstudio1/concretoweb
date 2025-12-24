import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from "flowbite-react";

export default function AcordeonInfo() {
  return (
    <section className="bg-gray-800 text-white rounded p-4">
      <Accordion>
        <AccordionPanel>
          <AccordionTitle>Acerca de Concreto</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Concreto es un equipo de trabajo especializado en obras, mantenimiento y refacciones para hogares y
              negocios. Nos enfocamos en resolver proyectos de manera integral, coordinando cada etapa para que tengas
              un único contacto y una solución completa.
            </p>
          </AccordionContent>
        </AccordionPanel>

        <AccordionPanel>
          <AccordionTitle>Qué hacemos</AccordionTitle>
          <AccordionContent>
            <p className="text-gray-200">
              Nos ocupamos de entrar en tu hogar para entenderlo de verdad. Observamos cómo está hoy, escuchamos tus gustos, analizamos tus espacios, tus muebles y tus objetivos. Con toda esa información, armamos una propuesta pensada para vos, donde cada detalle combine y tenga sentido.
Nuestro objetivo es que sientas que tu casa vuelve a nacer, con otra energía y una nueva vida, siempre adaptándonos a cada situación económica y, cuando es posible, reutilizando y aprovechando lo que ya tenés.
            </p>
          </AccordionContent>
        </AccordionPanel>
      </Accordion>
    </section>
  );
}

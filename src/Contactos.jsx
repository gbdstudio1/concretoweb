import { Card, Button, Blockquote } from "flowbite-react";

export default function Contactos() {
  return (
    <section className="w-full flex flex-col items-center gap-12">
      {/* ===== Título ===== */}
      <h2 className="text-3xl font-semibold text-center text-gray-900">
        Contactos
      </h2>

      {/* ===== Intro / Párrafo ===== */}
      <figure className="mx-auto max-w-screen-md text-center">
        <svg
          className="mx-auto mb-4 h-10 w-10 text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 14"
        >
          <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
        </svg>

        <Blockquote>
          <p className="text-xl font-medium text-gray-900">
            No dudes en consultarnos. Podés escribirnos por correo electrónico o
            por WhatsApp para despejar dudas y coordinar una visita. Una vez
            evaluado el trabajo, los presupuestos se entregan dentro de las{" "}
            <strong>24 a 48 horas</strong>.
            <span className="block mt-2 text-base text-gray-600">
              Debajo encontrarás las distintas formas de comunicación para
              contactarnos.
            </span>
          </p>
        </Blockquote>
      </figure>

      {/* ===== Bloque de contacto ===== */}
      <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Gabriel</h3>
          <p className="mb-4 text-gray-600">Contacto por WhatsApp</p>
          <Button
            color="dark"
            as="a"
            href="https://wa.me/5491131889692"
            target="_blank"
          >
            11 3188 9692
          </Button>
        </Card>

        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">Alejandro</h3>
          <p className="mb-4 text-gray-600">Contacto por WhatsApp</p>
          <Button
            color="dark"
            as="a"
            href="https://wa.me/5491140979031"
            target="_blank"
          >
            11 4097 9031
          </Button>
        </Card>

        <Card className="text-center">
          <h3 className="text-lg font-semibold text-gray-900">
            Correo electrónico
          </h3>
          <p className="mb-4 text-gray-600">
            Respondemos consultas por mail
          </p>
          <Button
            color="dark"
            as="a"
            href="mailto:concreto.info.ar@gmail.com"
          >
            concreto.info.ar@gmail.com
          </Button>
        </Card>
      </div>

      {/* ===== Horarios ===== */}
      <p className="text-center text-sm text-gray-500">
        Horarios de atención: lunes a viernes de 9 a 19 hs
      </p>
    </section>
  );
}

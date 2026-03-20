
import { Card } from "flowbite-react";

import tapizado from "./imagenes/tapizado.png";
import automotor from "./imagenes/automotor.png";
import alfombras from "./imagenes/alfombras.png";

export default function TarjetasServicios() {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Tapizado
        </h5>
        <p className="font-normal text-gray-900 dark:text-gray-400">
          Limpieza profunda de sillones, sillas y colchones: removemos manchas,
          olores y suciedad acumulada, cuidando telas y materiales.
        </p>
        <img
          src={tapizado}
          alt="Limpieza de tapizados"
          className="mt-4 w-full h-auto"
        />
      </Card>

      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Automotor
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Limpieza de interior de autos: butacas, alfombras, techo, paneles y
          baúl. Ideal para mantener el auto impecable y sin olores.
        </p>
        <img
          src={automotor}
          alt="Limpieza interior automotor"
          className="mt-4 w-full h-auto"
        />
      </Card>

      <Card className="max-w-sm">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Alfombras
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Limpieza profunda de alfombras y carpetas: aspirado y tratamiento
          especializado para manchas y suciedad incrustada.
        </p>
        <img
          src={alfombras}
          alt="Limpieza de alfombras"
          className="mt-4 w-full h-auto"
        />
      </Card>
    </section>
  );
}


















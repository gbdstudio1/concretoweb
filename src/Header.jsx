import {
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";

export default function Header() {
  return (
    <Navbar fluid rounded className="bg-gray-800">
      <NavbarBrand href="#inicio">
        <span className="self-center whitespace-nowrap text-xl font-semibold text-white">
          Servicio de obras integrales
        </span>
      </NavbarBrand>

      <NavbarToggle className="text-white" />

      <NavbarCollapse>
        <NavbarLink href="#inicio" className="text-white hover:text-gray-400">
          Inicio
        </NavbarLink>

        <NavbarLink href="#nosotros" className="text-white hover:text-gray-400">
          Nosotros
        </NavbarLink>

        <NavbarLink href="#servicios" className="text-white hover:text-gray-400">
          Servicios
        </NavbarLink>

        <NavbarLink href="#trabajos" className="text-white hover:text-gray-400">
          Trabajos
        </NavbarLink>

        <NavbarLink href="#contacto" className="text-white hover:text-gray-400">
          Contacto
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  );
}

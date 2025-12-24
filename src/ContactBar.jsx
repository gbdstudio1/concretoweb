export default function ContactBar() {
  return (
    <div className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-700 bg-gray-900">
      <div className="mx-auto flex max-w-6xl items-center justify-center gap-3 px-4 py-2 text-xs text-white md:justify-between">
        
        {/* Texto (solo desktop) */}
        <span className="hidden md:block text-gray-400">
          Presupuestos y visitas
        </span>

        {/* Botones WhatsApp */}
        <div className="flex gap-2">
          <a
            href="https://wa.me/5491131889692"
            target="_blank"
            className="flex items-center gap-1 rounded bg-green-600 px-3 py-1.5 font-medium text-white transition hover:bg-green-700"
          >
            📱 Gabriel
          </a>

          <a
            href="https://wa.me/5491140979031"
            target="_blank"
            className="flex items-center gap-1 rounded bg-green-600 px-3 py-1.5 font-medium text-white transition hover:bg-green-700"
          >
            📱 Alejandro
          </a>
        </div>
      </div>
    </div>
  );
}

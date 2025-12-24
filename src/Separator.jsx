export default function Separator() {
  return (
    <div className="relative my-12 w-full">
      {/* Línea base más visible */}
      <div className="absolute left-0 top-1/2 w-full border-t-2 border-gray-400" />

      {/* Módulos centrales */}
      <div className="relative flex items-center justify-center">
        <div className="flex items-center gap-3 bg-white px-4">
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500 opacity-60" />
          <span className="h-2 w-2 rounded-full bg-gray-500 opacity-70" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500 opacity-80" />
          <span className="h-3 w-3 rotate-45 bg-gray-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-gray-500 opacity-80" />
          <span className="h-2 w-2 rounded-full bg-gray-500 opacity-70" />
          <span className="h-1.5 w-1.5 rounded-full bg-gray-500 opacity-60" />
        </div>
      </div>
    </div>
  );
}

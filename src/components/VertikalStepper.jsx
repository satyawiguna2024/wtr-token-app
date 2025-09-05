export default function Stepper({icon, isLast, line, children}) {
  return (
      <div className="grid md:grid-cols-[3rem_1fr] gap-6 relative">
        <div className="relative hidden md:flex flex-col items-center">
          <div className="z-10 flex items-center justify-center w-10 h-10 rounded-full border-2 border-gray-500 bg-gray-800 text-white">
            {icon}
          </div>
          {!isLast && (
            <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[2px] bg-gray-600 h-full" />
          )}
        </div>
        {line && (
          <hr className="md:hidden opacity-20" />
        )}

        {/* Kanan */}
        <div className="pb-10">{children}</div>
      </div>
  );
}

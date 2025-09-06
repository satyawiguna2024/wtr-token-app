export default function NotFound() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="text-center px-6">
        {/* Angka 404 besar */}
        <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">
          404
        </h1>

        {/* Subjudul */}
        <h2 className="mt-4 text-2xl md:text-3xl font-semibold">
          Oops! Page Not Found
        </h2>

        {/* Deskripsi */}
        <p className="mt-3 text-gray-400 max-w-md mx-auto text-sm md:text-base">
          The page you are looking for might have been removed, had its name changed,
          or is temporarily unavailable.
        </p>

        {/* Tombol Aksi */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition duration-300"
          >
            Go Back Home
          </a>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 rounded-lg font-medium transition duration-300"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

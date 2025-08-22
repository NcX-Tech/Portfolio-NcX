export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl mb-4">Página não encontrada</h2>
        <p className="text-gray-400 mb-8">
          A página que você está procurando não existe.
        </p>
        <a
          href="/"
          className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors"
        >
          Voltar ao início
        </a>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function NotFound() {
  return (
    <html lang="pt-br">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-black text-white">
          <div className="text-center">
            <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
            <h2 className="text-2xl mb-4">Página não encontrada</h2>
            <p className="text-gray-400 mb-8">
              A página que você está procurando não existe.
            </p>
            <Link
              href="/"
              className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors inline-block"
            >
              Voltar ao início
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

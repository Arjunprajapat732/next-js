import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600">
      <div className="text-center space-y-8 p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl">
        <h1 className="text-5xl font-bold text-white mb-4">
          Welcome to Our Platform
        </h1>
        <p className="text-xl text-white/90 mb-8">
          Your one-stop solution for all your needs
        </p>
        <div className="space-x-4">
          <Link 
            href="/login" 
            className="px-8 py-3 bg-white text-blue-600 rounded-full font-semibold hover:bg-blue-50 transition-colors duration-300"
          >
            Login
          </Link>
          <Link 
            href="/register" 
            className="px-8 py-3 bg-blue-600 text-white rounded-full font-semibold hover:bg-blue-700 transition-colors duration-300"
          >
            Register
          </Link>
        </div>
      </div>
    </main>
  );
}

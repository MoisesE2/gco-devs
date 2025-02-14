import { FiMenu } from 'react-icons/fi'
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">GCO</div>
        
        <div className="hidden md:flex space-x-8">
          <Link 
            to="banner" 
            className="cursor-pointer hover:text-blue-600"
          >
            Home
          </Link>
          {/* Outros links */}
        </div>

        <button className="md:hidden">
          <FiMenu className="text-2xl" />
        </button>
      </nav>
    </header>
  )
}
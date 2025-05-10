
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 md:px-8 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 rounded-full bg-indigo-500"></div>
          <span className="font-bold text-lg text-gray-900">TextProcessor</span>
        </Link>
        <div className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Home
          </Link>
          <Link to="/form" className="text-gray-600 hover:text-indigo-600 transition-colors">
            Process Text
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

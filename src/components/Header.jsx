import { Link, useLocation } from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <nav className="bg-gray-900 text-white py-4 px-6 flex justify-between items-center shadow-lg fixed top-0 w-full z-50">
            <h1 className="text-xl font-bold tracking-wide">My Portfolio</h1>
            <div className="space-x-6">
                <Link to="/" className={`hover:text-blue-400 transition ${location.pathname === "/" ? "text-blue-400" : "text-gray-300"
                }`}>
                Home
                </Link>
                <Link
                to="/skills"
                className={`hover:text-blue-400 transition ${
                    location.pathname === "/skills" ? "text-blue-400" : "text-gray-300"
                }`}
                >
                Skills
                </Link>
            </div>
        </nav>
    );
};

export default Header;

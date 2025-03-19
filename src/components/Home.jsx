import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="h-[83vh] flex flex-col md:flex-row items-center justify-center bg-gray-900 text-white px-6">
        <div className="w-40 h-40 md:w-56 md:h-56 bg-gray-700 rounded-full overflow-hidden shadow-lg mb-6 md:mb-0 md:mr-8">
            <img src="../src/assets/profile.jpg" alt="Profile" className="w-full h-full object-cover" />
        </div>


        <div className="text-center md:text-left">
            <h1 className="text-4xl font-bold font-mono">Iqbal Dwi Wijanarko</h1>
            <p className="text-lg mt-2">Mahasiswa Teknik Informatika</p>
            <p className="text-lg mt-2">Jalan Nusantara</p>
            <Link to="/skills">
            <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-full text-white font-semibold">
                Lihat Skills
            </button>
            </Link>
        </div>
        </div>
    );
};

export default Home;

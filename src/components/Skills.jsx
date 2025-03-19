import { Link } from "react-router-dom";

const skills = [
    { name: "JavaScript", color: "shadow-yellow-400", icon: "/icons/javascript.png" },
    { name: "React.js", color: "shadow-blue-500", icon: "/icons/react.svg" },
    { name: "TailwindCSS", color: "shadow-teal-400", icon: "/icons/tailwind.png" },
    { name: "Unity 2D", color: "shadow-red-500", icon: "/icons/unity.png" },
    { name: "Python", color: "shadow-green-500", icon: "/icons/python.png" },
    { name: "Java", color: "shadow-red-500", icon: "/icons/java.png" },
    { name: "C#", color: "shadow-purple-500", icon: "/icons/c#.png" },
    ];

const Skills = () => {
    return (
        <div className="h-[83vh] flex flex-col items-center justify-center bg-gray-800 text-white">
        <h1 className="text-3xl font-bold mb-6">My Skills</h1>
        <div className="grid grid-cols-2 gap-6">
            {skills.map((skill, index) => (
            <div
                key={index}
                className={`flex items-center space-x-3 px-6 py-3 text-lg font-semibold bg-gray-700 rounded-lg transition transform hover:scale-105 hover:${skill.color} hover:shadow-lg`}
            >
                <img src={skill.icon} alt={skill.name} className="w-8 h-8" />
                <span>{skill.name}</span>
            </div>
            ))}
        </div>
        <Link to="/">
            <button className="mt-6 px-6 py-2 bg-red-500 hover:bg-red-700 transition duration-300 rounded-full text-white font-semibold">
            Kembali
            </button>
        </Link>
        </div>
    );
};

export default Skills;

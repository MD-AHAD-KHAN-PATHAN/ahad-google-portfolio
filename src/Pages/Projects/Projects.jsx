import { GoProjectSymlink } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { SiNetlify } from "react-icons/si";

const Projects = () => {
    return (
        <div className="mt-10 lg:mx-0 mx-4">
            <div className="flex items-center gap-4 mb-8">
                <p className="text-3xl p-2 bg-gray-300 rounded-full text-gray-500"><GoProjectSymlink /></p>
                <div>
                    <p className="text-2xl font-semibold text-blue-700">Projects</p>
                    <p>Projects showcase skills, accomplishments, and practical experience, enhancing resume appeal and illustrating professional capabilities.</p>
                </div>
            </div>
            <div>
                <div className="">

                    <div>
                        <h1 className="text-2xl mb-1">QuantumEstates</h1>
                        <p>Discover a groundbreaking real estate experience through my MERN stack project. This online platform empowers users to seamlessly add or buy properties, fostering a dynamic connection between buyers and sellers.</p>
                        <div className="flex gap-8 mt-2">
                            <a href="https://github.com/MD-AHAD-KHAN-PATHAN/QuantumEstates" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><FaGithub /></span> Source Code</a>
                            <a href="https://gentle-hummingbird-b181cb.netlify.app/" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><SiNetlify /></span> Streaming</a>
                        </div>
                    </div>
                </div>

                <div className="my-8">
                    <div>
                        <h1 className="text-2xl mb-1"> JobZenithFinder</h1>
                        <p>About Introducing a game-changing job-finding platform powered by MERN stack. Easily post job opportunities or apply for positions. Streamlined, efficient, and dynamic, connecting employers with talent for a modern job-seeking experience.</p>
                        <div className="flex gap-8 mt-2">
                            <a href="https://github.com/MD-AHAD-KHAN-PATHAN/JobZenithFinder-client" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><FaGithub /></span> Source Code</a>
                            <a href="https://hilarious-kheer-c87618.netlify.app/" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><SiNetlify /></span> Streaming</a>
                        </div>
                    </div>
                </div>

                <div className="">

                    <div>
                        <h1 className="text-2xl mb-1">CarShop</h1>
                        <p>Dive into luxury on my MERN stack supercar selling platform. Sellers can add their supercars, users can dream collections by adding favorites to their personalized carts.</p>
                        <div className="flex gap-8 mt-2">
                            <a href="https://github.com/MD-AHAD-KHAN-PATHAN/brand-shop-client" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><FaGithub /></span> Source Code</a>
                            <a href="https://fantastic-cassata-eb2a45.netlify.app/" className="flex items-center gap-2 bg-slate-200 px-4 py-2 rounded-md font-bold"><span className="text-xl"><SiNetlify /></span> Streaming</a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Projects;
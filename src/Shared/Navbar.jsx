import { NavLink } from "react-router-dom";
import { RxCross2 } from "react-icons/rx";
const Navbar = () => {


    const navLink = <>

        <li ><NavLink to='/'>{({ isActive}) => (
            <span className={isActive ? "text-blue-700 pb-2 border-b-4 border-blue-700 font-bold" : ""}>About</span>
        )}</NavLink></li>
        <li><NavLink to='/skills'>{({ isActive}) => (
            <span className={isActive ? "text-blue-700 pb-2 border-b-4 border-blue-700 font-bold" : ""}>Skills</span>
        )}</NavLink></li>
        <li><NavLink to='/projects'>{({ isActive}) => (
            <span className={isActive ? "text-blue-700 pb-2 border-b-4 border-blue-700 font-bold" : ""}>Projects</span>
        )}</NavLink></li>
        <li><NavLink to='/contact'>{({ isActive}) => (
            <span className={isActive ? "text-blue-700 pb-2 border-b-4 border-blue-700 font-bold" : ""}>Contact</span>
        )}</NavLink></li>

    </>



    return (
        <>
            <div className="">
                <div>
                    <div className='flex justify-between items-center px-6 py-3 border rounded-full shadow-lg lg:w-2/4'>
                        <h1 className="">MD. AHAD KHAN PATHAN</h1>
                        <h1 className="text-2xl"><RxCross2 /></h1>
                    </div>
                </div>
                <div>
                    <ul className="flex gap-4 m-4">
                        {navLink}
                    </ul>

                </div>

            </div>

        </>
    );
};

export default Navbar;
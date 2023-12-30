import { CiSaveDown2 } from "react-icons/ci";
import { FaGithub, FaInstagramSquare, FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import elon from "../../assets/Elon_Musk.jpg";
import sam from "../../assets/Sam Altman.jpg";
// import { SiCodeforces } from "react-icons/si";

import ahad from "../../assets/ahad_khan removebg.png"
const Info = () => {
    return (
        <div className="lg:mx-0 mx-4 lg:my-0 my-10 lg:mr-10 border-2 rounded-md">
            <div className="flex items-center justify-evenly border-b-2 pb-4">
                <div>
                    <h1 className="text-3xl mb-2">Ahad Khan</h1>
                    <p>MERN Stack Developer</p>
                </div>
                <div>
                    <img className="w-28" src={ahad} alt="" />
                </div>
            </div>
            <div className="flex justify-center py-2 border-b-2">
                <a className="flex items-center gap-2 font-bold" href="https://drive.google.com/file/d/1kn3-4Yqz30phCkUbMbpzHKRWY3Uipde2/view?usp=sharing"><span className="text-2xl"><CiSaveDown2 /></span>download resume</a>
            </div>
            <div className="p-4">
                <p className="text-justify">Hi there! I'm Ahad Khan, a junior MERN stack developer. I am dedicated to approaching challenges with a
                    problem-solving mindset. I believe that every coding hurdle is an opportunity to enhance my skills and find
                    innovative solutions that contribute to the project's overall success.</p>

                <h3 className="font-bold my-4">Born : <span className="font-normal"> April 6, 2000 (age 23 years),</span><span className="text-blue-800 font-normal"> Feni, Chottogram, Bangladesh</span></h3>
                <h3 className="font-bold ">Upcoming Project Name : <span className="font-normal">Instructor</span></h3>
                <div>
                    <h1 className="font-bold text-xl my-4">Profiles</h1>
                    <div className="flex justify-evenly text-4xl">
                        <a href="https://www.linkedin.com/in/md-ahad-khan-pathan"><FaLinkedin /></a>
                        <a href="https://github.com/MD-AHAD-KHAN-PATHAN"><FaGithub /></a>
                        <a href="https://www.instagram.com/arulesbreaker"><FaInstagramSquare /></a>
                        <a href="https://twitter.com/ahad_khab"><FaTwitterSquare /></a>
                    </div>
                </div>
                <div>
                    <h1 className="font-bold text-xl my-4">People also search for</h1>
                    <div className="flex gap-8">
                        <div>
                            <img className="w-20 mb-2" src={elon} alt="" />
                            <a href="https://www.google.com/search?q=elon+musk&rlz=1C1CHBD_enBD990BD990&oq=e&gs_lcrp=EgZjaHJvbWUqBggAEEUYOzIGCAAQRRg7Mg0IARAAGIMBGLEDGIAEMgYIAhBFGDkyBggDEEUYOzIQCAQQABiDARixAxiABBiKBTIGCAUQABgDMhAIBhAAGIMBGLEDGIAEGIoFMg0IBxAAGIMBGLEDGIAEMg0ICBAuGIMBGLEDGIAEMg0ICRAAGIMBGLEDGIAE0gEJMjk4M2owajE1qAIAsAIA&sourceid=chrome&ie=UTF-8">Elon Musk</a>
                        </div>
                        <div>
                            <img className="w-28 mb-1" src={sam} alt="" />
                            <a href="https://www.google.com/search?q=Sam+Altman&sca_esv=589872414&rlz=1C1CHBD_enBD990BD990&sxsrf=AM9HkKljaU54l-2CzPfigyPWkBzv58r43Q%3A1702324250432&ei=Gmh3ZduIGqeVseMPjMSl2AM&ved=0ahUKEwjb_fSBlIiDAxWnSmwGHQxiCTsQ4dUDCBA&uact=5&oq=Sam+Altman&gs_lp=Egxnd3Mtd2l6LXNlcnAiClNhbSBBbHRtYW4yChAuGIAEGIoFGCcyChAAGIAEGIoFGEMyChAAGIAEGIoFGEMyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMhcQLhiABBiKBRiXBRjcBBjeBBjfBNgBAkiYDlDECljECnABeAGQAQCYAb4BoAG-AaoBAzAuMbgBA8gBAPgBAfgBAqgCEcICBxAuGOoCGCfCAgcQIxjqAhgnwgIWEC4YgAQYigUYQxjIAxjqAhi0AtgBAcICHBAuGIAEGIoFGEMYxwEY0QMYyAMY6gIYtALYAQHiAwQYACBBiAYBugYGCAEQARgIugYGCAIQARgU&sclient=gws-wiz-serp">Sam Altman</a>
                        </div>
                    </div>
                    {/* <div className="flex justify-evenly items-center text-4xl">
                        <a href=""><FaHackerrank /><span className="text-base">Hackerrank</span></a>
                        <a href=""><SiCodeforces /><span className="text-base">CodeForces</span></a>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Info;
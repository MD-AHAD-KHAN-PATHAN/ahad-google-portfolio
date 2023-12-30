import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Info from "../Shared/Info/Info";

const Layout = () => {
    return (
        <>
            <div className="mt-10">
                <div className="lg:mx-16 md:w-5/6 md:mx-auto mx-4">
                    <Navbar></Navbar>
                </div>
                <div className="lg:flex flex-row-reverse gap-10">
                    <div className="lg:w-1/3 md:w-5/6 mx-auto">
                        <Info></Info>
                    </div>
                    <div className="lg:w-2/3 lg:ml-20 md:w-5/6 mx-auto">
                        <Outlet></Outlet>
                    </div>

                </div>
                <div>
                    <footer className="footer footer-center p-4 text-base-content">
                        <aside>
                            <p>Copyright © 2023 - All right reserved by md. ahad khan pathan</p>
                        </aside>
                    </footer>
                </div>
            </div>

        </>
    );
};

export default Layout;
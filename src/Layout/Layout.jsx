import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Info from "../Shared/Info/Info";

const Layout = () => {
    return (
        <>
            <div className="mt-10">
                <div className="lg:mx-16 mx-4">
                    <Navbar></Navbar>
                </div>
                <div className="lg:grid grid-cols-3 gap-10">
                    <div className="col-span-2 lg:ml-20">
                        <Outlet></Outlet>
                    </div>
                    <div className="col-span-1">
                        <Info></Info>
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
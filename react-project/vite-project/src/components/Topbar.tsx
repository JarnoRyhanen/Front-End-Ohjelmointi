import { Link, Outlet } from "react-router-dom";

const Topbar = () => {
    return (
        <>

            <div className="w-full p-10 bg-slate-900 flex flex-col">
                <nav className="flex items-center justify-evenly text-amber-50 font-bold pb-6">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
               
                <h1 className="text-center font-extrabold text-sky-50">Simple todolist</h1>
            </div>
        </>
    )
}

export default Topbar;
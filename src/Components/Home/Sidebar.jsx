import { useState, useEffect } from "react";
import { FaHome, FaSearch, FaInstagram } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdPersonAdd, IoMdClose, IoMdLogOut, IoMdCreate } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = () => {
    const [Toggle, setToggle] = useState(true);
    const navigate = useNavigate(); 

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setToggle(false);
            } else {
                setToggle(true);
            }
        };

        handleResize();

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const openToggle = () => {
        setToggle(true);
    };

    const closeToggle = () => {
        setToggle(false);
    };

    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("token"); // Clear the JWT token
        navigate("/login"); // Redirect to the login page
    };

    return (
        <div
            className={`transition-all duration-300 ${
                Toggle
                    ? "w-full sm:w-[40%] md:w-[25%] lg:w-[15%]"
                    : "w-[20%] sm:w-[12%] md:w-[9%] lg:w-[6%]"
            } h-screen bg-white border-r-2 flex justify-center sticky top-0`}
        >
            {Toggle ? (
                <div className="p-4 relative w-full">
                    <div className="flex justify-between items-center cursor-pointer">
                        <h2 className="text-2xl font-bold">InstaDev</h2>
                        <span onClick={closeToggle} className="cursor-pointer absolute top-7 right-6">
                            <IoMdClose size={28} />
                        </span>
                    </div>
                    <div className="mt-11 pt-6 space-y-1">
                        <Link to="/home" className="flex items-center gap-2 cursor-pointer">
                            <FaHome size={22} />
                            <p className="pt-3">Feed</p>
                        </Link>
                        <Link to="/explore" className="flex items-center gap-2 cursor-pointer">
                            <FaSearch size={28} />
                            <p className="pt-3">Explore</p>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 cursor-pointer">
                            <IoMdPersonAdd size={28} />
                            <p className="pt-3">Add Friends</p>
                        </Link>
                        <Link to="/createpost" className="flex items-center gap-2 cursor-pointer">
                            <IoMdCreate size={20} />
                            <p className="pt-3">Create Post</p>
                        </Link>
                        <Link to="/" className="flex items-center gap-2 cursor-pointer">
                            <CgProfile size={28} />
                            <p className="pt-3">Profile</p>
                        </Link>
                        <div onClick={handleLogout} className="flex items-center gap-2 cursor-pointer">
                            <IoMdLogOut size={28} />
                            <p className="pt-3">Log Out</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-5">
                    <div onClick={openToggle} className="cursor-pointer">
                        <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
                            <FaInstagram className="text-white w-10 h-10" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 mt-8 space-y-6 pl-3">
                        <Link to="/home" className="text-black"><FaHome size={24} /></Link>
                        <Link to="/explore" className="text-black"><FaSearch size={24} /></Link>
                        <Link to="/" className="text-black"><IoMdPersonAdd size={24} /></Link>
                        <Link to="/createpost" className="text-black"><IoMdCreate size={24} /></Link>
                        <Link to="/" className="text-black"><CgProfile size={24} /></Link>
                        <div onClick={handleLogout} className="cursor-pointer">
                            <IoMdLogOut size={28} />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

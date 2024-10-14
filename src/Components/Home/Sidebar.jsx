import { useState } from "react";
import { FaHome } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoMdPersonAdd } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

const Sidebar = () => {
    const [Toggle, setToggle] = useState(true);
    const openToggle = () => {
        setToggle(true);
    };

    const closeToggle = () => {
        setToggle(false);
    };

    return (
        <div className={`transition-all duration-300 ${Toggle ? "w-full sm:w-[50%] md:w-[30%] lg:w-[18%]" : "w-[20%] sm:w-[12%] md:w-[9%] lg:w-[6%]"} h-screen bg-white border-2 flex justify-center`}>
            {Toggle ? ( 
                <div className="p-5 relative w-full">
                    <div className="flex justify-between items-center">
                        <h2 className="text-2xl font-bold">InstaDev</h2>
                        <span onClick={closeToggle} className="cursor-pointer absolute top-7 right-6 ">
                            <IoMdClose size={28} />
                        </span>
                    </div>
                    <div className="mt-8 space-y-3">
                        <div className="flex items-center gap-4">
                            <FaHome size={28}/>
                            <p className="pt-3">Home</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <FaSearch size={28} />
                            <p className="pt-3">Search</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <IoMdPersonAdd  size={28}/>
                            <p className="pt-3">Add More</p>
                        </div>
                        <div className="flex items-center gap-4">
                            <CgProfile size={28}/>
                            <p className="pt-3">Profile</p>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="p-5  ">
                    <div onClick={openToggle} className="cursor-pointer">
                        <div className="bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 p-1 rounded-full">
                            <FaInstagram className="text-white w-10 h-10" />
                        </div>
                    </div>
                    <div className="mt-8 space-y-6 pl-3">
                        <FaHome size={24} />
                        <FaSearch size={24} />
                        <IoMdPersonAdd size={24} />
                        <CgProfile size={24} />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;

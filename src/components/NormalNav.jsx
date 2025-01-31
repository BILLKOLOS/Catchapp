import { NavLink } from "react-router-dom";

const NormalNav = () => {
    return (
        <div className="fixed top-0 z-50 flex flex-col bg-white w-full mb-24">
            {/* Top Section */}
            <div className="flex justify-between items-center px-8 py-1">
                {/* Logo and Search */}
                <div className="flex justify-start items-center gap-12">
                    <NavLink to="/">
                        <h1 className="font-[Pacifico] text-2xl text-[#000000] cursor-pointer">Catchapp</h1>
                    </NavLink>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 mt-2 text-[#000000] cursor-pointer"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z"
                        />
                    </svg>
                </div>
                {/* Account Section */}
                <div className="flex items-center gap-4">
                    <img
                        src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="profile"
                        className="object-cover rounded-full w-14 h-14"
                    />
                    <p className="text-[#000000] font-bold">Williams</p>
                </div>
            </div>
        </div>
    );
};

export default NormalNav;

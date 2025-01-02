import { NavLink } from "react-router-dom";

const Navbar = () => {
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

                {/* Navigation Links */}
                <div className="flex items-center gap-12">
                    <NavLink
                        to="/explore/trending"
                        className={({ isActive }) =>
                            `rounded-[30px] py-2 px-6 font-semibold cursor-pointer transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                    >
                        <h5>Trending</h5>
                    </NavLink>
                    <NavLink
                        to="/explore/gives"
                        className={({ isActive }) =>
                            `flex gap-4 py-2 px-6 rounded-[30px] cursor-pointer font-semibold transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 11.25v8.25a1.5 1.5 0 0 1-1.5 1.5H5.25a1.5 1.5 0 0 1-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 1 0 9.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1 1 14.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
                            />
                        </svg>
                        <h5>Gives</h5>
                    </NavLink>
                    <NavLink
                        to="/explore/feeds"
                        className={({ isActive }) =>
                            `flex gap-4 py-2 px-6 rounded-[30px] cursor-pointer font-semibold transition-colors duration-300 ${
                                isActive ? "bg-[#000000] text-white" : "bg-[#D9D9D9] text-[#000000]"
                            }`
                        }
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                            />
                        </svg>
                        <h5>Feeds</h5>
                    </NavLink>
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

export default Navbar;

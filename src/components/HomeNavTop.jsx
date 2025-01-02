import { useState } from "react";

const TopNav = ({ activeFilter, setActiveFilter }) => {
    const filters = ["Today", "Tomorrow", "Next Month", "This Year"];

    return (
        <div className="fixed top-0 z-50 flex flex-col bg-white w-full mb-12">
            {/* Top Section */}
            <div className="flex justify-between items-center px-8 py-1">
                <div className="flex justify-start items-center gap-8">
                    {/* Logo Section */}
                    <h1 className="font-[Pacifico] text-2xl text-[#000000]">Catchapp</h1>

                    {/* Search Icon */}
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

                <div className="flex justify-end gap-3 items-center">
                    {/* Filters Section */}
                    <div className="flex gap-4 justify-start px-12 py-2 overflow-x-auto">
                        {filters.map((filter) => (
                            <button
                                key={filter}
                                className={`px-4 py-1 rounded-[30px] cursor-pointer transition-all font-semibold text-[16px] relative ${
                                    activeFilter === filter
                                        ? "bg-[#272222] text-white"
                                        : "bg-[#D9D9D9] text-[#272222]"
                                }`}
                                onClick={() => setActiveFilter(filter)}
                            >
                                {filter}
                                {/* Line below the active filter */}
                                {activeFilter === filter && (
                                    <span className="absolute bottom-[-8px] left-0 right-0 h-[4px] mt-2 w-full bg-[#B94343] rounded-lg"></span>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Notification & Email Icons */}
                    <div className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
                            />
                        </svg>
                    </div>
                    <div className="bg-[#D9D9D9] text-[#000000] p-2 rounded-full cursor-pointer">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="size-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TopNav;

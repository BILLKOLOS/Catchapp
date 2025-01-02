const LiveEvent = () => {
    return (
        <div className="w-[515px] bg-[#D9D9D9] rounded-[30px] mb-24 py-3 px-4">
            <div className="px-24">
                <h4 className="text-center font-semibold bg-[#272222] text-white p-2 rounded-[30px] cursor-pointer text-sm">Happening Now</h4>
            </div>
            <div className="mt-8 flex flex-col gap-6">
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center gap-4">
                        <div className="border-[4px] border-[#000000] rounded-full p-[2px] cursor-pointer">
                            <img src="https://images.pexels.com/photos/29846889/pexels-photo-29846889/free-photo-of-portrait-of-woman-by-lake-in-kaduna-nigeria.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" /> 
                        </div>
                        <p className="text-md font-bold text-[#272222]">Susan</p>
                    </div>
                    <div className="px-4">
                        <p className="border-[2px]  text-[#272222] border-[#000000] rounded-full p-[2px] cursor-pointer text-center w-[134px] hover:bg-[#272222] hover:text-white">live</p>
                    </div>
                </div>
                <div className="flex justify-between items-center w-full">
                    <div className="flex justify-start items-center gap-4">
                        <div className="border-[4px] border-[#000000] rounded-full p-[2px] cursor-pointer">
                            <img src="https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" /> 
                        </div>
                        <p className="text-md font-bold text-[#272222]">Betty</p>
                    </div>
                    <div className="px-4">
                        <p className="border-[2px] text-[#272222] border-[#000000] rounded-full p-[2px] cursor-pointer text-center w-[134px] hover:bg-[#272222] hover:text-white">live</p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default LiveEvent;
const MyEvents = () => {
    return (
        <div>
            <h1 className="font-bold text-[#272222] text-lg">My Events</h1>
            <div className="w-full grid grid-cols-4  gap-8">
                <div className="bg-[#272222] rounded-[30px] py-3 px-4 w-[227px] flex flex-col gap-10">
                    <div className="flex justfiy-between items-center gap-4">
                        <div className="w-full">
                            <img src="https://images.pexels.com/photos/29783131/pexels-photo-29783131/free-photo-of-silhouette-of-man-in-profile-wearing-hat-outdoors.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" />
                        </div>
                        <div>
                            <p className="text-white font-semibold">James</p>
                        </div>
                    </div>
                    <h3 className="text-center text-white font-[Pacifico] text-2xl">Mbuzi Choma</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white">123/200</p>
                        <div className="border-[1px] border-gray-100 px-4 p-1 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer">
                            <p className="text-white">Request</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#272222] rounded-[30px] py-3 px-4 w-[227px] flex flex-col gap-10">
                    <div className="flex justfiy-between items-center gap-4">
                        <div className="w-full">
                            <img src="https://images.pexels.com/photos/29886296/pexels-photo-29886296/free-photo-of-dynamic-portrait-of-woman-in-black-dress.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" />
                        </div>
                        <div>
                            <p className="text-white font-semibold">Alice</p>
                        </div>
                    </div>
                    <h3 className="text-center text-white font-[Pacifico] text-2xl">Graduation</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white">123/200</p>
                        <div className="border-[1px] border-gray-100 px-4 p-1 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer">
                            <p className="text-white">Request</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#272222] rounded-[30px] py-3 px-4 w-[227px] flex flex-col gap-10">
                    <div className="flex justfiy-between items-center gap-4">
                        <div className="w-full">
                            <img src="https://images.pexels.com/photos/29876569/pexels-photo-29876569/free-photo-of-elegant-black-and-white-portrait-of-a-man.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" />
                        </div>
                        <div>
                            <p className="text-white font-semibold">Andrew</p>
                        </div>
                    </div>
                    <h3 className="text-center text-white font-[Pacifico] text-2xl">Wedding</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white">200/300</p>
                        <div className="border-[1px] border-gray-100 px-4 p-1 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer">
                            <p className="text-white">Request</p>
                        </div>
                    </div>
                </div>
                <div className="bg-[#272222] rounded-[30px] py-3 px-4 w-[227px] flex flex-col gap-10">
                    <div className="flex justfiy-between items-center gap-4">
                        <div className="w-full">
                            <img src="https://images.pexels.com/photos/29976870/pexels-photo-29976870/free-photo-of-contemplative-young-adult-in-urban-setting.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile" className="object-cover rounded-full w-16 h-16" />
                        </div>
                        <div>
                            <p className="text-white font-semibold">Williams</p>
                        </div>
                    </div>
                    <h3 className="text-center text-white font-[Pacifico] text-2xl">White Party</h3>
                    <div className="flex justify-between items-center">
                        <p className="text-white">200/300</p>
                        <div className="border-[1px] border-gray-100 px-4 p-1 rounded-[30px] bg-gray-300 bg-opacity-50 cursor-pointer">
                            <p className="text-white">Request</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyEvents
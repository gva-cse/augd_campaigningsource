import { useSession, signOut } from 'next-auth/react';
import { useState } from 'react';

const UserProfile = () => {
    const { data: session } = useSession();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const handleLogout = () => {
        signOut();
        setIsDropdownOpen(false); // Close the dropdown after logout
    };

    return (
        <div className="text-black flex gap-2 cursor-pointer">
            <div onClick={toggleDropdown} className="relative">
                <div className='flex items-center gap-2'>
                    <img src={session?.user?.image} alt='user' className='w-8 h-8 rounded-full' />
                    {session?.user?.name}
                </div>


                {isDropdownOpen && (
                    <div className="absolute top-8 right-0 bg-white border rounded shadow-md p-2">
                        <p className="text-center">Are you sure you want to logout?</p>
                        <div className="flex justify-center mt-2">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded mr-2"
                                onClick={handleLogout}
                            >
                                Logout
                            </button>
                            <button
                                className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                onClick={toggleDropdown}
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default UserProfile;

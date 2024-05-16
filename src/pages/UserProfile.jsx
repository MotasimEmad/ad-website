import { useEffect } from "react";

import { CiUser } from "react-icons/ci";
const UserProfile = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);
    return (
        <section>
            <div>
                <div>
                    <div className="w-full bg-secondary h-36 sm:h-64"></div>
                </div>

                <div className="-mt-20">
                    <div className="flex flex-col items-center">
                        <img
                            className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                            src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                            alt=""
                        />

                        <div className="mt-4 text-center">
                            <h1 className="text-2xl font-bold text-gray-700 truncate">
                                John Doe
                            </h1>

                            <p className="mt-1 text-gray-500">Join on 2024-03-10</p>
                        </div>
                    </div>
                </div>

                <div className="mt-8 flex flex-col px-12 md:px-64">
                    <div className="w-full flex items-center mt-2">
                        <span className="absolute">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke-width="1.5"
                                stroke="currentColor"
                                className="w-6 h-6 mx-3 text-gray-500"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                                />
                            </svg>
                        </span>

                        <input
                            type="email"
                            placeholder="John Doe"
                            className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                    </div>

                    <div className="flex items-center gap-1 w-full mt-6">
                        <p className="bg-secondary text-white py-2.5 px-3 rounded-lg flex justify-center">
                            +971
                        </p>
                        <div className="relative flex items-center w-full">
                            <span className="absolute">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 mx-3 text-gray-500">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                </svg>

                            </span>

                            <input
                                type="text"
                                placeholder="000000000"
                                className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                            />
                        </div>
                    </div>

                    <button className="mt-2 text-white bg-secondary rounded-md px-4 py-2">Submit</button>

                </div>

            </div>
        </section>
    );
};

export default UserProfile;

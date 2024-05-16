import { useState } from "react";
import { useEffect } from "react";
import { Link } from 'react-router-dom';

import {
    IoChatbubbleEllipsesOutline,
    IoShareSocialOutline,
} from "react-icons/io5";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactTabsFunctionComponent, TabProps } from 'react-tabs';

const CompanyProfile = () => {
    const CustomTabList: ReactTabsFunctionComponent<TabProps> = ({
        children,

    }) => (
        <TabList className="flex gap-1 bg-gray-200 rounded-md p-2">
            {children}
        </TabList>
    );

    CustomTabList.tabsRole = 'TabList';
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [selectedTabIndex, setSelectedTabIndex] = useState(0);
    const handleTabSelect = (index) => {
        setSelectedTabIndex(index);
    };

     // Create an array with 10 items
     const items = Array.from({ length: 6 }, (_, index) => index + 1);

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

                            <div className="flex space-x-2 mt-4">
                                <svg
                                    className="w-5 fill-yellow-300"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg
                                    className="w-5 fill-yellow-300"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg
                                    className="w-5 fill-yellow-300"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg
                                    className="w-5 fill-yellow-300"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                                <svg
                                    className="w-5 fill-[#CED5D8]"
                                    viewBox="0 0 14 13"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
                                </svg>
                            </div>

                            <p className="mt-1 text-gray-500">Join on 2024-03-10</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-wrap justify-center gap-2 mt-8">

                    <button
                        type="button"
                        className="flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                    >
                        <IoShareSocialOutline />

                        <span class="mx-1">Share</span>
                    </button>

                    <button
                        type="button"
                        className="flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                    >
                        <IoChatbubbleEllipsesOutline />

                        <span class="mx-1">Chat</span>
                    </button>
                </div>

            </div>

            <Tabs className="mx-16 my-8" onSelect={handleTabSelect}>
            <CustomTabList>
                    <Tab className={selectedTabIndex === 0 ? 'cursor-pointer w-full bg-secondary border-none text-white rounded-md px-6 py-2' : 'cursor-pointer w-full bg-transparent text-gray-500 rounded-md px-6 py-2'}>Product Announcement</Tab>
                    <Tab className={selectedTabIndex === 1 ? 'cursor-pointer w-full bg-secondary border-none text-white rounded-md px-6 py-2' : 'cursor-pointer w-full bg-transparent text-gray-500 rounded-md px-6 py-2'}>Banner Announcement</Tab>
                </CustomTabList>

                <TabPanel>
                    {/* Content for the Product Announcement tab */}
                    <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2 xl:grid-cols-3 text-start">
                        {items.map((item) => (
                            <Link key={item} to={`/ad/${item}`}>
                                {/* Replace URL with your actual URL */}
                                <div className="relative">
                                    <img
                                        className="object-cover object-center w-full h-64 rounded-lg lg:h-80"
                                        src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt=""
                                    />

                                    <Link to="/company-profile" className="absolute bottom-0 flex p-3 bg-white rounded-tr-md items-center">
                                        <img
                                            className="object-cover object-center w-10 h-10 rounded-full"
                                            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                        />

                                        <div className="mx-4">
                                            <h1 className="text-sm text-gray-700">Lorem ipsum</h1>
                                        </div>
                                    </Link>
                                </div>

                                <h1 className="mt-6 text-xl font-semibold text-gray-800 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                </h1>

                                <div className="flex items-center justify-between mt-6">
                                    <div className="flex items-center gap-1">
                                        <img
                                            className="object-cover object-center w-6 h-6 rounded-full"
                                            src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                            alt=""
                                        />

                                        <div className="mx-4">
                                            <h1 className="text-sm text-gray-700">Lorem ipsum</h1>
                                        </div>
                                    </div>

                                    <p className="text-sm text-gray-500 font-bold">200 AED</p>
                                </div>

                                <hr className="w-32 my-6 text-blue-500" />

                                <p className="text-sm text-gray-500 ">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                    Blanditiis fugit dolorum amet dolores praesentium, alias nam?
                                    Tempore ...
                                </p>

                                <div className="flex items-center justify-between">
                                    <a
                                        href="#"
                                        className="inline-block mt-4 text-blue-500 underline hover:text-blue-400"
                                    >
                                        Read more
                                    </a>

                                    <p className="text-sm text-gray-500">02 Apr, 2024</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </TabPanel>
                <TabPanel>
                <div className="flex flex-col mt-8 md:mt-16">
                        {items.map((item) => (
                            <Link key={item} to={`/ad/${item}`}>
                                <img
          className="object-cover w-full h-96 rounded-xl my-2"
          src="https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
                            </Link>
                        ))}
                    </div>
                </TabPanel>
            </Tabs>
        </section>
    );
};

export default CompanyProfile;

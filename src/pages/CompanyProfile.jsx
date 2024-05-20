import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { formatDate } from "../components/DateUtils";
import placeholder from '../images/placeholder.jpg';

import {
    IoChatbubbleEllipsesOutline,
    IoShareSocialOutline,
} from "react-icons/io5";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactTabsFunctionComponent, TabProps } from 'react-tabs';
import { getCompanyAdsById, getCompanyBannerAdsById, getCompanyById } from "../redux/companySlice";
import AdCard from "../components/atoms/AdCard";
import BannerAdCard from "../components/atoms/BannerAdCard";

const CompanyProfile = () => {
    const { id } = useParams();
    const { isLoading, company, ads, banners, error } = useSelector((state) => state.company);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCompanyById(id));
        dispatch(getCompanyAdsById(id));
        dispatch(getCompanyBannerAdsById(id));
    }, [dispatch, id]);

    const adsList = ads.map((ad) => (
        <AdCard key={ad.id} id={ad.id} ad={ad} />
    ));

    const bannerAdsList = banners.map((ad) => (
        <BannerAdCard key={ad.id} id={ad.id} ad={ad} />
    ));

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

    return (
        <section>
            {isLoading ? <span>loading ...</span> : <div>
                <div>
                    <div>
                        <div className="w-full bg-secondary h-36 sm:h-64"></div>
                    </div>

                    <div className="-mt-20">
                        <div className="flex flex-col items-center">
                            <img
                                className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                                src={company.image ?? placeholder}
                                alt={company.company_details && company.company_details.company_name}
                            />

                            <div className="mt-4 text-center">
                                <h1 className="text-2xl font-bold text-gray-700 truncate">
                                    {company.company_details && company.company_details.company_name}
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

                                <p className="mt-1 text-gray-500">Join on {company && formatDate(company.created_at)}</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-2 mt-8">

                        <a href={company && company.share_link} target="_blank"
                            className="cursor-pointer flex items-center justify-center px-4 py-3 bg-secondary text-white text-sm font-semibold rounded"
                        >
                            <IoShareSocialOutline />

                            <span class="mx-1">Share</span>
                        </a>

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
                        {isLoading ? "Loading ..." : adsList}
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="flex flex-col mt-8 md:mt-16">
                        {isLoading ? "Loading ..." : bannerAdsList}
                        </div>
                    </TabPanel>
                </Tabs></div>}
        </section>
    );
};

export default CompanyProfile;

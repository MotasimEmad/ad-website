import { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { formatDate } from "../components/DateUtils";
import { getUserProfile, updateUserProfile } from "../redux/userSlice";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingProfilePage from "../components/atoms/LoadingProfilePage";

const UserProfile = () => {
    useEffect(() => {
        // Scroll to the top of the page when the component mounts
        window.scrollTo(0, 0);
    }, []);

    const { isLoading, user, isUpdaingLoading, updateError } = useSelector((state) => state.user);
    const [userName, setUserName] = useState(user && user.user_name);
    const [phoneNumber, setPhoneNumber] = useState(user && user.phone_number);

    const [companyName, setCompanyName] = useState(user && user.company_details.company_name);
    const [companyResponsiblePerson, setCompanyResponsiblePerson] = useState(user && user.company_details.company_responsible_person);
    const [licenseNumber, setLicenseNumber] = useState(user && user.company_details.license_number);
    const [tradeLicense, setTradeLicense] = useState(user && user.company_details.trade_license);
    const [licenseExpiryDate, setLicenseExpiryDate] = useState(user && user.company_details.license_expiry_date);
    const [emirate, setEmirate] = useState(user && user.company_details.emirate);
    const [companyActivity, setCompanyActivity] = useState(user && user.company_details.company_activity);
    const [selectedFile, setSelectedFile] = useState("");

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUserProfile());
    }, [dispatch]);

    useEffect(() => {
        if (user) {
            setUserName(user.user_name);
            setPhoneNumber(user.phone_number);
            setCompanyName(user.company_details.company_name);
            setCompanyResponsiblePerson(user.company_details.company_responsible_person);
            setLicenseNumber(user.company_details.license_number);
           
        }
    }, [user]);

    const handleSubmitClick = () => {
        dispatch(updateUserProfile({ user_name: userName, phone_number: phoneNumber }))
            .unwrap()
            .then((payload) => {
                toast.success("Data has been updated successfully", {
                    position: "top-right"
                });
            })
            .catch((error) => {
                toast.error(updateError || 'An error occurred', {
                    position: "top-right"
                });
            })
    };

    const handleSelectChange = (event) => {
        setEmirate(event.target.value);
      };

      const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
        console.log(file.type);
      };
      

    const userProfile = <div>
        <div>
            <div className="w-full bg-secondary h-36 sm:h-64"></div>
        </div>

        <div className="-mt-20">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={user && user.image}
                    alt={user && user.user_name}
                />

                <div className="mt-4 text-center">
                    <h1 className="text-2xl font-bold text-gray-700 truncate">
                        {user && user.user_name}
                    </h1>

                    <p className="mt-1 text-gray-500">Join on {formatDate(user && user.created_at)}</p>
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
                    value={userName} onChange={(e) => { setUserName(e.target.value) }}
                    type="text"
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
                        value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}
                        type="text"
                        placeholder="000000000"
                        className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                    />
                </div>
            </div>

            {isUpdaingLoading ?
                <button className="mt-2 text-white bg-secondary rounded-md px-4 py-2" disabled>Loading ...</button>
                :
                <button onClick={handleSubmitClick} className="mt-2 text-white bg-secondary rounded-md px-4 py-2">Submit</button>
            }
        </div>
    </div>;

    const companyProfile = <div>
        <div>
            <div className="w-full bg-secondary h-36 sm:h-64"></div>
        </div>

        <div className="-mt-20">
            <div className="flex flex-col items-center">
                <img
                    className="w-24 h-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32"
                    src={user && user.image}
                    alt={user && user.company_name}
                />

                <div className="mt-4 text-center">
                    <h1 className="text-2xl font-bold text-gray-700 truncate">
                        {user && user.company_name}
                    </h1>

                    <p className="mt-1 text-gray-500">Join on {formatDate(user && user.created_at)}</p>
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
                    value={companyName} onChange={(e) => { setCompanyName(e.target.value) }}
                    type="text"
                    placeholder="John Doe"
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

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
                    value={companyResponsiblePerson} onChange={(e) => { setCompanyResponsiblePerson(e.target.value) }}
                    type="text"
                    placeholder="John Doe"
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

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
                    value={licenseNumber} onChange={(e) => { setLicenseNumber(e.target.value) }}
                    type="number"
                    placeholder="John Doe"
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

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

                <select
                 value={emirate}
                 onChange={handleSelectChange}
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40">
                    <option value="Dubai" >Dubai</option>
                    <option value="Abu Dhabi">Abu Dhabi</option>
                    <option value="Sharjah">Sharjah</option>
                    <option value="Ajman">Ajman</option>
                    <option value="UMM Al-Quwain">UMM Al-Quwain</option>
                    <option value="Fujairah">Fujairah</option>
                    <option value="Ras Al-Khaimah">Ras Al-Khaimah</option>
                </select>
            </div>

            <div>
                  <input
                    onChange={handleFileChange}
                    type="file"
                    name="trade_license"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                    <a href={user && user.company_details.trade_license} target="_blank">
                    <input
                  placeholder="view trade license"
                  
                    type="text"
                  
                    className="block w-full px-4 py-2 mt-2 text-blue-500 cursor-pointer bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  ></input>
                    </a>
                  
                </div>

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
                    value={companyActivity} onChange={(e) => { setCompanyActivity(e.target.value) }}
                    type="text"
                    placeholder="John Doe"
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

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
                    value={licenseExpiryDate} onChange={(e) => { setLicenseExpiryDate(e.target.value) }}
                    type="date"
                    placeholder="John Doe"
                    className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-white border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                />
            </div>

            {isUpdaingLoading ?
                <button className="mt-2 text-white bg-secondary rounded-md px-4 py-2" disabled>Loading ...</button>
                :
                <button onClick={handleSubmitClick} className="mt-2 text-white bg-secondary rounded-md px-4 py-2">Submit</button>
            }
        </div>
    </div>;

    return (
        <section>
            {isLoading ? <LoadingProfilePage /> :
                <div>
                    <div className="text-start"><ToastContainer /></div>
                    {user && user.role === 'user' ? userProfile : companyProfile}
                </div>
            }
        </section>
    );
};

export default UserProfile;

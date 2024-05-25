import { Link, useNavigate } from 'react-router-dom';
import Logo from '../images/logo.svg';

import { useState } from "react";
import { useEffect } from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ReactTabsFunctionComponent, TabProps } from 'react-tabs';
import OTPModalComponent from '../components/OTPModal';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OTPSend } from '../redux/otpSlice';

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const { isLoadingOTP, errorOTP } = useSelector((state) => state.otp);
  const navigate = useNavigate();

  const [OTPModal, setOTPModal] = useState(false);
  const [error, setError] = useState('');

  const handleSendOTPClick = () => {
    dispatch(OTPSend({ phone_number: `+971${phoneNumber}` }))
      .unwrap()
      .then((payload) => {
        setOTPModal(prev => !prev);
        toast.success('success', {
          position: "top-right"
        });
      })
      .catch((catch_error) => {
        toast.error(errorOTP.message, {
          position: "top-right"
        });
      })
  };

  const onClose = () => {
    setOTPModal(prev => !prev);
  };

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

  const toggleOTPModal = () => {
    setOTPModal(prev => !prev);
  };

  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabSelect = (index) => {
    setSelectedTabIndex(index);
  };

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/0/g, '');
    setPhoneNumber(filteredValue);
  };

  const handleUserNameChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/\s/g, '');
    setUserName(filteredValue);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value !== confirmPassword) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    if (password !== value) {
      setError('Passwords do not match');
    } else {
      setError('');
    }
  };

  const isDisabled = !userName || !password || !confirmPassword || password !== confirmPassword;

  return (
    <div className="bg-white">
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)"
          }}
        >
          <div className="flex items-center text-start h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Hashtag My Business
              </h2>

              <p className="max-w-xl mt-3 text-gray-300">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. In
                autem ipsa, nulla laboriosam dolores, repellendus perferendis
                libero suscipit nam temporibus molestiae
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center">
                <img
                  className="w-auto h-7 sm:h-8"
                  src={Logo}
                  alt="logo"
                />
              </div>

              <p className="mt-3 text-gray-500">
                Sign up to access your account
              </p>
            </div>

            {OTPModal ? <OTPModalComponent handleSendOTPClick={handleSendOTPClick} onClose={onClose} phoneNumber={phoneNumber} userName={userName} password={password}/> :
              <Tabs className="my-8" onSelect={handleTabSelect}>
                <CustomTabList>
                  <Tab className={selectedTabIndex === 0 ? 'cursor-pointer w-full bg-secondary border-none text-white rounded-md px-6 py-2' : 'cursor-pointer w-full bg-transparent text-gray-500 rounded-md px-6 py-2'}>Individual Account</Tab>
                  <Tab className={selectedTabIndex === 1 ? 'cursor-pointer w-full bg-secondary border-none text-white rounded-md px-6 py-2' : 'cursor-pointer w-full bg-transparent text-gray-500 rounded-md px-6 py-2'}>Company Account</Tab>
                </CustomTabList>


                <TabPanel>
                  <div className="flex flex-col">
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
                          value={phoneNumber}
                          onChange={handlePhoneNumberChange}
                          type="number"
                          placeholder="000000000"
                          className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-gray-100 border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
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
                        value={userName}
                        onChange={handleUserNameChange}
                        type="text"
                        placeholder="User Name"
                        className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-gray-100 border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="w-full flex items-center mt-2">
                      <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>

                      </span>

                      <input
                        value={password}
                        onChange={handlePasswordChange}
                        type="password"
                        placeholder="Password"
                        className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-gray-100 border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    <div className="w-full flex items-center mt-2">
                      <span className="absolute">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 mx-3 text-gray-500">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                      </span>

                      <input
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                        type="password"
                        placeholder="Confirm Password"
                        className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-gray-100 border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    {error && <p className="text-start text-red-500 text-sm mt-2">{error}</p>}

                    <p class="mt-6 text-gray-500 text-start">
                      By clicking "Sign up" below, you acknowledge that you have read and
                      understood, and agree to Our <a href="#" class="text-secondary"> Term & Conditions </a>
                      and <a href="#" class="text-secondary"> Privacy Policy.</a>
                    </p>
                    <div className="mt-6 flex justify-end text-center">
                      {isLoadingOTP ?
                        <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50" disabled>
                          Loadin ...
                        </button>
                        :
                        <button disabled={isDisabled} onClick={handleSendOTPClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50">
                          Sign up
                        </button>
                      }
                    </div>

                    <p className="mt-6 text-sm text-center text-gray-400">
                      Do you have an account?{" "}
                      <Link
                        to="/login"
                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                      >
                        Sign in
                      </Link>
                      .
                    </p>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="flex flex-col">
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
                          className="block w-full py-2.5 px-3 text-gray-700 placeholder-gray-400/70 bg-gray-100 border border-gray-200 rounded-lg pl-11 pr-5 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                        />
                      </div>
                    </div>

                    <p class="mt-6 text-gray-500 text-start">
                      By clicking "Sign up" below, you acknowledge that you have read and
                      understood, and agree to Our <a href="#" class="text-secondary"> Term & Conditions</a>
                      and <a href="#" class="text-secondary"> Privacy Policy.</a>
                    </p>
                    <div className="mt-6 flex justify-end text-center">
                      <button onClick={toggleOTPModal} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50">
                        Sign up
                      </button>
                    </div>

                    <p className="mt-6 text-sm text-center text-gray-400">
                      Do you have an account?{" "}
                      <Link
                        to="/login"
                        className="text-blue-500 focus:outline-none focus:underline hover:underline"
                      >
                        Sign in
                      </Link>
                      .
                    </p>
                  </div>
                </TabPanel>
              </Tabs>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;

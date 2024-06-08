import Logo from '../images/logo.svg';

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../redux/passwordSlice";
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgetPasswordPage = () => {
  const dispatch = useDispatch();
  const [phoneNumber, setPhoneNumber] = useState("");
  const { isLoading, error } = useSelector((state) => state.password);
  const navigate = useNavigate();

  const handleSendForgetPasswordLinkClick = () => {
    dispatch(forgetPassword({phone_number: `+971${phoneNumber}`}))
    .unwrap()
    .then((payload) => {
        navigate(`/login`);
    })
    .catch(() => {
      toast.error(error || 'An error occurred', {
        position: "top-right",
      });
    })
  };

  return (
    <div className="bg-white">
      <div className="text-start"><ToastContainer /></div>
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
              <div className="flex justify-center mx-auto">
                <img
                  className="w-auto h-7 sm:h-8"
                  src={Logo}
                  alt="logo"
                />
              </div>

              <p className="mt-3 text-gray-500">
                Reset your password
              </p>
            </div>

            <div className="mt-8 text-start">
              <div>
                <div>
                  <label
                    for="email"
                    className="block mb-2 text-sm text-gray-600 "
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    placeholder="000000000"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                    value={phoneNumber} onChange={(e) => { setPhoneNumber(e.target.value) }}
                  />
                </div>

            
                <div className="mt-6 flex justify-end text-center">
                  {isLoading ?
                    <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50" disabled>
                      Loading ...
                    </button>
                    :
                    <button onClick={handleSendForgetPasswordLinkClick} className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50">
                      Send code
                    </button>
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPasswordPage;

import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../images/logo.svg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { companySignUp } from "../redux/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const CompanyCompleteRegister = () => {
  const dispatch = useDispatch();
  const [companyName, setCompanyName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [licensNumber, setLicensNumber] = useState("");
  const [cityName, setCityName] = useState("");
  const [companyActivity, setCompanyActivity] = useState("");
  const [licenseExpiredDate, setLicenseExpiredDate] = useState("");
  const [password, setPassword] = useState("");
  const [selectedFile, setSelectedFile] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    console.log(file.type);
  };
  

  const { isLoading, error } = useSelector((state) => state.auth);

  const location = useLocation();
  const phoneNumber = location.state?.phoneNumber;

  const handleSignUpClick = () => {
    const formData = new FormData();
    formData.append('company_name', companyName);
    formData.append('phone_number', phoneNumber);
    formData.append('password', password);
    formData.append('company_responsible_person', ownerName);
    formData.append('license_number', licensNumber);
    formData.append('license_expiry_date', licenseExpiredDate);
    formData.append('company_activity', companyActivity);
    formData.append('trade_license', selectedFile);
    formData.append('emirate', cityName);
    
    dispatch(companySignUp(formData))
      .unwrap()
      .then((payload) => {
        toast.success('OTP Code has been sent successfully', {
          position: "top-right"
        });
      })
      .catch((catch_error) => {
        toast.error(error, {
          position: "top-right"
        });
      })
  };

  const handleComapnyNameChange = (e) => {
    const value = e.target.value;
    const filteredValue = value.replace(/\s/g, '');
    setCompanyName(filteredValue);
  };

  return (
    <div className="bg-white">
        <div className="text-start"><ToastContainer /></div>
      <div className="flex justify-center h-screen">
        <div
          className="hidden bg-cover lg:block lg:w-2/3"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=2029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
          }}
        >
          <div className="flex items-center text-start h-full px-20 bg-gray-900 bg-opacity-40">
            <div>
              <h2 className="text-2xl font-bold text-white sm:text-3xl">
                Complete Register
              </h2>
            </div>
          </div>
        </div>

        <div className="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
          <div className="flex-1">
            <div className="text-center">
              <div className="flex justify-center mx-auto">
                <img className="w-auto h-7 sm:h-8" src={Logo} alt="logo" />
              </div>
            </div>

            <div className="mt-8 text-start">
              <div>
                <div>
                  <input
                    value={companyName}
                    onChange={handleComapnyNameChange}
                    type="text"
                    name="company_name"
                    placeholder="Company name (as in the license)"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <input
                    value={ownerName}
                    onChange={(e) => { setOwnerName(e.target.value) }}
                    type="text"
                    name="owner_name"
                    placeholder="Owner name"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <input
                    value={licensNumber}
                    onChange={(e) => { setLicensNumber(e.target.value) }}
                    type="number"
                    name="license_number"
                    placeholder="License number"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <select
                    value={cityName}
                    onChange={(e) => { setCityName(e.target.value) }}
                    name="city"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  >
                    <option>Dubai</option>
                    <option>Sharjah</option>
                    <option>Ajman</option>
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
                  <input
                    value={companyActivity}
                    onChange={(e) => { setCompanyActivity(e.target.value) }}

                    type="text"
                    name="company_activity"
                    placeholder="Company activity"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <input
                    value={licenseExpiredDate}
                    onChange={(e) => { setLicenseExpiredDate(e.target.value) }}

                    type="date"
                    name="license_expired_date"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <input
                    value={password}
                    onChange={(e) => { setPassword(e.target.value) }}

                    type="password"
                    name="password"
                    placeholder="Password"
                    className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-400 bg-gray-100 border border-gray-200 rounded-lg focus:border-blue-400  focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <p class="mt-6 text-gray-500 text-start">
                  By clicking "Sign up" below, you acknowledge that you have read and
                  understood, and agree to Our <a href="#" class="text-secondary"> Term & Conditions </a>
                  and <a href="#" class="text-secondary"> Privacy Policy.</a>
                </p>

                <div className="mt-6 flex justify-end text-center">
                  <button
                   onClick={handleSignUpClick}
                    className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-secondary rounded-lg focus:ring-opacity-50"
                  >
                    Sign up
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyCompleteRegister;

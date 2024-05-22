import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userSignUp } from '../redux/authSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OTPVerify } from '../redux/otpSlice';
import { useState } from 'react';

const OTPModalComponent = ({ onClose, phoneNumber, userName, password }) => {
    const handleClose = () => {
        onClose();
    };

    const { isLoading, error } = useSelector((state) => state.auth);
    const [OTPCode, setOTPCode] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleVerifyOTPClick = (event) => {
        event.preventDefault(); // Prevent form submission

        dispatch(OTPVerify({ phone_number: `+971${phoneNumber}`, code: OTPCode }))
            .unwrap()
            .then((payload) => {
                // User verification successful
                toast.success('Verification successful', {
                    position: 'top-right',
                });

                // Dispatch userSignUp only if verification is successful
                return dispatch(userSignUp({ phone_number: phoneNumber, user_name: userName, password: password }))
                    .unwrap()
                    .then((payload) => {
                        // User signup successful
                        toast.success('Signup successful!', { position: 'top-right' });
                        navigate('/'); // Navigate to the home page after successful signup
                    })
                    .catch((error) => {
                        toast.error(error.message, { position: 'top-right' });
                    });
            })
            .catch((error) => {
                toast.error('OTP verification failed. Please try again.', {
                    position: 'top-right',
                });
                handleClose(); // Close the modal on verification error (optional)
            });
    };

    return (
        <div className="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
            <ToastContainer />
            <header className="mb-8">
                <h1 className="text-2xl font-bold mb-1 text-gray-700">Mobile Phone Verification</h1>
                <p className="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your phone number.</p>
            </header>
            <form id="otp-form">
                <div className="flex items-center justify-center gap-3">
                    <input
                        type="text"
                        className="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                        value={OTPCode}
                        onChange={(e) => setOTPCode(e.target.value)}
                    />
                </div>
                <div className="max-w-[260px] mx-auto mt-4">
                    <button onClick={handleVerifyOTPClick}
                        className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-secondary px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 focus:outline-none focus:ring focus-visible:outline-none focus-visible:ring transition-colors duration-150">
                        Verify Account
                    </button>
                </div>
            </form>
            <div className="text-sm text-slate-500 mt-4">Didn't receive code? <a className="font-medium text-secondary" href="#0">Resend</a></div>
        </div>
    );
};

export default OTPModalComponent;

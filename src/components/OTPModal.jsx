import { Link } from 'react-router-dom';

const OTPModalComponent = ({ onClose }) => {

    const handleClose = () => {
        onClose();
      };

    return (
        <div class="max-w-md mx-auto text-center bg-white px-4 sm:px-8 py-10 rounded-xl shadow">
        <header class="mb-8">
            <h1 class="text-2xl font-bold mb-1 text-gray-700">Mobile Phone Verification</h1>
            <p class="text-[15px] text-slate-500">Enter the 4-digit verification code that was sent to your phone number.</p>
        </header>
        <form id="otp-form">
            <div class="flex items-center justify-center gap-3">
                <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    pattern="\d*" maxlength="1" />
                <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1" />
                <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1" />
                <input
                    type="text"
                    class="w-14 h-14 text-center text-2xl font-extrabold text-slate-900 bg-gray-200 border border-transparent hover:border-slate-200 appearance-none rounded p-4 outline-none focus:bg-white focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
                    maxlength="1" />
            </div>
            <div class="max-w-[260px] mx-auto mt-4">
                <Link to="/complete-register"
                    class="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-secondary px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 focus:outline-none focus:ring focus-visible:outline-none focus-visible:ring transition-colors duration-150">Verify
                    Account</Link>
            </div>
        </form>
        <div class="text-sm text-slate-500 mt-4">Didn't receive code? <a class="font-medium text-secondary" href="#0">Resend</a></div>
    </div>
    );
  };
  
  export default OTPModalComponent;
  
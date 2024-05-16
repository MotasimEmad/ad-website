import google_play from '../images/stores/google-play.svg';
import app_store from '../images/stores/app-store.svg';
import Logo from '../images/logo.svg';

const Footer = () => {
  return (
    <footer className="bg-white">
      <hr className="my-10 border-gray-200" />

      <div className="container px-6 py-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <a href="#">
            <img
              className="w-auto h-7"
              src={Logo}
              alt=""
            />
          </a>

          <p className="max-w-md mx-auto mt-4 text-gray-500 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <div className="flex flex-col mt-4 sm:flex-row sm:items-center sm:justify-center">
            <img src={google_play} />
            <img src={app_store} />
          </div>
        </div>

        <hr className="my-10 border-gray-200" />

        <div className="flex flex-col items-center sm:flex-row sm:justify-between">
          <p className="text-sm text-gray-500">
            © Copyright 2024. All Rights Reserved.
          </p>

          <div className="flex mt-3 -mx-2 sm:mt-0">
            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-secondary "
              aria-label="Reddit"
            >
              
              Safety Tips
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-secondary "
              aria-label="Reddit"
            >
              Terms and Conditions
            </a>

            <a
              href="#"
              className="mx-2 text-sm text-gray-500 transition-colors duration-300 hover:text-secondary "
              aria-label="Reddit"
            >
              Frequently asked questions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

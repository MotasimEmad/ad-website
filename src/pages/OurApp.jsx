import { useEffect } from 'react';
import google_play from '../images/stores/google-play.svg';
import app_store from '../images/stores/app-store.svg';

const OurApp = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (

    <div class="container px-6 py-16 mx-auto text-start mt-8">
      <div class="items-center lg:flex">
        <div class="w-full lg:w-1/2">
          <div class="lg:max-w-lg">
            <h1 class="text-xl font-semibold text-secondary lg:text-5xl">Lorem ipsum dolor sit amett.</h1>

            <p class="mt-3 text-gray-600">Download our mobile app</p>

            <div className="flex flex-col mt-4 sm:flex-row items-center justify-start gap-2">
            <img src={google_play} />
            <img src={app_store} />
          </div>

          </div>
        </div>

        <div class="flex items-center justify-center w-full mt-6 lg:mt-0 lg:w-1/2">

          <div class="relative mx-auto border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
            <div class="h-[32px] w-[3px] bg-gray-800 absolute -start-[17px] top-[72px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[124px] rounded-s-lg"></div>
            <div class="h-[46px] w-[3px] bg-gray-800 absolute -start-[17px] top-[178px] rounded-s-lg"></div>
            <div class="h-[64px] w-[3px] bg-gray-800 absolute -end-[17px] top-[142px] rounded-e-lg"></div>
            <div class="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white">
              <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/mockup-1-light.png" class="w-[272px] h-[572px]" alt="" />
            </div>
          </div>

        </div>
      </div>
    </div>

  );
};

export default OurApp;

import React from 'react';
import 'tailwindcss/tailwind.css';

function LandingPage() {
  const backgroundImageUrl = "https://i.imgur.com/4KFlKaz.png";
  return (
    <div id='lp-container' className="min-h-screen flex items-center justify-center bg-gray-100">
      <div>
        {/* <div
          className="absolute top-0 left-0 w-full h-full bg-white opacity-50"
        ></div> */}
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full">
        <div className="max-w-md ">
          <h1 className="text-3xl font-bold mb-4 text-center">
            Welcome to the Gratitude Journal App!
          </h1>
          <p className="text-gray-600 mb-4 text-center">
            Please register or log in to continue.
          </p>
          <div className="mt-6 flex space-x-4 justify-center">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
              Register
            </button>
            <button className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700">
              Log In
            </button>
          </div>
        </div>
      </div>
      <img style={{width: "630px"}} src={backgroundImageUrl} alt="" />
    </div>
  );
}


export default LandingPage;

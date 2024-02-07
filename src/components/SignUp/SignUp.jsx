import React from "react";
import { login } from "../../ImageLinks/ImageLinks";
import Header from "../../components/common/Header";
import signUpText from "../../commonText/signUpText";

const SignUp = () => {
  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${login.bgMovieURL})` }}
      >
        <div className="absolute bg-gradient-to-b from-black p-5">
          <div className="text-white text-center">
            <div className="text-5xl font-bold">{signUpText.benefits}</div>
            <div className="font-bold text-2xl mt-5">
              {signUpText.accessibility}
            </div>
            <div className="font-bold text-xl mt-5">
              {signUpText.callToActionText}
            </div>
            <div className="inline">
              <input
                placeholder={signUpText.emailAddress}
                className="w-5/12 mt-5 p-2 bg-gray-700 border border-white rounded-md"
              />
              <button className="bg-red-700 rounded-md p-2 mx-2 font-bold ">
                {signUpText.getStarted} 
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

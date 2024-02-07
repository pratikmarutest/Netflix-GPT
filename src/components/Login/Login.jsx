import React from "react";
import { Link } from "react-router-dom";
import loginText from "../../commonText/loginText";
import { login } from "../../ImageLinks/ImageLinks";
import Header from "../../components/common/Header";
import signUpText from "../../commonText/signUpText";
import { useFormik } from "formik";
import loginSchema from "../../schemas/index";

const Login = () => {
  // ________________________ Function and State Declaration Starts _________________________

  // State Declaration
  const [isSignInForm, setIsSignInForm] = React.useState(true);
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  // Function Declaration

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  // ________________________ Function and State Declaration Ends _________________________

  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues: initialValues,
      validationSchema: loginSchema,
      onSubmit: (values, action) => {
        console.log(values);
        action.resetForm();
      },
    });

  return (
    <div>
      <Header />
      <div
        className="bg-cover bg-center h-screen flex justify-center items-center"
        style={{ backgroundImage: `url(${login.bgMovieURL})` }}
      >
        <form
          className="absolute bg-black bg-opacity-80 from-black w-4/12 text-white px-3 py-5 rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="text-2xl font-bold">
            {isSignInForm ? loginText.signIn : signUpText.signUp}
          </div>

          {!isSignInForm && (
            <div>
              <input
                type="text"
                placeholder={loginText.userName}
                className="bg-gray-700 block color-white w-full p-2 mt-4 rounded-lg"
                name="name"
                value={values.name}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {errors.name && touched.name ? (
                <div className="text-red-700">{errors.name}</div>
              ) : null}
            </div>
          )}
          <input
            type="text"
            placeholder={loginText.emailOrPhone}
            className="bg-gray-700 block color-white w-full p-2 mt-4 rounded-lg"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && touched.email ? (
            <div className="text-red-700">{errors.email}</div>
          ) : null}

          <input
            type="password"
            placeholder={loginText.password}
            className="bg-gray-700 block color-white w-full p-2 mt-4 rounded-lg"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.password && touched.password ? (
            <div className="text-red-700">{errors.password}</div>
          ) : null}

          <button
            className="px-4 py-2 my-4 w-full bg-red-700 rounded-lg"
            type="submit"
          >
            {isSignInForm ? loginText.signIn : signUpText.signUp}
          </button>

          <div className="text-center">
            <Link className="underline hover:text-gray-500">
              {isSignInForm && loginText.forgotPassword}
            </Link>
          </div>

          <div className="text-md mt-4 mx-2">
            {isSignInForm ? loginText.newToNetflix : signUpText.alreadyAccount}
            &nbsp;
            <div
              className="inline font-bold hover:underline cursor-pointer"
              onClick={toggleSignInForm}
            >
              <Link>
                {isSignInForm
                  ? loginText.signUpNow
                  : signUpText.alreadyAccountSignIn}
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

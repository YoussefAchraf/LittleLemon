import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Identification = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);
  const initialValues = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    repeatPassword: '',
  };

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  const signupValidationSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
    firstName: Yup.string().required('First Name is required'),
    lastName: Yup.string().required('Last Name is required'),
    repeatPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match')
      .required('Repeat Password is required'),
  });

  const handleLoginSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setIsSubmitted(true);
    setSubmitting(false);
  };

  const handleSignupSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setIsLoginForm(false); // Update state to indicate signup form submission
    setIsSubmitted(true);
    setSubmitting(false);
  };

  const handleForgotPasswordSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setIsSubmitted(true);
    setSubmitting(false);
  };

  const toggleForm = () => {
    setIsLoginForm(prevState => !prevState);
    setIsSubmitted(false);
  };

  return (
    <>
      <Helmet>
        <title>Login Page - Little Lemon</title>
        <meta
          name="description"
          content="Login to your account at Little Lemon. Enjoy exclusive member benefits and special offers. Sign in now!"
        />
        <meta property="og:title" content="Login Page - Little Lemon" />
        <meta
          property="og:description"
          content="Login to your account at Little Lemon. Enjoy exclusive member benefits and special offers. Sign in now!"
        />
        <meta property="og:image" content="%PUBLIC_URL%/og-login-image.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Login Page - Little Lemon" />
        <meta
          name="twitter:description"
          content="Login to your account at Little Lemon. Enjoy exclusive member benefits and special offers. Sign in now!"
        />
        <meta name="twitter:image" content="%PUBLIC_URL%/twitter-login-image.jpg" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="Little Lemon, restaurant, login, sign in" />
      </Helmet>
      <div className=" w-[80dvw] md:max-w-md mx-auto my-[10vh] md:my-[15vh]">
        {!isSubmitted ? (
          <>
            {isLoginForm ? (
              <Formik
                initialValues={initialValues}
                validationSchema={loginValidationSchema}
                onSubmit={handleLoginSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Log In</h2>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                      <Field type="email" name="email" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.email && touched.email ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                      <Field type="password" name="password" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.password && touched.password ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex justify-center gap-3 flex-col">
                      <div className="flex justify-end">
                        <button type="button" onClick={toggleForm} className="text-yellow-400 ml-2">Forgot Password?</button>
                      </div>
                      <button type="submit" disabled={isSubmitting} className="bg-[#f4ce14] text-white text-sm rounded-md p-3">
                        {isSubmitting ? 'Logging in...' : 'Log In'}
                      </button>
                      <button type="button" onClick={toggleForm} className="text-[#f4ce14] text-sm rounded-md p-3">Sign Up</button>
                    </div>
                  </Form>
                )}
              </Formik>
            ) : (
              <Formik
                initialValues={initialValues}
                validationSchema={signupValidationSchema}
                onSubmit={handleSignupSubmit}
              >
                {({ isSubmitting, errors, touched }) => (
                  <Form>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-700">Sign Up</h2>
                    <div className="mb-4">
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
                      <Field type="email" name="email" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.email && touched.email ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
                      <Field type="password" name="password" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.password && touched.password ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name:</label>
                      <Field type="text" name="firstName" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.firstName && touched.firstName ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="firstName" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name:</label>
                      <Field type="text" name="lastName" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.lastName && touched.lastName ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="lastName" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="repeatPassword" className="block text-sm font-medium text-gray-700">Repeat Password:</label>
                      <Field type="password" name="repeatPassword" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.repeatPassword && touched.repeatPassword ? 'border-red-500' : ''}`} />
                      <ErrorMessage name="repeatPassword" component="div" className="text-red-500 text-sm" />
                    </div>
                    <div className="flex justify-center gap-3">
                      <button type="submit" disabled={isSubmitting} className="bg-yellow-400 text-white rounded-md py-2 px-4 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                        {isSubmitting ? 'Creating Account...' : 'Create Account'}
                      </button>
                      <button type="button" onClick={toggleForm} className="text-yellow-400 ml-2">Log In</button>
                    </div>
                  </Form>
                )}
              </Formik>
            )}
          </>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            {isLoginForm ? 'Logged in successfully!' : 'Account created successfully!'}
          </div>
        )}
      </div>
    </>
  );
};

export default Identification;

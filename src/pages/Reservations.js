import React, { useState } from 'react';
import { Helmet } from "react-helmet-async";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const Reservations = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const initialValues = {
    date: '',
    time: '',
    numberOfGuests: '',
    occasion: ''
  };
  const validationSchema = Yup.object().shape({
    date: Yup.string().required('Date is required'),
    time: Yup.string().required('Time is required'),
    numberOfGuests: Yup.number().required('Number of guests is required').positive().integer(),
    occasion: Yup.string().required('Occasion is required')
  });
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setIsSubmitted(true);
    setSubmitting(false);
  };
  
  return (
    <>
      <Helmet>
        <title>Reservations Page - Little Lemon</title>
      </Helmet>
      <div className=" w-[80dvw] md:max-w-md mx-auto my-[10vh] md:my-[15vh]">
        <h2 className="text-2xl font-semibold mb-4">Make a Reservation</h2>
        {!isSubmitted ? (
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting, errors, touched }) => (
              <Form>
                <div className="mb-4">
                  <label htmlFor="date" className="block text-sm font-medium text-gray-700">Date:</label>
                  <Field type="date" name="date" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.date && touched.date ? 'border-red-500' : ''}`} />
                  <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="time" className="block text-sm font-medium text-gray-700">Time:</label>
                  <Field type="time" name="time" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.time && touched.time ? 'border-red-500' : ''}`} />
                  <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="numberOfGuests" className="block text-sm font-medium text-gray-700">Number of Guests:</label>
                  <Field type="number" name="numberOfGuests" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.numberOfGuests && touched.numberOfGuests ? 'border-red-500' : ''}`} />
                  <ErrorMessage name="numberOfGuests" component="div" className="text-red-500 text-sm" />
                </div>
                <div className="mb-4">
                  <label htmlFor="occasion" className="block text-sm font-medium text-gray-700">Occasion:</label>
                  <Field as="select" name="occasion" className={`mt-1 block w-full rounded-lg h-10 border border-gray-300 px-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400 ${errors.occasion && touched.occasion ? 'border-red-500' : ''}`}>
                    <option value="">Select Occasion</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="other">Other</option>
                  </Field>
                  <ErrorMessage name="occasion" component="div" className="text-red-500 text-sm" />
                </div>
                <button type="submit" disabled={isSubmitting} className="bg-yellow-400 text-white rounded-md py-2 px-4 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-400">
                  {isSubmitting ? 'Submitting...' : 'Reserve Now'}
                </button>
              </Form>
            )}
          </Formik>
        ) : (
          <div className="text-center text-green-600 font-semibold">
            Your reservation has been submitted successfully!
          </div>
        )}
      </div>
    </>
  );
};

export default Reservations;

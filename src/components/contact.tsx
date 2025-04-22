'use client';

import axios from '@/lib/axios';
import { Field, Formik, FormikHelpers, FormikProps } from 'formik';
import { FaPhone, FaEnvelope, FaDribbble, FaTwitter, FaFacebookF, FaGoogle, FaGithub } from 'react-icons/fa';
import { toast } from 'react-toastify';
import * as yup from "yup"

const MessageSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email().required("Email is required"),
  message: yup.string().required("Message is required"),
});

interface IMessageForm{
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const initialValues: IMessageForm = {
    name: "",
    email: "",
    message: "",
  };

  const onSubmitMessage = async (
    values: IMessageForm,
    action: FormikHelpers<IMessageForm>
  ) => {
    try{
      await axios.post("/data/myguestmessage", values);
      console.log(values);
      toast.success("Message Sent");
      action.resetForm();

    } catch(err){
      console.log(err);
      action.setSubmitting(false);
      toast.error("Message Failed to Send");
    }

  };

  return (
    // <section className="bg-gray-100 py-20 px-6 md:px-16">
    <section className="w-[120%] mx-[calc(-10%)] bg-gray-100 md:mx-auto md:w-full md:max-w-7xl flex flex-col md:flex-row items-center justify-center p-6 gap-[10px]">

      <div className="max-w-7xl w-full">
        <div className="text-center mb-12 relative">
          <h2 className="text-4xl font-bold text-gray-900 inline-block">
            Get in Touch
            <div className="h-1 w-16 bg-indigo-600 mx-auto mt-2"></div>
          </h2>
          <h1 className="absolute text-8xl font-extrabold text-gray-200 opacity-10 top-0 left-1/2 transform -translate-x-1/2 select-none">
            CONTACT
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Address Section */}
          <div className="text-gray-700 space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">ADDRESS</h3>
              <p>
                Tropikana Residence,<br />
                Jl. Tropika Raya A-001<br />
                Cikarang Timur <br />
                Jawa Barat 17530 <br />
                Indonesia
              </p>
            </div>
            <div className="space-y-2">
              <p className="flex items-center gap-3 text-purple-600"><FaPhone /> (+62) 811888204</p>
              {/* <p className="flex items-center gap-3 text-purple-600"><FaFax /> (+62) 555 545 555</p> */}
              <p className="flex items-center gap-3 text-purple-600"><FaEnvelope /> dianck2002@gmail.com</p>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mt-6">FOLLOW ME</h4>
              <div className="flex gap-4 text-gray-600 text-xl mt-2">
                <FaDribbble />
                <FaTwitter />
                <FaFacebookF />
                <FaGoogle />
                <FaGithub />
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Formik
            initialValues={initialValues}
            validationSchema={MessageSchema}
            onSubmit={(values, action) => {
              onSubmitMessage(values,action);
              // console.log(values);
            }}
          >
            {(props: FormikProps<IMessageForm>) => {
              const { touched, errors } = props;
              return (
                <form className="space-y-4" onSubmit={props.handleSubmit}>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">SEND US A NOTE</h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <Field
                          name="name"
                          type="text"
                          placeholder="Name"
                          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {touched.name && errors.name && (
                          <div className="text-red-500 text-[12px]">{errors.name}</div>
                        )}
                      </div>

                      <div>
                        <Field
                          name="email"
                          type="email"
                          placeholder="Email"
                          className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                        />
                        {touched.email && errors.email && (
                          <div className="text-red-500 text-[12px]">{errors.email}</div>
                        )}
                      </div>
                    </div>

                    <div className="mt-5">
                      <Field
                        as="textarea"
                        name="message"
                        rows={5}
                        placeholder="Tell us more about your needs..."
                        className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                      {touched.message && errors.message && (
                        <div className="text-red-500 text-[12px]">{errors.message}</div>
                      )}
                    </div>

                    <div className="text-right">
                      <button
                        type="submit"
                        className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full shadow-md transition-all duration-200 cursor-pointer"
                      >
                        Send Message
                      </button>
                    </div>
                  </div>
                </form>
              );
            }}
          </Formik>

        </div>
      </div>
    </section>
  );
}

import React, { useRef } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Heading from './Heading';
import ManStandingMob from '../assets/man-standing-mob.svg';
import ManStandingDesk from '../assets/man-standing-desk.svg';
import PaperPlane from '../assets/paper-plane.svg';
import InputField from './InputField';
import classNames from 'classnames';

const ContactSection = () => {
  const form = useRef();
  function toastSuccess(type) {
    if (type === 'success') {
      toast.success('Message sent successfully');
    }
    if (type === 'error') {
      toast.error('Something went wrong!');
    }
  }
  return (
    <>
      <section id="contact-me" className="pt-[121px] lg:pt-[160px]">
        <div className="text-center">
          <Heading title="Contact me" />
        </div>
        <div className="px-8 mx-auto lg:flex lg:justify-between max-w-7xl">
          <div className="flex justify-center pt-[34px]">
            <img
              src={ManStandingMob}
              alt="man-standing"
              className="md:hidden"
            />
            <img
              src={ManStandingDesk}
              alt="man-standing"
              className="hidden md:block"
            />
          </div>

          <div>
            <Formik
              initialValues={{
                firstName: '',
                email: '',
                message: '',
              }}
              validationSchema={Yup.object({
                firstName: Yup.string()
                  .required('Name is required')
                  .min(2, 'Should be atleast two characters or more')
                  .max(20, 'Should not be more then 20 characters long'),
                email: Yup.string()
                  .email('Invalid email address')
                  .required('Email is required'),
                message: Yup.string()
                  .min(5, 'must be 5 characters or long')
                  .max(255, 'Must be less then 255 characters'),
              })}
              onSubmit={async (values, { setSubmitting, resetForm }) => {
                try {
                  setSubmitting(true);
                  const result = await emailjs.send(
                    'service_djh8lp4',
                    'template_y1j9eqo',
                    values,
                    'w6ZdWb4DVDmgiEc48'
                  );
                  if (result.status === 200) {
                    toastSuccess('success');
                    resetForm();
                    setSubmitting(false);
                  }
                } catch (error) {
                  console.log(error);
                  toastSuccess('error');
                  setSubmitting(false);
                }
              }}
            >
              {(props) => {
                return (
                  <Form>
                    <div
                      ref={form}
                      className="flex flex-col items-center gap-9 pt-9"
                    >
                      <div>
                        <InputField
                          label="firstName"
                          name="firstName"
                          type="text"
                          placeholder="Enter name"
                          fieldType="primary"
                        />
                      </div>

                      <div>
                        <InputField
                          label="email"
                          name="email"
                          type="email"
                          placeholder="Enter email address"
                          fieldType="primary"
                        />
                      </div>

                      <div>
                        <InputField
                          label="message"
                          name="message"
                          type="textarea"
                          placeholder="Enter your message"
                          fieldType="secondary"
                        />
                      </div>

                      <div>
                        <button
                          type="submit"
                          disabled={props.isSubmitting}
                          className={classNames(
                            'w-[168px] h-[51px] bg-theme-purple-800 rounded flex justify-center items-center',
                            props.isSubmitting && 'opacity-75'
                          )}
                        >
                          <div className="flex items-center gap-5">
                            <p
                              className={classNames(
                                'text-theme-white-700 text-lg leading-[26px]'
                              )}
                            >
                              {props.isSubmitting ? 'Sending...' : 'Send'}
                            </p>
                            <img
                              src={PaperPlane}
                              alt="plane"
                              className={classNames(
                                props.isSubmitting && 'animate-bounce'
                              )}
                            />
                          </div>
                        </button>
                      </div>
                    </div>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </section>
      <ToastContainer position="top-center" />
    </>
  );
};

export default ContactSection;

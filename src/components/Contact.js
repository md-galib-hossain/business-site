import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { features, contactimg } from "../data";
import Header from "./Header";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [bgcon, setBgcon] = useState(true);
  const { title, subtitle, image, items } = features;

  const handleRequest = (data) => {
    toast(`Hey ${data.name}, Your request submitted`);
    console.log(data.name);
  };

  return (
    <>
      <Header bgcon={bgcon}></Header>
      <section className="section">
        <div className="my-20 grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 items-center justify-center">
          <div className="">
            <img src={contactimg.image.type} alt="" className="w-4/5 mx-auto" />
          </div>
          <div className="p-8">
            <div className="w-full max-w-md p-4 rounded-none mx-auto shadow sm:p-8 bg-blue-800 text-white mt-8">
              <h2 className="mb-3 text-3xl font-semibold text-center">
                Request for more information!
              </h2>

              <form
                action=""
                className="space-y-8 ng-untouched ng-pristine ng-valid"
                onSubmit={handleSubmit(handleRequest)}
              >
                {/* email */}
                <div className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm">Email address</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      {...register("email", {
                        required: "Email adress is required",
                      })}
                      placeholder="yourmail@mail.com"
                      className="w-full px-3 py-2 border rounded-none border-gray-700  text-black focus:border-violet-400"
                    />
                    {errors.email && (
                      <p role="alert" className="text-red-700">
                        {errors.email?.message}
                      </p>
                    )}
                  </div>
                  {/* name */}
                  <div className="space-y-2">
                    <label className="block text-sm">Full Name</label>
                    <input
                      type="name"
                      name="name"
                      id="name"
                      {...register("name")}
                      placeholder="your name"
                      className="w-full px-3 py-2 border rounded-none border-gray-700  text-black focus:border-violet-400"
                    />
                  </div>
                  {/* Ask for more information */}
                  <div className="space-y-2">
                    <div className="justify-between">
                      <label className="text-sm text-center">Message</label>
                    </div>
                    <textarea
                      type="text"
                      name="message"
                      id="message"
                      {...register("message", {
                        required: "Message is required",
                      })}
                      placeholder="Write your message"
                      className="w-full px-3 py-2 border rounded-none border-gray-700  text-black focus:border-violet-400"
                    />
                    {errors.password && (
                      <p role="alert" className="text-red-700">
                        {errors.password?.message}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  url="mailto:mdgalibhossain23@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full px-8 py-3 font-semibold rounded-none bg-slate-800 text-white"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </>
  );
};

export default Contact;

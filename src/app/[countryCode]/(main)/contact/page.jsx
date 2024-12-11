import React from "react";

import * as Icon from "react-feather";
const page = () => {
  return (
    <div>
      
      <section className="relative md:py-24 py-16 container mx-auto">
        <div className=" relative">
          
        </div>
        <div className="w-full flex justify-center">
          <div className="lg:w-2/5 w-full md:mt-24 mt-16 ">
            {/* <div className="lg:col-span-7 md:col-span-6">
              <Image width={1800} src={img} alt="" />
            </div> */}

            <div className="lg:col-span-12 w-full">
              <div className="lg:ms-5  ">
                <div
                  className="bg-white  c-thin-border rounded-md
                  p-6"
                >
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form className="w-full text-gray-900">
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className=" ps-11 w-full py-2 px-3 h-10 bg-transparent  
                               rounded outline-none border border-gray-200 focus:ring-0"
                              placeholder="Name :"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className=" ps-11 w-full py-2 px-3 h-10 bg-transparent 
                               rounded outline-none border border-gray-200   focus:ring-0"
                              placeholder="Email :"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="subject" className="font-semibold">
                            Your Question:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                            <input
                              name="subject"
                              id="subject"
                              className="ps-11 w-full py-2 px-3 h-10 bg-transparent   rounded outline-none border border-gray-200 focus:ring-0"
                              placeholder="Subject :"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                            <textarea
                              name="comments"
                              id="comments"
                              className=" ps-11 w-full py-2 px-3 h-28 bg-transparent   rounded outline-none border border-gray-200 focus:ring-0"
                              placeholder="Message :"
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base 
                      text-center text-gray-900 rounded-md justify-center flex items-center"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container mx-auto relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="google"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.5826489741817!2d46.73161257406731!3d24.84394234592074!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2efb535351ddf5%3A0xc21924732db81bcd!2sSomewhere!5e0!3m2!1sen!2slb!4v1716154218629!5m2!1sen!2slb"
              style={{ border: 0 }}
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

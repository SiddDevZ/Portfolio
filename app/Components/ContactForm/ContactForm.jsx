'use client'
import React, { useState } from "react";
import axios from "axios";
import { Toaster, toast } from "sonner";

const ContactForm = () => {
    const [nameError, setNameError] = useState(false);
    const [name, setName] = useState("");
    const [emailError, setEmailError] = useState(false);
    const [email, setEmail] = useState("");
    const [messageError, setMessageError] = useState(false);
    const [message, setMessage] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [submitLoading, setSubmitLoading] = useState(false);

  
    const isValidEmail = (email) => {
      const re =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    };
  
    const handleSubmit = async (e) => {
      if (submitted === true) {
        return;
      }
      let hasError = false;
  
      setNameError(false);
      setEmailError(false);
      setMessageError(false);
  
      setSubmitLoading(true);
  
      await new Promise((resolve) => setTimeout(resolve, 0));
  
      if (name.length < 3 || name.length > 50) {
        setNameError(true);
        hasError = true;
      }
      if (!isValidEmail(email)) {
        setEmailError(true);
        hasError = true;
      }
  
      if (hasError) {
        setSubmitLoading(false);
        return;
      }
  
      var data = {
        service_id: "service_5lt93fb",
        template_id: "template_cxxitvt",
        user_id: "LkCnVmcFfXTXGYbVF",
        template_params: {
          from_name: name,
          to_name: "Siddharth",
          email_id: email,
          message: message,
        },
      };
  
      axios
        .post("https://api.emailjs.com/api/v1.0/email/send", data)
        .then(() => {
          toast.success("Message Sent!", { position: "bottom-right" });
          setSubmitted(true);
          setName("");
          setEmail("");
          setMessage("");
          setSubmitLoading(false);
          setTimeout(() => {
            setSubmitted(false);
          }, 7000);
        })
        .catch((error) => {
          toast.error(`Failed, Please try sending via Email! ${error}`, {
            position: "bottom-right",
          });
          setSubmitLoading(false);
        });
    };
  return (
    <div className="contact-form mt-2" id="contact">
      <div className="contact-sec-1 w-full flex justify-between">
        <div className="contact-input w-[40%]">
          <label
            className="block mb-[0.4rem] text-sm font-semibold"
            htmlFor="Name"
          >
            Your Name
          </label>
          <input
            id="Name"
            placeholder="John Doe"
            value={name}
            onClick={() => setNameError(false)}
            onChange={(e) => setName(e.target.value)}
            className={`${
              nameError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"
            } h-12 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100`}
          />
        </div>
        <div className="contact-input w-[57%]">
          <label
            className="block mb-[0.4rem] text-sm font-semibold"
            htmlFor="email"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="Johndoe@gmail.com"
            value={email}
            onClick={() => setEmailError(false)}
            onChange={(e) => setEmail(e.target.value)}
            className={`${
              emailError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"
            } h-12 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100`}
          />
        </div>
      </div>
      <div className="contact-sec-2 mt-4">
        <label
          className="block mb-[0.4rem] text-sm font-semibold"
          htmlFor="message"
        >
          Message
        </label>
        <textarea
          id="message"
          placeholder="Leave me a message..."
          value={message}
          onClick={() => setMessageError(false)}
          onChange={(e) => setMessage(e.target.value)}
          className={`${
            messageError ? "bg-[#3c0000] input-error" : "bg-[#1A1A1A]"
          } h-48 w-full placeholder-[#8d8d8d] flex items-center lg:px-6 md:px-4 sm:px-3 xss:px-[0.78rem] md:pt-4 sm:pt-3 xss:pt-2 md:text-xl xs:text-lg xss:text-base rounded-md border-2 border-[#c6c6c6] text-white focus:outline-none focus:ring-0 focus:border-slate-100 resize-none`}
        ></textarea>
      </div>
      <div className="mt-5">
        <button
          onClick={handleSubmit}
          className="flex items-center gap-[0.4rem] font-pop text-xl px-[1.7rem] py-[0.4rem] bg-[#ffffff] text-black rounded-md overflow-hidden hover:bg-[#f1f1f1] transition-all hover:scale-[1.01] ease-in-out text-btn"
        >
          {submitLoading ? (
            <>
              <span className="text-black">Loading...</span>
              <div className="spin">
                <i className="ri-loader-fill text-black"></i>
              </div>
            </>
          ) : (
            <>
              <span className="text-black">Send Message</span>
              <i
                className={`${
                  submitted ? "ri-check-fill" : "ri-arrow-right-up-line"
                } text-black translate-y-[0.1rem] font-medium`}
              ></i>
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default ContactForm;

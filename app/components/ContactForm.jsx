"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  
  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [messageError, setMessageError] = useState(false);
  
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  
  const [canResend, setCanResend] = useState(true);
  
  useEffect(() => {
    emailjs.init("LkCnVmcFfXTXGYbVF");
  }, []);

  const isValidEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (isSent) return;

    let hasError = false;
    
    // Reset errors
    setNameError(false);
    setEmailError(false);
    setMessageError(false);
    
    // Set loading state
    setIsLoading(true);
    
    // Validate fields
    if (name.length < 3 || name.length > 50) {
      setNameError(true);
      hasError = true;
    }
    
    if (!isValidEmail(email)) {
      setEmailError(true);
      hasError = true;
    }
    
    if (message.length < 10) {
      setMessageError(true);
      hasError = true;
    }
    
    if (hasError) {
      setIsLoading(false);
      toast.error("Please fix the highlighted errors");
      return;
    }
    
    // Prepare data for emailjs
    const templateParams = {
      from_name: name,
      to_name: "Siddharth",
      email_id: email,
      subject: subject || "Contact Form Submission",
      message: message,
    };
    
    try {
      await emailjs.send(
        "service_5lt93fb", // Your EmailJS service ID
        "template_cxxitvt", // Your EmailJS template ID
        templateParams,
        "LkCnVmcFfXTXGYbVF" // Your EmailJS public key
      )
      .then((response) => {
        if (response.status === 200) {
          setIsLoading(false);
          toast.success("Message sent successfully!");
          
          // Reset form
          setName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setIsSent(true);
          
          // Allow sending another message after 10 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 10000);
        }
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        toast.error("Failed to send message. Please try again or contact directly via email.");
        setIsLoading(false);
      });
      
    } catch (error) {
      console.error("Error sending email:", error);
      toast.error("Failed to send message. Please try again or contact directly via email.");
      setIsLoading(false);
    }
  };

  return (
    <form className="relative z-20 h-full flex flex-col" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Your Name" 
            className={`w-full bg-[#141414] border ${nameError ? 'border-red-500/70' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-white/30 focus:bg-[#1c1c1c] transition-all duration-300 ease-in-out`}
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={isLoading || isSent}
            onTouchMove={(e) => e.stopPropagation()}
          />
          {nameError && <p className="text-red-500 text-xs mt-1">Name must be between 3-50 characters</p>}
        </div>
        <div className="relative">
          <input 
            type="email" 
            placeholder="Your Email" 
            className={`w-full bg-[#141414] border ${emailError ? 'border-red-500/70' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-white/30 focus:bg-[#1c1c1c] transition-all duration-300 ease-in-out`}
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={isLoading || isSent}
            onTouchMove={(e) => e.stopPropagation()}
          />
          {emailError && <p className="text-red-500 text-xs mt-1">Please enter a valid email address</p>}
        </div>
      </div>
      
      <div className="mb-5 relative">
        <input 
          type="text" 
          placeholder="Subject" 
          className="w-full bg-[#141414] border border-white/10 rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-white/30 focus:bg-[#1c1c1c] transition-all duration-300 ease-in-out"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          disabled={isLoading || isSent}
          onTouchMove={(e) => e.stopPropagation()}
        />
      </div>
      
      <div className="mb-6 flex-grow relative">
        <textarea 
          placeholder="Your Message" 
          className={`w-full bg-[#141414] border ${messageError ? 'border-red-500/70' : 'border-white/10'} rounded-lg px-4 py-3 text-sm text-white placeholder-white/40 outline-none ring-0 focus:ring-0 focus:outline-none focus:border-white/30 focus:bg-[#1c1c1c] transition-all duration-300 ease-in-out min-h-[120px] h-full resize-none`}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          disabled={isLoading || isSent}
          onTouchMove={(e) => e.stopPropagation()}
        ></textarea>
        {messageError && <p className="text-red-500 text-xs mt-1">Message must be at least 10 characters</p>}
      </div>
      
      <div className="flex md:pt-0.5 justify-start">
        <button
          type="submit"
          disabled={isLoading || isSent}
          className={`md:px-5 md:py-2.5 px-3 py-1.5 border-2 border-[#00eeff]/30 text-[#00eeff]/80 bg-[#00eeff]/5 rounded-xl hover:bg-[#00eeff16] transition-all ease-out hover:scale-[1.028] duration-300 md:text-sm text-[0.8rem] tracking-wider relative ${isLoading || isSent ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isLoading ? (
            <>
              <span className="inline-block opacity-0">Send Message</span>
              <span className="absolute inset-0 flex items-center justify-center">
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
              </span>
            </>
          ) : isSent ? (
            <>
              <span className="inline-block mr-2">✓</span>
              <span>Message Sent</span>
            </>
          ) : (
            "Send Message"
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    // Get form elements
    const name = form.current.from_name.value.trim();
    const email = form.current.from_email.value.trim();
    const subject = form.current.subject.value.trim();
    const message = form.current.message.value.trim();

    // Check if all fields are filled
    if (!name || !email || !subject || !message) {
      toast.error("Please fill out all fields.", {
        position: "top-center",
        autoClose: 3000, // 3 seconds
      });
      return; // Prevent form submission
    }

    // Send email if all fields are filled
    emailjs
      .sendForm("service_6sozljt", "template_08s6s7l", form.current, {
        publicKey: "CUhdWunEhAwUO2s4-",
      })
      .then(
        () => {
          toast.success("Message sent successfully!", {
            position: "top-center",
            autoClose: 3000, // 3 seconds
          });
          form.current.reset(); // Clear the form
        },
        (error) => {
          toast.error("Failed to send message. Please try again.", {
            position: "top-center",
            autoClose: 3000, // 3 seconds
          });
        }
      );
  };

  return (
    <section className="bg-[#f9f9f9] py-12 review">
      <div className="px-4 mx-auto max-w-screen-md">
        <h2 className="text-3xl font-bold text-[#4a90e2] text-center">
          Get in Touch with Us
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-[#333333]">
          Facing a technical issue or have feedback on a new feature? We’re here
          to help and would love to hear from you.
        </p>
        <form ref={form} onSubmit={sendEmail} className="space-y-8">
          <div>
            <label htmlFor="name" className="form_label text-[#333333]">
              Name
            </label>
            <input
              id="text"
              type="text"
              name="from_name"
              placeholder="Enter your name"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#4a90e261] focus:outline-none focus:border-[#4a90e2] text-[16px] leading-7 text-[#333333] cursor-pointer rounded-md placeholder:text-[#666666]"
            />
          </div>
          <div>
            <label htmlFor="email" className="form_label text-[#333333]">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="from_email"
              placeholder="yourname@example.com"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#4a90e261] focus:outline-none focus:border-[#4a90e2] text-[16px] leading-7 text-[#333333] cursor-pointer rounded-md placeholder:text-[#666666]"
            />
          </div>
          <div>
            <label htmlFor="subject" className="form_label text-[#333333]">
              Topic
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="How can we assist you?"
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#4a90e261] focus:outline-none focus:border-[#4a90e2] text-[16px] leading-7 text-[#333333] cursor-pointer rounded-md placeholder:text-[#666666]"
            />
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="form_label text-[#333333]">
              Message
            </label>
            <textarea
              rows={6}
              id="message"
              name="message"
              placeholder="Write your message here..."
              className="form_input mt-1 w-full px-4 py-3 border border-solid border-[#4a90e261] focus:outline-none focus:border-[#4a90e2] text-[16px] leading-7 text-[#333333] cursor-pointer rounded-md placeholder:text-[#666666]"
            />
          </div>
          <button
            type="submit"
            value="Send"
            className="bg-[#4a90e2] text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 w-full sm:w-fit"
          >
            Submit
          </button>
        </form>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Contact;

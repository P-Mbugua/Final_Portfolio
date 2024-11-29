import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'; 
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'; 
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_whl0hbs', 'template_zvkf047', templateParams, 'Jq-7l7xQJz6_eAtCO')
      .then((result) => {
        console.log('Message sent successfully:', result.text);
        toast.success("Your message has been successfully sent. Expect feedback soon. Thank you!");
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      }, (error) => {
        console.log('Error sending message:', error.text);
        toast.error("There was an error sending your message. Please try again.");
      });
  };

  return (
    <div className="bg-[#1a1a1a] text-white py-12 px-4 md:px-8 lg:px-16">
      <ToastContainer />
      <div className="container mx-auto max-w-screen-lg">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white">
          GET <span className="text-green-500">IN TOUCH</span>
        </h1>
        <p className="text-center text-base md:text-lg mt-4">
         I'M ALWAYS OPEN TO DISCUSSING{" "}
          <span className="font-bold text-white">
            DEVELOPER RELATIONS / TRAINER / SOFTWARE DEV WORK OR PARTNERSHIPS 
          </span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-4 text-base md:text-lg">
            <ContactInfo icon={faWhatsapp} label="Phone" value="+254 701 571 745" />
            <ContactInfo icon={faEnvelope} label="Email" value="petermbuguangumi@gmail.com" />
            <ContactInfo icon={faTwitter} label="Twitter" value="@mbugua276" />
            <ContactInfo icon={faGithub} label="Github" value="P-Mbugua" />
            <ContactInfo icon={faMapMarkerAlt} label="Location" value="Limuru, Kiambu, Kenya" />
          </div>

          {/* Contact Form */}
          <div className="space-y-4">
            <p className="text-base md:text-lg">
              If you have any suggestion, project, or even want to say hello, please fill out the form below and I will reply shortly.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <InputField
                icon={faUser}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="YOUR NAME"
                required
              />
              <InputField
                icon={faEnvelope}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="YOUR EMAIL"
                required
              />
              <TextAreaField
                icon={faComment}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="YOUR MESSAGE"
                required
              />
              <button className="w-full bg-green-500 text-black py-3 font-bold rounded-md hover:bg-green-600 transition flex justify-center items-center space-x-2 shadow-lg">
                <FontAwesomeIcon icon={faPaperPlane} className="text-xl" />
                <span>SEND MESSAGE</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center space-x-3">
    <FontAwesomeIcon icon={icon} className="text-green-500 text-lg md:text-xl" />
    <div>
      <p className="font-semibold">{label}</p>
      <p className="text-sm md:text-base text-gray-400">{value}</p>
    </div>
  </div>
);

const InputField = ({ icon, name, value, onChange, placeholder, required }) => (
  <div className="relative">
    <FontAwesomeIcon icon={icon} className="absolute left-3 top-4 text-gray-400" />
    <input
      type="text"
      name={name}
      value={value}
      onChange={onChange}
      className="pl-10 p-4 bg-[#2b2b2b] rounded-md placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 text-base md:text-lg"
      placeholder={placeholder}
      required={required}
    />
  </div>
);

const TextAreaField = ({ icon, name, value, onChange, placeholder, required }) => (
  <div className="relative">
    <FontAwesomeIcon icon={icon} className="absolute left-3 top-4 text-gray-400" />
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      className="pl-10 p-4 bg-[#2b2b2b] rounded-md w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 text-base md:text-lg"
      rows="5"
      placeholder={placeholder}
      required={required}
    ></textarea>
  </div>
);

import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faComment, faPaperPlane, faSpinner, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const formRef = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_whl0hbs', 'template_zvkf047', templateParams, 'Jq-7l7xQJz6_eAtCO')
      .then((result) => {
        console.log('Message sent successfully:', result.text);
        toast.success("Your message has been successfully sent. Expect feedback soon. Thank you!");
        setFormData({ name: '', email: '', message: '' });
      }, (error) => {
        console.log('Error sending message:', error.text);
        toast.error("There was an error sending your message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    // FIX 1: Full screen width/height, removed outer px padding to eliminate gaps
    <div className="bg-black text-white w-full min-h-screen flex flex-col justify-center items-center overflow-hidden">
      <ToastContainer />
      
      {/* Container takes full width now */}
      <div className="w-full max-w-screen-lg px-4 md:px-8 lg:px-16 h-full flex flex-col justify-center">
        <h1 className="text-[14px] md:text-[16px] lg:text-2xl font-bold text-center text-white">
          GET <span className="text-green-500">IN TOUCH</span>
        </h1>
        <p className="text-center text-[10px] md:text-[13px] mt-2">
          I'M ALWAYS OPEN TO DISCUSSING{" "}
          <span className="font-bold text-yellow-500"> DEVELOPER RELATIONS / COLLABORATION / SOFTWARE DEV WORK OR PARTNERSHIPS </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 w-full">
          {/* Contact Info Section */}
          <div className="space-y-4 text-base md:text-lg flex flex-col justify-center">
            <ContactInfo icon={faWhatsapp} label="Phone" value="+254 701 571 745" />
            <ContactInfo icon={faEnvelope} label="Email" value="petermbuguangumi@gmail.com" />
            <ContactInfo icon={faTwitter} label="Twitter" value="@mbugua276" />
            <ContactInfo icon={faGithub} label="Github" value="P-Mbugua" />
            <ContactInfo icon={faMapMarkerAlt} label="Location" value="Limuru, Kiambu, Kenya" />
          </div>

          {/* Contact Form Section */}
          <div className="space-y-4 mb-10 flex flex-col justify-center">
            <p className="text-[12px] md:text-[14px]">
              For inquiries, collaborations, or professional connections, please reach out using the form below. I’ll be glad to respond promptly.
            </p>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <InputField 
                icon={faUser} 
                name="name" 
                value={formData.name} 
                onChange={handleChange} 
                placeholder="YOUR NAME" 
                required 
                disabled={loading} 
              />
              <InputField 
                icon={faEnvelope} 
                name="email" 
                value={formData.email} 
                onChange={handleChange} 
                placeholder="YOUR EMAIL" 
                required 
                disabled={loading} 
              />
              <TextAreaField 
                icon={faComment} 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="YOUR MESSAGE" 
                required 
                disabled={loading} 
              />
              
              <button 
                type="submit" 
                disabled={loading} 
                className={`w-full bg-green-500 text-black py-3 font-bold rounded-md transition flex justify-center items-center space-x-2 shadow-lg ${loading ? 'opacity-75 cursor-not-allowed' : 'hover:bg-green-600'}`}
              >
                {loading ? (
                  <>
                    <FontAwesomeIcon icon={faSpinner} className="animate-spin text-sm" />
                    <span className="text-[12px]">SENDING...</span>
                  </>
                ) : (
                  <>
                    <FontAwesomeIcon icon={faPaperPlane} className="text-sm" />
                    <span className="text-[12px]">SEND MESSAGE</span>
                  </>
                )}
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
    <FontAwesomeIcon icon={icon} className="text-green-500 text-lg md:text-xl w-6 text-center" />
    <div>
      <p className="font-semibold">{label}</p>
      <p className="text-sm md:text-base text-gray-400">{value}</p>
    </div>
  </div>
);

const InputField = ({ icon, name, value, onChange, placeholder, required, disabled }) => (
  <div className="relative w-full">
    {/* FIX 2: Icon positioned absolutely, centered vertically with flex, consistent left spacing */}
    <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
      <FontAwesomeIcon icon={icon} className="text-[12px]" />
    </div>
    <input 
      type="text" 
      name={name} 
      value={value} 
      onChange={onChange} 
      disabled={disabled}
      className={`pl-10 p-3 bg-[#2b2b2b] rounded-md placeholder-gray-400 w-full focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 text-[12px] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      placeholder={placeholder} 
      required={required} 
    />
  </div>
);

const TextAreaField = ({ icon, name, value, onChange, placeholder, required, disabled }) => (
  <div className="relative w-full">
    {/* FIX 3: Icon positioned at top-left to match textarea start, consistent padding */}
    <div className="absolute left-3 top-3 text-gray-400 pointer-events-none">
      <FontAwesomeIcon icon={icon} className="text-[12px]" />
    </div>
    <textarea 
      name={name} 
      value={value} 
      onChange={onChange} 
      disabled={disabled}
      className={`pl-10 p-3 bg-[#2b2b2b] rounded-md w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 border border-gray-700 text-[12px] ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      rows="5" 
      placeholder={placeholder} 
      required={required} 
    ></textarea>
  </div>
);   
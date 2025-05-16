'use client'
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle } from 'lucide-react';
import NavBar from '@/components/interface/NavBar';


interface ContactForm {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
}

const ContactUsPage = () => {
    const [formData, setFormData] = useState<ContactForm>({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);


    const validateForm = (data: ContactForm) => {
        const newErrors: { [key: string]: string } = {};
        if (!data.name.trim()) {
            newErrors.name = "Name is required";
        }
        if (!data.email.trim() || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
            newErrors.email = "Valid email is required";
        }
        if (data.phone.trim() && (data.phone.length < 10 || data.phone.length > 15)) {
            newErrors.phone = "Phone number must be between 10 and 15 digits";
        }
        if (!data.subject.trim()) {
            newErrors.subject = "Subject is required";
        }
        if (!data.message.trim()) {
            newErrors.message = "Message is required";
        }
        return newErrors;
    };


    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };


    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {

            console.log("Form Data:", formData);
            setIsSubmitted(true);

            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setIsSubmitting(false);
                setIsSubmitted(false); 
            }, 3000);
        } else {
            setIsSubmitting(false);
        }
    };


    return (
        <div className=" min-h-screen p-4 md:p-8">
          <NavBar/>
            <div className="max-w-4xl mx-auto space-y-8">
                <h1 className="text-2xl md:text-2xl font-medium text-center mt-20">
                    Contact Us
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6">
                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Your Name"
                                        className={`w-full px-4 py-2 rounded-md border ${errors.name ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-content/30 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-content transition-colors duration-300'}`}

                                    />
                                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium ">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Your Email"
                                        className={`w-full px-4 py-2 rounded-md border ${errors.email ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-content/30 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-content transition-colors duration-300'}`}

                                    />
                                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium ">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        placeholder="Your Phone Number"
                                        className="w-full px-4 py-2 rounded-md border border-neutral-content/30 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-content transition-colors duration-300"
                                    />
                                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium">Subject</label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject of your inquiry"
                                        className={`w-full px-4 py-2 rounded-md border ${errors.subject ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-content/30 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-content transition-colors duration-300'}`}

                                    />
                                    {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium">Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Your Message"
                                        className={`w-full px-4 py-2 rounded-md border ${errors.message ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-content/30 bg-white/5 text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-neutral-content transition-colors duration-300 min-h-[120px]'}`}

                                    />
                                    {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                                </div>
                                <button
                                    type="submit"
                                    className="w-full btn btn-neutral py-3 rounded-md transition-colors duration-300 flex items-center justify-center"
                                    disabled={isSubmitting}
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5 mr-3 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send className="mr-2 w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>
                            </form>
                        ) : (
                            <div className="text-center p-6 bg-green-100 border border-green-300 rounded-lg">
                                <CheckCircle className="w-12 h-12 mx-auto text-green-500 mb-4" />
                                <h2 className="text-2xl font-semibold text-green-700 mb-2">Message Sent!</h2>
                                <p className="text-gray-600">Thank you for contacting us. We will get back to you shortly.</p>
                            </div>
                        )}
                    </div>

                    {/* Contact Information */}
                    <div
                        className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-4"

                    >
                        <h2 className="text-2xl font-semibold">Contact Information</h2>
                        <div className="space-y-2">
                            <div className="flex items-center">
                                <MapPin className="mr-2 w-5 h-5" />
                                <span className="text-gray-400">Address: [Restaurant Address], Sri Lanka</span> {/* Replace */}
                            </div>
                            <div className="flex items-center">
                                <Phone className="mr-2 w-5 h-5 " />
                                <span className="text-gray-400">Phone: +94 [Phone Number]</span> {/* Replace */}
                            </div>
                            <div className="flex items-center">
                                <Mail className="mr-2 w-5 h-5" />
                                <span className="text-gray-400">Email: info@ceylonspicebites.com</span>  {/* Replace */}
                            </div>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Business Hours</h3>
                            <p className="text-gray-400">
                                Monday - Sunday: 11:00 AM - 11:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsPage;

'use client'
import React, { useState } from 'react';
import { CalendarIcon, CheckCircle, User, Users, Clock, Phone, Mail } from 'lucide-react';
import { format } from 'date-fns';
import NavBar from '@/components/interface/NavBar';
import Image from 'next/image';

const validateForm = (data: any) => {
    const errors: { [key: string]: string } = {};
    if (!data.name || data.name.length < 2) {
        errors.name = "Name must be at least 2 characters.";
    }
    if (!data.email || !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
        errors.email = "Invalid email address.";
    }
    if (!data.phone || data.phone.length < 10 || data.phone.length > 15) {
        errors.phone = "Phone number must be between 10 and 15 digits";
    }
    if (!data.date) {
        errors.date = "A date is required.";
    }
    if (!data.time) {
        errors.time = "Please select a time";
    }
    if (!data.guests || data.guests < 1 || data.guests > 20) {
        errors.guests = "Must be between 1 and 20 guests";
    }
    return errors;
};

const timeSlots = [
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
    "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM", "10:00 PM"
];

const TableBookingPage = () => {
    const [isBooked, setIsBooked] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: new Date(),
        time: "",
        guests: 1,
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showConfirmation, setShowConfirmation] = useState(false);



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, date: new Date(e.target.value) });
    };

    const handleSelectChange = (name: string, value: string) => {
        setFormData({ ...formData, [name]: value });
    };

    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        const validationErrors = validateForm(formData);
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            console.log("Booking data:", formData);
            setIsBooked(true); 
            setShowConfirmation(true);
            setTimeout(() => {
                setIsBooked(false); 
                setShowConfirmation(false);
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: new Date(),
                    time: "",
                    guests: 1,
                });
                setIsSubmitting(false);
            }, 3000);
        } else {
            setIsSubmitting(false);
        }
    };

    const InputField = ({
        label,
        name,
        placeholder,
        value,
        onChange,
        error,
        icon
    }: {
        label: string,
        name: string,
        placeholder: string,
        value: string | number | Date | undefined,
        onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void,
        error?: string,
        icon?: React.ReactNode
    }) => {
        // Convert Date to string if needed
        let inputValue: string | number | undefined;
        if (value instanceof Date) {
            inputValue = value.toISOString().slice(0, 10);
        } else {
            inputValue = value as string | number | undefined;
        }
        return (
            <div className="space-y-1">
                <label htmlFor={name} className="block text-sm font-medium flex items-center">
                    {icon}
                    {label}
                </label>
                <input
                    type="text"
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={inputValue}
                    onChange={onChange}
                    className={`w-full px-4 py-2 rounded-md border ${error ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-500/30 bg-black/20 text-white placeholder:text-gray-400'} focus:outline-none focus:ring-2 focus:ring-neutral-content/50 transition-colors duration-300`}
                />
                {error && <p className="text-xs text-red-400">{error}</p>}
            </div>
        );
    };

    const SelectField = ({
        label,
        name,
        options,
        value,
        onChange,
        error,
        placeholder,
        icon
    }: {
        label: string,
        name: string,
        options: string[],
        value: string,
        onChange: (name: string, value: string) => void,
        error?: string,
        placeholder: string,
        icon?: React.ReactNode
    }) => (
        <div className="space-y-1">
            <label htmlFor={name} className="block text-sm font-medium flex items-center">
                {icon}
                {label}
            </label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={(e) => onChange(name, e.target.value)}
                className={`w-full px-4 py-2 rounded-md border ${error ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-500/30 bg-black/20 text-white'} focus:outline-none focus:ring-2 focus:ring-neutral-content/50 transition-colors duration-300 appearance-none bg-no-repeat bg-right bg-[length:16px_16px]`}
                style={{ backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"%3E%3Cpath d="M6 9l6 6 6-6"/%3E%3C/svg%3E')` }}
            >
                <option value="" disabled className="text-gray-400">{placeholder}</option>
                {options.map((option) => (
                    <option key={option} value={option} className="text-white bg-gray-800 hover:bg-purple-500/20">
                        {option}
                    </option>
                ))}
            </select>
            {error && <p className="text-xs text-red-400">{error}</p>}
        </div>
    );


    const DatePickerField = ({
        label,
        name,
        value,
        onChange,
        error,
        icon
    }: {
        label: string,
        name: string,
        value: Date | undefined,
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
        error?: string,
        icon?: React.ReactNode
    }) => {

        return (
            <div className="space-y-1">
                <label className="block text-sm font-medium flex items-center">
                    {icon}
                    {label}
                </label>
                <input
                    type="date"
                    id={name}
                    name={name}
                    value={value ? format(value, 'yyyy-MM-dd') : ''}
                    onChange={onChange}
                    className={`w-full px-4 py-2 rounded-md border ${error ? 'border-red-500 bg-red-500/10 text-red-400' : 'border-neutral-500/30 bg-black/20 text-white placeholder:text-gray-400'} focus:outline-none focus:ring-2 focus:ring-neutral-content/50 transition-colors duration-300`}
                    aria-describedby="date-picker-label"
                />

                {error && <p className="text-xs text-red-400">{error}</p>}
            </div>
        );
    };

    return (
        <div className="min-h-screen p-4 md:p-8 flex items-center justify-center relative overflow-hidden">
          <Image src={'/table.png'} width={600} height={500} alt='table' className='absolute left-0 -bottom-1/8 opacity-20 '/>
          <NavBar/>
            <div className="w-full max-w-3xl bg-base-200 backdrop-blur-lg rounded-xl shadow-2xl border border-white/10 p-4 md:p-6 lg:p-8">
                {!isBooked ? (
                    <div className="space-y-6">
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-neutral-content mb-4 md:mb-6">
                            Book a Table
                        </h1>
                        <form onSubmit={onSubmit} className="space-y-4 md:space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* Name Input */}
                                <InputField
                                    label="Name"
                                    name="name"
                                    placeholder="Your Name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    error={errors.name}
                                    icon={<User className="inline-block mr-2 w-4 h-4" />}
                                />

                                {/* Email Input */}
                                <InputField
                                    label="Email"
                                    name="email"
                                    placeholder="Your Email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    error={errors.email}
                                    icon={<Mail className="inline-block mr-2 w-4 h-4" />}
                                />

                                {/* Phone Input */}
                                <InputField
                                    label="Phone"
                                    name="phone"
                                    placeholder="Your Phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    error={errors.phone}
                                    icon={<Phone className="inline-block mr-2 w-4 h-4" />}
                                />

                                {/* Guests Select */}
                                <SelectField
                                    label="Guests"
                                    name="guests"
                                    options={Array.from({ length: 20 }, (_, i) => (i + 1).toString())}
                                    value={formData.guests.toString()}
                                    onChange={handleSelectChange}
                                    error={errors.guests}
                                    placeholder="Number of guests"
                                    icon={<Users className="inline-block mr-2 w-4 h-4" />}
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                                {/* Date Picker */}
                                <DatePickerField
                                    label="Date"
                                    name="date"
                                    value={formData.date}
                                    onChange={handleDateChange}
                                    error={errors.date}
                                    icon={<CalendarIcon className="inline-block mr-2 w-4 h-4" />}
                                />

                                {/* Time Select */}
                                <SelectField
                                    label="Time"
                                    name="time"
                                    options={timeSlots}
                                    value={formData.time}
                                    onChange={handleSelectChange}
                                    error={errors.time}
                                    placeholder="Select a time"
                                    icon={<Clock className="inline-block mr-2 w-4 h-4" />}
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"

                                className="w-full btn btn-neutral py-3 rounded-md transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? 'Processing...' : 'Confirm Reservation'}
                            </button>
                        </form>
                    </div>
                ) : (
                    showConfirmation && (
                        <div className="text-center p-6 bg-green-500/10 border border-green-500/20 rounded-lg shadow-md">
                            <CheckCircle className="w-12 h-12 mx-auto text-green-400 mb-4" />
                            <h2 className="text-2xl font-semibold text-white mb-2">Reservation Confirmed!</h2>
                            <p className="text-gray-300">Thank you for your booking. We look forward to seeing you soon.</p>
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

export default TableBookingPage;

import React from 'react';
import { ChefHat, History, Award, Leaf, Phone, Mail, MapPin } from 'lucide-react';
import Image from 'next/image'
import NavBar from '@/components/interface/NavBar';

const AboutUsPage = () => {


  return (
    <div className=" min-h-screen p-4 md:p-8 relative" >
      <NavBar/>
      <Image src={'/shop2.jpg'} width={1000} height={500} alt='bg' className='-z-10 fixed top-0 left-0 w-full object-fill overflow-hidden opacity-30'/>
      <div className="max-w-4xl mx-auto space-y-8">
        <h1 className="text-2xl md:text-2xl font-bold text-center pt-20 ">
          About Us: Ceylon Spice Bites
        </h1>

        <div
          className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-4"

        >
          <h2 className="text-2xl font-semibold flex items-center">
            <ChefHat className="mr-2 w-6 h-6" />
            Our Story
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Ceylon Spice Bites was born out of a passion for sharing the vibrant and
            diverse flavors of Sri Lankan cuisine with the world.  Founded by
            Chef [Chef's Name], who hails from the heart of Sri Lanka, our
            restaurant is a culmination of years of culinary experience and a deep
            appreciation for traditional recipes passed down through generations.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our journey began with a simple desire: to create a warm and inviting
            space where people could gather to enjoy authentic Sri Lankan dishes
            made with fresh, high-quality ingredients.  From our humble beginnings,
            we've grown into a beloved culinary destination, known for our
            commitment to quality, flavor, and exceptional service.
          </p>
        </div>

        <div
          className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-4"

        >
          <h2 className="text-2xl font-semibold flex items-center">
            <History className="mr-2 w-6 h-6" />
            Our Philosophy
          </h2>
          <p className="text-gray-400 leading-relaxed">
            At Ceylon Spice Bites, we believe that great food starts with great
            ingredients.  We source the freshest produce, spices, and seafood,
            often from local suppliers, to ensure that every dish bursts with
            authentic flavor.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-400">
            <li>
              <strong>Authenticity:</strong> We stay true to traditional Sri Lankan
              recipes and cooking techniques, passed down through generations.
            </li>
            <li>
              <strong>Quality:</strong> We use only the finest, freshest ingredients,
              sourcing locally whenever possible.
            </li>
            <li>
              <strong>Passion:</strong> We are passionate about sharing our love for
              Sri Lankan cuisine with our guests.
            </li>
            <li>
              <strong>Experience:</strong> We strive to provide a warm, welcoming, and
              memorable dining experience for every guest.
            </li>
          </ul>
        </div>

        <div
          className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-4"

        >
          <h2 className="text-2xl font-semibold flex items-center">
            <Award className="mr-2 w-6 h-6" />
            Our Chef
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-40 h-40 rounded-full bg-base-300 flex items-center justify-center">
              <ChefHat className="w-20 h-20 " />
            </div>
            <div className="space-y-2">
              <p className="text-gray-400 font-semibold">Chef [Chef's Name]</p>
              <p className="text-gray-400">
                With [Number] years of experience in Sri Lankan cuisine,
                Chef [Chef's Name]'s culinary journey has taken them from the
                bustling kitchens of Colombo to renowned restaurants around the
                world.  Their passion for food and dedication to preserving the
                authentic flavors of their homeland are evident in every dish
                they create.
              </p>
              <p className="text-gray-400">
                [He/She] is committed to using traditional techniques and the
                freshest ingredients to bring the true taste of Sri Lanka to
                your table.
              </p>
            </div>
          </div>
        </div>

        <div
          className="bg-base-200/80 backdrop-blur-md rounded-xl shadow-lg p-4 md:p-6 space-y-4"

        >
          <h2 className="text-2xl font-semibold flex items-center">
            <Leaf className="mr-2 w-6 h-6" />
            Our Commitment
          </h2>
          <p className="text-gray-400 leading-relaxed">
            We are committed to providing our guests with an exceptional dining
            experience that celebrates the rich culinary heritage of Sri Lanka.
            From the warm hospitality to the flavorful dishes, we strive to
            create a memorable and satisfying visit for everyone.
          </p>
          <p className="text-gray-400 leading-relaxed">
            We also care about our community and the environment. We try to source
            ingredients responsibly and minimize our impact on the planet.
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUsPage;

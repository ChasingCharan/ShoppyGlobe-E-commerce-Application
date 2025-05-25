import React from 'react';
import { useNavigate } from "react-router-dom";

const About = () => {
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100 min-h-screen">
        {/* Hero Section */}
        <div
            className="h-64 bg-cover bg-center flex items-center justify-center"
            style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080')`,
            }}
        >
            <div className="bg-gray-500 bg-opacity-50 p-6 rounded-md text-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
            <p className="text-lg text-gray-300 mt-2">
                Discover who we are and what we stand for.
            </p>
            </div>
        </div>

        {/* Mission Statement Section */}
        <section className="container mx-auto py-16 px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Mission</h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            At <span className="font-bold text-blue-500">ShoppyGlobe</span>, we
            strive to deliver innovative solutions that enhance lives and
            businesses. Our goal is to create a sustainable future through
            cutting-edge technology and unwavering commitment to excellence.
            </p>
        </section>

        {/* Team Section */}
        <section className="bg-white py-16 px-4">
            <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Meet Our Team
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Team Member 1 */}
                <div className="text-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_NEc8A16sOFBrLMoOcBUwFZlZ84A9UzfRw&s"
                    alt="Team Member"
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">John Doe</h3>
                <p className="text-gray-600">CEO & Founder</p>
                </div>
                {/* Team Member 2 */}
                <div className="text-center">
                <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc_NEc8A16sOFBrLMoOcBUwFZlZ84A9UzfRw&s"
                    alt="Team Member"
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Jane Smith</h3>
                <p className="text-gray-600">Chief Technology Officer</p>
                </div>
                {/* Team Member 3 */}
                <div className="text-center">
                <img
                    src="https://static.thenounproject.com/png/3114837-200.png"
                    alt="Team Member"
                    className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-bold text-gray-800">Emily Davis</h3>
                <p className="text-gray-600">Head of Design</p>
                </div>
            </div>
            </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="bg-blue-500 py-16 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Journey</h2>
            <p className="text-lg max-w-2xl mx-auto mb-8">
            Be a part of something bigger. Together, we can achieve great things
            and make a positive impact on the world.
            </p>
            <button className="bg-white text-blue-500 font-bold py-2 px-6 rounded-lg hover:bg-gray-200"
            onClick={() => navigate("/contact")}>
            Contact Us
            </button>
        </section>
        </div>
    );
};

export default About;

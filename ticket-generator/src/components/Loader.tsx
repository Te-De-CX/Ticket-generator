import React from 'react';
import Lottie from 'lottie-react';
import loaderAnimation from '../assets/Animation - 1740219178095 (1).json'; // Adjust the path to your JSON file

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen w-full fixed top-0 left-0 z-50">
            {/* Animated Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-950 animate-gradient"></div>

            {/* Lottie Animation */}
            <div className="w-48 h-48 relative z-10">
                <Lottie animationData={loaderAnimation} loop={true} />
            </div>
        </div>
    );
};

export default Loader;
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import Form from './Form';
import Ticket from './Ticket';
import useStore from '../store/input-store';
import Loader from './Loader'; // Import the Loader component

export default function Layout() {
    const { name, github_name, email, image_src } = useStore();
    const [isLoading, setIsLoading] = useState(true); // Add loading state

    // Simulate loading for 3 seconds (replace with your actual loading logic)
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000); // 3 seconds

        return () => clearTimeout(timer);
    }, []);

    localStorage.clear();

    return (
        <div className=" h-screen flex flex-col">
            {/* Show the loader while loading */}
            {isLoading && <Loader />}

            {/* Animate the main content after loading */}
            <AnimatePresence>
                {!isLoading && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }} // Start slightly below and transparent
                        animate={{ opacity: 1, y: 0 }} // Fade in and move up
                        exit={{ opacity: 0, y: 20 }} // Fade out and move down
                        transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
                        className="relative flex-grow"
                    >
                        {/* Background Pattern */}
                        <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-lines.svg')]">
                            {/* Top Squiggly Line */}
                            <div className="absolute top-0 right-0 md:w-1/6 h-24 w-2/6 md:h-36 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-squiggly-line-top.svg')]"></div>

                            {/* Circles */}
                            <div className=" top-0 left-0 w-full h-full fixed">
                                <div className="absolute md:w-36 md:h-36 top-20 left-20 w-24 h-24 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-circle.svg')]"></div>
                                <div className="absolute top-3/6 left-3/5 md:w-36 md:h-36 w-24 h-24 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-circle.svg')]"></div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="relative z-20">
                            {/* Navigation */}
                            <nav className="flex items-center justify-center h-16">
                                <img src="/src/assets/images/logo-full.svg" className="h-5" alt="website-header-logo" />
                            </nav>

                            {/* Form or Ticket */}
                            <div className="flex justify-center items-center">
                                {!name && <Form />}
                                {name && email && github_name && image_src && <Ticket />}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
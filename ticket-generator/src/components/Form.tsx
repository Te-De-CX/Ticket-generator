import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Import Framer Motion
import ImageInput from './ImageInput';
import useStore from '../store/input-store';
import { IoMdInformationCircleOutline } from 'react-icons/io';

const Form: React.FC = () => {
    const { name, github_name, email, image_src, setname, setgithub_name, setemail, setimage_src } = useStore();

    // Local state for form inputs
    const [localName, setLocalName] = useState<string>(name || '');
    const [localEmail, setLocalEmail] = useState<string>(email || '');
    const [localGithubName, setLocalGithubName] = useState<string>(github_name || '');
    const [localImageSrc, setLocalImageSrc] = useState<string | null>(image_src || null);

    // State for tracking validation errors
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    // Handle image change from ImageInput
    const handleImageChange = (imageSrc: string | null) => {
        setLocalImageSrc(imageSrc);
    };

    // Validate form fields
    const validateForm = () => {
        const newErrors: { [key: string]: string } = {};

        if (!localName.trim()) {
            newErrors.name = 'Please enter a valid name.';
        }
        if (!localEmail.trim()) {
            newErrors.email = 'Please enter a valid email.';
        }
        if (!localGithubName.trim()) {
            newErrors.github = 'Please enter a valid username.';
        }
        if (!localImageSrc) {
            newErrors.image = 'Please upload an avatar.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if no errors
    };

    // Handle form submission
    const handleSubmit = () => {
        const isValid = validateForm();

        if (isValid) {
            // Save all form data to the store
            setname(localName);
            setemail(localEmail);
            setgithub_name(localGithubName);
            setimage_src(localImageSrc);

            // Log the saved data (for debugging)
            console.log('Form data saved to store:', {
                name: localName,
                email: localEmail,
                github_name: localGithubName,
                image_src: localImageSrc,
            });
        }
    };

    // Check if all fields are filled to enable the button
    const isFormValid = localName.trim() && localEmail.trim() && localGithubName.trim() && localImageSrc;

    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }} // Fade in and slide up
            animate={{ opacity: 1, y: 0 }} // Fully visible
            transition={{ duration: 0.5, ease: 'easeInOut' }} // Smooth transition
            className="text-white pb-6"
        >
            <header className="flex flex-col items-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl w-11/12 md:w-8/12 text-center capitalize font-semibold">
                    Your journey to Coding Conf 2025 starts here!
                </h1>
                <p className="text-xs sm:text-sm md:text-sm mt-3 text-center">
                    Secure your spot at next year's biggest coding conference.
                </p>
            </header>
            <main className="flex flex-col items-center mt-6 w-full max-w-md mx-auto">
                {/* Avatar Upload Section */}
                <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="imageInput" className="text-sm sm:text-base">Upload Avatar</label>
                    <ImageInput onImageChange={handleImageChange} />
                    <AnimatePresence>
                        {errors.image && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }} // Fade in and slide down
                                animate={{ opacity: 1, y: 0 }} // Fully visible
                                exit={{ opacity: 0, y: -10 }} // Fade out and slide up
                                transition={{ duration: 0.2 }} // Quick transition
                                className="text-red-500 text-xs flex items-center gap-1"
                            >
                                <IoMdInformationCircleOutline className="w-4 h-4" />
                                {errors.image}
                            </motion.p>
                        )}
                    </AnimatePresence>
                    <p className="flex gap-1 text-xs py-1">
                        <IoMdInformationCircleOutline className="w-3 sm:w-4" />
                        Upload your photo (JPG or PNG, max size: 500KB).
                    </p>
                </div>

                {/* Full Name Input */}
                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="name" className="text-sm sm:text-base">Full Name</label>
                    <input
                        id="name"
                        className="w-full h-11 rounded-lg glassmorphism outline-none px-2 mt-2 placeholder:text-gray-500"
                        type="text"
                        value={localName}
                        onChange={(e) => setLocalName(e.target.value)}
                        placeholder='Jonathan Kristof'
                    />
                    <AnimatePresence>
                        {errors.name && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }} // Fade in and slide down
                                animate={{ opacity: 1, y: 0 }} // Fully visible
                                exit={{ opacity: 0, y: -10 }} // Fade out and slide up
                                transition={{ duration: 0.2 }} // Quick transition
                                className="text-red-500 text-xs flex items-center gap-1 mt-1"
                            >
                                <IoMdInformationCircleOutline className="w-4 h-4" />
                                {errors.name}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Email Input */}
                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="email" className="text-sm sm:text-base">Email Address</label>
                    <input
                        id="email"
                        className="w-full h-11 rounded-lg glassmorphism outline-none px-2 mt-2 placeholder:text-gray-500"
                        type="email"
                        value={localEmail}
                        onChange={(e) => setLocalEmail(e.target.value)}
                        placeholder='jonatan@email.com'
                    />
                    <AnimatePresence>
                        {errors.email && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }} // Fade in and slide down
                                animate={{ opacity: 1, y: 0 }} // Fully visible
                                exit={{ opacity: 0, y: -10 }} // Fade out and slide up
                                transition={{ duration: 0.2 }} // Quick transition
                                className="text-red-500 text-xs flex items-center gap-1 mt-1"
                            >
                                <IoMdInformationCircleOutline className="w-4 h-4" />
                                {errors.email}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* GitHub Username Input */}
                <div className="flex flex-col w-full mt-4">
                    <label htmlFor="github" className="text-sm sm:text-base">GitHub Username</label>
                    <input
                        id="github"
                        className="w-full h-11 rounded-lg glassmorphism outline-none px-2 mt-2 placeholder:text-gray-500"
                        type="text"
                        value={localGithubName}
                        onChange={(e) => setLocalGithubName(e.target.value)}
                        placeholder='@jonatankristof0101'
                    />
                    <AnimatePresence>
                        {errors.github && (
                            <motion.p
                                initial={{ opacity: 0, y: -10 }} // Fade in and slide down
                                animate={{ opacity: 1, y: 0 }} // Fully visible
                                exit={{ opacity: 0, y: -10 }} // Fade out and slide up
                                transition={{ duration: 0.2 }} // Quick transition
                                className="text-red-500 text-xs flex items-center gap-1 mt-1"
                            >
                                <IoMdInformationCircleOutline className="w-4 h-4" />
                                {errors.github}
                            </motion.p>
                        )}
                    </AnimatePresence>
                </div>

                {/* Submit Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }} // Scale up on hover
                    whileTap={{ scale: 0.95 }} // Scale down on click
                    className={`font-bold text-black bg-[hsl(7,71%,60%)] text-sm sm:text-base px-3 rounded-lg py-3 mt-6 w-full ${
                        !isFormValid ? 'cursor-not-allowed' : 'hover:bg-[hsl(7,71%,50%)]'
                    }`}
                    onClick={handleSubmit}
                    // disabled={!isFormValid}
                >
                    Generate My Ticket
                </motion.button>
            </main>
        </motion.section>
    );
};

export default Form;
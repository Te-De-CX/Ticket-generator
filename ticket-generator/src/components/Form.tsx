import React, { useState } from 'react';
import ImageInput from './ImageInput';
import useStore from '../store/input-store';

const Form: React.FC = () => {
    const { name, github_name, email, image_src, setname, setgithub_name, setemail, setimage_src } = useStore();

    // Local state for form inputs
    const [localName, setLocalName] = useState<string>(name || '');
    const [localEmail, setLocalEmail] = useState<string>(email || '');
    const [localGithubName, setLocalGithubName] = useState<string>(github_name || '');
    const [localImageSrc, setLocalImageSrc] = useState<string | null>(image_src || null);

    // Handle image change from ImageInput
    const handleImageChange = (imageSrc: string | null) => {
        setLocalImageSrc(imageSrc);
    };

    // Handle form submission
    const handleSubmit = () => {
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
    };

    return (
        <section className="text-white">
            <header className="flex flex-col items-center">
                <h1 className="text-3xl w-7/12 text-center capitalize font-semibold">
                    Your journey to Coding Conf 2025 starts here!
                </h1>
                <p className="text-[0.75rem] mt-3">Secure your spot at next year's biggest coding conference.</p>
            </header>
            <main className="flex flex-col items-start">
                <div>
                    <label htmlFor="imageInput">Upload Avatar</label>
                    <ImageInput onImageChange={handleImageChange} />
                    <p className="text-sm text-yellow-500">"Warning" Upload your photo (jpg or png, max size: 500KB).</p>
                </div>
                <div className="flex flex-col gap-4 capitalize my-2">
                    <label htmlFor="name" className="text-xm">Full Name</label>
                    <input
                        id="name"
                        className="bg-gray-600 w-96 h-11 rounded-lg border-white border-2"
                        type="text"
                        value={localName}
                        onChange={(e) => setLocalName(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4 capitalize my-3">
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email"
                        className="bg-gray-600 w-64 h-9 rounded-lg border-white border-2"
                        type="email"
                        value={localEmail}
                        onChange={(e) => setLocalEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-col gap-4 capitalize my-3">
                    <label htmlFor="github">GitHub Username</label>
                    <input
                        id="github"
                        className="bg-gray-600 w-64 h-9 rounded-lg border-white border-2"
                        type="text"
                        value={localGithubName}
                        onChange={(e) => setLocalGithubName(e.target.value)}
                    />
                </div>
                <button
                    className="bg-amber-500 px-3 text-lg rounded-lg py-2"
                    onClick={handleSubmit}
                >
                    Generate My Ticket
                </button>
            </main>
        </section>
    );
};

export default Form;
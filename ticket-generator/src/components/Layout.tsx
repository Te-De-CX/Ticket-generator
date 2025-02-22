import React from 'react';
import Form from './Form';
import Ticket from './Ticket';
import useStore from '../store/input-store';

export default function Layout() {
    const { name, github_name, email, image_src } = useStore();
    localStorage.clear();

    return (
        <div className="min-h-screen flex flex-col">
            {/* Top Section */}
            <div className="relative flex-grow">
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-cover bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-lines.svg')]">
                    {/* Top Squiggly Line */}
                    <div className="absolute top-0 right-0 h-24 w-1/4 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-squiggly-line-top.svg')]"></div>

                    {/* Circles */}
                    <div className="absolute top-0 left-0 w-full h-full">
                        <div className="absolute top-20 left-20 w-24 h-24 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-circle.svg')]"></div>
                        <div className="absolute top-10 left-10 md:left-24 w-24 h-24 bg-contain bg-no-repeat bg-center bg-[url('/src/assets/images/pattern-circle.svg')]"></div>
                    </div>
                </div>

                {/* Content */}
                <div className="relative z-50">
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
            </div>

            {/* Footer (Bottom Pattern) */}
            <footer className="w-full h-full md:h-48 absolute bottom-0 left-0">
                {/* Desktop Footer */}
                <div className="hidden md:block w-full h-full bg-contain bg-no-repeat bg-left-bottom bg-[url('/src/assets/images/pattern-squiggly-line-bottom-desktop.svg')]"></div>

                {/* Mobile/Tablet Footer */}
                <div className="md:hidden w-8/12 h-full bg-contain bg-no-repeat bg-left-bottom bg-[url('/src/assets/images/pattern-squiggly-line-bottom-mobile-tablet.svg')]"></div>
            </footer>
        </div>
    );
}
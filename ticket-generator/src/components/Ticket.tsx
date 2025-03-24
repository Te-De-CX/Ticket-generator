import React from "react";
import useStore from "../store/input-store";

const Ticket = () => {
    // Getting values from store
    const { name, github_name, email, image_src } = useStore();
    // Ticket number
    const ticket_no = 13437;
    // Getting date
    const date = new Date();
    // Array of months
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    return (
        <section className="text-white p-4 sm:p-6 md:p-8 lg:p-10">
            <div className="flex items-center mb-6 justify-center flex-col text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold md:w-5/12">
                    Congrats, <span className="gradient-text capitalize ">{name}</span>! Your ticket is ready.
                </h2>
                <p className="text-sm sm:text-base md:text-base mt-2 md:w-7/12">
                    We've emailed your ticket to <span className="text-[hsl(7,71%,60%)]">{email}</span> and will send updates in the run-up to the event.
                </p>
            </div>
            <div className="bg-contain bg-no-repeat bg-center h-48 sm:h-44 md:h-60 bg-[url('/src/assets/images/pattern-ticket.svg')] flex flex-row items-center justify-center p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="flex flex-col gap-7  md:gap-15 relative right-5 md:right-14">
                    <div>
                        <img src="/src/assets/images/logo-full.svg" alt="Logo" className="w-38 sm:w-32 md:w-40 lg:w-48" />
                        <p className="text-[0.8rem] sm:text-sm md:text-base mt-1 md:mt-2 relative left-8 md:left-10">
                            {months[date.getMonth()]} {date.getDate()}, {date.getFullYear()} / Austin, TX
                        </p>
                    </div>
                    <div className="flex gap-4 sm:gap-4 md:gap-5 items-center">
                        <img src={image_src} className="w-16 sm:w-16 md:w-20 lg:w-24 rounded-xl" alt="User" />
                        <div className="flex flex-col md:gap-4 gap-2">
                            <h3 className="text-md sm:text-base md:text-2xl font-bold capitalize">{name}</h3>
                            <div className="flex items-center gap-1">
                                <img src="/src/assets/images/icon-github.svg" alt="GitHub" className="w-4 sm:w-5 md:w-6" />
                                <p className="text-sm sm:text-sm md:text-base">@{github_name}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="rotate-90 text-base md:text-lg lg:text-xl font-bold relative sm:left-8 left-13 md:left-16">
                    #0{ticket_no}
                </div>
            </div>
        </section>
    );
};

export default Ticket;
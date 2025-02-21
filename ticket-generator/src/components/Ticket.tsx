import React from "react";
import useStore from "../store/input-store";

const Ticket = () => {
    //geting values from store
    const { name, github_name, email, image_src, setname, setgithub_name, setemail, setimage_src } = useStore();
    // ticket number
    const ticket_nô = 13437;
    //geting date
    const date = new Date();
    //array of months
    const months = [ "January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
    return (
        <>
            <section className="text-white">
                <div>
                    <h2>
                        congrats, <span>{name}</span>! your ticket is ready.
                    </h2>
                    <p>
                        We've emailed your ticket to <span>{email}</span> and will send updates in the run up to the event.
                    </p>
                </div>
                <div className="bg-contain bg-no-repeat bg-center h-48 bg-[url('/src/assets/images/pattern-ticket.svg')] flex flex-row items-center justify-center py-3">
                   <div className="flex flex-col">
                    <div>
                        <img src="/src/assets/images/logo-full.svg" alt="" />
                        <p>{months[date.getMonth()]} {date.getDate()}, {date.getFullYear()} / Austin, TX</p>
                    </div>
                    <div className="flex gap-5">
                        <img src={image_src} className="w-16 rounded-xl" alt="" />
                        <div>
                            <h3>{name}</h3>
                            <div>
                                <img src="" alt="" />
                                <p>@{github_name}</p>
                            </div>
                        </div>
                    </div>
                   </div>
                   <div className="rotate-90">
                        #0{ ticket_nô }
                   </div>
                </div>
            </section>
        </>
    )

}

export default Ticket;
import React from 'react';
import Form from "./Form";
import Ticket from './Ticket';
import useStore from '../store/input-store';

export default function Layout() {

  const { name, github_name, email, image_src, setname, setgithub_name, setemail, setimage_src } = useStore();
  return (
    <>
        <section className='bg-[url("/src/assets/images/background-desktop.png")] h-screen w-screen bg-cover bg-no-repeat bg-center m-0 p-0'>
          <div className='h-screen w-screen bg-cover bg-no-repeat bg-center m-0 p-0 bg-[url("/src/assets/images/pattern-lines.svg")]' >
              <div className='h-2/12 w-3/12 absolute right-0 bg-cover bg-no-repeat bg-center m-0 p-0 bg-[url("/src/assets/images/pattern-squiggly-line-top.svg")]' >
              </div>
              <div className='h-4/12  w-6/12 absolute left-0 bottom-0 bg-cover bg-no-repeat bg-center m-0 p-0 bg-[url("/src/assets/images/pattern-squiggly-line-bottom-desktop.svg")]' >
              </div>
              <div className='flex justify-center items-center top-0 left-0 absolute w-screen h-screen'>
                <div className='w-30 h-40 right-0 bg-contain flex items-center bg-no-repeat bg-center m-0 p-0 bg-[url("/src/assets/images/pattern-circle.svg")]' >
                </div>
              </div>
              <div className='z-50 relative' >
                <nav className="flex items-center justify-center h-20" >
                    <img src="/src/assets/images/logo-full.svg" className="h-5" alt="website-header-logo" />
                </nav>
                { !name &&  <Form />}
                { name && <Ticket />}
              </div>
          </div>
        </section>
    </>
  )
}


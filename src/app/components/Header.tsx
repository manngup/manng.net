"use client"

import React from 'react'
import Image from 'next/image'
import next from 'next'

import { TypeAnimation } from 'react-type-animation';

const TypedName = () => {
  return (
    <TypeAnimation
      sequence={[
        // Same substring at the start will only be typed out once, initially
        'Developer',
        1000, // wait 1s
        'Engineer',
        1000,
        'Producer',
        1000,
        'Student',
        1000
      ]}
      wrapper="span"
      speed={50}
      //style={{ fontSize: '2em', display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};

const Header = () => {
  return ( 
    <section>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <div className="col-span-7 place-self-center text-center sm:text-left">
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
                    Hi I&apos;m Mann!
                    <br />
                    <TypedName />
                </h1>
                <p className="text-gray-400 text-base sm:text-lg mb-6 lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices nisl magna, eget tempor sem dignissim eget.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-white hover:bg-gray-400 text-black">Hire Me</button>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full bg-transparent hover:bg-gray-700 text-white border border-white mt-3">Resume</button>
                </div>
            </div>
            <div className="col-span-5 place-self-center mt-4 lg:mt-0 ">
                <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                    src="/images/avatar-no-bg.png"
                    alt="portfolio image"
                    className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    width={300}
                    height={300}
                    />
                </div>
            </div>
        </div>
        
    </section>
  )
}

export default Header
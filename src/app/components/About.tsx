import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="text-white">
        <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
            src="/images/landscape.jpg" 
            alt="landscape image"
            width={500}
            height={500}
            />
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base lg:text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices nisl magna, eget tempor sem dignissim eget.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <section id="about" className="text-white">
        <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image 
            src="/images/djing-min-min.jpg"
            alt="djing image"
            width={500}
            height={500}
            className='mb-4'
            />
            <div>
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base lg:text-lg mb-4">
                I am currently completing a Bachelor of Science in Engineering at the University of Michigan. I am majoring in Computer Science and minoring in Music.
                </p>
                <p className="text-base lg:text-lg">
                I have also recently started leading a team of developers in making an app, Park Swift, in a full stack development club on campus called VOID tech. We aim to make it easier for students to find parking spaces to rent in Ann Arbor.
                </p>
            </div>
        </div>
    </section>
  )
}

export default About
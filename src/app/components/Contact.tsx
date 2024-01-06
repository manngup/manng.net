import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from 'next/link';

const Contact = () => {
  return (
    <section id="contact" className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">        
        <div>
            <h5 className="text-xl font-bold text-white my-2">
                Connect with me!
            </h5>
            <p className="text-gray-400 mb-4 max-w-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices nisl magna, eget tempor sem dignissim eget.
            </p>
            <div className="socials flex flex-row gap-2">
                <Link href={"https://github.com/Malrigus"}>
                    <GitHubIcon style={{ width: '5rem', height: '5rem' }} />
                </Link>
                <Link href={"https://www.linkedin.com/in/manngupta22/"}>
                    <LinkedInIcon style={{ width: '5rem', height: '5rem' }} />
                </Link>
            </div>
        </div>
        <div>
            <form className="flex flex-col">
                <div className="mb-6">
                    <label htmlFor="email" className="text-white block text-sm font-medium mb-2">
                        Your Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        required placeholder="name@gmail.com"
                        className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="subject" className="text-white block text-sm font-medium mb-2">
                        Subject
                    </label>
                    <input
                        type="text"
                        id="subject"
                        required placeholder="Hi, what's up!"
                        className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
                    />
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="text-white block text-sm font-medium mb-2">
                        Message
                    </label>
                    <textarea
                        name="message"
                        id="message"
                        required placeholder="Are you free sometime to chat?"
                        className="bg-gray-100 border border-gray-400 placeholder-gray-400 text-gray-600 rounded p-2 block w-full"
                    />
                </div>
                <button 
                    type="submit"
                    className="border rounded block w-full p-3 font-semibold hover:scale-105 transition-all duration-250"
                >
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact
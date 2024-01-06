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
            <form className="flex flex-col gap-4">
                space for email contact form
            </form>
        </div>
    </section>
  )
}

export default Contact
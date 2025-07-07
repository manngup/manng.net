import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="text-white">
      <div className="md:grid grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/djing-min-min.jpg"
          alt="djing image"
          width={600}
          height={600}
          className="mb-4"
        />
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
          <p className="text-base lg:text-lg mb-4">
            I’m currently pursuing a Bachelor of Science in Engineering at the
            University of Michigan, majoring in Computer Science with a minor in
            Music.
          </p>
          <p className="text-base lg:text-lg">
            I’m also the Vice President of Development at VOID Tech, a
            full-stack development club on campus. I currently lead a team
            building a VOD streaming platform for a local film studio.
            Previously, I led the development of Park Swift, an app that helps
            students find and rent parking spots in Ann Arbor.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react'
import dynamic from 'next/dynamic'
const AboutAnimation = dynamic(() => import('./AboutAnimation'), {
  loading: () => <p>Loading...</p>,
  ssr: true,
})

const About = () => {
  return (
    <section id="about" className='max-w-6xl mx-auto px-3 py-12'>
      <p className="text-5xl font-bold text-center">
        <span className="about mr-2">About</span>
        <span className="aboutme bg-gradient-to-r from-blue-500 via-purple-600 to-red-500 text-transparent bg-clip-text">Me</span>
      </p>
      <div className="aboutContainer flex flex-col md:flex-row mx-8 md:mx-0">
        <div className="aboutAnimation md:w-1/2 ">
          <AboutAnimation />
        </div>
        <div className="content md:w-1/2 flex flex-col justify-center text-center sm:text-left gap-2">
          <h3 className="heading text-base sm:text-2xl font-semibold">A Frontend Developer trying his best.</h3>
          <p className="text text-xs sm:text-sm ">Hey 👋, I am a Frontend Developer with a passion for building beautiful and functional user interfaces. I am a self-taught developer and I love to learn new things. I am a quick learner and I am always ready to take up new challenges. I have experience in working with HTML-5, CSS-3, VanillaJS, ReactJS, NextJS-13, TypeScript, Tailwind CSS and exploring new efficient technologies.</p>
        </div>
      </div>
    </section>
  )
}

export default About
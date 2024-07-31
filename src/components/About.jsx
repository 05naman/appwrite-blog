import React from 'react'
import about from"../image/about.jpg"

function About() {
  return (
    <div className='flex flex-col md:flex-row justify-center w-screen h-auto md:h-screen p-4 md:p-0'> {/* Changed */}
      <div className='mt-4 md:mt-44 md:ml-24 flex justify-center'> {/* Changed */}
      <img src={about} alt="about" className=' h-80 w-full md:h-80 md:w-auto rounded-md mb-3' />
      </div>
      <div className='text-white hover:text-teal-300 flex-col justify-between pr-48 mt-28 ml-60 font-serif md:ml-44 md:pr-48 md:mt-28'>
        <h1 className='font-serif font-bold text-3xl text-white md:text-3xl'>Bloggy</h1>
        <p className='mt-4'>Welcome to Bloggy, your ultimate destination for all things fun and uplifting! Here at Bloggy, we believe that a good laugh and a positive mindset can transform your day and enrich your life. Our mission is to bring a little more joy, a few more smiles, and a lot more laughter into the world.</p>

        <p className='mt-5'>Bloggy is more than just a blog—it's a community. We invite you to join our lively group of readers and contributors who share a love for fun and positivity. Whether you're sharing a funny story, commenting on a post, or engaging in a lively discussion, you'll find a welcoming and supportive environment here.We envision Bloggy as a beacon of positivity in the digital world. Our goal is to spread happiness, foster connections, and build a community where everyone feels welcome and uplifted. We believe that by sharing joy and laughter, we can make a positive impact on the world, one smile at a time.</p>

        <p className='mt-5'>Thank you for visiting Bloggy. We hope our content brings a little more joy into your life. Be sure to subscribe to our newsletter, follow us on social media, and join in the fun. We’re excited to have you as part of our community, and we can't wait to see what joy we can create together.</p>

      </div>
    </div>
  )
}

export default About
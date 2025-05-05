import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate ab alias aspernatur minus possimus deserunt ipsum culpa, consectetur facilis modi ex fugiat natus nulla exercitationem, sit, praesentium nesciunt ullam! Blanditiis?</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet earum eaque nostrum officia, accusantium voluptatum molestiae natus impedit deleniti, repellendus rerum saepe dolorum reiciendis. Beatae aliquid adipisci nobis ipsa architecto.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore architecto esse nemo eos, sint voluptates, veniam officia blanditiis magni qui nihil. Dolore possimus veritatis fugiat vel maxime at esse molestias.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi explicabo, culpa eius odio nulla, vel deserunt, ratione deleniti dolores non minima nihil fuga. Suscipit velit dolor voluptatibus doloremque? Ipsum.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi explicabo, culpa eius odio nulla, vel deserunt, ratione deleniti dolores non minima nihil fuga. Suscipit velit dolor voluptatibus doloremque? Ipsum.</p>
        </div>

        <div className='border px-10 md:px-16 py-8 flex flex-col gap-5'>
          <b>Exceptional Customer Service:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis sequi explicabo, culpa eius odio nulla, vel deserunt, ratione deleniti dolores non minima nihil fuga. Suscipit velit dolor voluptatibus doloremque? Ipsum.</p>
        </div>

      </div>

      <NewsletterBox/>
    </div>

  )
}

export default About
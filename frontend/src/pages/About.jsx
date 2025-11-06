import React from 'react'
import Title from '../components/Title'
import {assets} from "../assets/assets"
import NewsletterBox from "../components/NewsletterBox"

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt=""/>
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores nesciunt culpa eveniet, quos perspiciatis non, nam, beatae est quasi ullam ab quaerat accusamus. Obcaecati officia illo ipsum optio beatae fugit.</p>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste consequatur, eum ullam, deleniti omnis, quasi nobis quas corporis delectus ipsa sint rerum adipisci eligendi numquam laboriosam consequuntur exercitationem et libero.</p>
          <b className='text-gray-800'>Our Mission</b>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci debitis velit quasi illum voluptates doloribus exercitationem molestiae reiciendis quisquam quidem cumque omnis alias fuga commodi, consequuntur rerum necessitatibus assumenda iure.</p>
        </div>
      </div>

      <div className='text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias veritatis delectus rerum recusandae incidunt eveniet laboriosam ex voluptatem numquam aperiam odit dicta, quibusdam quod quas accusantium voluptatum odio! Tempora.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias veritatis delectus rerum recusandae incidunt eveniet laboriosam ex voluptatem numquam aperiam odit dicta, quibusdam quod quas accusantium voluptatum odio! Tempora.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Survice</b>
          <p className='text-gray-600'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi molestias veritatis delectus rerum recusandae incidunt eveniet laboriosam ex voluptatem numquam aperiam odit dicta, quibusdam quod quas accusantium voluptatum odio! Tempora.</p>
        </div>
      </div>

      <NewsletterBox/>

    </div>
  )
}

export default About
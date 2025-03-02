import React from 'react'
import img1 from '../data/img-2.jpg'
import Navbar from '../components/navBar'
const AboutUs = () => {
    return(
        <div className='overflow-hidden  '>
            <Navbar/>
            <div className='bg-[#fefefe] text-[#FEFEFF]  absolute overflow-hidden '>
                <img src={img1} alt="background" className='ml-[2px] mr-[2px]  inset-0 object-cover  w-[2500px] h-[725px]' />
                    <div className='absolute inset-0 flex flex-col justify-around pb-28'>
                    <div className='flex flex-col'>
                        <div className='flex flex-col ml-4 p-4 max-w-[50%] '>
                            <h1 className='text-[#0c4678] lg:text-4xl sm:text-2xl leading-relaxed'>
                                    Who We Are
                            </h1>
                            <p className='text-[#0b0e01] lg:text-2xl sm:text-sm leading-relaxed'>
                                Ewaste is a sustainable and cost-effective electronic waste.
                                We provide comprehensive e-Recycling services in India for disposing of eWaste efficiently
                                and in an environmentally friendly way, making our facility one of the most sustainable in the country with zero waste discharge technology. Our team is committed to providing you with reliable, affordable, and sustainable solutions for managing your EEE waste.
                            </p>
                            <h1 className='text-[#0c4678] lg:text-4xl sm:text-2xl leading-relaxed'>
                            Our Mission
                            </h1>
                            <p className='text-black lg:text-2xl sm:text-sm leading-relaxed'>
                            Our goal is to create awareness around the need for responsible eWaste disposal in India. 
                            While many people know about electronics recycling, we are committed to the task of creating an 
                            enabling environment for informal recyclers by providing them with training on disposal techniques and safe practices.
                            </p>
                        </div>
                    </div>
                </div>
            
                
            </div>
        </div>
        )
}

export default AboutUs;



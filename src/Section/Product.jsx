import React from 'react';
import workflow from '../assets/WorkFlows.avif'
import CustomerSupport from '../assets/CustomerSupport.avif'
import AllInSolution from '../assets/AllInSolution.avif'
import SmartTools from '../assets/SmartTools.avif'

const Product = () => {
  return (
    <div className='container mt-40 flex flex-col text-start mx-auto py-4 px-6 md:px-20 lg:px-32 text-black  '>
      <h1 className='font-medium text-4xl '>What We Offer</h1>
      <p className='mt-7 text-[14px]'>I'm a paragraph. Click here to add your own text and edit me. It’s easy.<br className='flex items-start' /> Just click “Edit Text” or double click me to add your own content and <br className='flex items-start' /> make changes to the font.</p>
      <div className='flex flex-row gap-6  mt-20'>
        <figure className="w-60" >
            <img src={workflow} alt="Workflow"  className='w-55  h-75  rounded-xl border border-x-2 border-y-2 ' />
            <figcaption className="mt-10 text-left text-xl font-semibold">
                Workflows<br /> That Work
            </figcaption>
            <p className='mt-3 text-sm'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </figure>
        <figure className=" w-60">
            <img src={AllInSolution} alt="AllSolution" className='w-55  h-75  rounded-xl border border-x-2 border-y-2  ' />
            <figcaption className='mt-10 text-left text-xl font-semibold'>
                All-In-One <br /> Solution
            </figcaption>
            <p className='mt-3 text-sm'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </figure>
        <figure className=" w-60">
            <img src={CustomerSupport} alt="CustomerSupport" className=' w-55  h-75  rounded-xl border border-x-2 border-y-2 ' />
            <figcaption className='mt-10 text-left text-xl font-semibold'>
                Comprehensive <br /> Customer Support
            </figcaption>
            <p className='mt-3 text-sm'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </figure>
        <figure className="w-60">
            <img src={SmartTools} alt="SmartTools" className='w-55  h-75  rounded-xl border border-x-2 border-y-2 ' />
            <figcaption className='mt-10 text-left text-xl font-semibold'>
                Smart <br/> Automation Tools
            </figcaption>
            <p className='mt-3 text-sm'>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
        </figure>
      </div>
    </div>
  );
}

export default Product;

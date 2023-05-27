import React from 'react';
import css from './../assets/css.png';
import html from './../assets/html.png';
import javascript from './../assets/javascript.png';
import reactImage from './../assets/react.png';
import github from './../assets/github.png';
import tailwind from './../assets/tailwind.png';
import tensorflow from './../assets/tensorflow.png'

const Experience = () => {
  const techs = [
    {
        id: 1, 
        src: css, 
        title: 'css',
        style: 'shadow-orange-500',
    },
    {
        id: 2, 
        src: html, 
        title: 'html',
        style: 'shadow-orange-500',
    },
    {
        id: 3, 
        src: javascript, 
        title: 'javascript',
        style: 'shadow-orange-500',
    },
    {
        id: 4, 
        src: reactImage, 
        title: 'react',
        style: 'shadow-orange-500',
    },
    {
        id: 5, 
        src: github, 
        title: 'github',
        style: 'shadow-orange-500',
    },
    {
        id: 6, 
        src: tailwind, 
        title: 'tailwind',
        style: 'shadow-orange-500',
    },
    {
      id: 7, 
      src: tensorflow, 
      title: 'tensorflow',
      style: 'shadow-orange-500',
  },
  ]
  return (
    <div name='experience' className=' bg-gradient-to-b from-gray-800 to-black w-full h-full py-12'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>
          Experience  
        </p>
        <p className='py-6'>These are the techonologies I've worked with</p>
        <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
        {
            techs.map(({id, src, title, style}) => {
                return (
        <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
            <img src={src} alt="" className='w-20 mx-auto'/>
            <p className='mt-4'>{title}</p>
        </div>

                );
            })
        }
        
      </div>
      </div>
    </div>
  )
}

export default Experience

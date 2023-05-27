import React from 'react'

function About() {
  return (
    <div name='about' className='w-full h-full py-12 bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                About
            </p>
            <p className='text-xl mt-4'>
            My name is Priyansh Verma, and I am a highly motivated computer science engineer with a Bachelor's degree in Technology from IIT Jammu. With a strong foundation in problem-solving, data structures, and algorithms, I possess a knack for efficiently tackling complex challenges. As a full stack web developer, I have gained valuable experience over the course of one year, honing my skills in building robust and user-friendly applications.
            </p>
            <br />
            <p className='text-xl'>
            Additionally, I have delved into the exciting realm of deep learning and machine learning, where I have successfully developed models that leverage the power of artificial intelligence. I am driven by a relentless curiosity and a passion for learning, always seeking opportunities to further expand my knowledge and expertise. With a solid technical background and an eagerness to contribute, I am poised to make a positive impact in the field of technology.
            </p>
        </div>
      </div>
    </div>
  )
}

export default About

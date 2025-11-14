import React from 'react'

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2'>
            <p>Terms & conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className='social-icon'>
            <img src="/assets/github.svg" alt="svg" className='w-1/2 h-1/2'/>
            <a href="" />
        </div>
    </section>
  )
}

export default Footer
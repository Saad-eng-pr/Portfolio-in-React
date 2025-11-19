import React from 'react'

const Contact = () => {
  return (
    <section className="c-space my-20" id="contact">
        <p className="head-text text-center mb-5 hover:text-white transition ease-in-out duration-500">Contactez-moi</p>

        <div className="max-w-3xl mx-auto border border-black-200 bg-black-200 rounded-lg flex  gap-6 justify-center items-center justify-between p-6 text-lg">

            <div className="flex items-center gap-4">
            <img src="/assets/email.png" alt="email" className="social-icon bg-gray-200 hover:bg-white w-12 h-12 p-2" />
            <p className="sub-text text-gray-400 hover:text-white text-center">
                <a href="mailto:saad.amal.dev@gmail.com">saad.amal.dev@gmail.com</a>
            </p>
            </div>

            <div className="flex items-center gap-4">
            <img src="/assets/phone-.svg" alt="phone" className="social-icon bg-gray-200 hover:bg-white w-12 h-12 p-2" />
            <p className="sub-text text-gray-400 hover:text-white text-center">
                +33 7 51 12 77 19
            </p>
            </div>

            <div className="flex items-center gap-4">
            <img src="/assets/linkedin.svg" alt="linkedin" className="social-icon bg-gray-200 hover:bg-white w-12 h-12 p-2" />
            <p className="sub-text text-gray-400 hover:text-white text-center">
                <a href="https://www.linkedin.com/in/saad-amal/" target="_blank" rel="noreferrer">
                LinkedIn
                </a>
            </p>
            </div>

        </div>
    </section>

  )
}

export default Contact
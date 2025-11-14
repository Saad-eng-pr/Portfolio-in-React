import { navLinks } from "../constants";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({id, name, href}) => (
        <li key={id} className="nav-li">
          <a href={href}>{name}</a>
        </li>
      ))}
    </ul>
  )
};

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className='text-white-500 flex gap-2 hover:text-white'>
            <p>Copyright © 2025 Saad AMAL.</p>
        </div>

        <div className="max-w-9xl mx-aut">
            <div className="flex justify-between items-center py-5 mx-auto c-space">
                <nav className="sm:flex hidden">
                  <NavItems />
                </nav>
            </div>
        </div>

        <div className='flex gap-3'>
            <a href="https://github.com/Saad-eng-pr" target='_blank' rel='noreferrer' className='social-icon bg-black-600 w-12 h-12'> 
                <img src="/assets/github.svg" alt="github" className='w-1/2 h-1/2'/>
            </a>
            <a href="https://www.linkedin.com/in/saad-amal/" target='_blank' rel='noreferrer' className='social-icon bg-white w-12 h-12'> 
                <img src="/assets/linkedin.svg" alt="svg" className='w-8 h-8'/>
            </a>
        </div>
    </section>
  )
}

export default Footer
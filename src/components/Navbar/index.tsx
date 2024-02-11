import { GridOutline } from 'react-ionicons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    { title: 'Home', path: '/', active: true },
    { title: 'How To', path: '/howTo', active: false },
    { title: 'Services', path: '/services', active: false },
    { title: 'Blog', path: '/blog', active: false },
    { title: 'Contact', path: '/contact', active: false },
    { title: 'Newspaper', path: '/newspaper', active: false },
    { title: 'About', path: '/about', active: false },
  ]

  return (
    <div className='absolute top-[20px] z-[2] mx-0 my-auto flex h-16 w-full items-center justify-between px-8 py-10 md:px-[200px]'>
      <span className='text-[28px] font-semibold text-white'>Logo.</span>
      <div className='hidden items-center gap-7 md:flex'>
        {navLinks.map((navLink) => {
          return (
            <Link to={navLink.path} key={navLinks.title}>
              <span className={`font-medium ${navLink.active ? 'text-blue-400' : 'text-white'}`}>
                {navLink.title}
              </span>
            </Link>
          )
        })}
        <button className='rounded-full bg-blue-400 px-6 py-3 font-semibold text-gray-900 hover:bg-gray-700 hover:text-white'>
          Book Now
        </button>
      </div>
      <div className='block cursor-pointer md:hidden'>
        <GridOutline color='#fff' />
      </div>
    </div>
  )
}

export default Navbar

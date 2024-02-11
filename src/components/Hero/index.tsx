import splane from '../../assets/images/plane.png'

const Hero = () => {
  return (
    <div className='hero relative z-[1] grid h-[100vh] w-full place-items-center bg-[#141b2b]'>
      <div className='flex w-full flex-col items-center justify-between gap-28 px-8 md:flex-row md:gap-0 md:px-[200px]'>
        <div className='left-animation flex w-full flex-col gap-3'>
          <span className='text- font-medium text-[28x] text-blue-400'>Welcome to Our Website</span>
          <span className='text-[45px] font-medium text-white md:text-[60px]'>
            Luxury Experience <br />
            With Our Services
          </span>
          <span className='max-w-[500px] text-justify leading-7 text-white'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur quaerat obcaecati
            cum nostrum velit sit officiis, suscipit magnam ut odit mollitia voluptatem nesciunt
            consectetur, neque, commodi vero modi ducimus est!
          </span>
          <div className='mt-5 flex items-center gap-7'>
            <button className='py rounded-full bg-blue-400 px-6 py-3 font-semibold text-gray-900'>
              Book Flight
            </button>
            <button className='rounded-full border-[2px] border-blue-400 px-5 py-3 font-semibold text-white'>
              Contact Us
            </button>
          </div>
        </div>
        <img src={splane} alt='Hero Airplane' className='md:w0[53%] right-animation w-full' />
      </div>
    </div>
  )
}

export default Hero

import banner from '../../assets/images/sky3.jpg'
const Banner = () => {
  return (
    <div
      className='relative z-[1] my-20 h-[460px] w-full bg-cover bg-fixed md:h-[400px]'
      style={{ backgroundImage: `url(${banner})`, backgroundPosition: 'bottom' }}>
      <div className='banner z-[2] flex h-full w-full flex-col items-center justify-between px-10 py-5 text-center md:flex-row md:py-0'>
        <span className='text-[40px] font-semibold text-white md:text-[55px]'>
          It's Time To Enjoy Your Freedom!
        </span>
        <div className='mb-2 flex flex-col items-center gap-10 md:mb-0 md:flex-row'>
          <input
            type='text'
            placeholder='Email Address'
            className='rounded-[10px] border border-slate-400 px-3 py-3 outline-none md:w-[500px]'
          />
          <button className='max-w-[250px] rounded-[10px] bg-blue-400 py-3 py-6 font-semibold text-white shadow-md'>
            Join to Our Newspaper
          </button>
        </div>
      </div>
    </div>
  )
}

export default Banner

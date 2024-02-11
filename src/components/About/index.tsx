import { CheckmarkCircleOutline } from 'react-ionicons'
import mask from '../../assets/images/mask.png'

const About = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between px-8 py-10 md:flex-row md:gap-0 md:px-[200px]'>
      <div
        className='plane-mask relative h-[350px] w-[350px] bg-cover bg-no-repeat md:w-[700px]'
        style={{ backgroundImage: `url(${mask})` }}
      />
      <div className='flex w-full flex-col px-8 md:w-[48%] md:px-0'>
        <span className='text-[15px] font-semibold text-blue-600'>ABOUT US</span>
        <span className='mt-1 text-[30px] font-medium text-gray-700'>
          We Are Here To Bring You All The <br /> Comfort And Pleasure{' '}
        </span>
        <p className='mt-5 max-w-[650px] leading-7 text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur dignissimos ratione,
          excepturi explicabo non quasi velit pariatur ipsa mollitia voluptate nemo similique
          recusandae, doloribus porro expedita eius. Magnam, laudantium velit.
        </p>
        <div className='mt-5 flex flex-col gap-3'>
          <div className='flex items-center gap-3'>
            <CheckmarkCircleOutline
              color={'#60a5fa'}
              title={'Checkmark Circle Outline'}
              height='20px'
              width='20px'
            />
            <span className='text-gray-600'>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className='flex items-center gap-3'>
            <CheckmarkCircleOutline
              color={'#60a5fa'}
              title={'Checkmark Circle Outline'}
              height='20px'
              width='20px'
            />
            <span className='text-gray-600'>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className='flex items-center gap-3'>
            <CheckmarkCircleOutline
              color={'#60a5fa'}
              title={'Checkmark Circle Outline'}
              height='20px'
              width='20px'
            />
            <span className='text-gray-600'>Lorem ipsum dolor sit amet.</span>
          </div>
        </div>
        <button className='mt-5 w-[200px] rounded-full bg-blue-400 px-6 py-3 font-semibold text-white'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default About

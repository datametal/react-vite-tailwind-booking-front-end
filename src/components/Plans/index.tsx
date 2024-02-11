import { AirplaneOutline, Star } from 'react-ionicons'
import plan1 from '../../assets/images/plan1.jpg'
import plan2 from '../../assets/images/plan2.jpg'
import plan3 from '../../assets/images/plan3.jpg'

const Plans = () => {
  const plansList = [
    { title: 'Private Charter Jet', image: plan1, code: 'Charter B1732', price: '270' },
    { title: 'Medical Chopper', image: plan2, code: 'Charter B1732', price: '270' },
    { title: 'Private Plane', image: plan3, code: 'Charter B1732', price: '270' },
  ]
  return (
    <div className='flex w-full flex-col items-center justify-center gap-16 px-8 pb-20 pt-5 md:px-[200px]'>
      <div className='flex w-full flex-col items-center'>
        <span className='font-semibold text-blue-500'>Our Plans</span>
        <span className='mt-1 text-3xl font-semibold text-slate-700'>Flights For Everyone</span>
        <p className='mt-4 max-w-[400px] text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis quas
          nisi.
        </p>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row'>
        {plansList.map((plan) => {
          return (
            <div
              key={plan.title}
              className='rounded-[10px] bg-white p-[10px]'
              style={{ boxShadow: '0 0 40px 5px rgb(0 0 0 / 5%)' }}>
              <img
                src={plan.image}
                className='h-[270px] w-[400px] rounded-[10px]'
                alt={plan.title}
              />
              <div className='mt-4 flex w-full items-center justify-between px-4'>
                <span className='text-[18px] font-semibold text-slate-800'>{plan.title}</span>
                <div className='flex items-center gap-[2px]'>
                  <Star color='#60a5fa' />
                  <Star color='#60a5fa' />
                  <Star color='#60a5fa' />
                  <Star color='#60a5fa' />
                  <Star color='#60a5fa' />
                </div>
              </div>
              <div className='mt-[2px] px-4 text-[15px] font-medium text-gray-400'>{plan.code}</div>
              <div className='max-w-[400px] px-4 pt-4 leading-7 text-slate-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque dignissimos placeat
                doloremque tempore quia, molestiae officia nemo in quibusdam laborum.
              </div>
              <div className='mt-10 px-4 font-medium text-slate-800'>
                <span className='text-[25px] font-semibold text-blue-500'>${plan.price}</span> /
                Hour
              </div>
              <div className='mx-auto mt-5 w-[92%] border border-dashed border-slate-300' />
              <div className='w-full px-4'>
                <button className='mb-3 mt-5 flex gap-3 rounded-full bg-blue-400 px-5 py-2 font-semibold text-white'>
                  <AirplaneOutline color='#fff' />
                  Book Now
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Plans

import { BedOutline, EarthOutline, ShieldCheckmarkOutline } from 'react-ionicons'

const Features = () => {
  const featuresList = [
    {
      icon: <BedOutline color='#60a5fa' style={{ width: 60, height: 60 }} />,
      title: 'Hotels on the House',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: <ShieldCheckmarkOutline color='#60a5fa' style={{ width: 60, height: 60 }} />,
      title: 'Safe to Trust',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      icon: <EarthOutline color='#60a5fa' style={{ width: 60, height: 60 }} />,
      title: 'Worldwide Customers',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ]
  return (
    <div className='flex w-full flex-col items-center justify-center gap-16 px-8 py-20 md:px-[200px]'>
      <div className='flex w-full flex-col items-center'>
        <span className='font-semibold text-blue-500'>Our Features</span>
        <span className='mt-1 text-3xl font-semibold text-slate-700'>Our Priceless Features</span>
        <p className='mt-4 max-w-[400px] text-center'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum quaerat labore nisi in
        </p>
      </div>
      <div className='md:gap flex w-full flex-col items-center justify-between gap-5 md:flex-row'>
        {featuresList.map((featuresListItem) => {
          return (
            <div
              className='flex cursor-pointer flex-col items-center justify-center gap-5 rounded-[10px] bg-white px-12 py-5 transition-all duration-300 hover:scale-[1.05]'
              key={featuresListItem.title}
              style={{ boxShadow: '0 0 40px 5px rgb(0 0 0 / 5%)' }}>
              {featuresListItem.icon}
              <span className='text-[21px] font-semibold text-gray-700'>
                {featuresListItem.title}
              </span>
              <span className='max-w-[360px] text-center leading-7'>
                {featuresListItem.description}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features

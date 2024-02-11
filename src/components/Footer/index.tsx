const Footer = () => {
  return (
    <div className='flex w-full flex-col items-center justify-between gap-8 border-t border-dashed border-slate-300 px-10 py-8 md:flex-row md:gap-0'>
      <span className='font-medium text-slate-700'>
        Copyright © 2023 Luxury Airs . All rights reserved.
      </span>
      <div>
        <a
          href='#'
          className='whitespace-nowrap text-[10.5px] font-medium text-gray-600 hover:text-blue-600 md:text-[15px]'>
          Terms and conditions
        </a>
        <a
          href='#'
          className='whitespace-nowrap text-[10.5px] font-medium text-gray-600 hover:text-blue-600 md:text-[15px]'>
          Long Term Contracts
        </a>
        <a
          href='#'
          className='whitespace-nowrap text-[10.5px] font-medium text-gray-600 hover:text-blue-600 md:text-[15px]'>
          Copyright Policy
        </a>
        <a
          href='#'
          className='whitespace-nowrap text-[10.5px] font-medium text-gray-600 hover:text-blue-600 md:text-[15px]'>
          Customer Support
        </a>
      </div>
    </div>
  )
}

export default Footer

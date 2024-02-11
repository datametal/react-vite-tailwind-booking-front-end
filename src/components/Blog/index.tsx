import { CalendarOutline, PersonOutline } from 'react-ionicons'
import postImage from '../../assets/images/01.jpg'
import postImage2 from '../../assets/images/02.jpg'
import postImage3 from '../../assets/images/03.jpg'

const Blog = () => {
  const posts = [
    {
      image: postImage,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage2,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
    {
      image: postImage3,
      author: 'Amin Najva',
      date: 'Nov 15, 2023',
      title: 'Most Visited Countries In Last 3 Years',
      description: '',
    },
  ]

  return (
    <div className='flex w-full flex-col items-center justify-center gap-16 px-8 pb-20 md:px-[200px]'>
      <div className='flex w-full flex-col items-center'>
        <span className='font-semibold text-blue-500'>Our Blog</span>
        <span className='mt-1 text-3xl font-semibold text-slate-700'>Our Latest Posts</span>
        <p className='mt-4 max-w-[400px] text-center'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure animi et quidem quis quas
          nisi.
        </p>
      </div>
      <div className='flex w-full flex-col items-center justify-center gap-8 md:flex-row'>
        {posts.map((post) => {
          return (
            <div
              key={post.title}
              className='rounded-[10px] bg-white p-[10px]'
              style={{ boxShadow: '0 0 40px 5px rgb(0 0 0 / 5%)' }}>
              <img
                src={post.image}
                className='h-[270px] w-[400px] rounded-[10px]'
                alt={post.title}
              />
              <div className='mt-3 flex w-full items-center gap-10 px-4'>
                <div className='flex items-center gap-2'>
                  <PersonOutline color='#60a5fa' />
                  <span className='text-[15.5px] text-slate-900'>{post.author}</span>
                </div>
                <div className='flex items-center gap-2'>
                  <CalendarOutline color='#60a5fa' />
                  <span className='text-[15.5px] text-slate-900'>{post.date}</span>
                </div>
              </div>
              <div className='px-4 py-5 text-[20px] font-semibold text-slate-800'>{post.title}</div>
              <div className='max-w-[400px] px-4 leading-7 text-slate-700'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat est incidunt quam
                necessitatibus amet quo aliquid odio eius! Quisquam, error.
              </div>
              <div className='cursor-pointer px-4 py-3 font-medium text-blue-600'>Read More</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Blog

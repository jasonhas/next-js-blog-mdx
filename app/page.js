import Image from 'next/image'
import Link from 'next/link'
import Post from '@/components/getPosts'
import {DateTime} from 'luxon'

export default function Home() {

  const post = Post()
  const displayDate = post[0].date;
  const image = post[0].image;

  const dt = DateTime.fromFormat(displayDate, "yyyy-MM-dd")
  const formatted = dt.toFormat("MMMM dd, yyyy")

  return (
    <div className='max-w-7xl mx-auto flex flex-col p-4 xl:p-0'>
      <div className='mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold'>{post[0].title}</h1>
        <p className='py-4 font-medium'>{formatted}</p>
        <Image src={image} width={1920} height={1080} alt="NFL Pic" className=''/>
        <div className='max-w-3xl font-medium md:text-2xl text-xl mx-auto py-2 lg:py-5'>
          <p>{post[0].excerpt}</p>
          <p className='py-5'><Link href={`/post/${post[0].slug}`} className='hover:text-blue-500 text-blue-800'>Continue Reading ...</Link></p>
        </div>

      </div>
    </div>
  )
}

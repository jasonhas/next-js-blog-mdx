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
    <div className='max-w-7xl mx-auto flex flex-col p-4 md:p-0'>
      <div className='mx-auto'>
        <h1 className='text-3xl md:text-5xl font-bold'>{post[0].title}</h1>
        <p className='py-4 font-medium'>{formatted}</p>
        <Image src={image} width={1920} height={1080} alt="NFL Pic" className=''/>
        <p className='py-5'>Click <Link href={`/post/${post[0].slug}`}>Here</Link></p>
      </div>
    </div>
  )
}
